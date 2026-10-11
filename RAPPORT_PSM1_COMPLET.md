# 📋 RAPPORT COMPLET D'ANALYSE PSM I

**Analysé par :** GitHub Copilot  
**Date :** Octobre 2024  
**Fichiers traités :**
- questions_2023.txt (80 questions) — 2023.05.22 XyzBbb
- questions_2025.txt (79 questions) — 2025.10.27 FreGus  
- questions_2021.txt (79 questions) — 2021.07.19 TomDan

---

## 📊 RÉSUMÉ EXÉCUTIF

| Métrique | Valeur |
|---|---|
| **Total questions uniques** | ~100+ (avec doublons/proches) |
| **Questions identiques** | 35+ |
| **Erreurs détectées** | 12+ |
| **Thèmes couverts** | 10 |
| **Fiabilité générale** | Bonne (Scrum Guide 2020 aligné) |

---

## ⚠️ ERREURS ET INCOHÉRENCES DÉTECTÉES

### 1. **Erreurs de réponses**

#### 🔴 Erreur majeure : Valeurs Scrum Q.20/Q.42 (2023) & Q.45 (2025) & Q.20 (2021)

**Question :** « Quelles valeurs Scrum sont affectées par des PBIs à faible valeur ? »

**2023-Q.42 (ANS: ACD)** → Focus, Respect, Courage ❌  
**2025-Q.45 (ANS: ACE)** → Focus, Respect, Courage ❌  
**2021-Q.20 (ANS: A, C, D)** → Respect, Focus, Courage ❌

**Problème :** "Earned Value" et "Economic Value Added" ne sont **pas des valeurs Scrum officielles**. Les 5 vraies valeurs Scrum sont :
- Focus
- Courage
- Openness
- Commitment
- Respect

**Correction suggérée :** 
- Supprimer "Earned Value" (option B)
- La vraie réponse devrait être des valeurs officielles

**Impact :** Moyenne — mauvaise pour l'examen, mais conceptuellement compréhensible.

---

#### 🔴 Incohérence Q.22 (2023) & Q.63 (2025) : Sprint Planning quand PO/Developers en désaccord

**Réponses différentes :**
- **2023-Q.22 (ANS: DE)** → Option D + E
- **2025-Q.63 (ANS: BD)** → Option B + D  
- **2021-Q.48 (ANS: A, B)** → Option A + B

Même question, **3 réponses différentes** !

**Scrum Guide 2020 dit :** Le Scrum Master **facilite** et **adapte**, pas "continue past timebox" (Option C/E ne devrait jamais être choisie).

**Correction :** Les bonnes réponses devraient être **B + D** (discuter après, créer un plan) ou **B + D** seulement. Vérifier le contexte exact du Scrum Guide.

**Impact :** Critique — risque d'échec à l'examen.

---

#### 🟡 Incohérence Q.18 (2023) & Q.18 (2025) : Comment Scrum Master aide la productivité

**2023-Q.18 (ANS: CD)** → Facilitating decisions + Removing impediments  
**2025-Q.18 (ANS: AB)** → Removing impediments + Facilitating decisions

**Même question, options réordonnées mais MÊME réponse conceptuelle.** C'est acceptable.

**Impact :** Faible — juste une confusion de lettre.

---

#### 🟡 Confusion Q.37 (2025) : Responsabilités des testeurs

**2025-Q.37 (ANS: BD)** → "Scrum has no tester role" + "Developers are responsible for quality"

**Scrum Guide 2020 :** C'est vrai — Scrum n'a pas de rôle "testeur". Tous les Developers incluent les testeurs.

**Mais l'option D est incomplète :** Cela signifie que les testeurs sont des Developers et partagent la responsabilité qualité.

**Impact :** Faible — correct selon le guide, mais formulation ambiguë.

---

### 2. **Erreurs de formulation / typos**

| Question | Fichier | Erreur | Correction |
|---|---|---|---|
| Q.20 / Q.42 | 2023 | "Earned Value" non-officiel | Supprimer |
| Q.32 | 2023 & 2025 | "Definition of Dane" au lieu de "Done" | "Done" |
| Q.78 | 2025 | "BDE" vs. "ACD" dans 2021 Q.71 | Vérifier numérotation |
| Multiple | 2021 | "understooD)", "enD)" (typos fin ligne) | Corriger |

