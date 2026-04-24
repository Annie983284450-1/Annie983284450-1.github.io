---
title: "NeuroSep-CP-LCB — Neural Contextual Bandits with Conformal Confidence"
excerpt: "Swaps the pool-of-experts for a neural network that directly models a patient-specific reward function, and wraps the whole thing in conformal prediction + an LCB-style exploration bonus tuned for offline clinical data."
collection: portfolio
date: 2025-03-29
venue: "arXiv"
featured: true
link: "https://github.com/Annie983284450-1/NeuralLCB_C"
teaser: "research/neurosep-fig.png"
---

**NeuroSep-CP-LCB** is the endgame of the thesis arc. Instead of selecting among pre-trained experts, the bandit models the expected reward of each treatment arm *directly* with a neural network — giving the framework the expressiveness to capture patient-level heterogeneity that a fixed expert pool can't. Split conformal prediction still sits on top, providing distribution-free calibrated intervals around every predicted reward.

The "LCB" in the name is the mechanism that makes it work on *offline* ICU data. Vanilla offline RL tends to over-extrapolate into regions the logged policy never visited; a lower-confidence-bound penalty discourages those extrapolations and makes the learned policy safer by construction. Conformal prediction quantifies the width of that LCB bonus rigorously instead of tuning it heuristically.

- **Paper** · [arXiv:2503.16708](https://arxiv.org/abs/2503.16708)
- **Code** · [`Annie983284450-1/NeuralLCB_C`](https://github.com/Annie983284450-1/NeuralLCB_C) — JAX implementation with reproducible configs for the ICU benchmark.
- **Companion** · direct successor to [Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/); same dataset and conformal machinery, more expressive reward family.

Contributions in one line: personalised reward modelling with an LCB exploration bonus, and conformal calibration as the uncertainty quantifier — a clean decomposition that lets any of the three pieces be swapped out independently.
