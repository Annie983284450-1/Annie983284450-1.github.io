---
title: "CAMP — Multi-task Spatio-temporal Modeling for Plant Growth Prediction"
subtitle: "Forecast what a plant will look like over the next five frames, classify whether it is under drought, and score the forecast only on the pixels that are actually plant."
collection: portfolio
permalink: /portfolio/portfolio-camp/
date: 2026-06-15
venue: "Smart Agricultural Technology 14 (2026) 102318"
paperurl: "https://doi.org/10.1016/j.atech.2026.102318"
codeurl: "https://github.com/ARLabXiang/CAMP-Plant"
featured: true
link: "https://github.com/ARLabXiang/CAMP-Plant"
hero_figure: "camp-system-overview.png"
hero_figure_alt: "CAMP framework overview. A sequence of plant images is encoded by stacked PredRNN cells with temporal and depth memory flow. Shared features feed two branches: a frame prediction branch that outputs future frames, and a label prediction branch that classifies drought vs. control. Outputs are compared with ground truth using MAE, MSE and SSIM."
hero_figure_caption: "System overview (Fig. 1 of the paper). Stacked PredRNN cells encode the input frames. The shared features split into a frame-prediction branch, which forecasts future growth, and a label-prediction branch, which classifies drought vs. control."
citation: 'Zhou, A., Wang, K., Liu, Y., Xu, D., Xiang, L. (2026). Multi-task spatio-temporal modeling: Towards accurate and robust plant growth prediction in the real world. Smart Agricultural Technology, 14, 102318. https://doi.org/10.1016/j.atech.2026.102318'
---

## The problem

Breeders and growers want to know how a plant will grow before it grows. Image-level forecasting is attractive because the output is something a person can look at and check. But the usual video-prediction metrics (MAE, SSIM, PSNR) average over the whole frame. A model can score well by getting the soil and the pot right while drawing a plant that never existed.

CAMP (Classification-assisted Multi-task Prediction) tackles both halves: a better forecaster, and a better way to grade it.

## What CAMP adds

CAMP is built on a **PredRNN** backbone, whose spatio-temporal memory flows across both time steps and network depth. On top of the usual frame-reconstruction loss, it adds two auxiliary terms:

- **An ExGI regression loss.** ExGI, the Excess Green Index (`2g − r − b`), highlights leaf pixels. CAMP compares the greenness maps of predicted and true frames, which pushes the model to get the plant itself right.
- **A drought-vs-control classifier.** A small head on the shared encoder predicts the irrigation condition. Growth under drought looks different from normal growth, so the label gives the encoder useful context.

The total loss is `L_MSE + 0.1 · L_ExGI + 1.0 · L_BCE`. Two variants are recommended: **CAMP_no_cls** (ExGI loss only) for the best frame prediction, and **CAMP_full** (both terms) when you also want the drought label.

## POI-MAE: grading only the plant

<figure>
  <img src="/images/research/camp-poi-pipeline.png" alt="POI pipeline: RGB frames are converted to ExGI maps, thresholded into plant-pixel masks, and compared frame to frame to find new and missing pixels. Counting plant pixels per frame gives a growth curve that is compared with ground truth." loading="lazy">
  <figcaption>The POI pipeline (Fig. 3 of the paper). Each frame becomes an ExGI map, then a plant-pixel mask. Counting mask pixels gives a growth curve. Comparing consecutive masks separates new pixels (growth) from missing pixels (shrinkage or error).</figcaption>
</figure>

Each frame is turned into a mask of plant pixels ("pixels of interest") by thresholding its ExGI map at `τ = 0.10`. The number of plant pixels per frame is a proxy for plant size, so a sequence of frames gives a growth curve. **POI-MAE** is the mean absolute gap between the predicted and true growth curves. Splitting the change between frames into new and missing pixels shows *how* a forecast goes wrong, not just how much.

POI-MAE complements the pixel metrics rather than replacing them. On both datasets the two views rank methods differently, and that disagreement is exactly the failure mode the metric is designed to expose.

## Results

The study benchmarks six baselines (ConvLSTM, PredRNN, PhyDNet, MIM, SimVP, TAU) against a family of CAMP variants, each switching the auxiliary terms on or off. Everything was trained for the same 150 epochs, with 95% bootstrap confidence intervals (B = 5000).

- **Komatsuna.** Adding the ExGI loss to the PredRNN backbone cuts POI-MAE from 638.2 to 292.5 (CAMP_full), a 2.18× reduction. That is statistically indistinguishable from the best method on the board (MIM, 270.1).
- **Arabidopsis.** CAMP_full reaches **0.79** drought-vs-control accuracy (majority baseline: 57.7%) while staying competitive on POI-MAE (388). Among the variants that also classify, it sits at the top of the prediction-vs-classification trade-off.

## Where the recipe works, and where it doesn't

<figure>
  <img src="/images/research/camp-cross-backbone.png" alt="Cross-backbone matrix of POI-MAE on Arabidopsis. Recurrent backbones (PredRNN, MIM) change by only -2% to +10% when the ExGI and classification terms are added. Feed-forward backbones (SimVP, TAU) get 80% to 159% worse." loading="lazy">
  <figcaption>Cross-backbone study on Arabidopsis (Fig. 14 of the paper). Recurrent backbones stay roughly neutral under the auxiliary recipe. Feed-forward backbones degrade by 80% to 159% when classification is trained jointly.</figcaption>
</figure>

The same heads and losses were attached to two feed-forward backbones (SimVP, TAU) and one more recurrent one (MIM). The recurrent backbones stayed roughly neutral. The feed-forward ones got much worse once classification was trained jointly. Detaching the classifier's gradient recovered the baseline, which isolates the encoder-gradient pathway as the cause. In short, **the CAMP recipe is recurrent-specific**, and the paper says where not to deploy it.

The paper is also explicit about scope. Both datasets come from controlled phenotyping cabinets (fixed lighting, top-down camera, one plant per image). Zero-shot transfer between the two datasets hurts every method, and field conditions are the natural next step.

## Data and setup

- **KOMATSUNA**, a public RGB-D multi-view dataset of Komatsuna plants.
- **Arabidopsis** time series from the Robotic Assay for Drought (RoAD) phenotyping system, with control and drought groups, cropped to 128 × 128.
- Plant-level train/test splits, so no plant appears in both. PyTorch on an NVIDIA A5000.

## Resources

- [Paper (Smart Agricultural Technology, open access)](https://doi.org/10.1016/j.atech.2026.102318)
- [Code (`ARLabXiang/CAMP-Plant`)](https://github.com/ARLabXiang/CAMP-Plant)