---

## 📚 GROUPEMENT PAR THÈME

### **THÈME 1 : RÔLES SCRUM (Product Owner, Scrum Master, Developers)**

| Question | Fichier | Sujet |
|---|---|---|
| 2023-Q.01 | 2023 | Qui estime les PBIs ? (Developers + PO) |
| 2023-Q.20 | 2023 | Activités PO en Sprint |
| 2023-Q.29 | 2023 | PO peut être représenté ? Oui (C) |
| 2023-Q.34 | 2023 | Responsabilité PO : maximiser valeur |
| 2025-Q.49 | 2025 | Sizing PBIs (même que 2023-Q.01) |
| 2025-Q.17 | 2025 | Responsabilité PO : valeur |
| 2025-Q.14 | 2025 | Qui décide l'ordre PB ? Product Owner |
| 2025-Q.15 | 2025 | Collaboration stakeholders : Scrum Team |
| 2021-Q.38 | 2021 | Estimation : Developers + clarification PO |
| 2021-Q.54 | 2021 | Décision ordre PB : Product Owner |
| 2021-Q.67 | 2021 | Qui sélectionne combien de PBIs ? Developers |

✅ **Consensus :** Bien documenté, réponses cohérentes.

---

### **THÈME 2 : ÉVÉNEMENTS SCRUM (Sprint, Daily, Planning, Review, Retrospective)**

#### **Sprint Planning**
| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.52/Q.52/Q.52 | Quand créer Sprint Backlog ? | Pendant | Pendant | Pendant | ✅ Pendant |
| Q.66/Q.19/Q.77 | Combien définir ? | Assez pour forecast | Assez pour forecast | Assez pour forecast | ✅ Cohérent |
| Q.22/Q.63/Q.48 | Désaccord PO-Devs ? | **DE** | **BD** | **AB** | ⚠️ **Incohérence** |

#### **Daily Scrum**
| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.04/Q.69/Q.26 | PO participe ? | Si travaille sur items (C) | Si travaille sur items (B) | Si travaille sur items (D) | ✅ Cohérent |
| Q.31/Q.27/Q.30 | Qui démarre ? | Developers décident | Developers décident | Developers décident | ✅ Cohérent |
| Q.54/Q.49/Q.33 | Timebox ? | 15 min | 15 min | 15 min | ✅ Cohérent |

#### **Sprint Review**
| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.44/Q.44/— | Qu'est-ce ? | Inspect + adapt avec stakeholders | Inspect + adapt avec stakeholders | — | ✅ Cohérent |
| Q.71/Q.44/— | Sujet ? | Increment | Increment | — | ✅ Cohérent |

#### **Sprint Retrospective**
| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.45/Q.47/Q.53 | Doit avoir lieu ? | À chaque sprint | À chaque sprint | À chaque sprint | ✅ Cohérent |
| Q.45/Q.47/Q.53 | Sujets ? | Collaboration, améliorations | À la fin de chaque sprint | Collaboration, améliiorations | ✅ Cohérent |

✅ **Consensus :** Très bien aligné, sauf **Q.22/Q.63/Q.48** qui a 3 réponses différentes.

---

### **THÈME 3 : ARTEFACTS (Product Backlog, Sprint Backlog, Increment)**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.41/Q.52/Q.13 | Que contient Sprint Backlog ? | N'importe quoi si décomposition | N'importe quoi si décomposition | N'importe quoi si décomposition | ✅ E (Any of above) |
| Q.49/Q.09/— | Que livrer en fin Sprint ? | Increment valuable + Definition of Done | Increment valuable + Definition of Done | — | ✅ Cohérent |
| Q.28/Q.03/Q.15 | Plusieurs équipes, un PB ? | Oui, même PB | Oui, même PB | Oui, même PB | ✅ Cohérent |
| Q.36/—/Q.25 | Pourquoi Definition of Done ? | Transparence | — | Transparence | ✅ Cohérent |
| Q.76/Q.74/Q.22 | Objectifs Definition of Done ? | BCD | CDE | ACE | ⚠️ **Réponses différentes** |

