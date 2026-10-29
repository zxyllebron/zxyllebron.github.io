window.PROJECT_CATALOGUE = {
  "projects": [
    {
      "id": "b1k",
      "name": "BEHAVIOR Challenge",
      "title": "Automated simulation runs, failure diagnosis and task-strategy refinement",
      "org": "Anyverse Technology Co., Ltd.",
      "date": "AUG 2026 — PRESENT",
      "context": "Software Engineer Intern · Embodied AI",
      "summary": "Built an automated evaluation and feedback loop for household manipulation tasks, using failure analysis and paired comparisons to refine grasping, placement and recovery strategies in OmniGibson.",
      "contribution": "Task orchestration, result and video validation, failure diagnosis, paired evaluation and feedback-driven strategy iteration.",
      "result": "On 50 repeated instances across 20 tasks, archived mean goal score rose from 0.1145 to 0.2315; 19 improved, 8 regressed and 23 were unchanged.",
      "steps": [
        "Python",
        "OmniGibson · BEHAVIOR-1K",
        "Perception-driven manipulation",
        "Automated iteration"
      ],
      "links": [],
      "metrics": [
        {
          "value": "+0.1170",
          "label": "absolute mean goal-score increase"
        },
        {
          "value": "50 instances",
          "label": "matched repeated cases across 20 tasks"
        },
        {
          "value": "100 tasks",
          "label": "1,000-instance archive coverage"
        }
      ],
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "Long-horizon household manipulation combines perception, navigation, grasping and object placement. I developed an automated evaluation and iteration workflow around a 100-task subset of BEHAVIOR-1K on Aliyun PAI DSW. Each run produced native evaluator output, a rollout video and a receipt identifying the task, instance, strategy version and random seeds. The archived coverage snapshot contains 1,000 task–instance cells across 100 tasks; this describes the evaluated subset rather than the full 1,000-activity benchmark."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I connected task execution, video-based review, result parsing and feedback-driven refinement into a repeatable loop. I kept task identity, strategy commits, evaluator version, seeds and frame-count checks with each result so that an apparent score change could be traced to its run.",
            "I used rollout failures to guide concrete manipulation changes: grasp clearance and retry handling, retaining a held object during recovery, placement clearance and descent checks, and better target selection for next-to and on-top relations. These changes address the action sequence and its recovery behaviour.",
            "I organised partial-goal scores and original videos for case review. I compared repeated instances under matching seeds and evaluator hashes, retained regressions as well as improvements, and kept different adapter configurations out of the main numerical comparison."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "Among 244 validated perception-adapter run receipts, 50 task instances across 20 tasks had repeated runs with matching instance IDs, strategy seeds, simulation seeds and native-evaluator hashes. Comparing each instance’s earliest and latest recorded runs, mean goal-satisfaction score increased from 0.1144848 to 0.2315000: an absolute gain of 0.1170152 on the 0–1 scale, or 102.2% relative to the earlier mean. Nineteen instances improved, eight regressed and twenty-three were unchanged.",
            "For example, the repeated art-supplies instance improved from 0.2 to 1.0. The gallery combines simulation depth and point-cloud diagnostics, a static scene map, the full matched-case comparison, an archived detector training plot and original simulation frames. These images represent distinct records; the perception and detector diagnostics are not the same 50-instance score comparison. A goal score follows the evaluator’s partial-goal scoring rule; it is not a binary task-success percentage.",
            "This is a descriptive comparison of archived strategy iteration on tuned cases. Strategy commits change between runs, and the set was not a preregistered held-out experiment. The result supports progress on the recorded repeated cases; it does not establish leaderboard rank or generalisation to unseen tasks."
          ]
        }
      ]
    },
    {
      "id": "policy-inference",
      "name": "Robot policy inference optimisation",
      "org": "Anyverse Technology Co., Ltd.",
      "date": "AUG 2026 — PRESENT",
      "context": "Software Engineer Intern · Embodied AI",
      "summary": "Optimised the inference path for a four-camera robot policy, integrating TensorRT, split execution and CUDA graphs while tracking action fidelity and memory.",
      "contribution": "Inference-backend integration, graph-based execution, controlled benchmarking and numerical evaluation.",
      "steps": [
        "Python · PyTorch",
        "TensorRT",
        "CUDA graphs",
        "Numerical evaluation"
      ],
      "links": [
        [
          "r02",
          "Related manuscript"
        ]
      ],
      "metrics": [
        {
          "value": "31.40%",
          "label": "lower median call latency"
        },
        {
          "value": "4 cameras",
          "label": "26-dimensional action output"
        },
        {
          "value": "200",
          "label": "timed calls per configuration"
        }
      ],
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "A visual robot policy has to turn camera and robot-state inputs into actions within a practical compute budget. Faster execution is useful only if the resulting actions remain interpretable. My project connected inference engineering with an explicit evaluation of latency, output differences and resource costs, rather than selecting a backend from timing alone. The fixed-input optimisation experiment used four camera inputs and a 26-dimensional action output on NVIDIA Thor."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I integrated and compared PyTorch and TensorRT inference paths, including split execution and a configuration combining CUDA graph execution with a static denoising update. I worked through backend loading, execution configuration and the conversion of model results back into the robot action representation.",
            "I built a controlled comparison around the same stored inputs and noise reference. I separated warm-up from timed calls, tracked model and prepared-call measurements, and kept configuration-specific results so that changes in execution scope were visible.",
            "I evaluated native action-output differences alongside latency. I also propagated joint-output differences through nominal arm kinematics to inspect their spatial consequence, and compared peak PyTorch-allocated GPU memory to expose the resource cost of acceleration.",
            "I organised the evaluation outputs and configuration records into reproducible comparisons. This made it possible to explain why a faster candidate should still be assessed for numerical and geometric differences before closed-loop use."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "In the matched fixed-input benchmark, median prepared-call latency decreased from 255.51 ms for the PyTorch reference to 175.27 ms for the TensorRT split / graph / static-update configuration, a 31.40% reduction. Each configuration recorded 200 timed calls after 10 warm-up calls. Peak PyTorch-allocated memory was 8.71 GiB and 8.85 GiB respectively, showing that the latency gain came with a small increase in this memory counter.",
            "The accompanying 32-input output comparison retained a native action MAE of approximately 0.000414 for this accelerated candidate. The largest nominal left-flange position difference was 5.314 mm. Reporting that difference alongside the timing gain made the speed–fidelity trade-off concrete.",
            "These results describe fixed-input offline inference. Prepared-call timing includes the recorded call and result-transfer scope; it is not a camera-to-actuator deadline. The kinematic differences are computed with a nominal robot model, and the memory figure is a PyTorch allocator counter. My results establish the measured execution trade-off for these configurations; physical positioning accuracy and closed-loop task success require separate robot experiments."
          ]
        }
      ],
      "result": "Reduced median prepared-call latency from 255.51 to 175.27 ms (31.40%) in the matched offline benchmark.",
      "title": "Robot policy inference optimisation"
    },
    {
      "id": "observation-alignment",
      "name": "Visual–proprioceptive observation alignment",
      "org": "Anyverse Technology Co., Ltd.",
      "date": "AUG 2026 — PRESENT",
      "context": "Software Engineer Intern · Embodied AI",
      "summary": "Implemented timestamp-indexed image–joint pairing and recording diagnostics to construct more temporally consistent observations for robot learning.",
      "contribution": "Multi-camera collection, nearest-time lookup, boundary handling and independent pairing verification.",
      "steps": [
        "Multi-camera acquisition",
        "Joint-state recording",
        "Python · NumPy",
        "Temporal analysis"
      ],
      "links": [
        [
          "r09",
          "Related data-semantics manuscript"
        ]
      ],
      "metrics": [
        {
          "value": "88.2–98.6%",
          "label": "lower session-median pairing mismatch"
        },
        {
          "value": "78,825",
          "label": "eligible image–joint pairs"
        },
        {
          "value": "49 runs",
          "label": "673.10 camera-stream hours"
        }
      ],
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "Robot-learning observations often combine an image with a vector of joint positions. Those values need a documented temporal relationship: a regular camera rate does not guarantee fresh observations, and the latest joint message is not necessarily the state closest to the image timestamp. I investigated this interface through continuous camera sampling and supervised image–joint recording, with head, body and wrist camera views."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I designed and implemented continuous camera-sampling experiments, recording host-side timing information and comparing update cadence, update age and interval-budget exceedance. I retained run-level results so that long gaps remained visible instead of disappearing inside an average frame rate.",
            "I collected and analysed image, CameraInfo and joint-state messages during supervised pose collection. I distinguished declared Header time from recording time, checked common temporal support and handled boundary cases before forming image–state pairs.",
            "I implemented and compared timestamp-nearest, latest-recorded and available preceding-state pairing rules. I examined both timestamp differences and the joint configurations selected by those rules, connecting a data-processing decision to the actual contents of a robot observation.",
            "I independently checked the pairing implementation with a NumPy searchsorted calculation and an explicit tie-breaking rule. I organised the analysis by recording and session, treating frames as observations within recordings rather than independent robot experiments."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "The endurance experiment covered 49 runs and 673.10 camera-stream hours. I analysed 24 image–joint recordings; common support and preceding-state eligibility retained 78,825 image pairs after excluding 38 boundary cases. The independent implementation reproduced both nearest and latest pairing selections with zero mismatches.",
            "On the same eligible images, replacing latest-recorded pairing with timestamp-nearest lookup reduced session-median absolute Header mismatch from 21.22 to 2.51 ms, 22.15 to 2.49 ms, and 183.57 to 2.53 ms. These are reductions of 88.2%, 88.8% and 98.6%, calculated directly from the preserved pairings. The comparison measures a data-pairing improvement, not a change in camera exposure timing.",
            "Timestamp-nearest pairing produced per-recording median absolute Header differences of 2.43–2.59 ms. Across the principal sessions, no nearest pair exceeded a 10 ms Header-mismatch budget. Latest-recorded pairing selected substantially different declared times in some sessions, with median signed differences of about 181–187 ms in one session. The analysis also showed that these choices could select different joint configurations for the same image.",
            "My contribution is a measured basis for specifying what the proprioceptive vector accompanying an image means. The work helps make collection, pairing and downstream interpretation consistent. Header agreement and offline pairing discrepancy do not measure optical exposure synchronisation, actuator response or policy success, and nearest-time pairing is not a universal substitute for a causally available online state estimate."
          ]
        }
      ],
      "result": "Reduced median timestamp mismatch by 88.2%, 88.8% and 98.6% across three sessions; nearest pairing was about 2.5 ms.",
      "title": "Visual–proprioceptive observation alignment"
    },
    {
      "id": "deployment",
      "name": "7-DoF arm control & taught-waypoint execution",
      "org": "Anyverse Technology Co., Ltd.",
      "date": "AUG 2026 — PRESENT",
      "title": "Connecting robot learning to real control",
      "summary": "I developed C++ motion-control and trajectory interfaces for an in-house 7-DoF arm, connecting kinematics, standard Cartesian paths, taught-waypoint execution and measured robot feedback.",
      "steps": [
        "C++ · Python",
        "FK / IK",
        "Trajectory planning",
        "Robot feedback"
      ],
      "links": [
        [
          "r05",
          "Related feedback-monitoring manuscript"
        ]
      ],
      "context": "Software Engineer Intern · Embodied AI",
      "contribution": "FK/IK, trajectory execution, taught-point storage, control SDK interfaces and finite real-robot validation.",
      "metrics": [
        {
          "value": "7 DoF",
          "label": "in-house robotic arm"
        },
        {
          "value": "64",
          "label": "stored taught waypoints"
        },
        {
          "value": "≈0.12°",
          "label": "peak joint error in finite path tests"
        }
      ],
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "A robot experiment needs more than an action vector: it needs consistent coordinates, an executable trajectory, reliable feedback and a clear definition of completion. I developed the motion and teaching interfaces for an in-house seven-degree-of-freedom arm, with planning and execution in the C++ controller and Python / HTTP access for higher-level workflows. This work formed part of my broader extension of the humanoid robot control SDK.",
            "The archived hardware documentation describes a bench-mounted seven-axis arm with five rotary joints and a two-actuator parallel wrist. The accompanying bench photograph documents the physical setup; it is separate from the finite path-test measurements."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I implemented forward and inverse kinematics interfaces and five standard motion paths: X-, Y- and Z-axis lines, a square and a circle. I made the arm-base coordinate and angle conventions explicit, and kept Cartesian-path execution distinct from joint-space point-to-point motion.",
            "I developed taught-point capture, editing, deletion, persistence and cyclic execution for up to 64 named waypoints. The workflow supports a dwell time at each point, completion checks and a fixed execution snapshot so that editing does not silently alter a running sequence.",
            "I connected motion execution with feedback-based limits, stop handling and controller diagnostics. I also extended C++ / Python SDK access for encoder state, PVT trajectories, trajectory export, dynamics and diagnostics; my broader SDK work covered more than 30 interfaces.",
            "I conducted finite real-robot path tests and inspected command-versus-encoder joint errors, feedback continuity and FK-reconstructed paths. I retained diagnostic records and distinguished valid sensor values from unavailable or uncalibrated channels in the monitoring interface."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "All five standard paths completed the recorded finite tests: one lap each for X, Y, Z and square, and two laps for the circle. Across those path records, the largest peak command-to-encoder joint-tracking error was approximately 0.1183°, reported as about 0.12°. The interface supported storage and cyclic execution of up to 64 taught waypoints.",
            "The resulting SDK and controller interfaces provide a consistent route from kinematic requests and taught positions to execution, feedback and diagnostic inspection. The preserved plots show measured joint traces and Cartesian paths reconstructed from real encoder feedback using SDK forward kinematics.",
            "The reported error compares command and encoder joint values in finite path trials. Cartesian plots are reconstructed with the nominal FK model; external end-effector metrology was not performed. The measurements describe these completed path tests."
          ]
        }
      ],
      "result": "Completed all five finite path tests with a largest peak joint-tracking error of 0.1183°; enabled 64 taught waypoints and more than 30 SDK interfaces."
    },
    {
      "id": "platform2025",
      "name": "Reconfigurable land–air platform",
      "org": "Beijing Jiaotong University",
      "date": "2025–2026",
      "title": "Reconfigurable land–air platform: 2025 project cohort",
      "summary": "Led the 2025 university innovation project on a reconfigurable land–air platform.",
      "steps": [
        "Mechanical design",
        "Platform integration",
        "Control implementation"
      ],
      "links": [],
      "context": "University innovation project · Team lead",
      "contribution": "Project leadership, mechanical–control integration and prototype debugging.",
      "result": "Completed the 2025-cohort innovation project in 2026 and assembled the documented ring-wheel prototype.",
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "I led the 2025 university innovation project on a reconfigurable land–air platform. The design brings ring-wheel terrestrial motion and aerial propulsion into one mechanical platform. This project is distinct from my March–August 2024 flight-control work; its photographed prototype is dated April 2026."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I coordinated the mechanical and control work, connecting the ring-wheel structure, mounting interfaces, propulsion hardware and system assembly.",
            "I contributed to platform integration and debugging, using CAD assembly and exploded views to inspect how the frame, wheels and internal components fit together.",
            "I organised the prototype and simulation materials for the completion review, keeping the later project’s evidence separate from the earlier UAV experience."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "The project has a completed university innovation-project record. The gallery shows the April 2026 prototype and an original exploded CAD view.",
            "The prototype photograph and exploded assembly view connect the completed integration work to the platform’s physical structure and component interfaces."
          ]
        }
      ]
    },
    {
      "id": "biomechanics",
      "name": "Human biomechanics & embodied simulation",
      "org": "Chongqing Xingshijie Co., Ltd.",
      "date": "JAN — MAR 2026",
      "title": "Understanding human motion with musculoskeletal simulation",
      "summary": "Built OpenSim musculoskeletal models and analysed human-motion data for joint forces, loads and kinematic profiles.",
      "steps": [
        "OpenSim",
        "Motion data",
        "Joint biomechanics",
        "MATLAB"
      ],
      "links": [],
      "context": "Human biomechanics and embodied simulation internship",
      "contribution": "OpenSim model preparation, motion-data processing and MATLAB joint-load analysis.",
      "result": "Established a documented musculoskeletal analysis workflow linking motion data, model scaling, posture inspection and joint-load comparison.",
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "During my internship at Chongqing Xingshijie, I worked on human musculoskeletal modelling and motion analysis for embodied simulation. The preserved report focuses on figure-skating spin postures and the relation between body configuration and joint loading."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I prepared OpenSim models and motion data, checked marker visualisations and model-scaling parameters, and inspected the resulting body postures.",
            "I used MATLAB calculations to compare simplified joint-load estimates between postures, connecting the numerical outputs to the model and movement assumptions.",
            "I organised the model, motion and load-analysis outputs into references for human-motion understanding and embodied simulation."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "The archived report contains the model-scaling configuration, motion-marker views, sit-spin model posture and joint-load comparison figure. These provide concrete examples of the completed modelling and analysis workflow.",
            "The joint-load values are model-based estimates interpreted with the posture and motion assumptions in the report. The workflow links human-motion data to joint-level simulation outputs."
          ]
        }
      ]
    },
    {
      "id": "learning",
      "name": "Learning-based robotic manipulation",
      "org": "Beijing Jiaotong University",
      "date": "SEP 2025 — FEB 2026",
      "title": "Learning visual manipulation in simulation",
      "summary": "Developed robotic manipulation and simulation workflows, combining a PPO reaching baseline with MATLAB robot modelling, kinematics and trajectory planning.",
      "steps": [
        "Python · PyTorch",
        "PyBullet · Gymnasium",
        "PPO",
        "Inverse kinematics",
        "MATLAB",
        "Robot trajectory planning"
      ],
      "links": [],
      "context": "University research project · simulation",
      "contribution": "Simulation environment, PPO training and evaluation; MATLAB robot modelling, kinematic analysis and trajectory planning.",
      "result": "An archived follow-up reach-task baseline reduced mean final distance from 54.02 to 3.89 cm (92.8%); PPO succeeded in 10/10 recorded evaluation episodes. Produced workspace and trajectory visualisations for Sawyer, KR5 and SCARA robot models.",
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "My university research explored learning-based manipulation and simulation workflows. A preserved July 2026 follow-up baseline makes one part of that work reproducible: a KUKA iiwa reaching task in PyBullet, wrapped as a Gymnasium environment and trained with Stable-Baselines3 PPO. The measured baseline uses robot and target coordinates as its observation, and is reported separately from broader visual grasping and handoff development.",
            "The project also includes MATLAB modelling and trajectory analysis for Sawyer, KR5 and SCARA robots, spanning joint kinematics, sampled workspaces and an assembly-task trajectory."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I implemented the environment reset, seven-dimensional state observation, Cartesian displacement action and inverse-kinematics execution path. The observation contains end-effector XYZ, target XYZ and their distance; each action commands a small three-dimensional displacement.",
            "I connected PPO training, checkpoint storage and evaluation scripts. I used a distance-based reward with a success bonus, a 5 cm success threshold and a 150-step episode limit, and retained a random-policy comparison.",
            "I exported training scalars, episode results and a comparison table. I separated completed evaluations from longer-training and stricter-threshold configurations whose summary entries remain empty.",
            "I worked with team project materials to model the robots and evaluate kinematics in MATLAB, using sampled workspaces and configurations to inspect feasible motion.",
            "I connected task-space trajectories with joint position, velocity and acceleration profiles and contributed to the robot simulation demonstrations."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "The recorded random-policy batch produced 0 successes in 20 episodes, with mean final distance 0.5402 m. The 100,000-step PPO baseline produced 10 successes in 10 episodes, with mean final distance 0.0389 m. The relative reduction in mean final distance is 92.8%. The gallery plots these original table entries and the archived reward scalars.",
            "The batches are small and have unequal episode counts. This is state-based simulated reaching; it does not measure visual grasping, object handoff, real-robot success or a matched execution-speed improvement. The follow-up baseline is retained here as a concrete experiment associated with the broader project.",
            "The gallery also contains the KR5 workspace, Sawyer motion visualisation, assembly configurations, joint-trajectory profiles and SCARA workspace. These model-based simulation figures complement the separately reported PPO reaching experiment."
          ]
        }
      ],
      "metrics": [
        {
          "value": "92.8%",
          "label": "lower mean final target distance"
        },
        {
          "value": "10 / 10",
          "label": "PPO evaluation successes; 5 cm threshold"
        },
        {
          "value": "100k",
          "label": "baseline training steps"
        }
      ]
    },
    {
      "id": "navigation",
      "name": "Autonomous mobile robot",
      "org": "Beijing Jiaotong University",
      "date": "JUN — AUG 2025",
      "title": "Closing the perception–control loop",
      "summary": "Developed STM32 sensor acquisition, state-machine logic and PID motor control, then tuned the vehicle through track tests.",
      "steps": [
        "STM32",
        "Sensor integration",
        "FSM",
        "PID control"
      ],
      "links": [],
      "context": "Embedded control · team project",
      "contribution": "STM32 sensor acquisition, finite-state control, PID tuning and track-test debugging.",
      "result": "The final project report records overshoot falling from 20% to below 5% (>75% relative reduction), with settling below 1 s.",
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "I developed embedded sensing and control functions for an STM32-based autonomous vehicle in a university team project. The system combines line tracking, obstacle avoidance and task switching, with sensor acquisition and motor execution coordinated through a main loop and interrupts."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I integrated colour, infrared and ultrasonic sensing with finite-state decision logic and PID motor control, and tested the embedded functions with the wider navigation system.",
            "I tuned PID gains from Kp/Ki/Kd = 1.0/0.05/0.02 to 1.5/0.02/0.10. I used track tests to inspect oscillation, overshoot and recovery after task transitions.",
            "I addressed sensor false detections with a three-sample median filter and sensor-height adjustment. The project report also documents a 500 ms motor start/stop ramp and hardware suppression of motor interference."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "The final presentation reports initial overshoot of 20% with three oscillations, compared with less than 5% overshoot and settling time below 1 s after tuning. The overshoot figures imply a reduction greater than 75% relative to the initial value. The reported task-switch components are 120 µs interrupt response and 800 µs main-loop processing, totalling approximately 920 µs.",
            "These numbers are transcribed from the project’s final debugging report. The archive does not include a raw sampled step-response trace for independent re-estimation. The gallery combines original prototype and track photographs with an English transcription of the controller settings and recorded outcomes."
          ]
        }
      ],
      "metrics": [
        {
          "value": "20% → <5%",
          "label": "reported controller overshoot"
        },
        {
          "value": "<1 s",
          "label": "reported tuned settling time"
        },
        {
          "value": "≈920 µs",
          "label": "reported task-switch components combined"
        }
      ]
    },
    {
      "id": "thermoelectric",
      "name": "Thermoelectric vehicle · cam steering",
      "org": "Beijing Jiaotong University",
      "date": "NOV 2024 — APR 2025",
      "title": "Cam-steered thermoelectric competition vehicle",
      "summary": "Designed cam-based mechanical steering and gear transmission in SolidWorks for a thermoelectric competition vehicle, then assembled and calibrated the integrated system.",
      "steps": [
        "SolidWorks",
        "Cam-based steering",
        "Gear transmission",
        "Thermoelectric integration",
        "Assembly & calibration"
      ],
      "links": [],
      "context": "Engineering Practice & Innovation Competition · mechanical design",
      "contribution": "Cam profile and steering mechanism; gear transmission; mechanical assembly, calibration and whole-vehicle debugging.",
      "result": "Completed an integrated competition vehicle; the project received a Beijing engineering-practice competition second prize in March 2025.",
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "This project was the thermoelectric-vehicle entry in the Beijing engineering-practice and innovation competition. Ethanol heating and thermoelectric conversion powered the vehicle, while a profiled cam mechanically encoded the steering motion.",
            "The retained materials include the SolidWorks vehicle assembly, individual steering and transmission parts, a cam-design worksheet, the project defence document and the competition certificate."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "Designed the cam and gear mechanisms in SolidWorks, checking their fit and mechanical interfaces in the whole-vehicle assembly.",
            "Worked on the cam steering and fine-adjustment mechanism, then completed assembly, calibration and system-level debugging.",
            "Integrated the path-following hardware and adjusted the assembled vehicle through testing; steering was implemented mechanically rather than by sensor-based electronic steering."
          ]
        },
        {
          "heading": "Results & project images",
          "paragraphs": [
            "The project received a second prize in the thermoelectric-vehicle event of the Beijing College Students Engineering Practice and Innovation Competition in March 2025. The certificate remains linked under Honors & awards.",
            "The gallery shows original embedded CAD views and the cam-design worksheet from the competition archive. These are design records, not prototype photographs; standard component views are included to explain the vehicle integration."
          ]
        }
      ]
    },
    {
      "id": "butterfly",
      "name": "Biomimetic butterfly robot",
      "org": "Beijing Jiaotong University",
      "date": "2025 PROJECT MATERIALS",
      "title": "Building a lightweight flapping-wing prototype",
      "summary": "Contributed to a team project on a butterfly-inspired flying robot, connecting lightweight wing structures, a compact drive mechanism, electronics and wing analysis.",
      "steps": [
        "Biomimetic design",
        "Wing fabrication",
        "Drive mechanism",
        "Structural analysis"
      ],
      "links": [],
      "context": "Team innovation project",
      "contribution": "Wing fabrication, lightweight mechanism integration and prototype assembly within the project team.",
      "result": "Built and documented wing structures, a compact drive mechanism and the wing-and-drive prototype.",
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "This team innovation project investigated a butterfly-inspired flapping-wing robot. The work connected lightweight wing construction with a compact drive and control electronics."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I contributed to wing fabrication and the assembly of lightweight structural elements, connecting the wing shape to the drive mechanism.",
            "I helped integrate the mechanism and electronics and organised photographs of components and the assembled prototype for design review."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "Original photographs document fabricated wings, the drive unit, electronics and the assembled wing-and-drive structure. The gallery uses clear build photographs without slide captions or phone-watermark strips.",
            "The assembled wing-and-drive structure provided a concrete platform for checking fabrication choices and mechanical integration within the team project."
          ]
        }
      ]
    },
    {
      "id": "aloha",
      "name": "Bimanual teleoperation",
      "org": "Csoft",
      "date": "JUL — AUG 2024",
      "title": "From human demonstrations to bimanual action",
      "summary": "Integrated ROS/Ubuntu teleoperation, joint feedback and calibration for an ALOHA bimanual setup.",
      "steps": [
        "ROS · Ubuntu",
        "ALOHA",
        "Calibration",
        "Teleoperation"
      ],
      "links": [
        [
          "r09",
          "Imitation data semantics"
        ]
      ],
      "context": "Robot Learning and Manipulation Intern",
      "contribution": "ROS/Ubuntu integration, teleoperation, calibration, joint feedback and demonstration execution.",
      "result": "Integrated a bimanual demonstration workflow and debugged hardware–software synchronisation during hands-on robot practice.",
      "caseStudy": [
        {
          "heading": "Overview",
          "paragraphs": [
            "During my Robot Learning and Manipulation internship at Csoft, I worked with an ALOHA bimanual teleoperation setup. The practical workflow connects human-operated arm motion, joint feedback, calibration and demonstration execution for grasping, transfer, book handling and pouring."
          ]
        },
        {
          "heading": "My contribution",
          "bullets": [
            "I integrated the ROS/Ubuntu control environment, teleoperation interfaces and joint-state feedback needed to reproduce human-operated behaviours.",
            "I carried out calibration and demonstration execution, using real-robot behaviour to diagnose synchronisation and hardware–software integration problems.",
            "I iterated the setup during hands-on practice and retained documentary frames showing my own participation. The hardware photograph remains the project cover."
          ]
        },
        {
          "heading": "Results & validation",
          "paragraphs": [
            "The project produced an integrated bimanual teleoperation and demonstration workflow. The gallery includes the original hardware view and user-confirmed frames of my hands-on practice.",
            "The photographs show the robot hardware and my hands-on participation during the July 2024 practice programme, linking the integration work to the actual experimental setup."
          ]
        }
      ]
    }
  ],
  "media": {
    "aloha": [
      {
        "src": "assets/projects/aloha-hardware-clear.webp",
        "thumb": "assets/projects/aloha-hardware-clear-thumb.webp",
        "caption": "Bimanual teleoperation hardware during the summer robotics practice.",
        "kind": "Original practice photograph · hardware detail",
        "width": 1440,
        "height": 700
      },
      {
        "src": "assets/projects/aloha-xiongyule-practice.webp",
        "thumb": "assets/projects/aloha-xiongyule-practice-thumb.webp",
        "caption": "Hands-on practice at the bimanual robot workstation.",
        "kind": "Practice documentary frame",
        "width": 720,
        "height": 408
      }
    ],
    "navigation": [
      {
        "src": "assets/projects/car-048.webp",
        "thumb": "assets/projects/car-048-thumb.webp",
        "caption": "The assembled STM32-based autonomous vehicle.",
        "kind": "Prototype photograph",
        "width": 1085,
        "height": 813
      },
      {
        "src": "assets/projects/car-061.webp",
        "thumb": "assets/projects/car-061-thumb.webp",
        "caption": "A second view of the track-testing setup.",
        "kind": "Track test photograph",
        "width": 1268,
        "height": 714
      },
      {
        "src": "assets/projects/car-062.webp",
        "thumb": "assets/projects/car-062-thumb.webp",
        "caption": "The vehicle on the test course.",
        "kind": "Track test photograph",
        "width": 924,
        "height": 681
      },
      {
        "src": "assets/projects/refresh/vehicle-pid-results.webp",
        "thumb": "assets/projects/refresh/vehicle-pid-results-thumb.webp",
        "caption": "English transcription of slide 28 in the final vehicle presentation: gains (1.0, 0.05, 0.02) to (1.5, 0.02, 0.10), reported overshoot 20% to below 5%, settling below 1 s. This implies a reduction greater than 75% relative to the initial overshoot; raw response samples are not supplied.",
        "kind": "Figure from archived measurements",
        "width": 1800,
        "height": 846
      },
      {
        "src": "assets/projects/car-053.webp",
        "thumb": "assets/projects/car-053-thumb.webp",
        "caption": "Circuit documentation from the STM32 autonomous-vehicle team report.",
        "kind": "Original team-project circuit diagram",
        "width": 937,
        "height": 833
      }
    ],
    "biomechanics": [
      {
        "src": "assets/projects/opensim-020.webp",
        "thumb": "assets/projects/opensim-020-thumb.webp",
        "caption": "Musculoskeletal model and sit-spin posture in OpenSim.",
        "kind": "OpenSim screenshot",
        "width": 1101,
        "height": 455
      },
      {
        "src": "assets/projects/opensim-008.webp",
        "thumb": "assets/projects/opensim-008-thumb.webp",
        "caption": "Motion-capture marker visualisation included in the project report.",
        "kind": "Motion-data visualisation",
        "width": 607,
        "height": 265
      },
      {
        "src": "assets/projects/opensim-013.webp",
        "thumb": "assets/projects/opensim-013-thumb.webp",
        "caption": "Model-scaling parameters in OpenSim.",
        "kind": "OpenSim screenshot",
        "width": 1577,
        "height": 1097
      },
      {
        "src": "assets/projects/opensim-028.webp",
        "thumb": "assets/projects/opensim-028-thumb.webp",
        "caption": "Estimated joint-load comparison from the project report.",
        "kind": "Report figure",
        "width": 1785,
        "height": 1140
      },
      {
        "src": "assets/projects/opensim-027.webp",
        "thumb": "assets/projects/opensim-027-thumb.webp",
        "caption": "MATLAB analysis and console output retained in the biomechanics project report.",
        "kind": "Original project analysis screenshot",
        "width": 1440,
        "height": 927
      }
    ],
    "butterfly": [
      {
        "src": "assets/projects/butterfly-026.webp",
        "thumb": "assets/projects/butterfly-026-thumb.webp",
        "caption": "Assembled wing and drive mechanism of the butterfly prototype.",
        "kind": "Prototype photograph",
        "width": 955,
        "height": 716
      },
      {
        "src": "assets/projects/butterfly-004.webp",
        "thumb": "assets/projects/butterfly-004-thumb.webp",
        "caption": "Miniature drive component used in the prototype.",
        "kind": "Component photograph",
        "width": 4096,
        "height": 3072
      },
      {
        "src": "assets/projects/butterfly-012.webp",
        "thumb": "assets/projects/butterfly-012-thumb.webp",
        "caption": "Wing structure and membrane during assembly.",
        "kind": "Build photograph",
        "width": 1014,
        "height": 726
      },
      {
        "src": "assets/projects/butterfly-018.webp",
        "thumb": "assets/projects/butterfly-018-thumb.webp",
        "caption": "Electronic component documented in the project materials.",
        "kind": "Component photograph",
        "width": 849,
        "height": 637
      },
      {
        "src": "assets/projects/butterfly-011.webp",
        "thumb": "assets/projects/butterfly-011-thumb.webp",
        "caption": "Wing stress and displacement analysis reproduced from the team innovation-project presentation.",
        "kind": "Original team-project simulation figure",
        "width": 1116,
        "height": 399
      }
    ],
    "platform2025": [
      {
        "src": "assets/projects/refresh/land-air-prototype-original.svg",
        "thumb": "assets/projects/refresh/land-air-prototype-original.svg",
        "width": 1440,
        "height": 806,
        "caption": "Original April 2026 photograph of the 2025-cohort land–air prototype. Only the bottom phone-watermark strip is outside the display viewport; the photograph pixels are unchanged.",
        "kind": "Original prototype photograph"
      },
      {
        "src": "assets/projects/uav-055.webp",
        "thumb": "assets/projects/uav-055-thumb.webp",
        "caption": "Exploded view of the platform and its structural components.",
        "kind": "CAD screenshot",
        "width": 1270,
        "height": 1200
      },
      {
        "src": "assets/projects/uav-052.webp",
        "thumb": "assets/projects/uav-052-thumb.webp",
        "caption": "CAD assembly of the ring-wheel land–air platform from the 2025 project-cohort materials.",
        "kind": "Original project CAD view",
        "width": 1440,
        "height": 801
      },
      {
        "src": "assets/projects/uav-068.webp",
        "thumb": "assets/projects/uav-068-thumb.webp",
        "caption": "Flow-field visualisation from the land–air platform completion report.",
        "kind": "Original project simulation figure",
        "width": 651,
        "height": 606
      }
    ],
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
        "src": "assets/projects/refresh/pairing-improvement.webp",
        "thumb": "assets/projects/refresh/pairing-improvement-thumb.webp",
        "caption": "Recomputed session medians on the same eligible images: latest-recorded to nearest-timestamp mismatch falls from 21.22 to 2.51 ms, 22.15 to 2.49 ms, and 183.57 to 2.53 ms. Reductions are 88.2%, 88.8% and 98.6%; these quantify offline pairing discrepancy.",
        "kind": "Figure from archived measurements",
        "width": 1800,
        "height": 864
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
      }
    ],
    "deployment": [
      {
        "src": "assets/projects/evidence-20261030/arm-bench.webp",
        "thumb": "assets/projects/evidence-20261030/arm-bench-thumb.webp",
        "width": 1350,
        "height": 1800,
        "caption": "Original photograph of the in-house arm bench from the structure and dynamics documentation. The image documents the hardware setup and is not identified as a frame from the five path trials.",
        "kind": "Original bench photograph"
      },
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
        "src": "assets/projects/refresh/arm-motion-english.webp",
        "thumb": "assets/projects/refresh/arm-motion-english-thumb.webp",
        "caption": "The first 150 seconds of an archived real-motion record, plotted in English from measured position and velocity channels for the five rotary joints. The plot is not a new robot test.",
        "kind": "Figure from archived measurements",
        "width": 1980,
        "height": 1007
      },
      {
        "src": "assets/projects/refresh/arm-drive-english.webp",
        "thumb": "assets/projects/refresh/arm-drive-english-thumb.webp",
        "caption": "Measured drive-current and temperature-word channels, re-rendered from the original CSV with English axes. Temperature words are raw counts, not calibrated degrees Celsius.",
        "kind": "Figure from archived measurements",
        "width": 1980,
        "height": 1007
      }
    ],
    "learning": [
      {
        "src": "assets/projects/refresh/ppo-results.webp",
        "thumb": "assets/projects/refresh/ppo-results-thumb.webp",
        "caption": "Original summary-table results for the archived follow-up reach-task baseline: random policy 0/20 successes and 0.5402 m mean final distance; PPO 10/10 and 0.0389 m. Mean final distance is 92.8% lower. This is state-based simulated reaching, not a full visual manipulation task.",
        "kind": "Figure from archived measurements",
        "width": 1980,
        "height": 827
      },
      {
        "src": "assets/projects/robot-sim-038.webp",
        "thumb": "assets/projects/robot-sim-038-thumb.webp",
        "caption": "KR5 model and sampled workspace in MATLAB.",
        "kind": "Robot simulation",
        "width": 1234,
        "height": 970
      },
      {
        "src": "assets/projects/robot-sim-007.webp",
        "thumb": "assets/projects/robot-sim-007-thumb.webp",
        "caption": "Sawyer kinematics and joint-trajectory visualisation.",
        "kind": "Robot simulation",
        "width": 1551,
        "height": 1002
      },
      {
        "src": "assets/projects/robot-sim-040.webp",
        "thumb": "assets/projects/robot-sim-040-thumb.webp",
        "caption": "Robot configurations along an assembly-task trajectory.",
        "kind": "Robot simulation",
        "width": 1925,
        "height": 949
      },
      {
        "src": "assets/projects/refresh/robot-joint-profiles-english.svg",
        "thumb": "assets/projects/refresh/robot-joint-profiles-english.svg",
        "caption": "Joint position, velocity and acceleration profiles from the original robotics project report. English labels are overlaid on the original image; the plotted traces are unchanged.",
        "kind": "Original trajectory plot with English labels",
        "width": 1067,
        "height": 842
      },
      {
        "src": "assets/projects/refresh/scara-workspace-english.png",
        "thumb": "assets/projects/refresh/scara-workspace-english.png",
        "caption": "SCARA workspace XY projection, replotted with English labels using the original project code and its joint ranges, sample spacing and link lengths.",
        "kind": "Workspace figure from original model code",
        "width": 1275,
        "height": 1224
      },
      {
        "src": "assets/projects/refresh/ppo-training.webp",
        "thumb": "assets/projects/refresh/ppo-training-thumb.webp",
        "caption": "Reward scalars from the archived PPO baseline training log. The curve describes training behaviour; the separate evaluation batches are reported in the results figure.",
        "kind": "Figure from archived measurements",
        "width": 1800,
        "height": 810
      },
      {
        "src": "assets/projects/refresh/ppo-pipeline.webp",
        "thumb": "assets/projects/refresh/ppo-pipeline-thumb.webp",
        "caption": "Original project diagram of the state-based reaching pipeline: PyBullet environment, Gymnasium observations, PPO actions and inverse-kinematics execution.",
        "kind": "Original project architecture figure",
        "width": 2200,
        "height": 649
      }
    ],
    "thermoelectric": [
      {
        "src": "assets/projects/thermoelectric/vehicle-assembly.webp",
        "thumb": "assets/projects/thermoelectric/vehicle-assembly-thumb.webp",
        "caption": "Whole-vehicle CAD assembly from the thermoelectric competition project archive, showing the enclosed chassis, steering and transmission hardware, and heat-sink arrangement. This is an original embedded SolidWorks view, not a prototype photograph.",
        "kind": "Original SolidWorks assembly / part view",
        "width": 640,
        "height": 480
      },
      {
        "src": "assets/projects/thermoelectric/steering-cam.webp",
        "thumb": "assets/projects/thermoelectric/steering-cam-thumb.webp",
        "caption": "Profiled steering cam from the competition model archive. The cam contour provides the mechanical steering schedule; this is the CAD file’s original embedded view.",
        "kind": "Original SolidWorks assembly / part view",
        "width": 640,
        "height": 480
      },
      {
        "src": "assets/projects/thermoelectric/cam-profile-design.webp",
        "thumb": "assets/projects/thermoelectric/cam-profile-design-thumb.webp",
        "caption": "Original cam-design worksheet: prescribed vehicle path, displacement/angle relationships and the resulting cam contour. Labels and values are retained from the source design sheet.",
        "kind": "Original cam-design worksheet",
        "width": 1867,
        "height": 983
      },
      {
        "src": "assets/projects/thermoelectric/steering-adjustment.webp",
        "thumb": "assets/projects/thermoelectric/steering-adjustment-thumb.webp",
        "caption": "Micrometer component retained in the vehicle assembly archive for steering-angle fine adjustment. This is a component reference view, not a claim that the standard micrometer was manufactured by the team.",
        "kind": "Original SolidWorks component view",
        "width": 640,
        "height": 480
      },
      {
        "src": "assets/projects/thermoelectric/steering-fork.webp",
        "thumb": "assets/projects/thermoelectric/steering-fork-thumb.webp",
        "caption": "Front-fork component from the competition vehicle model archive, illustrating the mechanical steering interface.",
        "kind": "Original SolidWorks component view",
        "width": 640,
        "height": 480
      },
      {
        "src": "assets/projects/thermoelectric/thermoelectric-module.webp",
        "thumb": "assets/projects/thermoelectric/thermoelectric-module-thumb.webp",
        "caption": "Heat-source and thermoelectric cooling-kit assembly from the vehicle archive, with its paired heat sinks. This is an embedded CAD view.",
        "kind": "Original SolidWorks component view",
        "width": 640,
        "height": 480
      },
      {
        "src": "assets/projects/thermoelectric/transmission-gear.webp",
        "thumb": "assets/projects/thermoelectric/transmission-gear-thumb.webp",
        "caption": "Module-0.5 transmission gear from the competition assembly archive. This is the original part preview.",
        "kind": "Original SolidWorks component view",
        "width": 640,
        "height": 480
      },
      {
        "src": "assets/engineering-award.jpg",
        "thumb": "assets/engineering-award.jpg",
        "caption": "Original award certificate naming the team, the thermoelectric-vehicle event and Second Prize. Issued in March 2025 by the Beijing Municipal Education Commission.",
        "kind": "Competition award certificate",
        "width": 1664,
        "height": 1152
      }
    ],
    "b1k": [
      {
        "src": "assets/projects/evidence-20261030/behavior-perception.webp",
        "thumb": "assets/projects/evidence-20261030/behavior-perception-thumb.webp",
        "width": 1800,
        "height": 877,
        "caption": "Recorded head-camera depth and 2,835-point tote cloud from one archived organizing-art-supplies simulation pose record. The point cloud is plotted relative to the recorded pose origin; the data are simulated, and the two panels are not an image overlay.",
        "kind": "Figure from archived simulation data"
      },
      {
        "src": "assets/projects/evidence-20261030/behavior-matched.webp",
        "thumb": "assets/projects/evidence-20261030/behavior-matched-thumb.webp",
        "width": 1800,
        "height": 812,
        "caption": "All 50 matched task-instance score changes, with five example instances including regressions. Comparison uses matching instance, strategy and simulation seeds, and evaluator hash; strategy commits vary. These are tuned cases rather than held-out performance.",
        "kind": "Figure from archived evaluator results"
      },
      {
        "src": "assets/projects/evidence-20261030/behavior-map.webp",
        "thumb": "assets/projects/evidence-20261030/behavior-map-thumb.webp",
        "width": 983,
        "height": 1067,
        "caption": "Archived house-single-floor static occupancy grid from the team simulation environment, shown at 0.05 m resolution. The static raster omits movable objects and does not depict an executed path.",
        "kind": "Figure from archived simulation map"
      },
      {
        "src": "assets/projects/evidence-20261030/behavior-training.webp",
        "thumb": "assets/projects/evidence-20261030/behavior-training-thumb.webp",
        "width": 1800,
        "height": 1200,
        "caption": "Original archived detector training plot showing training and validation loss, average precision and recall over three recorded epochs. This is a model diagnostic, not a household task success rate.",
        "kind": "Original archived evaluation plot"
      },
      {
        "src": "assets/projects/refresh/b1k-organizing_art_supplies-action.webp",
        "thumb": "assets/projects/refresh/b1k-organizing_art_supplies-action-thumb.webp",
        "caption": "Art-supplies organisation: original simulator-video frame at 40% of the recorded rollout. This is simulation footage.",
        "kind": "Original OmniGibson rollout frame",
        "width": 672,
        "height": 448
      },
      {
        "src": "assets/projects/behavior/honey-kitchen.webp",
        "thumb": "assets/projects/behavior/honey-kitchen-thumb.webp",
        "caption": "Robot-camera views of the kitchen during a honey-storage task rollout. Original recorded OmniGibson simulation frame.",
        "kind": "Original OmniGibson simulation frame",
        "width": 672,
        "height": 448
      }
    ]
  },
  "videos": {}
};
