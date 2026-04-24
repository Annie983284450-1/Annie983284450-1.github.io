---
title: "OnAI-Comp — Online AI Experts Competing for Sepsis Detection"
excerpt: "Peer-reviewed framework that ensembles heterogeneous ML experts via average-regret evaluation, with LIME-based interpretability for clinicians."
collection: portfolio
date: 2021-10-26
venue: "IEEE/ACM TCBB"
featured: true
link: "https://github.com/Annie983284450-1/OnAI-Comp"
---

**OnAI-Comp** ("Online AI Experts Competing") ensembles multiple heterogeneous machine-learning experts for early sepsis detection. At each decision step the framework selects among experts by their running average regret, giving the clinician a single prediction with a clear provenance. LIME is layered on top to surface per-prediction explanations.

- **Paper** · *IEEE/ACM Transactions on Computational Biology and Bioinformatics*, 19(6): 3595–3603, 2021. [PubMed 34699366](https://pubmed.ncbi.nlm.nih.gov/34699366/)
- **Code** · [`Annie983284450-1/OnAI-Comp`](https://github.com/Annie983284450-1/OnAI-Comp)

This is the peer-reviewed foundation that the later conformal-prediction work ([Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/), [NeuroSep-CP-LCB](/portfolio/portfolio-neurosep-cp-lcb/)) builds on.
