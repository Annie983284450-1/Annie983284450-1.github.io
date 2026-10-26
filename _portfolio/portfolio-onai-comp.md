---
title: "OnAI-Comp: Online AI Experts Competing for Early Sepsis Detection"
subtitle: "A multi-armed bandit learns, as new ICU patients arrive, which pre-trained model's sepsis prediction to trust, without retraining any of the models."
collection: portfolio
permalink: /portfolio/portfolio-onai-comp/
date: 2022-11-01
venue: "IEEE/ACM Transactions on Computational Biology and Bioinformatics, 19(6), 2022"
paperurl: "https://doi.org/10.1109/TCBB.2021.3122405"
codeurl: "https://github.com/Annie983284450-1/OnAI-Comp"
featured: true
link: "https://github.com/Annie983284450-1/OnAI-Comp"
hero_figure: "onai-comp-fig.png"
hero_figure_alt: "OnAI-Comp system infrastructure. An online selection module, acting as a trusted third party, receives new patients and gets predictions from an offline module of pre-trained AI experts built from old patients. Utility scores go from the selection module to the experts module."
hero_figure_caption: "System infrastructure (Fig. 1 of the paper). The online selection module acts as a trusted third party. It sends each new patient to the pool of pre-trained AI experts and uses their utility scores to decide whose prediction to share."
citation: 'Zhou, A., Beyah, R., Kamaleswaran, R. (2022). OnAI-Comp: An online AI experts competing framework for early sepsis detection. IEEE/ACM Transactions on Computational Biology and Bioinformatics, 19(6), 3595–3603. https://doi.org/10.1109/TCBB.2021.3122405'
---

## The problem

Most sepsis-prediction models are trained once, offline, on retrospective data. In a real hospital the data keeps growing as new patients arrive. Using that new data to improve an offline model means retraining it, which is computationally expensive. OnAI-Comp makes use of the new data without retraining any model.

## How it works

- **AI experts.** Several machine-learning models are trained offline on the same training data. Each one predicts a patient's risk of developing sepsis.
- **A trusted third party.** For each new patient, a trusted third party (for example, a hospital) collects every expert's prediction and decides which one to share with clinicians.
- **A multi-armed bandit.** Each expert is one arm of a stochastic multi-armed bandit. The selector uses the Upper Confidence Bound (UCB) rule. It favors experts with a high average utility score so far, plus a bonus for experts it has chosen less often, which balances exploitation and exploration.
- **Reward.** Once the outcome is known, each expert receives a utility score computed with the PhysioNet 2019 Challenge utility function, and the bandit's estimates are updated before the next patient arrives.

The paper derives an upper bound on the expected average regret (Lemma 1 and Theorem 1).

## Results

- **Data.** The 2019 PhysioNet/Computing in Cardiology Challenge dataset: 40,336 patient records with more than 40 hourly features, from ICU patients in three hospital systems.
- **Experts.** XGBoost, a support vector machine, random forest and logistic regression, plus a random-guess dummy expert for comparison.
- **Convergence.** Average regret converged within the first 500 rounds for every combination of experts tested.
- **Against an offline model.** In an online comparison, OnAI-Comp outperformed the best standalone offline expert (XGBoost).

## Interpretability

Each expert can explain its own predictions. The paper demonstrates this with LIME on the random forest, showing how each feature pushed the prediction toward septic or non-septic across a patient's ICU stay.

## Limitations noted in the paper

- The experts are traditional machine-learning models. Recurrent models such as LSTMs are left for future work.
- Like most bandits, OnAI-Comp has a cold-start period, so early predictions are less reliable. The paper suggests withholding early outputs until the selector has converged.

## What came next

- [Sepsyn-OLCP](/portfolio/portfolio-sepsyn-olcp/) gives each expert's prediction a conformal prediction interval, and uses a gap-based bandit to choose among the experts.
- [NeuroSep-CP-LCB](/portfolio/portfolio-neurosep-cp-lcb/) replaces the pool of experts with a neural network that models the reward directly, learned from offline data.

## Resources

- [Paper (DOI 10.1109/TCBB.2021.3122405)](https://doi.org/10.1109/TCBB.2021.3122405)
- [Free full text (PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10975783/)
- [Code (`Annie983284450-1/OnAI-Comp`)](https://github.com/Annie983284450-1/OnAI-Comp)
