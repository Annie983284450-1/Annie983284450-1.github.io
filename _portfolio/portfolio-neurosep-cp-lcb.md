---
title: "NeuroSep-CP-LCB — Neural Contextual Bandits with Conformal Confidence"
subtitle: "Replace the expert pool with a neural network that models patient-specific reward functions, and use a conformal Lower-Confidence-Bound bonus to learn safely from offline ICU data."
collection: portfolio
permalink: /portfolio/portfolio-neurosep-cp-lcb/
date: 2025-03-29
step: "Step 03 / 2025"
venue: "arXiv:2503.16708"
paperurl: "https://arxiv.org/abs/2503.16708"
codeurl: "https://github.com/Annie983284450-1/NeuralLCB_C"
featured: true
link: "https://github.com/Annie983284450-1/NeuralLCB_C"
hero_figure: "neurosep-fig.png"
hero_figure_alt: "NeuroSep-CP-LCB system overview. Training Patients Data feeds a Neural Network-based Reward Approximator; a Prediction Interval Calculator provides conformal confidence bounds; Testing Patients Data flows through the same machinery for policy decisions."
hero_figure_caption: "System overview. A neural network replaces the heterogeneous expert pool; split conformal prediction calibrates a lower-confidence-bound penalty that prevents the policy from extrapolating into regions the offline data never visited."
citation: 'Zhou, A., Beyah, R., Kamaleswaran, R. (2025). NeuroSep-CP-LCB: A Deep Learning-based Contextual Multi-armed Bandit Algorithm with Uncertainty Quantification for Early Sepsis Prediction. arXiv:2503.16708.'
---

## The endgame of the thesis arc

[OnAI-Comp](/portfolio/portfolio-onai-comp/) selected among pre-trained experts. [Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/) added calibrated intervals and gap-based selection. **NeuroSep-CP-LCB** retires the expert pool entirely.

## Why get rid of the expert pool?

The pool is expressive, but it has a ceiling. Each individual expert is a static model trained on the full cohort — it can't capture the level of *patient-level heterogeneity* that modern ICU research demands. The thesis's push is toward genuinely patient-specific decisions.

The move: let a single neural network directly approximate the expected-reward function `f(xₜ, aₜ)` over the joint space of patient context `xₜ` and action `aₜ`. This is a **neural contextual bandit** — classical contextual-bandit theory with a neural reward approximator slotted in.

## The safety problem — and the fix

Offline reinforcement learning has a well-known pathology: policies tend to **over-extrapolate** into state-action regions the logged policy never visited. Without on-policy feedback, the learned policy can confidently recommend interventions that look reasonable on paper but lack any real data support. In clinical contexts this is unacceptable.

The standard mitigation is to penalise exploration with a **Lower Confidence Bound** (LCB) bonus — subtract a confidence-width term from the reward estimate so that regions with sparse support are automatically down-weighted. The hard part is knowing *how wide* the bonus should be.

**NeuroSep-CP-LCB uses split conformal prediction to calibrate the LCB width rigorously** — not via a heuristic tuning run. The conformal interval around each neural reward estimate becomes the uncertainty quantifier the LCB consumes. Clean decomposition:

1. **Reward approximator** — neural network trained on training-patient data.
2. **Prediction interval calculator** — split-CP on a held-out calibration fold, emits `[f̂ − q̂, f̂ + q̂]`.
3. **LCB policy** — pick the action maximising `f̂ − q̂`, i.e. the pessimistic lower bound. The policy avoids regions where `q̂` is large.

## Implementation notes

- **JAX-based.** The neural bandit and CP calibration are implemented in JAX so the tight optimisation inner loops are jittable. See `Annie983284450-1/NeuralLCB_C`.
- **Reproducible configs.** The repo ships with configuration files for the ICU benchmarks used in the paper, so other groups can reproduce and compare.
- **Dataset.** Same ICU time-series backbone as Sepsyn-OLCP; the two papers share a preprocessing pipeline so results are directly comparable.

## Contributions in one line

Personalised reward modelling with an LCB exploration bonus, and conformal prediction as the uncertainty quantifier that calibrates that bonus — a clean decomposition where each piece can be swapped out independently.

## Portable beyond the ICU

The decomposition is what makes the method interesting outside sepsis:

- **Biomechanical control.** The MyoChallenge 2025 setting is a natural testbed — offline logged demonstrations of muscle-actuated movement, where extrapolation penalties matter.
- **Energy systems.** Building-level demand-response policies trained on logged consumption data.
- **Agriculture.** Offline image+action logs from cultivation sensors; similar extrapolation concerns.

The thesis setting was sepsis; the method travels.

## Resources

- [Paper (arXiv:2503.16708)](https://arxiv.org/abs/2503.16708)
- [Code (`Annie983284450-1/NeuralLCB_C`)](https://github.com/Annie983284450-1/NeuralLCB_C)
