---
title: "OnAI-Comp — Online AI Experts Competing for Early Sepsis Detection"
excerpt: "A peer-reviewed framework that lets a pool of heterogeneous ML experts compete *online* for the right to predict sepsis in the next patient, mediated by a trusted selector with regret guarantees and LIME-based interpretability."
collection: portfolio
date: 2021-10-26
venue: "IEEE/ACM TCBB"
featured: true
link: "https://github.com/Annie983284450-1/OnAI-Comp"
teaser: "research/onai-comp-fig.png"
---

**OnAI-Comp** addresses a tension at the bedside: a single ML model is rarely optimal for every patient, but ensembling with static weights throws away the signal that *which* model works best is itself patient-specific.

The framework keeps a pool of offline-trained experts (gradient boosting, random forest, logistic regression, etc.) and an **online selection module** — a trusted third party — that picks the best expert for each incoming patient based on running average regret. Under standard online-learning assumptions the selector converges to the best expert in hindsight, so clinicians get a single decision per patient that still inherits the diversity of the full pool.

- **Paper** · *IEEE/ACM Transactions on Computational Biology and Bioinformatics* 19(6), 3595–3603 (2021). [PubMed 34699366](https://pubmed.ncbi.nlm.nih.gov/34699366/)
- **Code** · [`Annie983284450-1/OnAI-Comp`](https://github.com/Annie983284450-1/OnAI-Comp)
- **Interpretability** · every prediction comes with LIME-based feature attributions so clinicians can audit the selected expert's reasoning.

This is the peer-reviewed foundation that the later conformal-prediction work ([Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/), [NeuroSep-CP-LCB](/portfolio/portfolio-neurosep-cp-lcb/)) builds on.
