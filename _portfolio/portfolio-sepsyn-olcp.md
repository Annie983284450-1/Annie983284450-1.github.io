---
title: "Sepsyn-OLCP — Gap-Based Online Learning with Conformal Prediction"
excerpt: "Extends OnAI-Comp with a split conformal layer: every per-patient prediction ships with a distribution-free confidence interval of guaranteed marginal coverage. The selector picks experts by predicted *gap*, not by point accuracy."
collection: portfolio
date: 2025-03-18
venue: "arXiv"
featured: true
link: "https://github.com/Annie983284450-1/CPGapBandit"
teaser: "research/sepsyn-olcp-fig.png"
---

Point predictions are not enough for the ICU. **Sepsyn-OLCP** wraps the OnAI-Comp expert-selection pipeline with *split conformal prediction* so that every prediction about the next patient carries a finite-sample, distribution-free confidence interval — the kind of calibrated uncertainty a clinician can actually act on.

The second contribution is subtle but important: the online selector ranks experts not by raw error but by the *gap* between their prediction and the conformal interval bound. Gap-based selection is more robust to calibration errors in any single expert and, under mild assumptions, retains sublinear regret.

- **Paper** · [arXiv:2503.14663](https://arxiv.org/abs/2503.14663)
- **Code** · [`Annie983284450-1/CPGapBandit`](https://github.com/Annie983284450-1/CPGapBandit)
- **Data** · trained and evaluated on ICU electronic health records (MIMIC-adjacent preprocessing pipeline, 27,000+ hours of patient time-series).

Design choices worth calling out: split CP keeps the guarantee assumption-light (marginal coverage holds under exchangeability, not a stronger i.i.d. clause); the gap formulation lets the algorithm degrade gracefully when an expert is confidently wrong.
