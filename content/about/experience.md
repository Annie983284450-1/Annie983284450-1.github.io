---
# An instance of the Experience widget.
# Documentation: https://docs.hugoblox.com/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: Experience
subtitle:

# Date format for experience
#   Refer to https://docs.hugoblox.com/customization/#date-format
date_format: Mar 2025

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: Research Intern
    company: North Carolina State University
    company_url: 'https://nicelab.us/NICE-LAB/'
    # company_logo: org-gc
    # location: California
    date_start: '2024-12-20'
    date_end: ''
    description: |2-
        Responsibilities include:
       * Developing a novel classification-assisted prediction model integrating physical information like irrigation data, achieving superior performance in image-based plant growth prediction.
         * Introducing a new Pixel-of-Interest (POI) evaluation metric to assess model accuracy from a physical perspective, enhancing decision-making in agricultural research.
         * Conducting experiments using large datasets, employing advanced machine learning frameworks (e.g., \textbf{ConvLSTM, PredRNN}) for robust plant growth analysis and prediction.

  - title: Graduate Teaching and Research Assistant
    company: Georgia Institute of Technology
    company_url: ''
    # company_logo: org-x
    location: Atlanta
    date_start: '2018-08-31'
    date_end: '2025-01-10'
    description: TA of Cyber-Physical System Security and researched Machine Learning, Reinforcement Learning, Deep Learning and Conformal Prediction.

design:
  columns: '1'
---
