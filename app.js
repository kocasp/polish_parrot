(function () {
  "use strict";

  const DATA_URL = "data/POLISH_PARROT_v1_0.jsonl";
  const PAGE_SIZE = 24;

  const state = {
    reports: [],
    query: "",
    modalities: new Set(),
    area: "",
    subspecialty: "",
    icd: "",
    sort: "no-asc",
    page: 1,
    showTranslation: true,
  };

  const el = {
    modalityFilters: document.getElementById("modality-filters"),
    areaSelect: document.getElementById("area-select"),
    subspecialtySelect: document.getElementById("subspecialty-select"),
    icdInput: document.getElementById("icd-input"),
    search: document.getElementById("search"),
    sort: document.getElementById("sort-select"),
    results: document.getElementById("results"),
    resultsCount: document.getElementById("results-count"),
    pagination: document.getElementById("pagination"),
    clearFilters: document.getElementById("clear-filters"),
    toggleTranslation: document.getElementById("toggle-translation"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modal-title"),
    modalMeta: document.getElementById("modal-meta"),
    modalReport: document.getElementById("modal-report"),
    modalTranslation: document.getElementById("modal-translation"),
    modalTranslationSection: document.getElementById("modal-translation-section"),
  };

  const normalize = (value) => String(value == null ? "" : value).trim();

  function parseJsonl(text) {
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }

  function buildIndex(reports) {
    reports.forEach((report) => {
      report._area = normalize(report.area);
      report._subspecialty = normalize(report.subspecialty);
      report._no = Number.parseInt(report.no, 10);
      report._search = [
        report.no,
        report.modality,
        report._area,
        report._subspecialty,
        report.icd,
        report.contributor_code,
        report.country,
        report.language,
        report.report,
        report.translation,
      ]
        .filter(Boolean)
        .join("\n")
        .toLowerCase();
    });
  }

  function countBy(reports, keyFn) {
    const map = new Map();
    reports.forEach((report) => {
      const key = keyFn(report);
      if (!key) return;
      map.set(key, (map.get(key) || 0) + 1);
    });
    return map;
  }

  function fillSelect(select, entries, allLabel) {
    select.innerHTML = "";
    const all = document.createElement("option");
    all.value = "";
    all.textContent = allLabel;
    select.appendChild(all);
    entries.forEach(([value, count]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = `${value} (${count})`;
      select.appendChild(option);
    });
  }

  function renderStaticFilters() {
    const modalities = countBy(state.reports, (r) => normalize(r.modality));
    const orderedModalities = [...modalities.entries()].sort((a, b) => b[1] - a[1]);

    el.modalityFilters.innerHTML = "";
    orderedModalities.forEach(([modality, count]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.dataset.modality = modality;
      button.innerHTML = "";
      button.append(document.createTextNode(modality));
      const span = document.createElement("span");
      span.className = "count";
      span.textContent = count;
      button.appendChild(span);
      button.addEventListener("click", () => {
        if (state.modalities.has(modality)) state.modalities.delete(modality);
        else state.modalities.add(modality);
        state.page = 1;
        render();
      });
      el.modalityFilters.appendChild(button);
    });

    const areas = countBy(state.reports, (r) => r._area);
    const orderedAreas = [...areas.entries()].sort((a, b) => a[0].localeCompare(b[0], "pl"));
    fillSelect(el.areaSelect, orderedAreas, "Wszystkie obszary");

    const subspecialties = countBy(state.reports, (r) => r._subspecialty);
    const orderedSubspecialties = [...subspecialties.entries()].sort((a, b) =>
      a[0].localeCompare(b[0], "pl")
    );
    fillSelect(el.subspecialtySelect, orderedSubspecialties, "Wszystkie specjalności");
  }

  function filteredReports() {
    const query = state.query.trim().toLowerCase();
    const icd = state.icd.trim().toLowerCase();

    const list = state.reports.filter((report) => {
      if (state.modalities.size && !state.modalities.has(normalize(report.modality))) return false;
      if (state.area && report._area !== state.area) return false;
      if (state.subspecialty && report._subspecialty !== state.subspecialty) return false;
      if (icd && !normalize(report.icd).toLowerCase().includes(icd)) return false;
      if (query && !report._search.includes(query)) return false;
      return true;
    });

    if (state.sort === "no-desc") {
      list.sort((a, b) => b._no - a._no);
    } else if (state.sort === "modality") {
      list.sort(
        (a, b) =>
          normalize(a.modality).localeCompare(normalize(b.modality), "pl") || a._no - b._no
      );
    } else {
      list.sort((a, b) => a._no - b._no);
    }

    return list;
  }

  function snippet(text, max) {
    const collapsed = String(text || "").replace(/\s+/g, " ").trim();
    if (collapsed.length <= max) return collapsed;
    return collapsed.slice(0, max - 1).trimEnd() + "…";
  }

  function makeBadge(text, neutral) {
    const span = document.createElement("span");
    span.className = "badge" + (neutral ? " neutral" : "");
    span.textContent = text;
    return span;
  }

  function renderCard(report) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.no = report.no;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Badanie ${report.no}, ${report.modality || ""} ${report._area || ""}`);

    const top = document.createElement("div");
    top.className = "card-top";
    const no = document.createElement("span");
    no.className = "card-no";
    no.textContent = `BADANIE #${report.no}`;
    top.appendChild(no);
    if (report.icd) top.appendChild(makeBadge(report.icd));
    if (report.modality) top.appendChild(makeBadge(report.modality, true));

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = report._area || "Bez obszaru";

    const desc = document.createElement("p");
    desc.className = "card-snippet";
    desc.textContent = snippet(report.report, 220);

    const foot = document.createElement("div");
    foot.className = "card-foot";
    if (report._subspecialty) foot.appendChild(makeBadge(report._subspecialty, true));
    if (report.contributor_code) {
      const contributor = document.createElement("span");
      contributor.className = "badge neutral";
      contributor.textContent = report.contributor_code;
      foot.appendChild(contributor);
    }

    card.append(top, title, desc, foot);
    card.addEventListener("click", () => openModal(report));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(report);
      }
    });
    return card;
  }

  function render() {
    const list = filteredReports();
    const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (state.page > totalPages) state.page = totalPages;
    const start = (state.page - 1) * PAGE_SIZE;
    const pageItems = list.slice(start, start + PAGE_SIZE);

    el.results.innerHTML = "";
    if (!pageItems.length) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = state.reports.length
        ? "Brak badań spełniających kryteria. Zmień filtry lub frazę wyszukiwania."
        : "Nie udało się wczytać danych.";
      el.results.appendChild(empty);
    } else {
      pageItems.forEach((report) => el.results.appendChild(renderCard(report)));
    }

    el.resultsCount.textContent = `${list.length} z ${state.reports.length} badań`;
    renderPagination(totalPages, list.length);
    syncChips();
  }

  function renderPagination(totalPages, resultCount) {
    el.pagination.innerHTML = "";
    if (resultCount === 0) return;

    const prev = document.createElement("button");
    prev.type = "button";
    prev.textContent = "← Poprzednia";
    prev.disabled = state.page <= 1;
    prev.addEventListener("click", () => {
      state.page -= 1;
      render();
      scrollToTop();
    });

    const info = document.createElement("span");
    info.className = "page-info";
    info.textContent = `Strona ${state.page} z ${totalPages}`;

    const next = document.createElement("button");
    next.type = "button";
    next.textContent = "Następna →";
    next.disabled = state.page >= totalPages;
    next.addEventListener("click", () => {
      state.page += 1;
      render();
      scrollToTop();
    });

    el.pagination.append(prev, info, next);
  }

  function syncChips() {
    el.modalityFilters.querySelectorAll(".chip").forEach((chip) => {
      chip.classList.toggle("active", state.modalities.has(chip.dataset.modality));
    });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openModal(report) {
    el.modalTitle.textContent = `Badanie #${report.no}`;
    el.modalMeta.innerHTML = "";
    const metaItems = [
      report.modality,
      report._area,
      report._subspecialty,
      report.icd ? `ICD-10: ${report.icd}` : "",
      report.contributor_code,
      report.country,
      report.language,
    ].filter(Boolean);
    metaItems.forEach((item) => el.modalMeta.appendChild(makeBadge(item)));

    el.modalReport.textContent = report.report || "—";
    const translation = report.translation || "";
    el.modalTranslation.textContent = translation || "Brak tłumaczenia.";
    const showTranslation = state.showTranslation && Boolean(translation);
    el.modalTranslationSection.hidden = !showTranslation;

    el.modal.hidden = false;
    document.body.style.overflow = "hidden";
    history.replaceState(null, "", `?no=${report.no}`);
    el.modal.querySelector(".icon-btn").focus();
  }

  function closeModal() {
    el.modal.hidden = true;
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname);
  }

  function applyTranslationVisibility() {
    el.modalTranslationSection.hidden = !state.showTranslation;
  }

  function resetFilters() {
    state.query = "";
    state.modalities.clear();
    state.area = "";
    state.subspecialty = "";
    state.icd = "";
    state.sort = "no-asc";
    state.page = 1;
    el.search.value = "";
    el.areaSelect.value = "";
    el.subspecialtySelect.value = "";
    el.icdInput.value = "";
    el.sort.value = "no-asc";
    render();
  }

  function wireEvents() {
    let searchTimer = null;
    el.search.addEventListener("input", (event) => {
      clearTimeout(searchTimer);
      const value = event.target.value;
      searchTimer = setTimeout(() => {
        state.query = value;
        state.page = 1;
        render();
      }, 140);
    });

    el.areaSelect.addEventListener("change", (event) => {
      state.area = event.target.value;
      state.page = 1;
      render();
    });

    el.subspecialtySelect.addEventListener("change", (event) => {
      state.subspecialty = event.target.value;
      state.page = 1;
      render();
    });

    el.icdInput.addEventListener("input", (event) => {
      state.icd = event.target.value;
      state.page = 1;
      render();
    });

    el.sort.addEventListener("change", (event) => {
      state.sort = event.target.value;
      state.page = 1;
      render();
    });

    el.toggleTranslation.addEventListener("change", (event) => {
      state.showTranslation = event.target.checked;
      applyTranslationVisibility();
    });

    el.clearFilters.addEventListener("click", resetFilters);

    el.modal.addEventListener("click", (event) => {
      if (event.target.matches("[data-close]")) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !el.modal.hidden) closeModal();
    });

    el.modal.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-copy]");
      if (!button) return;
      const target = document.querySelector(button.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent);
        const original = button.textContent;
        button.textContent = "Skopiowano";
        button.classList.add("copied");
        setTimeout(() => {
          button.textContent = original;
          button.classList.remove("copied");
        }, 1400);
      } catch (error) {
        button.textContent = "Błąd";
      }
    });
  }

  function renderLoadError(message) {
    el.results.innerHTML = "";
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = message;
    el.results.appendChild(empty);
    el.resultsCount.textContent = "Brak danych";
  }

  async function init() {
    wireEvents();
    try {
      const response = await fetch(DATA_URL, { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      state.reports = parseJsonl(text);
      buildIndex(state.reports);
      renderStaticFilters();
      render();

      const requestedNo = new URLSearchParams(location.search).get("no");
      if (requestedNo) {
        const report = state.reports.find((item) => String(item.no) === requestedNo);
        if (report) openModal(report);
      }
    } catch (error) {
      renderLoadError(
        "Nie udało się wczytać danych. Uruchom stronę przez serwer HTTP (np. python3 -m http.server) — przeglądarki blokują fetch z pliku file://."
      );
      console.error(error);
    }
  }

  init();
})();
