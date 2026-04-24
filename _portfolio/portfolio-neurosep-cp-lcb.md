---
title: "NeuroSep-CP-LCB — Neural Contextual Bandits + Conformal Prediction"
excerpt: "A neural contextual bandit that models patient-specific reward functions, with conformal prediction providing actionable confidence bounds. Built for early sepsis detection."
collection: portfolio
date: 2025-03-29
venue: "arXiv"
featured: true
link: "https://github.com/Annie983284450-1/NeuralLCB_C"
---

**NeuroSep-CP-LCB** pushes the sepsis-prediction work deeper: instead of picking from a pool of pre-trained experts, the neural network *directly* models a patient-specific reward function, and split conformal prediction sits on top to provide distribution-free confidence bounds on those rewards.

- **Paper** · [arXiv:2503.16708](https://arxiv.org/abs/2503.16708)
- **Code** · [`Annie983284450-1/NeuralLCB_C`](https://github.com/Annie983284450-1/NeuralLCB_C) (JAX-based)
- **Companion** · Successor to [Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/); same dataset, more expressive reward family.

Key contributions: personalised reward modeling with an LCB-style exploration bonus, explicit uncertainty calibration via conformal prediction on offline data distributions, and large-scale experiments on ICU time-series data using JAX for tractable training.
