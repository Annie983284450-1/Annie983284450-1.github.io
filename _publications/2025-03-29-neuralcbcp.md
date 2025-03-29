---
title: "NeuroSep-CP-LCB: A Deep Learning-based Contextual Multi-armed Bandit Algorithm with Uncertainty Quantification for Early Sepsis Prediction"
collection: publications
# uncomment below if you want to categorize the publications
# also uncomment the category in _config.yml 
# category:  
permalink: /publication/2025-03-29-neuralcbcp
excerpt: 'A novel integration of neural networks with contextual bandits and conformal prediction tailored for early sepsis detection. '
date: 2025-03-20
venue: 'arXiv'
# slidesurl: ''
paperurl: 'https://arxiv.org/abs/2503.16708'
# citation: 'Zhou, Anni, Beyah Raheem, Rishikesan Kamaleswaran, and Yao Xie. "Sepsyn-OLCP: An Online Learning-based Framework for Early Sepsis Prediction with Uncertainty Quantification using Conformal Prediction." arXiv preprint arXiv:2503.14663 (2025). https://doi.org/10.48550/arXiv.2503.14663.'
---

In critical care settings, timely and accurate predictions can significantly impact patient outcomes, especially for conditions like sepsis, where early intervention is crucial. We aim to model patient-specific reward functions in a contextual multi-armed bandit setting. The goal is to leverage patient-specific clinical features to optimize decision-making under uncertainty. This paper proposes NeuroSep-CP-LCB, a novel integration of neural networks with contextual bandits and conformal prediction tailored for early sepsis detection. Unlike the algorithm pool selection problem in the previous paper, where the primary focus was identifying the most suitable pre-trained model for prediction tasks, this work directly models the reward function using a neural network, allowing for personalized and adaptive decision-making. Combining the representational power of neural networks with the robustness of conformal prediction intervals, this framework explicitly accounts for uncertainty in offline data distributions and provides actionable confidence bounds on predictions.