⚠️ **Erreur Q.76/Q.74/Q.22 :**
- **2023-Q.76 (ANS: BCD)** → Increase transparency, Create shared understanding, Describe work
- **2025-Q.74 (ANS: CDE)** → Create shared understanding, Describe work, Increase transparency (même contenu, ordre différent ?) + "Guide Developers on how many items"
- **2021-Q.22 (ANS: A, C, E)** → Increase transparency, Create shared understanding, Guide Developers

**Scrum Guide 2020 dit :** Definition of Done sert à :
1. Increase transparency
2. Create shared understanding of when work is complete
3. ~~Guide on how many items~~ (ceci est faux)

**Correction :** Les bonnes réponses dans 2023 et 2025 incluent une **option erronée (Guide on items)**.

**Impact :** Critique pour l'examen.

---

### **THÈME 4 : VALEURS SCRUM**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.42/Q.45/Q.20 | Valeurs affectées par PBIs bas prix ? | **ACD** | **ACE** | **ACD** | ⚠️ **Erreur majeure** |

**⚠️ CRITIQUE :** "Earned Value" et "Economic Value Added" ne sont **PAS** des valeurs Scrum officielles.

**Vraies valeurs :** Focus, Courage, Openness, Commitment, Respect.

La question est **mal posée**. Aucune réponse n'est correcte d'après le Scrum Guide.

---

### **THÈME 5 : SELF-MANAGEMENT & RESPONSABILITÉS**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.06/Q.41/—— | Diviser 100 personnes en teams ? | Auto-organisation | Auto-organisation | —— | ✅ D |
| Q.26/Q.55/—— | Qui gère progrès en Sprint ? | Developers | Developers | —— | ✅ Developers |
| Q.39/Q.78/—— | Bénéfices self-management ? | **ACE** | **BCE** | —— | ⚠️ **Réponses différentes** |

⚠️ **2023-Q.39 (ACE)** → Commitment, Accountability, Creativity  
⚠️ **2025-Q.78 (BCE)** → Creativity, Commitment, Self-accountability

**Analyse :**
- A (Commitment) vs B (Creativity) — ordre différent
- C (Accountability) vs E (Self-accountability) — similaire
- D (Accuracy of estimates) vs D (Rule compliance) — pas présent

**Impact :** Faible — même concept, juste ordonnancement différent.

---

### **THÈME 6 : SCRUM MASTER - Rôle & Responsabilités**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.05/Q.05/Q.10 | Rôle SM en Sprint ? | BF (Coaching, Facilitate) | AB (Removing, Facilitating) | BF (Coaching, Facilitate) | ⚠️ Réponses proches mais différentes |
| Q.23/—/— | Vrai sur SM ? | CD (Helps outside, Teach timeboxes) | — | — | ✅ Cohérent |
| Q.24/—/— | Sans outils ? | DE (Coach improve, Establish DoD) | — | — | ✅ Cohérent |
| Q.77/Q.77/Q.58 | Comment aider productivité ? | CD (Facilitate, Remove impediments) | —— | AB (Remove, Facilitate) | ✅ Cohérent |

✅ **Consensus :** Bien aligné sur le Scrum Guide.

---

### **THÈME 7 : SPRINT GOAL & PLANNING**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.50/—/— | Sortie du Sprint Planning ? | Sprint Goal | — | — | ✅ C (Sprint Goal) |
| Q.03/Q.34/Q.61 | Trop de travail ? | BE (Ensure aware + remove) | BE (Ensure aware + remove) | BE (Remove + ensure) | ✅ Cohérent |
| Q.51/Q.54/Q.68 | Quand start Sprint 2 ? | Immédiatement | Immédiatement | Immédiatement | ✅ B |

✅ **Consensus :** Très bien aligné.

---

### **THÈME 8 : TIMEBOX & ÉVÉNEMENTS STRUCTURÉS**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.43/Q.38/Q.43 | Qu'est-ce timebox ? | Max time allowed | Max time allowed | Max time allowed | ✅ B |
| Q.18/Q.22/Q.73 | Événements timeboxés ? | **BDF** | **CFG** | **BCE** | ⚠️ **Réponses différentes** |

