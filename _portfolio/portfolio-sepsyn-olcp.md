---
title: "Sepsyn-OLCP — Online Learning + Conformal Prediction for Early Sepsis"
excerpt: "Gap-based contextual bandits paired with split conformal prediction for reliable early sepsis prediction. Paper + reference implementation."
collection: portfolio
date: 2025-03-18
venue: "arXiv"
featured: true
link: "https://github.com/Annie983284450-1/CPGapBandit"
---

**Sepsyn-OLCP** is an online learning framework for early sepsis prediction that fuses a gap-based contextual bandit with split conformal prediction. Conformal prediction gives clinically meaningful, finite-sample prediction intervals with coverage guarantees; the bandit layer adapts to which features or experts are worth trusting for each patient.

- **Paper** · [arXiv:2503.14663](https://arxiv.org/abs/2503.14663)
- **Code** · [`Annie983284450-1/CPGapBandit`](https://github.com/Annie983284450-1/CPGapBandit)
- **Data** · ICU electronic health records (MIMIC-adjacent; 27,000+ hours of time-series records used in companion experiments)

Highlights: sublinear regret bounds under the bandit formulation, calibrated coverage at the bedside, and a clean decomposition that lets conformal-prediction machinery ride on top of any existing online learner.
