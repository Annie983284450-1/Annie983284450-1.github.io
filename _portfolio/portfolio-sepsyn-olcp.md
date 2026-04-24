---
title: "Sepsyn-OLCP — Gap-Based Online Learning with Conformal Prediction"
subtitle: "Every prediction about the next ICU patient ships with a distribution-free confidence interval. The selector ranks experts by predicted gap, not by point accuracy."
collection: portfolio
permalink: /portfolio/portfolio-sepsyn-olcp/
date: 2025-03-18
step: "Step 02 / 2025"
venue: "arXiv:2503.14663"
paperurl: "https://arxiv.org/abs/2503.14663"
codeurl: "https://github.com/Annie983284450-1/CPGapBandit"
featured: true
link: "https://github.com/Annie983284450-1/CPGapBandit"
hero_figure: "sepsyn-olcp-fig.png"
hero_figure_alt: "Sepsyn-OLCP system overview. Training patient data flows through AI Clinicians (experts A₁…A_K) via offline training; a Prediction Interval Calculator produces calibrated intervals; an Online Selector (Third Trusted Party) routes testing patient data to the most reliable expert, with updates flowing back to refresh the training set."
hero_figure_caption: "System overview. The training-time pool of AI clinicians is wrapped in a split-conformal prediction-interval calculator. An online selector — the trusted third party — routes each test patient to the most reliable expert, and the training dataset updates when required."
citation: 'Zhou, A., Beyah, R., Xie, Y., Kamaleswaran, R. (2025). Sepsyn-OLCP: An Online Learning-based Framework for Early Sepsis Prediction with Uncertainty Quantification using Conformal Prediction. arXiv:2503.14663.'
---

## From point prediction to calibrated interval

[OnAI-Comp](/portfolio/portfolio-onai-comp/) — **Step 01** of this arc — selects among a pool of experts using average-regret scoring. What it doesn't do is tell the clinician *how much to trust the prediction*. In the ICU, a point estimate of sepsis risk without a calibrated interval is not safe to act on.

**Sepsyn-OLCP** (Online Learning with Conformal Prediction) addresses exactly that.

## Two contributions in one pipeline

### 1. Split conformal prediction, wrapped around any online learner

Every expert in the pool — `{A₁, …, A_K}` — is paired with a **Prediction Interval Calculator** that applies **split conformal prediction**. The training cohort is partitioned: most of it trains the expert, a held-out calibration fold estimates the distribution of non-conformity scores. At prediction time, the calculator emits an interval `[ŷ − q̂, ŷ + q̂]` around each expert's point prediction, where `q̂` is the calibration quantile.

Under exchangeability, split CP gives **distribution-free marginal coverage** — if the user asks for 90%, the interval contains the ground truth ≥ 90% of the time, regardless of which expert generated it.

### 2. Gap-based selection, not accuracy-based

The online selector now ranks experts not by raw point-prediction error but by the **gap** between their prediction and their calibrated interval bound. Gap-based selection is more robust to *single-expert miscalibration* — an expert that is confidently wrong degrades gracefully rather than dominating the selector's decisions.

Under mild assumptions the gap-based online learner retains **sublinear regret** relative to the best expert in hindsight.

## Experimental setup

- **Data.** ICU time-series preprocessing pipeline adjacent to MIMIC-IV, with 27,000+ hours of patient records used in companion experiments.
- **Experts.** A heterogeneous pool including XGBoost, random forest, logistic regression, and an LSTM baseline.
- **Metrics.** Coverage, sharpness (interval width), and the usual sepsis-prediction classification scores (AUROC, AUPRC, F1).

The framework delivers calibrated coverage across the patient cohort while maintaining competitive classification performance against a single best expert — demonstrating that interval validity does not come at a performance cost.

## Design principles worth calling out

- **Assumption light.** Marginal coverage holds under exchangeability, not the stronger i.i.d. assumption common in the calibration literature.
- **Graceful degradation.** Gap-based selection lets the algorithm survive single-expert miscalibration without the whole selector collapsing.
- **Composable.** The split-CP wrapper can ride on top of *any* online learner. The pipeline is agnostic about the expert internals.

## Looking ahead

**Step 03** of the arc — [NeuroSep-CP-LCB](/portfolio/portfolio-neurosep-cp-lcb/) — replaces the heterogeneous expert pool with a neural network that directly models the patient-specific reward function. Same conformal machinery, more expressive reward family.

## Resources

- [Paper (arXiv:2503.14663)](https://arxiv.org/abs/2503.14663)
- [Code (`Annie983284450-1/CPGapBandit`)](https://github.com/Annie983284450-1/CPGapBandit)
