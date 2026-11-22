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

<!-- CONTEXT -->
## Kontekst
<details>
<summary>Przeczytaj kontekst</summary>  

  ### Kontekst  
Duże modele językowe (LLM) wykazują obiecujące możliwości w zakresie strukturyzowania, upraszczania i korygowania opisów radiologicznych (1–3). Jednak brak otwartych zbiorów danych w językach innych niż angielski ogranicza badania do danych, których nie można udostępniać ze względu na przepisy o ochronie prywatności (4). To utrudnia zewnętrzną walidację tych nowych technologii, hamując ich upowszechnienie i zastosowanie w krajach nieanglojęzycznych (5). Wielojęzyczne, otwarte archiwum opisów radiologicznych anotowanych przez ekspertów mogłoby rozwiązać ten problem, pozwalając badaczom testować modele na klinicznie istotnych zadaniach w różnych językach. Przedstawiamy projekt Polyglot Annotated Radiological Reports for Open Testing (PARROT), którego celem jest lepsze odzwierciedlenie różnorodności opisów radiologicznych pomiędzy ośrodkami i językami, oferując badaczom nową perspektywę testowania LLM na danych medycznych.

PARROT jest pomyślany jako zbiór tworzony wspólnie, mający na celu:  
Ułatwienie społeczności dostępu do realistycznych tekstów medycznych  
Zwiększenie reprezentacji nieanglojęzycznych danych medycznych w testowaniu LLM  
Ocenę zdolności LLM do generalizacji między różnymi językami w zadaniach klinicznych
    
### 1. Dlaczego otwarty, wielojęzyczny zbiór danych?

Ograniczenia zbioru MIMIC: Wyłącznie anglojęzyczne zbiory danych, na których obecnie testuje się LLM w radiologii, takie jak jednoośrodkowy MIMIC, nie oddają różnorodności opisów radiologicznych pomiędzy ośrodkami i językami, co może ograniczać przenoszenie wyników do krajów nieanglojęzycznych (6). Modele są już trenowane na bazie MIMIC, co rodzi problem trenowania i testowania LLM na tym samym zbiorze danych (7).
Brak wielojęzycznych alternatyw: Ze względu na poufny charakter opisów radiologicznych nie istnieje obecnie żaden dostępny zbiór opisów radiologicznych w językach innych niż angielski. Alternatywą mogłoby być przetłumaczenie opisów z bazy MIMIC na inne języki, jednak nie oddałyby one rzeczywistej różnorodności patologii, badań i stylów opisywania w różnych krajach.
Rosnąca potrzeba różnorodności w benchmarkach: Rozwój otwartych, lekkich modeli obniża barierę finansową w dostępie do tej technologii, ale tym bardziej zwiększa znaczenie zróżnicowanych korpusów, na których można je testować (8).
Potrzeba testowania LLM na klinicznie istotnych zadaniach: Zbiory danych są często pozyskiwane ze stron internetowych i pozostawiane bez anotacji, co ogranicza złożoność i różnorodność zadań, na których można testować modele. W efekcie LLM są obecnie oceniane na zadaniach, które nie odzwierciedlają ich rzeczywistej przydatności w warunkach klinicznych (7).

### 2. Czym jest PARROT?

PARROT to anotowany, otwarty zbiór fikcyjnych opisów napisanych przez radiologów w ich ojczystych językach. Aby uniknąć problemów z ochroną prywatności, opisy są całkowicie fikcyjne i dzięki temu mogą być udostępniane bez ograniczeń. Ponieważ piszą je eksperci w swoich ojczystych językach, powinny autentycznie oddawać różnorodność stylów opisywania i specyfikę kulturową. Opisy są anotowane pod kątem pięciu różnych zadań (tłumaczenie, strukturyzacja, ekstrakcja pomiarów, korekta błędów, przypisywanie kodów ICD-10) i gromadzone w otwartym archiwum. PARROT jest przeznaczony jako zbiór testowy dla LLM i nie powinien być używany do trenowania.