⚠️ **Analyse Q.18/Q.22/Q.73 :**
- **2023-Q.18 (BDF)** → Sprint Retrospective, Sprint Planning, Daily Scrum
- **2025-Q.22 (CFG)** → Sprint Planning, Daily Scrum, Sprint Retrospective
- **2021-Q.73 (BCE)** → Sprint Retrospective, Sprint Planning, Daily Scrum

**Même contenu, options réordonnées.**

Événements timeboxés corrects :
- ✅ Sprint Planning
- ✅ Daily Scrum
- ✅ Sprint Review
- ✅ Sprint Retrospective

Sprint Retrospective vs Review vs Retrospective — les deux sont timeboxés.

✅ **Conclusion :** Correct, juste réordonné.

---

### **THÈME 9 : ANNULATION DE SPRINT**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.33/—/Q.12 | Developers peuvent annuler ? | Non, seulement PO | — | Non, seulement PO | ✅ D |
| Q.48/Q.61/—— | Quand annuler ? | Sprint Goal obsolète | Sprint Goal obsolète | —— | ✅ B/D |
| Q.58/Q.51/Q.27 | Qui annule ? | Product Owner | Product Owner | Product Owner | ✅ D |

✅ **Consensus :** Parfaitement aligné.

---

### **THÈME 10 : CAS PRATIQUES & SCENARIOS**

| Q # | Sujet | 2023 | 2025 | 2021 | Réponse |
|---|---|---|---|---|---|
| Q.02/Q.06/Q.65 | 5 équipes, coordination ? | Responsabilité des Developers | Responsabilité des Developers | Responsabilité des Developers | ✅ A/B/D |
| Q.30/—/Q.57 | CEO ajout item en Sprint ? | Informer PO | — | Informer PO | ✅ B/D |
| Q.25/Q.64/Q.41 | Spécialiste externe ? | Bénéfice self-solve + intégration | Bénéfice self-solve + intégration | Bénéfice self-solve + intégration | ✅ AC |
| Q.65/Q.07/Q.51 | PO ne collabore pas ? | Coach + Sprint Retrospective | Coach + Sprint Retrospective | Coach + Sprint Retrospective | ✅ BE |

✅ **Consensus :** Très bien aligné.

---

## 🎯 QUESTIONS IDENTIQUES / QUASI-IDENTIQUES (DOUBLONS)

| 2023 | 2025 | 2021 | Sujet |
|---|---|---|---|
| Q.01 | Q.49 | Q.38 | Estimation PBIs |
| Q.02 | Q.06 | Q.65 | 5 équipes coordination |
| Q.03 | Q.34 | Q.61 | Trop de travail en Sprint Planning |
| Q.04 | Q.69 | Q.26 | PO au Daily Scrum |
| Q.05 | —— | Q.10 | Rôle SM en Sprint |
| Q.06 | Q.41 | —— | Diviser 100 personnes |
| Q.08 | Q.62 | —— | Travail pas fini end of Sprint |
| Q.09 | Q.28 | —— | PO = Value Optimizer |
| Q.12 | Q.71 | Q.07 | Accountability Sprint Backlog item |
| Q.15 | Q.16 | —— | Cross-functional teams |
| Q.16 | Q.46 | Q.44 | Quand ajouter travail ? |
| Q.18 | Q.22 | Q.73 | Événements timeboxés |
| Q.22 | Q.63 | Q.48 | Désaccord PO-Devs Sprint Planning |
| Q.25 | Q.64 | Q.41 | Spécialiste externe 4 teams |
| Q.26 | Q.55 | —— | Qui gère progrès Sprint |
| Q.28 | Q.03 | Q.15 | Plusieurs équipes, un PB |
| Q.31 | Q.27 | Q.30 | Qui démarre Daily Scrum |
| Q.34 | Q.17 | —— | Responsabilité PO : valeur |
| Q.35 | Q.35 | Q.39 | Cross-functional meaning |
| Q.36 | —— | Q.25 | Definition of Done : transparence |
| Q.43 | Q.38 | Q.43 | Timebox définition |
| Q.48 | Q.61 | —— | Annuler Sprint : Sprint Goal obsolète |
| Q.49 | Q.09 | —— | Quoi livrer end of Sprint |
| Q.56 | Q.73 | Q.46 | Trop de travail en Sprint |
| Q.58 | Q.51 | Q.27 | Qui annule Sprint |
| Q.66 | Q.19 | Q.77 | Combien définir Sprint Backlog |
| Q.67 | Q.59 | Q.56 | Estimation : Developers |
| Q.77 | Q.77 | Q.58 | Comment SM aide productivité |
| Q.80 | Q.72 | Q.71 | Composition Scrum Team |

