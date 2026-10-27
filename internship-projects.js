'use strict';

window.INTERNSHIP_PROJECTS = {
  projects: [
    {
      id: 'policy-inference',
      name: 'Robot policy inference optimisation',
      org: 'Anyverse Technology',
      date: 'AUG 2026 — PRESENT',
      context: 'Software Engineer Intern · Embodied AI',
      summary: 'I optimised robot-policy inference across PyTorch and TensorRT backends, evaluating execution speed together with action fidelity, nominal robot-pose differences and GPU memory use.',
      contribution: 'Inference-backend integration, graph-based execution, controlled benchmarking and numerical evaluation.',
      detail: 'Making a learned robot policy faster while retaining a clear account of what changes in its outputs.',
      steps: ['Python · PyTorch', 'TensorRT', 'CUDA graphs', 'Numerical evaluation'],
      links: [['r02', 'Related manuscript']],
      metrics: [
        {value: '31.40%', label: 'lower median call latency'},
        {value: '4 cameras', label: '26-dimensional action output'},
        {value: '200', label: 'timed calls per configuration'}
      ],
      caseStudy: [
        {
          heading: 'Project context',
          paragraphs: ['A visual robot policy has to turn camera and robot-state inputs into actions within a practical compute budget. Faster execution is useful only if the resulting actions remain interpretable. My project connected inference engineering with an explicit evaluation of latency, output differences and resource costs, rather than selecting a backend from timing alone. The fixed-input optimisation experiment used four camera inputs and a 26-dimensional action output on NVIDIA Thor.']
        },
        {
          heading: 'My contributions',
          bullets: [
            'I integrated and compared PyTorch and TensorRT inference paths, including split execution and a configuration combining CUDA graph execution with a static denoising update. I worked through backend loading, execution configuration and the conversion of model results back into the robot action representation.',
            'I built a controlled comparison around the same stored inputs and noise reference. I separated warm-up from timed calls, tracked model and prepared-call measurements, and kept configuration-specific results so that changes in execution scope were visible.',
            'I evaluated native action-output differences alongside latency. I also propagated joint-output differences through nominal arm kinematics to inspect their spatial consequence, and compared peak PyTorch-allocated GPU memory to expose the resource cost of acceleration.',
            'I organised the evaluation outputs and configuration records into reproducible comparisons. This made it possible to explain why a faster candidate should still be assessed for numerical and geometric differences before closed-loop use.'
          ]
        },
        {
          heading: 'Results',
          paragraphs: ['In the matched fixed-input benchmark, median prepared-call latency decreased from 255.51 ms for the PyTorch reference to 175.27 ms for the TensorRT split / graph / static-update configuration, a 31.40% reduction. Each configuration recorded 200 timed calls after 10 warm-up calls. Peak PyTorch-allocated memory was 8.71 GiB and 8.85 GiB respectively, showing that the latency gain came with a small increase in this memory counter.', 'The accompanying 32-input output comparison retained a native action MAE of approximately 0.000414 for this accelerated candidate. The largest nominal left-flange position difference was 5.314 mm. Reporting that difference alongside the timing gain made the speed–fidelity trade-off concrete.']
        },
        {
          heading: 'What the measurements establish',
          paragraphs: ['These results describe fixed-input offline inference. Prepared-call timing includes the recorded call and result-transfer scope; it is not a camera-to-actuator deadline. The kinematic differences are computed with a nominal robot model, and the memory figure is a PyTorch allocator counter. My results establish the measured execution trade-off for these configurations; physical positioning accuracy and closed-loop task success require separate robot experiments.']
        }
      ]
    },
    {
      id: 'observation-alignment',
      name: 'Visual–proprioceptive observation alignment',
      org: 'Anyverse Technology',
      date: 'AUG 2026 — PRESENT',
      context: 'Software Engineer Intern · Embodied AI',
      summary: 'I designed camera-sampling and image–joint recording experiments to determine which robot state belongs with an image, and to quantify observation timing beyond average frame rate.',
      contribution: 'Experiment design, multi-camera recording, timestamp-pairing analysis and observation-quality evaluation.',
      detail: 'Constructing traceable visual and joint-state observations for robot-learning and manipulation workflows.',
      steps: ['Multi-camera acquisition', 'Joint-state recording', 'Python · NumPy', 'Temporal analysis'],
      links: [['r09', 'Related data-semantics manuscript']],
      metrics: [
        {value: '49 runs', label: '673.10 camera-stream hours'},
        {value: '78,825', label: 'eligible image–joint pairs'},
        {value: '2.43–2.59 ms', label: 'per-recording median Header mismatch'}
      ],
      caseStudy: [
        {
          heading: 'Project context',
          paragraphs: ['Robot-learning observations often combine an image with a vector of joint positions. Those values need a documented temporal relationship: a regular camera rate does not guarantee fresh observations, and the latest joint message is not necessarily the state closest to the image timestamp. I investigated this interface through continuous camera sampling and supervised image–joint recording, with head, body and wrist camera views.']
        },
        {
          heading: 'My contributions',
          bullets: [
            'I designed and implemented continuous camera-sampling experiments, recording host-side timing information and comparing update cadence, update age and interval-budget exceedance. I retained run-level results so that long gaps remained visible instead of disappearing inside an average frame rate.',
            'I collected and analysed image, CameraInfo and joint-state messages during supervised pose collection. I distinguished declared Header time from recording time, checked common temporal support and handled boundary cases before forming image–state pairs.',
            'I implemented and compared timestamp-nearest, latest-recorded and available preceding-state pairing rules. I examined both timestamp differences and the joint configurations selected by those rules, connecting a data-processing decision to the actual contents of a robot observation.',
            'I independently checked the pairing implementation with a NumPy searchsorted calculation and an explicit tie-breaking rule. I organised the analysis by recording and session, treating frames as observations within recordings rather than independent robot experiments.'
          ]
        },
        {
          heading: 'Results',
          paragraphs: ['The endurance experiment covered 49 runs and 673.10 camera-stream hours. I analysed 24 image–joint recordings; common support and preceding-state eligibility retained 78,825 image pairs after excluding 38 boundary cases. The independent implementation reproduced both nearest and latest pairing selections with zero mismatches.', 'Timestamp-nearest pairing produced per-recording median absolute Header differences of 2.43–2.59 ms. Across the principal sessions, no nearest pair exceeded a 10 ms Header-mismatch budget. Latest-recorded pairing selected substantially different declared times in some sessions, with median signed differences of about 181–187 ms in one session. The analysis also showed that these choices could select different joint configurations for the same image.']
        },
        {
          heading: 'Why this matters for robot learning',
          paragraphs: ['My contribution is a measured basis for specifying what the proprioceptive vector accompanying an image means. The work helps make collection, pairing and downstream interpretation consistent. Header agreement and offline pairing discrepancy do not measure optical exposure synchronisation, actuator response or policy success, and nearest-time pairing is not a universal substitute for a causally available online state estimate.']
        }
      ]
    },
    {
      id: 'deployment',
      name: '7-DoF arm control & taught-waypoint execution',
      org: 'Anyverse Technology',
      date: 'AUG 2026 — PRESENT',
      context: 'Software Engineer Intern · Embodied AI',
      summary: 'I developed C++ motion-control and trajectory interfaces for an in-house 7-DoF arm, connecting kinematics, standard Cartesian paths, taught-waypoint execution and measured robot feedback.',
      contribution: 'FK/IK, trajectory execution, taught-point storage, control SDK interfaces and finite real-robot validation.',
      detail: 'Building the execution and feedback layer that connects planned robot behaviour to real hardware.',
      steps: ['C++ · Python', 'FK / IK', 'Trajectory planning', 'Robot feedback'],
      links: [['r05', 'Related feedback-monitoring manuscript']],
      metrics: [
        {value: '7 DoF', label: 'in-house robotic arm'},
        {value: '64', label: 'stored taught waypoints'},
        {value: '≈0.12°', label: 'peak joint error in finite path tests'}
      ],
      caseStudy: [
        {
          heading: 'Project context',
          paragraphs: ['A robot experiment needs more than an action vector: it needs consistent coordinates, an executable trajectory, reliable feedback and a clear definition of completion. I developed the motion and teaching interfaces for an in-house seven-degree-of-freedom arm, with planning and execution in the C++ controller and Python / HTTP access for higher-level workflows. This work formed part of my broader extension of the humanoid robot control SDK.']
        },
        {
          heading: 'My contributions',
          bullets: [
            'I implemented forward and inverse kinematics interfaces and five standard motion paths: X-, Y- and Z-axis lines, a square and a circle. I made the arm-base coordinate and angle conventions explicit, and kept Cartesian-path execution distinct from joint-space point-to-point motion.',
            'I developed taught-point capture, editing, deletion, persistence and cyclic execution for up to 64 named waypoints. The workflow supports a dwell time at each point, completion checks and a fixed execution snapshot so that editing does not silently alter a running sequence.',
            'I connected motion execution with feedback-based limits, stop handling and controller diagnostics. I also extended C++ / Python SDK access for encoder state, PVT trajectories, trajectory export, dynamics and diagnostics; my broader SDK work covered more than 30 interfaces.',
            'I conducted finite real-robot path tests and inspected command-versus-encoder joint errors, feedback continuity and FK-reconstructed paths. I retained diagnostic records and distinguished valid sensor values from unavailable or uncalibrated channels in the monitoring interface.'
          ]
        },
        {
          heading: 'Results',
          paragraphs: ['All five standard paths completed the recorded finite tests: one lap each for X, Y, Z and square, and two laps for the circle. Across those path records, the largest peak command-to-encoder joint-tracking error was approximately 0.1183°, reported as about 0.12°. The interface supported storage and cyclic execution of up to 64 taught waypoints.', 'The resulting SDK and controller interfaces provide a consistent route from kinematic requests and taught positions to execution, feedback and diagnostic inspection. The preserved plots show measured joint traces and Cartesian paths reconstructed from real encoder feedback using SDK forward kinematics.']
        },
        {
          heading: 'Validation scope',
          paragraphs: ['The reported error is a joint-tracking measurement from limited path tests. It is not an externally measured end-effector positioning accuracy. Cartesian plots use the nominal FK model, and the finite-path result does not establish sustained operation: a later extended run encountered a feedback fault and stopped under the controller guard. I keep those separate when describing the completed motion functions and their measured performance.']
        }
      ]
    }
  ]
};