### 3. Jak wziąć udział?

Radiolodzy posługujący się różnymi językami, o różnym doświadczeniu i stażu, mogą tworzyć fikcyjne opisy badań wybranych przez siebie modalności. Opisy powinny być zapisane jako pliki .txt, .rtf lub .docx. Autorzy muszą przetłumaczyć opisy na język angielski i uzupełnić plik .csv o anotacje. Nie jest wymagana wiedza z zakresu informatyki, AI ani LLM. Zachęcamy do udziału również studentów, którzy mieli kontakt z radiologią, np. podczas praktyk.

### 4. Potencjalne wyzwania

Zaangażowanie: dotarcie do szerokiego grona radiologów będzie kluczowym wyzwaniem dla PARROT, aby osiągnąć masę krytyczną opisów w różnych językach. Dlatego zachęcamy uczestników do zapraszania współpracowników do inicjatywy.
Skalowalność i utrzymanie: jeśli PARROT odniesie sukces, czas potrzebny na kurowanie bazy stanie się kluczowy. Dlatego w drugim etapie projektu istotne może być wsparcie finansowe instytucji, a zadania takie jak weryfikacja opisów, ich anotacja i tworzenie nowych zadań mogłyby być realizowane metodą crowdsourcingu. Na tym etapie projektu będziemy aktywnie poszukiwać możliwości finansowania ze strony instytucji krajowych lub międzynarodowych (np. Unii Europejskiej, krajowych fundacji naukowych) lub partnerów z przemysłu.
Poszerzenie zakresu: wielojęzyczne medyczne bazy danych są rzadkie, a opisy radiologiczne nie obejmują wszystkich kontekstów, w których można oceniać LLM w medycynie. Dlatego w drugim etapie projektu zapraszamy do inicjatywy lekarzy innych specjalności.


1. 	Adams LC, Truhn D, Busch F, et al. Leveraging GPT-4 for Post Hoc Transformation of Free-Text Radiology Reports into Structured Reporting: A Multilingual Feasibility Study. Radiology. 2023;230725. doi: 10.1148/radiol.230725.
2. 	Amin KS, Davis MA, Doshi R, Haims AH, Khosla P, Forman HP. Accuracy of ChatGPT, Google Bard, and Microsoft Bing for Simplifying                     Radiology Reports. Radiology. Radiological Society of North America; 2023;309(2):e232561. doi: 10.1148/radiol.232561.
3. 	Gertz RJ, Dratsch T, Bunck AC, et al. Potential of GPT-4 for Detecting Errors in Radiology Reports:                     Implications for Reporting Accuracy. Radiology. Radiological Society of North America; 2024;311(1):e232714. doi: 10.1148/radiol.232714.
4. 	Bressem KK, Papaioannou J-M, Grundmann P, et al. medBERT.de: A comprehensive German BERT model for the medical domain. Expert Systems with Applications. 2024;237:121598. doi: 10.1016/j.eswa.2023.121598.
5. 	Chang Y, Wang X, Wang J, et al. A Survey on Evaluation of Large Language Models. arXiv; 2023. http://arxiv.org/abs/2307.03109. Accessed May 4, 2024.
6. 	Yang Z, Mitra A, Kwon S, Yu H. ClinicalMamba: A Generative Clinical Language Model on Longitudinal Clinical Notes. arXiv; 2024. doi: 10.48550/arXiv.2403.05795.
7. 	Wornow M, Xu Y, Thapa R, et al. The shaky foundations of large language models and foundation models for electronic health records. npj Digit Med. Nature Publishing Group; 2023;6(1):1–10. doi: 10.1038/s41746-023-00879-8.
8. 	Making LLMs even more accessible with bitsandbytes, 4-bit quantization and QLoRA. . https://huggingface.co/blog/4bit-transformers-bitsandbytes. Accessed May 4, 2024.
</details>

