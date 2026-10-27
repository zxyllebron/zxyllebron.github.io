window.INTERNSHIP_MEDIA = {
  "policy-inference": [
    {
      "src": "assets/projects/anyverse/policy-benchmark.webp",
      "thumb": "assets/projects/anyverse/policy-benchmark-thumb.webp",
      "caption": "Matched fixed-input benchmark: median prepared-call latency and peak PyTorch-allocated memory, using 200 timed calls after 10 warm-ups per configuration.",
      "kind": "Figure from recorded benchmark summaries",
      "width": 1980,
      "height": 792
    },
    {
      "src": "assets/projects/anyverse/backend-selection.webp",
      "thumb": "assets/projects/anyverse/backend-selection-thumb.webp",
      "caption": "Backend selection on matched stored inputs: prepared-call latency, nominal flange discrepancies across inputs and peak PyTorch memory counters.",
      "kind": "Original backend-comparison experiment figure",
      "width": 2200,
      "height": 752
    },
    {
      "src": "assets/projects/anyverse/precision-tradeoff.webp",
      "thumb": "assets/projects/anyverse/precision-tradeoff-thumb.webp",
      "caption": "Separate held-input precision comparison: per-input latency versus action deviation from static BF16. Its timing scope differs from the prepared-call benchmark.",
      "kind": "Original mixed-precision experiment figure",
      "width": 2160,
      "height": 983
    },
    {
      "src": "assets/projects/anyverse/native-action-replay.webp",
      "thumb": "assets/projects/anyverse/native-action-replay-thumb.webp",
      "caption": "Earlier 32-input native-action replay comparing nominal flange discrepancies, aggregate action similarity and allocator counters. This comparison uses a different reference from the later graph/static-update benchmark.",
      "kind": "Original native-action replay figure",
      "width": 1854,
      "height": 585
    },
    {
      "src": "assets/projects/anyverse/held-input-comparison.webp",
      "thumb": "assets/projects/anyverse/held-input-comparison-thumb.webp",
      "caption": "Separate 115-input H60 comparison of static BF16 and dynamic FP8 output agreement and per-input latency. These measurements are not pooled with the 200-call optimisation benchmark.",
      "kind": "Original held-input precision experiment figure",
      "width": 2200,
      "height": 675
    },
    {
      "src": "assets/projects/anyverse/policy-console.webp",
      "thumb": "assets/projects/anyverse/policy-console-thumb.webp",
      "caption": "Policy-inference console with the camera view, model selection and backend controls. This is a recorded interface view, not a claim of a completed closed-loop task.",
      "kind": "Original SDK interface screenshot",
      "width": 2200,
      "height": 1375
    }
  ],
  "observation-alignment": [
    {
      "src": "assets/projects/anyverse/camera-update-age.webp",
      "thumb": "assets/projects/anyverse/camera-update-age-thumb.webp",
      "caption": "Camera acquisition timing: exposure, measured host-read completion and downstream use are distinct time points. The measured update-age trace includes a long gap relative to a 50 ms budget.",
      "kind": "Original acquisition-boundary and timing figure",
      "width": 1139,
      "height": 763
    },
    {
      "src": "assets/projects/anyverse/image-joint-pairing.webp",
      "thumb": "assets/projects/anyverse/image-joint-pairing-thumb.webp",
      "caption": "Measured recording-time separations, nearest-Header versus latest-recorded pairing, and the resulting joint-state differences across three recording sessions.",
      "kind": "Original image–joint experiment figure",
      "width": 1620,
      "height": 1950
    },
    {
      "src": "assets/projects/anyverse/pairing-budgets.webp",
      "thumb": "assets/projects/anyverse/pairing-budgets-thumb.webp",
      "caption": "Pairing mismatch-budget exceedance and joint-configuration differences. The axes describe declared timestamps and reported joint states, not exposure synchronisation accuracy.",
      "kind": "Original image–joint experiment figure",
      "width": 1362,
      "height": 614
    },
    {
      "src": "assets/projects/anyverse/camera-cadence.webp",
      "thumb": "assets/projects/anyverse/camera-cadence-thumb.webp",
      "caption": "Camera update rate versus mean host update age, with the fraction of time above a 50 ms age budget. Markers represent measured runs; the constant-gap curve is an analytic reference.",
      "kind": "Original update-rate and observation-age figure",
      "width": 1349,
      "height": 560
    },
    {
      "src": "assets/projects/anyverse/camera-interval-tails.webp",
      "thumb": "assets/projects/anyverse/camera-interval-tails-thumb.webp",
      "caption": "Measured camera-update interval tails and the different event-count and time-residence denominators used to evaluate a 50 ms timing budget.",
      "kind": "Original camera endurance experiment figure",
      "width": 1671,
      "height": 1081
    },
    {
      "src": "assets/projects/anyverse/camera-temporal-variation.webp",
      "thumb": "assets/projects/anyverse/camera-temporal-variation-thumb.webp",
      "caption": "Hourly variation in time above a 50 ms host update-age budget for recorded camera streams. Blank regions are outside the observed record.",
      "kind": "Original camera timing heatmap",
      "width": 1628,
      "height": 865
    },
    {
      "src": "assets/projects/anyverse/camera-save-association.webp",
      "thumb": "assets/projects/anyverse/camera-save-association-thumb.webp",
      "caption": "Within-stream timing association and retained-save neighbourhoods from the camera experiment. The comparison describes association in the measured records, not a causal saving penalty.",
      "kind": "Original camera saving and timing analysis",
      "width": 2190,
      "height": 1080
    },
    {
      "src": "assets/projects/anyverse/capture-console.webp",
      "thumb": "assets/projects/anyverse/capture-console-thumb.webp",
      "caption": "Data-capture task setup showing camera selection, joint-state streams and behaviour-source choices.",
      "kind": "Original SDK interface screenshot",
      "width": 2200,
      "height": 1375
    }
  ],
  "deployment": [
    {
      "src": "assets/projects/anyverse/arm-paths.webp",
      "thumb": "assets/projects/anyverse/arm-paths-thumb.webp",
      "caption": "Five finite paths reconstructed from real encoder feedback with SDK forward kinematics. These are nominal FK paths; external end-effector metrology was not performed.",
      "kind": "Original real-feedback path reconstruction",
      "width": 1920,
      "height": 800
    },
    {
      "src": "assets/projects/anyverse/arm-joint-tracking.webp",
      "thumb": "assets/projects/anyverse/arm-joint-tracking-thumb.webp",
      "caption": "Peak joint-tracking error in the five finite path tests, calculated from the preserved acceptance summary. The largest value is approximately 0.1183°.",
      "kind": "Figure from recorded finite hardware tests",
      "width": 1620,
      "height": 774
    },
    {
      "src": "assets/projects/anyverse/arm-feedback.webp",
      "thumb": "assets/projects/anyverse/arm-feedback-thumb.webp",
      "caption": "Representative measured joint-position and velocity traces from an existing robot-motion record.",
      "kind": "Original real-robot feedback figure",
      "width": 2200,
      "height": 1156
    },
    {
      "src": "assets/projects/anyverse/arm-drive-feedback.webp",
      "thumb": "assets/projects/anyverse/arm-drive-feedback-thumb.webp",
      "caption": "Real drive-current traces in raw permille and temperature words from five available channels. The temperature values shown are raw counts, not calibrated degrees Celsius.",
      "kind": "Original real-drive feedback figure",
      "width": 1824,
      "height": 1102
    },
    {
      "src": "assets/projects/anyverse/arm-sampling-timing.webp",
      "thumb": "assets/projects/anyverse/arm-sampling-timing-thumb.webp",
      "caption": "Adjacent timestamps and interval deviations in a preserved robot record. This plot characterises the recorded sampling intervals, not an externally measured actuator response.",
      "kind": "Original robot-record timing figure",
      "width": 2200,
      "height": 721
    },
    {
      "src": "assets/projects/anyverse/arm-hold-monitor.webp",
      "thumb": "assets/projects/anyverse/arm-hold-monitor-thumb.webp",
      "caption": "An approximately ten-minute hold-mode monitoring window showing cumulative counters and reported feedback age. This is a monitoring observation, not continuous-motion acceptance.",
      "kind": "Original hold-mode monitoring figure",
      "width": 2200,
      "height": 612
    }
  ]
};
