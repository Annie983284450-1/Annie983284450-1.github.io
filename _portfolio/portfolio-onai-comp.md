---
title: "OnAI-Comp — Online AI Experts Competing for Early Sepsis Detection"
subtitle: "A peer-reviewed framework where a pool of ML experts competes online; a trusted selector picks the best one for each incoming patient, with per-prediction interpretability."
collection: portfolio
permalink: /portfolio/portfolio-onai-comp/
date: 2021-10-26
step: "Step 01 / 2021"
venue: "IEEE/ACM Transactions on Computational Biology and Bioinformatics"
paperurl: "https://pubmed.ncbi.nlm.nih.gov/34699366/"
codeurl: "https://github.com/Annie983284450-1/OnAI-Comp"
featured: true
link: "https://github.com/Annie983284450-1/OnAI-Comp"
hero_figure: "onai-comp-fig.png"
hero_figure_alt: "OnAI-Comp system infrastructure. An Online Selection Module acting as a Third Trusted Party routes predictions for New Patients through an Offline AI experts Module seeded by Old Patients; utility scores flow from the experts back to the selector."
hero_figure_caption: "System infrastructure. The Online Selection Module routes each new patient through the most competitive expert from the offline pool, using utility scores to keep the ranking honest."
citation: 'Zhou, A., Beyah, R., Kamaleswaran, R. (2021). OnAI-Comp: An online AI experts competing framework for early sepsis detection. IEEE/ACM Transactions on Computational Biology and Bioinformatics, 19(6), 3595–3603.'
---

## The problem

Early sepsis prediction in the ICU is an awkward machine-learning setting:

- **No single model is universally best.** Gradient boosting, random forests, logistic regression, LSTMs — each captures different aspects of patient trajectories. Ensembling with static weights throws away the signal that *which* model is right is itself patient-specific.
- **Data distributions drift.** A hospital's patient mix shifts over time; last year's best model may be this year's worst.
- **Clinicians don't accept black boxes.** Any prediction the system surfaces must come with an explanation a human can audit.

OnAI-Comp proposes an online learning framework that handles all three simultaneously.

## Architecture

Three modules, communicating through a light protocol:

- **Offline AI Experts Module.** A heterogeneous pool `{A₁, …, A_K}` of pre-trained ML experts — XGBoost, random forest, logistic regression, and deep sequence models — each optimised on a shared training cohort of prior (old) patients.
- **Online Selection Module** acting as a **Third Trusted Party**. At each decision step it receives the current new patient's features `xₜ` and queries the expert pool. Each expert returns a prediction. The selector evaluates the running **average regret** of each expert against recent ground truth and picks the one whose cumulative regret is lowest — the best expert *in hindsight*.
- **Utility score feedback.** After the outcome is observed, a utility score flows back to the expert pool, updating the regret tally.

Under standard online-learning assumptions (bounded loss, adversarial experts), the selector converges to the best expert in hindsight with **sublinear regret** — so clinicians get a single decision per patient that still inherits the diversity of the full pool.

## Interpretability

Every expert is wrapped in **LIME** so that the selected prediction ships with a local feature-attribution explanation. If the selector picks the random forest for patient `xₜ`, the clinician sees not just "sepsis risk 0.87" but "driven by WBC count, MAP drop, lactate trend" — the same features the bedside nurse would already be watching.

## Why it matters for the thesis arc

OnAI-Comp is **Step 01** of my dissertation. Everything that follows builds on the same skeleton:

- [Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/) **Step 02** wraps this pipeline in split conformal prediction so each pick also ships with a distribution-free confidence interval, and re-casts the selector as a *gap-based* online learner.
- [NeuroSep-CP-LCB](/portfolio/portfolio-neurosep-cp-lcb/) **Step 03** replaces the expert pool entirely with a neural network that models the patient-specific reward function directly.

OnAI-Comp is the peer-reviewed foundation — the one paper in the arc that is already published (TCBB 2021).

## Resources

- [Paper (PubMed 34699366)](https://pubmed.ncbi.nlm.nih.gov/34699366/)
- [Code (`Annie983284450-1/OnAI-Comp`)](https://github.com/Annie983284450-1/OnAI-Comp)