<!-- DATASET -->
## Zbiór danych POLISH_PARROT

POLISH_PARROT v1.0 jest polskim podzbiorem PARROT v1.0 i obejmuje:
- 837 opisów
- w 1 języku (polskim)
- autorstwa Fułek i in.
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
<summary>PARROT istnieje dzięki zgłoszeniom 76 autorów; POLISH_PARROT zawiera polski podzbiór przygotowany przez Fułek i in.</summary>
Kokou Adambounou, Campus University Hospital Centre, Department of Radiology and Medical Imaging, Lome, Togo
Lisa Adams, Department of Diagnostic and Interventional Radiology, Klinikum rechts der Isar, TUM University Hospital, Technical University of Munich, Munich, Germany
Thibault Agripnidis, Interventional Radiology Section, Department of Medical Imaging, University Hospital Timone, AP-HM, 264 Rue Saint-Pierre, 13005, Marseille, France
Sung Soo Ahn, Department of Radiology and Research Institute of Radiological Science and Center for Clinical Imaging Data Science,Yonsei University College of Medicine, Seoul, South Korea
Radhia Ait Chalal, Department of Radiology, Bab El-Oued University Hospital, Algiers. Algeria
Tugba Akinci D'Antonoli, 1. Department of Diagnostic and Interventional Neuroradiology, University Hospital Basel, 2. Department of Pediatric Radiology, University Children’s Hospital Basel
Philippe Amouyel, 1. U1167 RID-AGE, Pasteur Institute of Lille, Inserm, Lille University, Lille, France, 2. Public Health – Epidemiology Department, Lille University Hospital Center, Lille, France
Henrik Andersson, Department of Medical Imaging and Physiology, Skåne University Hospital, 221 85, Lund, Sweden
Raphaël Bentegeac, 1. U1167 RID-AGE, Pasteur Institute of Lille, Inserm, Lille University, Lille, France, 2. Public Health – Epidemiology Department, Lille University Hospital Center, Lille, France
Claudio Benzoni, Institute of AI and Informatics in Medicine (AIIM), TUM University Hospital, Technical University of Munich, Munich, Germany
Antonino Andrea Blandino, Section of Radiology, Department of Biomedicine, Neuroscience and Advanced Diagnostics (BiND), University of Palermo, Via del Vespro 129, Palermo 90127, Italy
Felix Busch, School of Medicine and Health, Department of Diagnostic and Interventional Radiology, Klinikum rechts der Isar, TUM University Hospital, Technical University of Munich, Munich, Germany
Elif Can,  Department of Diagnostic and Interventional Radiology, Medical Center – University of Freiburg, Faculty of Medicine, University of Freiburg, Germany
Riccardo Cau, Department of Radiology, University of Cagliari, Cagliari, Italy
Armando Ugo Cavallo, Division of Radiology, Istituto Dermopatico dell’Immacolata (IDI) IRCCS, Rome, Italy
Christelle Chavihot, Department of Radiology, Hôpital Instruction des Armées, Libreville, Gabon
Erwin Chiquete, Department of Neurology, Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán, Mexico City, Mexico
Renato Cuocolo, Department of Medicine, Surgery and Dentistry, University of Salerno, Baronissi, Italy
Eugen Divjak, Department of Diagnostic and Interventional Radiology, University Hospital Dubrava, Avenija Gojka Suska 6, 10000 Zagreb, Croatia
Barbara Dziadkowiec-Macek, Department of Physiology and Pathophysiology, Wroclaw Medical University, Wroclaw, Poland
Armel Elogne, Department of Radiology, Hôpital militaire d’Abidjan, 28 BP 1303, Abidjan, Côte d’Ivoire
Salvatore Claudio Fanni, Department of Translational Research, Academic Radiology, University of Pisa, Pisa, Italy
Carlos Ferrarotti, Department of Diagnostic Imaging, Center for Medical Education and Clinical Research “Norberto Quirno” (CEMIC), Autonomous City of Buenos Aires, Argentina
Claudia Fossataro, Department of Ophthalmology, Catholic University "Sacro Cuore", Rome, Italy
Federica Fossataro, Department of Ophthalmology, ASST Fatebenefratelli Sacco, Milan, Italy
Ali Fuat Tekin, Department of Radiology, Basaksehir Cam & Sakura City Hospital, Istanbul 34480, Turkey
Michał Fułek, Department and Clinic of Diabetology, Hypertension and Internal Diseases, Institute of Internal Diseases, Wroclaw Medical University, Wroclaw, Poland
Katarzyna Fułek, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland
Paweł Gać, Department of Radiology and Diagnostic Imaging, 4th Military Hospital, Wroclaw, Poland
Martyna Gachowska, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland
Ignacio García-Juárez, Department of Gastroenterology, Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán, México DF, México
Marco Gatti, Department of Surgical Sciences, Radiology Unit, University of Turin, Turin, Italy
Natalia Gorelik, Department of Radiology, McGill University Health Center, Montreal, Quebec, Canada
Alexia Maria Goulianou, Department of Medical Imaging, University Hospital of Heraklion, 71110, Crete, Voutes, Greece
Feno Hasina Rabemanorintsoa, Department of Radiology, Morafeno Toamasina University Hospital, Toamasina, Madagascar
Aghiles Hamroun, 1. U1167 RID-AGE, Pasteur Institute of Lille, Inserm, Lille University, Lille, France, 2. Public Health – Epidemiology Department, Lille University Hospital Center, Lille, France
Nicolas Herinirina, Department of Radiology, Tanambao University Hospital, Antsiranana, Madagascar
Quentin Holay, Department of Radiology, Sainte-Anne Teaching military Hospital, Toulon, France
Gordana Ivanac, Department of Diagnostic and Interventional Radiology, University Hospital Dubrava, Avenija Gojka Suska 6, 10000 Zagreb, Croatia
Felipe Kitamura, Bunkerhill Health, San Francisco, CA; Department of Diagnostic Imaging, Universidade Federal de São Paulo (UNIFESP), São Paulo, Brazil
Michail E. Klontzas, Artificial Intelligence and Translational Imaging (ATI) Lab, Department of Radiology, School of Medicine, University of Crete, Heraklion, Greece
Anna Kompanowska, Department of Pediatrics, Klodzko County Hospital, Klodzko, Poland
Rafał Kompanowski, Orthopedics and Traumatology Department of the Musculoskeletal System, Specialist Medical Centre, Polanica-Zdroj, Poland
Krzysztof Kraik, Faculty of medicine, Wroclaw Medical University, Wroclaw, Poland
Dominik Krupka, Faculty of medicine, Wroclaw Medical University, Wroclaw, Poland
Grégory Kuchcinski, Department of Neuroradiology, Lille University Hospital, Salengro Hospital, Lille, France
Bastien Le Guellec, Department of Neuroradiology, Lille University Hospital, Salengro Hospital, Lille, France
Alexandre Lefèvre, Department of Radiology, Lille University Hospital, 59000 Lille, France
Tristan Lemke, Institute of Diagnostic and Interventional Radiology, Technical University of Munich, School of Medicine, Munich, Germany
Maximilian Lindholz, Department of Radiology, Charité University Hospital Berlin, Berlin, Germany
Piotr Macek, Department and Clinic of Diabetology, Hypertension and Internal Diseases, Institute of Internal Diseases, Wroclaw Medical University, Wroclaw, Poland
Marcus Makowski, Department of Diagnostic and Interventional Radiology, Technical University of Munich, Munich, Germany
Luigi Mannacio, Department of Advanced Biomedical Sciences, University of Naples Federico II, Naples, Italy
Aymen Meddeb, Department of Neuroradiology, Charité University Hospital Berlin, Berlin, Germany
Lukas Müller, Department of Diagnostic and Interventional Radiology, University Medical Center of the, Johannes Gutenberg-University Mainz , Langenbeckst. 1, 55131, Mainz, Germany
Antonio Natale, Department of Radiological and Hematological Sciences, Section of Radiology, Università Cattolica del Sacro Cuore, L.go Francesco Vito 1, 00168, Rome, Italy
Béatrice Nguema Edzang, Department of Radiology, Hôpital Instruction des Armées, Libreville, Gabon
Adriana Ojeda, Departamento de Neuroradiología,DMO,Rosario,Argentina
Yae Won Park, Department of Radiology and Research Institute of Radiological Science and Center for Clinical Imaging Data Science,Yonsei University College of Medicine, Seoul, South Korea
Federica Piccione, Department of Surgical Sciences, Radiology Unit, University of Turin, Turin, Italy
Andrea Ponsiglione, Department of Advanced Biomedical Sciences, University of Naples Federico II, Naples, Italy
Małgorzata Poręba, Department of Paralympic Sport Wroclaw University of Health and Sport Sciences, Wroclaw, Poland
Rafał Poręba, Department of Radiology and Diagnostic Imaging, 4th Military Hospital, Wroclaw, Poland
Philipp Prucker, Department of Diagnostic and Interventional Radiology, Technical University of Munich, School of Medicine and Health, Klinikum rechts der Isar, TUM University Hospital, Munich, Germany
Jean-Pierre Pruvo, Department of Neuroradiology, Lille University Hospital, Salengro Hospital, Lille, France
Alba Pugliesi, Division of Health Care Sciences Center for Clinical Research and Management Education Dresden, Dresden International University, Dresden, Germany
Vasileios Rafailidis, Department of Radiology, Aristotle University of Thessaloniki, School of Medicine, AHEPA University General Hospital, Thessaloniki, Greece
Katarzyna Resler, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland
Jan Rotkegel, Faculty of medicine, Wroclaw Medical University, Wroclaw, Poland
Luca Saba, Department of Radiology, Azienda Ospedaliero Universitaria (A.O.U.), di Cagliari - Polo di Monserrato s.s. 554 Monserrato, Cagliari, Italy
Ezann Siebert, Department of Ophthalmology, Sir Charles Gairdner Hospital, Perth, Western Australia, Australia
Arnaldo Stanzione, Department of Advanced Biomedical Sciences, University of Naples Federico II, Naples, Italy
Liz Toapanta-Yanchapaxi, Department of Neurology, Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán, Mexico City, Mexico.
Matthaios Triantafyllou, Department of Medical Imaging, University Hospital of Heraklion, 71110, Crete, Voutes, Greece
Ekaterini Tsaoulia, Department of Radiology, Aristotle University of Thessaloniki, School of Medicine, AHEPA University General Hospital, Thessaloniki, Greece
Szymon Urban, Department of Cardiology, The Copper Health Center, Lubin, Poland
Evangelia Vassalou, Department of Radiology, University Hospital of Heraklion, Greece
Federica Vernuccio, Section of Radiology, Department of Biomedicine, Neuroscience and Advanced Diagnosis (Bi.N.D), University of Palermo, Palermo, 90127, Italy
Weilang Wang, Department of Radiology, Zhongda Hospital, Southeast University, 87 Ding Jiaqiao,Nanjing, P.R.China 210009
Johan Wassélius, Department of Medical Imaging and Physiology, Skåne University Hospital, 221 85, Lund, Sweden
Szymon Włodarczak, Department of Cardiology, The Copper Health Center, Lubin, Poland
Adrian Włodarczak, Department of Cardiology, The Copper Health Center, Lubin, Poland
Andrzej Wysocki, Department of Radiology and Diagnostic Imaging, 4th Military Hospital, Wroclaw, Poland
Lina Xu, Department of Radiology, Charité – Universitätsmedizin Berlin, Corporate Member of Freie Universität Berlin and Humboldt Universität zu Berlin, Berlin, Germany
Tomasz Zatoński, Department and Clinic of Otolaryngology, Head and Neck Surgery, Wroclaw Medical University, 50-556 Wroclaw, Poland
Shuhang Zhang, Department of Radiology, Zhongda Hospital, Southeast University, 87 Ding Jiaqiao,Nanjing, P.R.China 210009
Sebastian Ziegelmayer, Department of Diagnostic and Interventional Radiology, Klinikum rechts der Isar, TUM University Hospital, Technical University of Munich, Munich, Germany
</details>