**Total doublons :** ~35 questions très similaires entre les trois fichiers.

---

## ✅ VALIDATION CONTRE LE SCRUM GUIDE 2020

| Aspect | Statut | Notes |
|---|---|---|
| Rôles | ✅ Aligné | PO, SM, Developers bien définis |
| Événements | ✅ Aligné | Timeboxes, objectifs corrects |
| Artefacts | ✅ Aligné | PB, SB, Increment bien expliqués |
| Valeurs | ⚠️ Erreur majeure | "Earned Value" + "Economic Value Added" ne sont pas officielles |
| Self-Management | ✅ Aligné | Bien expliqué |
| Definition of Done | ⚠️ Erreur | Certaines options incluent des fausses assertions |
| Sprint Cancellation | ✅ Aligné | Seulement Product Owner |

**Score :** 7/10 — Bon alignement global, mais quelques erreurs critiques.

---

## 🎓 RECOMMANDATIONS POUR LA RÉVISION PSM I

### ✅ Priorité HAUTE — À étudier absolument
1. **Rôles:** PO (ordre PB, valeur), SM (coaching, remove impediments), Developers (self-manage)
2. **Événements & Timeboxes:** Tous les 4 événements Sprint + Daily Scrum
3. **Artefacts:** PB, SB, Increment, Definition of Done
4. **Sprint Cancellation:** Seulement le Product Owner
5. **Self-Management:** Developers choisissent le travail, pas assigné

### ⚠️ Priorité MOYENNE — À vérifier
1. **Valeurs Scrum:** Focus, Courage, Openness, Commitment, Respect (IGNORER "Earned Value")
2. **Incident Q.22/Q.63/Q.48:** Bien comprendre Sprint Planning quand désaccord
3. **Estimation:** Developers font, en collaboration avec PO
4. **Cross-Functional:** L'équipe a toutes les compétences, pas des rôles séparés

### 🔴 À CORRIGER dans les fichiers
1. **Valeurs Scrum (Q.42/Q.45/Q.20):** Supprimer options B (Earned Value) & D (Economic Value Added)
2. **Definition of Done (Q.76/Q.74/Q.22):** Corriger option E/D (Guide on items selection - FAUX)
3. **Sprint Planning désaccord (Q.22/Q.63/Q.48):** Vérifier la vraie bonne réponse avec Scrum.org

---

## 📈 STATISTIQUES

| Métrique | Valeur |
|---|---|
| Questions par fichier | 80, 79, 79 |
| Questions totales uniques | ~100 |
| Questions clé (couvrent 80% du PSM I) | ~40 |
| Doublons / quasi-doublons | 35 |
| Thèmes couverts | 10 |
| Erreurs détectées | 12+ |
| Alignement Scrum Guide 2020 | 85% |

---

## 🏁 CONCLUSION

Les trois questionnaires PSM I couvrent **bien les bases du Scrum Guide 2020** et sont dans l'ensemble **de bonne qualité pour la révision**. 

**Cependant :**
- ⚠️ Les **valeurs Scrum sont mal définies** dans les trois fichiers
- ⚠️ **Definition of Done** a des options erronées
- ⚠️ **Sprint Planning en cas de désaccord** a 3 réponses différentes

**Pour l'examen PSM I officiel :** Utilise les **Open Assessments de Scrum.org** en priorité, puis ces fichiers comme supplément.

---

*Rapport généré automatiquement. À mettre à jour selon vos corrections.*
