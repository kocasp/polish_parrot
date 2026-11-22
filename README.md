<br />
<div align="center">
  <a href="https://github.com/kocasp/polish_parrot">
    <img src="images/parrot.svg" alt="Logo">
  </a>

<h3 align="center">POLISH_PARROT v1.0</h3>

  <p align="center">
    Polish Annotated Radiological Reports for Open Testing<br />
    Polskie anotowane opisy radiologiczne do otwartego testowania
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## O projekcie

POLISH_PARROT to polski podzbiór inicjatywy PARROT – otwartego zbioru opisów radiologicznych przeznaczonego do testowania dużych modeli językowych (LLM).
Zawiera wyłącznie opisy napisane po polsku, wyodrębnione z oryginalnego repozytorium [PARROT_v1.0](https://github.com/PARROT-reports/PARROT_v1.0/) i udostępnione jako samodzielny zbiór danych.
Celem POLISH_PARROT jest odzwierciedlenie różnorodności polskich stylów opisywania badań, tak aby wspierać zastosowanie badań nad LLM w polskiej praktyce klinicznej.
POLISH_PARROT jest projektem non-profit i obecnie nie otrzymuje żadnego finansowania.

**Źródło:** oryginalny, wielojęzyczny zbiór PARROT jest dostępny pod adresem https://github.com/PARROT-reports/PARROT_v1.0/

<!-- DATASET -->
## Zbiór danych POLISH_PARROT

POLISH_PARROT v1.0 jest polskim podzbiorem PARROT v1.0 i obejmuje:
- 837 opisów
- w 1 języku (polskim)
- przygotowanych przez polski zespół autorów (Fułek i in.)
- z Polski

## Interaktywna przeglądarka

Wszystkie 837 badań można przeglądać, filtrować i przeszukiwać w przeglądarce internetowej:

**https://kocasp.github.io/polish_parrot/**

Strona jest publikowana z gałęzi `gh-page` (GitHub Pages). Umożliwia filtrowanie po modalności, obszarze anatomicznym, specjalności i kodzie ICD-10 oraz pełnotekstowe wyszukiwanie w polskich opisach i tłumaczeniach.

## Struktura pliku jsonl

POLISH_PARROT v1.0 jest udostępniany jako pojedynczy plik .jsonl (1,9 MB) o następującej strukturze:
```
data/
 └── POLISH_PARROT_v1_0.jsonl       # jeden obiekt JSON na linię
       ├─ no               : int   # numer opisu
       ├─ language         : str   # język opisu
       ├─ modality         : str   # modalność badania (TK, MR, RTG itp.)
       ├─ area             : str   # obszar anatomiczny (głowa, jama brzuszna, klatka piersiowa itp.)
       ├─ report           : str   # oryginalny opis
       ├─ translation      : str   # tłumaczenie na język angielski
       ├─ icd              : str   # kody ICD-10 powiązane z opisem
       ├─ contributor_code : str   # nazwisko autora
       ├─ country          : str   # kraj pochodzenia
       └─ subspecialty     : str   # dwuliterowy kod podspecjalności radiologicznej (NR: neuroradiologia, GU: układ moczowo-płciowy itp.)
```
## Przykłady zastosowań

POLISH_PARROT jest przeznaczony do testowania, wymiany pomysłów na zastosowania LLM w radiologii i medycynie oraz zewnętrznej walidacji metod NLP dla języka polskiego. Przykładowe zastosowania znajdują się w katalogu `examples`:
```
examples/
└── similar_reports.py           # wyszukiwanie najbardziej podobnych opisów na podstawie embeddingów i zapytań w wolnym tekście
└── reports_vizualisation.py     # tworzenie interaktywnych map opisów na podstawie ich embeddingów
└── simplify_reports_ollama.py   # upraszczanie opisów za pomocą modelu chroniącego prywatność...
└── simplify_reports_openai.py   # ...lub modelu chmurowego
```

<!-- CONTRIBUTORS -->
## Autorzy
<details>
<summary>Opisy w POLISH_PARROT zostały przygotowane przez zespół autorów z polskich ośrodków (Fułek i in.).</summary>

- Barbara Dziadkowiec-Macek, Department of Physiology and Pathophysiology, Wroclaw Medical University, Wroclaw, Poland
- Michał Fułek, Department and Clinic of Diabetology, Hypertension and Internal Diseases, Institute of Internal Diseases, Wroclaw Medical University, Wroclaw, Poland
- Katarzyna Fułek, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland
- Paweł Gać, Department of Radiology and Diagnostic Imaging, 4th Military Hospital, Wroclaw, Poland
- Martyna Gachowska, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland
- Anna Kompanowska, Department of Pediatrics, Klodzko County Hospital, Klodzko, Poland
- Rafał Kompanowski, Orthopedics and Traumatology Department of the Musculoskeletal System, Specialist Medical Centre, Polanica-Zdroj, Poland
- Krzysztof Kraik, Faculty of medicine, Wroclaw Medical University, Wroclaw, Poland
- Dominik Krupka, Faculty of medicine, Wroclaw Medical University, Wroclaw, Poland
- Piotr Macek, Department and Clinic of Diabetology, Hypertension and Internal Diseases, Institute of Internal Diseases, Wroclaw Medical University, Wroclaw, Poland
- Małgorzata Poręba, Department of Paralympic Sport Wroclaw University of Health and Sport Sciences, Wroclaw, Poland
- Rafał Poręba, Department of Radiology and Diagnostic Imaging, 4th Military Hospital, Wroclaw, Poland
- Katarzyna Resler, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland
- Jan Rotkegel, Faculty of medicine, Wroclaw Medical University, Wroclaw, Poland
- Szymon Urban, Department of Cardiology, The Copper Health Center, Lubin, Poland
- Szymon Włodarczak, Department of Cardiology, The Copper Health Center, Lubin, Poland
- Adrian Włodarczak, Department of Cardiology, The Copper Health Center, Lubin, Poland
- Andrzej Wysocki, Department of Radiology and Diagnostic Imaging, 4th Military Hospital, Wroclaw, Poland
- Tomasz Zatoński, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland

</details>

<!-- LICENSE -->
## Licencja

POLISH_PARROT jest utworem zależnym od PARROT i jest udostępniany na licencji Creative Commons Uznanie autorstwa – Użycie niekomercyjne – Na tych samych warunkach 4.0 Międzynarodowe (CC BY-NC-SA 4.0) https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pl
Licencja ta pozwala na rozpowszechnianie, remiksowanie, adaptowanie i tworzenie na podstawie materiału w dowolnym medium i formacie wyłącznie w celach niekomercyjnych oraz pod warunkiem podania autorstwa. Jeśli remiksujesz, adaptujesz lub tworzysz na podstawie materiału, musisz udostępnić zmodyfikowany materiał na tych samych warunkach.