<!-- FAQ -->
## FAQ

### Jestem radiologiem – czy mogę współtworzyć PARROT?

Z przyjemnością włączymy Twoje opisy do kolejnych wersji PARROT. Skontaktuj się z zespołem PARROT poprzez oryginalne repozytorium [PARROT_v1.0](https://github.com/PARROT-reports/PARROT_v1.0/) lub utwórz tam pull request.

### Co stanie się z moimi opisami?

Jeśli zaakceptujesz umowę o udostępnianiu danych, którą otrzymasz e-mailem, opisy zostaną publicznie udostępnione jako część bazy PARROT. Pozostaną bezpłatne i dostępne dla wszystkich na licencji CC BY-NC-SA 4.0.

### Co otrzymam w zamian?

Po przesłaniu 20 opisów z poprawnym tłumaczeniem i kodami ICD, 40 opisów z tłumaczeniami bez kodów ICD, 40 kodów ICD dla opisów bez kodów lub dowolnej kombinacji powyższych zostaniesz zaproszony/-a do Konsorcjum Autorów zbioru PARROT.

### Mam ciekawy pomysł na zadanie kliniczne do testowania na PARROT – jak mogę się włączyć?

Świetnie! PARROT jest projektem open source, więc możesz samodzielnie zacząć anotować zbiór i zachęcać do tego innych – na serwerze Discord, w mediach społecznościowych lub poprzez repozytorium [PARROT_v1.0](https://github.com/PARROT-reports/PARROT_v1.0/).

<!-- LICENSE -->
## Licencja

POLISH_PARROT jest utworem zależnym od PARROT i jest udostępniany na licencji Creative Commons Uznanie autorstwa – Użycie niekomercyjne – Na tych samych warunkach 4.0 Międzynarodowe (CC BY-NC-SA 4.0) https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pl
Licencja ta pozwala na rozpowszechnianie, remiksowanie, adaptowanie i tworzenie na podstawie materiału w dowolnym medium i formacie wyłącznie w celach niekomercyjnych oraz pod warunkiem podania autorstwa. Jeśli remiksujesz, adaptujesz lub tworzysz na podstawie materiału, musisz udostępnić zmodyfikowany materiał na tych samych warunkach.

<!-- CONTACT -->
## Kontakt

W sprawach dotyczących oryginalnego zbioru PARROT prosimy o kontakt poprzez repozytorium [PARROT_v1.0](https://github.com/PARROT-reports/PARROT_v1.0/).

<!-- ACKNOWLEDGMENTS -->
## Podziękowania
PARROT to projekt non-profit, którego pomysłodawcami są Bastien Le Guellec (Lille, Francja) i Keno Bressem (Monachium, Niemcy), przy wsparciu Grégory'ego Kuchcinskiego (Lille, Francja).
Obecnie projekt nie otrzymuje finansowania instytucjonalnego.
Jeśli reprezentujesz instytucję, która chciałaby wesprzeć projekt, skontaktuj się z zespołem PARROT poprzez repozytorium [PARROT_v1.0](https://github.com/PARROT-reports/PARROT_v1.0/).
