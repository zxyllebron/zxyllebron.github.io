window.INTERNSHIP_MEDIA = {
  "policy-inference": [
    {
      "src": "assets/projects/anyverse/policy-console.webp",
      "thumb": "assets/projects/anyverse/policy-console-thumb.webp",
      "caption": "Policy-inference console with the camera view, model selection and backend controls. This is a recorded interface view, not a claim of a completed closed-loop task.",
      "kind": "Original SDK interface screenshot",
      "width": 2200,
      "height": 1375
    },
    {
      "src": "assets/projects/anyverse/policy-benchmark.webp",
      "thumb": "assets/projects/anyverse/policy-benchmark-thumb.webp",
      "caption": "Matched fixed-input benchmark: median prepared-call latency and peak PyTorch-allocated memory, using 200 timed calls after 10 warm-ups per configuration.",
      "kind": "Figure from recorded benchmark summaries",
      "width": 1980,
      "height": 792
    },
    {
      "src": "assets/projects/anyverse/precision-tradeoff.webp",
      "thumb": "assets/projects/anyverse/precision-tradeoff-thumb.webp",
      "caption": "Separate held-input precision comparison: per-input latency versus action deviation from static BF16. Its timing scope differs from the prepared-call benchmark.",
      "kind": "Original mixed-precision experiment figure",
      "width": 2160,
      "height": 983
    }
  ],
  "observation-alignment": [
    {
      "src": "assets/projects/anyverse/capture-console.webp",
      "thumb": "assets/projects/anyverse/capture-console-thumb.webp",
      "caption": "Data-capture task setup showing camera selection, joint-state streams and behaviour-source choices.",
      "kind": "Original SDK interface screenshot",
      "width": 2200,
      "height": 1375
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
    }
  ]
};
