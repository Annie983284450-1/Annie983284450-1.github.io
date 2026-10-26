---
title: "Sepsyn-OLCP: Online Learning with Conformal Prediction for Early Sepsis Prediction"
subtitle: "Every AI expert's prediction comes with a conformal prediction interval, and a gap-based bandit uses those intervals to decide which expert to trust."
collection: portfolio
permalink: /portfolio/portfolio-sepsyn-olcp/
date: 2025-03-18
venue: "arXiv:2503.14663 (preprint, 2025)"
paperurl: "https://arxiv.org/abs/2503.14663"
codeurl: "https://github.com/Annie983284450-1/CPGapBandit"
featured: true
link: "https://github.com/Annie983284450-1/CPGapBandit"
hero_figure: "sepsyn-olcp-fig.png"
hero_figure_alt: "Sepsyn-OLCP system overview. AI clinicians A1 to AK are trained offline on training patient data. A prediction interval calculator adds intervals to their predictions, and an online selector acting as a trusted third party chooses among them for testing patients. The training dataset is updated when required."
hero_figure_caption: "System overview (Fig. 1 of the paper). AI clinicians are trained offline on training patients. A prediction interval calculator adds a conformal interval to each prediction, and an online selector, acting as a trusted third party, chooses among them for each testing patient."
citation: 'Zhou, A., Beyah, R., Kamaleswaran, R., Xie, Y. (2025). Sepsyn-OLCP: An Online Learning-based Framework for Early Sepsis Prediction with Uncertainty Quantification using Conformal Prediction. arXiv:2503.14663.'
---

## From a point prediction to an interval

[OnAI-Comp](/portfolio/portfolio-onai-comp/), the earlier project, picks one expert's prediction for each patient. A single number, though, does not say how far it can be trusted. Sepsyn-OLCP gives every expert's prediction a conformal prediction interval, and then uses those intervals to choose among the experts.

## How it works

- **AI experts.** A pool of machine-learning models, trained offline on the training patients.
- **Conformal intervals without retraining.** The intervals come from an ensemble method that uses leave-one-out residuals, so the experts do not need to be retrained as new patients arrive. (The algorithm keeps retraining as an option when the training data is updated.)
- **A gap-based online selector.** The selector is built on BayesGap, a gap-based bandit method. For each expert it compares that expert's lower bound with the highest upper bound among the other experts, and uses these gaps, together with the interval widths, to decide which expert to trust.

## Experiments

- **Data.** The 2019 PhysioNet/Computing in Cardiology Challenge dataset, with records of ICU patients from three hospitals. Training used 1,000 septic and 1,000 non-septic patients. Testing used 250 septic and 250 non-septic patients.
- **Experts.** A neural network, random forest, XGBoost, ridge regression, logistic regression and a decision tree. CatBoost also appears in some of the result tables.
- **Metrics.** AUROC, AUPRC, accuracy, F-measure and the PhysioNet utility score, plus regret for the selection policy.
- **Results.** In the paper's summary, AUROC across combinations of experts ranged from 0.6488 for the neural network alone to 0.7357 for the neural network, random forest, XGBoost, ridge regression and decision tree together (at α = 0.2). The average regret of the selection policy decreased and converged over time.

## Limitations noted in the paper

- Larger ensembles cost more computation.
- The significance level α is fixed, which limits how well the method adapts.
- The framework focuses on static contexts.

## What came next

The next project, [NeuroSep-CP-LCB](/portfolio/portfolio-neurosep-cp-lcb/), replaces the pool of experts with a neural network that models the reward directly, learned from offline data.

## Resources

- [Paper (arXiv:2503.14663)](https://arxiv.org/abs/2503.14663)
- [Code (`Annie983284450-1/CPGapBandit`)](https://github.com/Annie983284450-1/CPGapBandit)
