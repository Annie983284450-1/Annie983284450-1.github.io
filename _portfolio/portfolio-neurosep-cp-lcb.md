---
title: "NeuroSep-CP-LCB: Neural Contextual Bandits with Conformal Prediction for Early Sepsis Prediction"
subtitle: "A neural network models a patient-specific reward from offline data. A lower confidence bound chooses the action, and conformal intervals report the uncertainty."
collection: portfolio
permalink: /portfolio/portfolio-neurosep-cp-lcb/
date: 2025-03-20
venue: "arXiv:2503.16708 (preprint, 2025)"
paperurl: "https://arxiv.org/abs/2503.16708"
codeurl: "https://github.com/Annie983284450-1/NeuralLCB_C"
featured: true
link: "https://github.com/Annie983284450-1/NeuralLCB_C"
hero_figure: "neurosep-fig.png"
hero_figure_alt: "NeuroSep-CP-LCB system overview. Training patient data feeds a neural network-based reward approximator. A prediction interval calculator adds intervals to its outputs, and testing patient data is passed through the approximator."
hero_figure_caption: "System overview (Fig. 1 of the paper). A neural-network reward approximator is trained on offline patient data. A prediction interval calculator adds conformal intervals to its outputs for testing patients."
citation: 'Zhou, A., Beyah, R., Kamaleswaran, R. (2025). NeuroSep-CP-LCB: A Deep Learning-based Contextual Multi-armed Bandit Algorithm with Uncertainty Quantification for Early Sepsis Prediction. arXiv:2503.16708.'
---

## Where this project fits

[OnAI-Comp](/portfolio/portfolio-onai-comp/) and [Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/) choose among a pool of pre-trained models. NeuroSep-CP-LCB takes a different route: it models the reward function directly with a neural network, so that decisions can depend on each patient's own clinical features.

## How it works

- **An offline contextual bandit.** The policy is learned only from an offline dataset. There are two actions: predict non-septic (class 0) or septic (class 1).
- **A neural reward model.** A fully connected neural network (layer width 100 in all experiments) approximates the unknown reward function from the patient's features.
- **A lower-confidence-bound choice.** The action is chosen by maximizing a lower confidence bound (LCB) on the predicted reward.
- **Conformal intervals.** Ensemble-based conformal prediction intervals quantify the uncertainty of each prediction.

The code is implemented in JAX.

## Experiments

- **Data.** Windows of ICU patient records. The balanced training set has up to 1,687 septic and 1,687 non-septic patient windows. The test set has 250 septic and 3,000 non-septic patient windows.
- **Compared variants.** NeuroSep-CP-LCB and a linear version, NeuroSep-CP-LinLCB.
- **Metrics.** Regret (expected sub-optimality), mean coverage of the conformal intervals, and average interval width.

## Limitations noted in the paper

- The method relies on offline data collected by a behavior policy.
- Future work includes temporal models such as recurrent networks or transformers, and validation on multicenter datasets.

## Resources

- [Paper (arXiv:2503.16708)](https://arxiv.org/abs/2503.16708)
- [Code (`Annie983284450-1/NeuralLCB_C`)](https://github.com/Annie983284450-1/NeuralLCB_C)
