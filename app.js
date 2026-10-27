'use strict';
const papers = window.PORTFOLIO.papers;
const lang = 'en';
const profile = window.PROFILE || { photo: '' };
const t = value => Array.isArray(value) ? value[lang === 'zh' ? 1 : 0] : value;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const title = p => lang === 'zh' ? p.zh : p.title;
const kind = p => p.type === 'review' ? t(['Critical review','批判性综述']) : t(['Empirical / methods','实证 / 方法研究']);
const label = {
 projects:['Projects','项目'],selected:['Selected research','代表研究'],experience:['Experience','经历'],awards:['Recognition','奖项'],
 read:['Research notes ↗','研究解读 ↗'],pdf:['Read PDF ↗','阅读PDF ↗'],related:['Related manuscripts','关联论文'],
 status:['Unpublished manuscript · 2026','未发表稿件 · 2026']
};
const projects = [
 {id:'deployment',name:['Robot systems','机器人系统'],short:['Deployment & feedback','部署与反馈'],org:'Anyverse Technology',date:['AUG 2026 — PRESENT','2026.08 — 至今'],title:['Connecting robot learning to real control','连接机器人学习与真实控制'],summary:['At Anyverse Technology, I develop Isaac Sim / Isaac Lab workflows and a PyTorch–MuJoCo learning pipeline, while extending a humanoid robot control SDK and ROS 2 / MoveIt 2 manipulation workflows.','在Anyverse Technology实习期间，开发Isaac Sim / Isaac Lab仿真与PyTorch–MuJoCo学习流程，同时扩展人形机器人控制SDK及ROS 2 / MoveIt 2操作流程。'],detail:['The engineering work spans encoder-state access, PVT trajectory execution, dynamics interfaces, motion planning, trajectory optimization and closed-loop execution. The related manuscripts examine how deployment measurements support claims about fidelity, timing and monitoring.','工程工作覆盖编码器状态读取、PVT轨迹执行、动力学接口、运动规划、轨迹优化及闭环执行。关联稿件进一步讨论部署测量如何支持关于数值一致性、计时和监测的结论。'],steps:['Isaac Sim / Lab','PyTorch · MuJoCo','C++ / Python SDK','ROS 2 · MoveIt 2'],links:[['r01',['Calibration','多相机标定']],['r02',['Policy inference','策略推理']],['r05',['Feedback contracts','反馈证据契约']],['r07',['Perception pipeline','感知流水线']]],context:['Software engineering internship','具身智能软件工程实习']},
 {id:'learning',name:['Robot learning','机器人学习'],short:['Manipulation in simulation','操作仿真'],org:['Beijing Jiaotong University','北京交通大学'],date:['SEP 2025 — FEB 2026','2025.09 — 2026.02'],title:['Learning visual manipulation in simulation','仿真中的视觉操作学习'],summary:['Built a Python / PyTorch learning pipeline for grasping, placement and object handoff, combining MATLAB / Simulink dynamics models with DINOv2 and OpenCV visual features.','搭建面向抓取、放置及物体交接的Python / PyTorch学习流程，结合MATLAB / Simulink动力学模型与DINOv2、OpenCV视觉特征。'],detail:['Explored PPO / SAC, behavior cloning and Diffusion Policy workflows. The associated reviews focus on demonstration cost, robustness, recovery and the configuration needed to interpret simulation results.','探索PPO / SAC、行为克隆和Diffusion Policy流程。关联综述围绕示范成本、鲁棒性、故障恢复及解释仿真结果所需的配置证据展开。'],steps:['DINOv2 · OpenCV','PPO / SAC','Behavior cloning','Diffusion Policy'],links:[['s01',['Data efficiency','数据效率']],['s02',['Reliable policies','策略可靠性']],['s07',['Simulation configuration','仿真配置']],['s08',['Language & planning','语言与规划']]],context:['University research project · simulation','校内科研项目 · 仿真']},
 {id:'aloha',name:['Bimanual robots','双臂机器人'],short:['Teleoperation & demonstrations','遥操作与示教'],org:'Csoft',date:['JUL — AUG 2024','2024.07 — 2024.08'],title:['From human demonstrations to bimanual action','从人类示教到双臂操作'],summary:['Built a ROS / Ubuntu ALOHA bimanual system for human-operated demonstrations, supporting object grasping, transfer, book handling and pouring.','搭建基于ROS / Ubuntu的ALOHA双臂遥操作系统，支持抓取、转移、书本操作和倒水等示教任务。'],detail:['Integrated joint feedback, calibration and demonstration execution, and diagnosed synchronization errors through real-robot trials. The related work asks what action arrays preserve, what they leave ambiguous, and what sensing supports an object release decision.','集成关节反馈、标定与示教执行，通过实机测试排查同步误差。关联研究追问动作数组保留了哪些证据、哪些语义仍不明确，以及哪些感知证据足以支持递物释放。'],steps:['ROS · Ubuntu','ALOHA','Calibration','Teleoperation'],links:[['r09',['Imitation data semantics','模仿学习数据语义']],['s12',['Handover & release','递物与释放']],['s05',['Open robot reproducibility','开源机械臂复现']]],context:['Robot learning and manipulation internship','机器人学习与操作实习']},
 {id:'navigation',name:['Autonomous robots','自主机器人'],short:['Perception, planning & control','感知、规划与控制'],org:['Beijing Jiaotong University','北京交通大学'],date:['JUN — AUG 2025','2025.06 — 2025.08'],title:['Closing the perception–control loop','打通感知与控制闭环'],summary:['Developed a host–STM32 architecture combining host-side perception and navigation with embedded sensor acquisition, finite-state logic, PID control and motor execution.','构建上位机—STM32架构，将感知导航与嵌入式传感采集、有限状态逻辑、PID控制和电机执行结合。'],detail:['Tuned thresholds and gains through track tests, and prototyped RGB-D point-cloud perception with RealSense / Open3D. Related papers address the interpretation of motion pauses and the comparability of object-pose evaluations; they are thematic links to this project.','通过循迹测试调整阈值和控制参数，并以RealSense / Open3D开发RGB-D点云感知原型。关联论文讨论运动停顿诊断与物体位姿评估的可比性，二者为主题关联。'],steps:['RealSense · Open3D','FSM','STM32','PID'],links:[['r08',['Motion-pause diagnosis','运动停顿诊断']],['s11',['Occluded object poses','遮挡物体位姿']]],context:['University engineering project','校内工程项目']},
 {id:'uav',name:['Land–air systems','陆空两用系统'],short:['Flight control & sensing','飞控与传感'],org:['Beijing Jiaotong University','北京交通大学'],date:['2024 / 2025 PROJECT COHORTS','2024 / 2025年度项目'],title:['Coordinating terrestrial motion and flight','协调地面运动与飞行'],summary:['Led the 2025 reconfigurable land–air UAV innovation project and participated in the 2024 land–air visual-programming aircraft project. Both university-level projects are recorded as completed.','担任2025年度可重构陆空双域无人机项目负责人，并参与2024年度陆空两用可视编程飞行器项目；两项校级创新训练项目均有结题通过记录。'],detail:['The 2024 engineering work included attitude stabilization, takeoff / landing control, IMU calibration and ground–flight mode switching, coordinating wheel motors, servos and brushless propulsion. The related manuscripts examine sensing and control evidence at source-frame, link and clock boundaries.','2024年的工程工作包括姿态稳定、起降控制、IMU标定和陆空模式切换，协调轮电机、舵机及无刷推进。关联稿件研究源帧、链路及时钟边界上的传感与控制证据。'],steps:['IMU calibration','Sensor fusion','PID tuning','Mode switching'],links:[['r06',['IMU correspondence','IMU源帧对应']],['r10',['Link integrity','链路完整性']],['s10',['Clock synchronization','时钟同步']]],context:['2025 project lead / 2024 member · both completed','2025项目负责人 / 2024项目成员 · 均已结题']}
];


// Selected media from the original project reports and presentations.
// Local provenance is retained outside the public website.
projects.push(
 {id:'biomechanics',name:'Human biomechanics',org:'Chongqing Xingshijie Co., Ltd.',date:'JAN — MAR 2026',title:'Understanding human motion with musculoskeletal simulation',summary:'Used OpenSim musculoskeletal models and MATLAB analysis to study figure-skating spin postures and joint-level loading.',detail:'Project materials include motion-capture marker views, model-scaling settings, sit-spin postures and simplified joint-load calculations. The gallery shows the modelling and analysis workflow documented in the internship report.',steps:['OpenSim','Motion data','MATLAB','Joint-load analysis'],links:[],context:'Human biomechanics and embodied simulation internship'},
 {id:'robotics-course',name:'Robot kinematics & trajectory planning',org:'Beijing Jiaotong University',date:'2025 COURSE PROJECTS',title:'From robot models to planned motion',summary:'Course projects explored Sawyer kinematics, a KR5 assembly task and SCARA trajectory planning, with workspace analysis, joint-motion profiles and simulation demonstrations.',detail:'The materials document robot modelling in MATLAB, workspace sampling, end-effector paths and joint position, velocity and acceleration profiles. These are robotics coursework and team-project materials.',steps:['MATLAB','Robot kinematics','Trajectory planning','Simulation'],links:[],context:'Robotics coursework and team projects'},
 {id:'butterfly',name:'Biomimetic butterfly robot',org:'Beijing Jiaotong University',date:'2025 PROJECT MATERIALS',title:'Building a lightweight flapping-wing prototype',summary:'Contributed to a team project on a butterfly-inspired flying robot, connecting lightweight wing structures, a compact drive mechanism, electronics and wing analysis.',detail:'The project archive includes photographs of wing fabrication, individual components and the assembled wing-and-drive prototype, alongside structural simulation figures.',steps:['Biomimetic design','Wing fabrication','Drive mechanism','Structural analysis'],links:[],context:'Team innovation project'}
);
const projectMedia = {
 "aloha": [
  {
   "src": "assets/projects/aloha-doc-01-08.webp",
   "thumb": "assets/projects/aloha-doc-01-08-thumb.webp",
   "caption": "Bimanual robot setup during the summer practice programme.",
   "kind": "Field photograph",
   "width": 461,
   "height": 346
  },
  {
   "src": "assets/projects/aloha-doc-01-05.webp",
   "thumb": "assets/projects/aloha-doc-01-05-thumb.webp",
   "caption": "Robot arms and the Ubuntu workstation used in the practical session.",
   "kind": "Field photograph",
   "width": 594,
   "height": 334
  },
  {
   "src": "assets/projects/aloha-doc-01-04.webp",
   "thumb": "assets/projects/aloha-doc-01-04-thumb.webp",
   "caption": "The robot workspace and laboratory setup.",
   "kind": "Field photograph",
   "width": 354,
   "height": 473
  },
  {
   "src": "assets/projects/aloha-doc-01-07.webp",
   "thumb": "assets/projects/aloha-doc-01-07-thumb.webp",
   "caption": "Team discussion and hands-on debugging at the workstation.",
   "kind": "Field photograph",
   "width": 467,
   "height": 263
  },
  {
   "src": "assets/projects/aloha-video-005.webp",
   "thumb": "assets/projects/aloha-video-005-thumb.webp",
   "caption": "Robot platform shown in the summer practice documentary.",
   "kind": "Documentary frame",
   "width": 720,
   "height": 960
  },
  {
   "src": "assets/projects/aloha-video-028.webp",
   "thumb": "assets/projects/aloha-video-028-thumb.webp",
   "caption": "A hands-on robot demonstration during the practice programme.",
   "kind": "Documentary frame",
   "width": 720,
   "height": 960
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
   "src": "assets/projects/car-060.webp",
   "thumb": "assets/projects/car-060-thumb.webp",
   "caption": "Vehicle testing on the course track.",
   "kind": "Track test photograph",
   "width": 691,
   "height": 1085
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
   "src": "assets/projects/car-053.webp",
   "thumb": "assets/projects/car-053-thumb.webp",
   "caption": "Embedded hardware and circuit documentation from the team report.",
   "kind": "Circuit diagram",
   "width": 937,
   "height": 833
  },
  {
   "src": "assets/projects/car-058.webp",
   "thumb": "assets/projects/car-058-thumb.webp",
   "caption": "Control logic documented in the embedded-systems project report.",
   "kind": "Control diagram",
   "width": 513,
   "height": 1022
  },
  {
   "src": "assets/projects/car-037.webp",
   "thumb": "assets/projects/car-037-thumb.webp",
   "caption": "Implementation screenshot from the embedded-systems project materials.",
   "kind": "Program screenshot",
   "width": 1290,
   "height": 759
  }
 ],
 "uav": [
  {
   "src": "assets/projects/uav-051.webp",
   "thumb": "assets/projects/uav-051-thumb.webp",
   "caption": "Reconfigurable land–air prototype, photographed in April 2026.",
   "kind": "Prototype photograph · April 2026",
   "width": 1990,
   "height": 1280
  },
  {
   "src": "assets/projects/uav-052.webp",
   "thumb": "assets/projects/uav-052-thumb.webp",
   "caption": "CAD assembly of the ring-wheel platform.",
   "kind": "CAD screenshot",
   "width": 2201,
   "height": 1225
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
   "src": "assets/projects/uav-023.webp",
   "thumb": "assets/projects/uav-023-thumb.webp",
   "caption": "Base-plate design in SolidWorks.",
   "kind": "CAD screenshot",
   "width": 857,
   "height": 646
  },
  {
   "src": "assets/projects/uav-068.webp",
   "thumb": "assets/projects/uav-068-thumb.webp",
   "caption": "Flow-field visualisation around the platform.",
   "kind": "CFD visualisation",
   "width": 651,
   "height": 606
  },
  {
   "src": "assets/projects/uav-073.webp",
   "thumb": "assets/projects/uav-073-thumb.webp",
   "caption": "Structural analysis of the platform components.",
   "kind": "Simulation screenshot",
   "width": 1884,
   "height": 592
  },
  {
   "src": "assets/projects/uav-017.webp",
   "thumb": "assets/projects/uav-017-thumb.webp",
   "caption": "PID control implementation documented in the project presentation.",
   "kind": "Code screenshot",
   "width": 625,
   "height": 705
  },
  {
   "src": "assets/projects/uav-gif-frame.webp",
   "thumb": "assets/projects/uav-gif-frame-thumb.webp",
   "caption": "A frame from the flow-field animation embedded in the project presentation.",
   "kind": "CFD animation frame",
   "width": 1886,
   "height": 914
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
   "src": "assets/projects/opensim-027.webp",
   "thumb": "assets/projects/opensim-027-thumb.webp",
   "caption": "MATLAB calculation and console output from the project materials.",
   "kind": "Program screenshot",
   "width": 2028,
   "height": 1306
  },
  {
   "src": "assets/projects/opensim-028.webp",
   "thumb": "assets/projects/opensim-028-thumb.webp",
   "caption": "Estimated joint-load comparison from the project report.",
   "kind": "Report figure",
   "width": 1785,
   "height": 1140
  }
 ],
 "robotics-course": [
  {
   "src": "assets/projects/robot-sim-038.webp",
   "thumb": "assets/projects/robot-sim-038-thumb.webp",
   "caption": "KR5 model and sampled workspace in MATLAB.",
   "kind": "Course simulation",
   "width": 1234,
   "height": 970
  },
  {
   "src": "assets/projects/robot-sim-007.webp",
   "thumb": "assets/projects/robot-sim-007-thumb.webp",
   "caption": "Sawyer kinematics and joint-trajectory visualisation.",
   "kind": "Course simulation",
   "width": 1551,
   "height": 1002
  },
  {
   "src": "assets/projects/robot-sim-040.webp",
   "thumb": "assets/projects/robot-sim-040-thumb.webp",
   "caption": "Robot configurations along an assembly-task trajectory.",
   "kind": "Course simulation",
   "width": 1925,
   "height": 949
  },
  {
   "src": "assets/projects/robot-sim-049.webp",
   "thumb": "assets/projects/robot-sim-049-thumb.webp",
   "caption": "MATLAB environment used for robot modelling.",
   "kind": "Program screenshot",
   "width": 2150,
   "height": 1376
  },
  {
   "src": "assets/projects/robot-sim-073.webp",
   "thumb": "assets/projects/robot-sim-073-thumb.webp",
   "caption": "Joint position, velocity and acceleration profiles.",
   "kind": "Trajectory plot",
   "width": 1067,
   "height": 842
  },
  {
   "src": "assets/projects/robot-sim-113.webp",
   "thumb": "assets/projects/robot-sim-113-thumb.webp",
   "caption": "Planar projection of the SCARA workspace.",
   "kind": "Workspace plot",
   "width": 568,
   "height": 424
  },
  {
   "src": "assets/projects/robot-sim-116.webp",
   "thumb": "assets/projects/robot-sim-116-thumb.webp",
   "caption": "End-effector paths for the trajectory-planning task.",
   "kind": "Trajectory plot",
   "width": 1391,
   "height": 905
  },
  {
   "src": "assets/projects/robot-sim-140.webp",
   "thumb": "assets/projects/robot-sim-140-thumb.webp",
   "caption": "SCARA task environment in the simulation materials.",
   "kind": "Course simulation",
   "width": 1268,
   "height": 766
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
   "src": "assets/projects/butterfly-012.webp",
   "thumb": "assets/projects/butterfly-012-thumb.webp",
   "caption": "Wing structure and membrane during assembly.",
   "kind": "Build photograph",
   "width": 1014,
   "height": 726
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
   "src": "assets/projects/butterfly-017.webp",
   "thumb": "assets/projects/butterfly-017-thumb.webp",
   "caption": "Fabricated wing membrane and supporting frame.",
   "kind": "Build photograph",
   "width": 839,
   "height": 463
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
   "caption": "Wing stress and displacement analysis in the project presentation.",
   "kind": "Simulation figure",
   "width": 1116,
   "height": 399
  }
 ]
};
const projectMediaNotes = {
 aloha:'Summer practice photographs and documentary frames from July 2024.',
 navigation:'Photographs and technical figures from the STM32 vehicle team project.',
 uav:'CAD, control and analysis materials from the land–air project archive; the prototype photograph is dated April 2026.',
 biomechanics:'Model, program and analysis views reproduced from the biomechanics project report.',
 'robotics-course':'Coursework materials for Sawyer, KR5 and SCARA modelling and motion planning.',
 butterfly:'Build photographs and analysis figures from the team project materials.'
};
const projectVideos = {
 uav:[{src:'assets/projects/uav-flow.mp4',poster:'assets/projects/uav-gif-frame.webp',title:'Flow-field simulation',caption:'CFD animation from the project presentation · 7 seconds'}],
 'robotics-course':[
  {src:'assets/projects/kr5-assembly.mp4',poster:'assets/projects/robot-sim-038.webp',title:'KR5 assembly simulation',caption:'Original course-presentation demonstration · 24 seconds'},
  {src:'assets/projects/scara-motion.mp4',poster:'assets/projects/robot-sim-140.webp',title:'SCARA motion simulation',caption:'Original course-presentation demonstration · 21 seconds'}
 ]
};

const selectedPaperIds=new Set(papers.map(p=>p.id));
projects.forEach(p=>{p.links=p.links.filter(([id])=>selectedPaperIds.has(id))});
Object.assign(projects.find(p=>p.id==='aloha'),{
 name:'Bimanual teleoperation',context:'Robot manipulation intern',
 summary:'Integrated ROS/Ubuntu teleoperation, joint feedback and calibration for an ALOHA bimanual setup.',
 contribution:'Robot integration, demonstration execution and hardware–software debugging.'
});
Object.assign(projects.find(p=>p.id==='navigation'),{
 name:'Autonomous mobile robot',context:'Embedded control · team project',
 summary:'Developed STM32 sensor acquisition, state-machine logic and PID motor control, then tuned the vehicle through track tests.',
 contribution:'Embedded control, sensor integration and track-test iteration.'
});
Object.assign(projects.find(p=>p.id==='uav'),{
 name:'Reconfigurable land–air UAV',context:'2025 project lead · 2024 project member',
 date:'2025–2026 · 2025 PROJECT COHORT',
 summary:'Led the 2025 land–air platform project, connecting mechanical design, sensing and ground–flight control.',
 contribution:'Project coordination and integration across mechanical and control systems.'
});
const projectRecency={deployment:999999,uav:202604,biomechanics:202603,learning:202602,'robotics-course':202500,butterfly:202500,navigation:202508,aloha:202408};
Object.assign(projects.find(p=>p.id==='deployment'),{
 name:'Robot systems & humanoid control SDK',
 summary:'Developing humanoid control interfaces and simulation-to-control workflows.',
 contribution:'Encoder-state APIs, PVT trajectory execution, dynamics interfaces and controller diagnostics.'
});
projectMedia.aloha=[
 {src:'assets/projects/aloha-xiongyule-confirmed.webp',thumb:'assets/projects/aloha-xiongyule-confirmed-thumb.webp',caption:'Xiongyule practising with the bimanual teleoperation setup.',kind:'Personal practice · video frame',width:384,height:306},
 {src:'assets/projects/aloha-xiongyule-practice.webp',thumb:'assets/projects/aloha-xiongyule-practice-thumb.webp',caption:'Hands-on practice at the bimanual robot workstation.',kind:'Practice documentary frame',width:720,height:408},
 ...projectMedia.aloha.filter(m=>m.src.endsWith('aloha-doc-01-04.webp'))
];
projectMediaNotes.aloha='Summer practice, July 2024. Documentary frames are cropped to the active picture, excluding subtitles in the letterbox.';


// Core experience follows the latest supplied CV. The later UAV cohort is separate.
const laterPlatformMedia=projectMedia.uav;
const laterPlatformVideos=projectVideos.uav;
projectMedia.platform2025=laterPlatformMedia;
projectVideos.platform2025=laterPlatformVideos;
projectMedia.uav=[];
delete projectVideos.uav;
projects.push(
 {id:'platform2025',name:'Reconfigurable land–air platform',org:'Beijing Jiaotong University',date:'2025–2026',title:'Reconfigurable land–air platform: 2025 project cohort',summary:'Led the 2025 university innovation project on a reconfigurable land–air platform.',detail:'Part of the 2025 university innovation project cohort, completed in 2026. Materials document mechanical assembly, control implementation and flow-field analysis; the prototype photograph is from April 2026.',steps:['Mechanical design','Platform integration','Control implementation'],links:[],context:'Additional university innovation project · team lead'},
 {id:'thermoelectric',name:'Thermoelectric autonomous vehicle',org:'Beijing Jiaotong University',date:'NOV 2024 — APR 2025',title:'Thermoelectric autonomous vehicle design',summary:'Designed cam and gear transmission mechanisms in SolidWorks and integrated line-following hardware for a thermally powered vehicle.',detail:'My work included mechanical assembly, calibration and system-level debugging. The engineering competition certificate is available in Honors & awards.',steps:['SolidWorks','Cam & gear design','Assembly','System debugging'],links:[],context:'University engineering project'}
);
Object.assign(projectRecency,{platform2025:202604,thermoelectric:202504,uav:202408});
Object.assign(projects.find(p=>p.id==='deployment'),{
 summary:'Developing robot motion control, policy inference and humanoid control SDKs.',
 contribution:'FK/IK and trajectory execution; PyTorch/TensorRT inference; 30+ C++/Python SDK interfaces.',
 detail:'Work includes forward and inverse kinematics for a 7-DoF arm, standard motion paths and taught-waypoint execution; mixed-precision policy-inference evaluation; encoder-state, PVT, dynamics and diagnostic SDK interfaces; and camera–joint-state pairing experiments.',
 steps:['C++ / Python','FK / IK','PyTorch · TensorRT','Robot SDKs']
});
Object.assign(projects.find(p=>p.id==='learning'),{
 name:'Learning-based robotic manipulation',
 summary:'Developed a Python/PyTorch pipeline for simulated grasping, placement and object handoff, with MATLAB/Simulink dynamics and DINOv2/OpenCV visual features.',
 detail:'Explored PPO and SAC policy optimisation for simulated manipulation tasks. The project connects robot dynamics, object-level visual representations and learning-based control.',
 steps:['Python · PyTorch','MATLAB / Simulink','DINOv2 · OpenCV','PPO / SAC']
});
Object.assign(projects.find(p=>p.id==='navigation'),{
 detail:'Integrated colour, ultrasonic and other sensors with STM32 state-machine and PID control logic, and tested the embedded functions with host-computer perception/navigation modules. Iterated sensing thresholds and controller gains through track tests.',
 steps:['STM32','Sensor integration','FSM','PID control']
});
Object.assign(projects.find(p=>p.id==='uav'),{
 name:'Reconfigurable land–air amphibious UAV',date:'MAR — AUG 2024',context:'University engineering project · flight control',
 summary:'Developed and debugged attitude stabilisation, takeoff/landing control and ground–flight mode switching for a land–air UAV.',
 detail:'Refined PID control through whole-platform tests and coordinated hub motors, four independently actuated servos and brushless propulsion.',
 contribution:undefined,steps:['Flight control','PID tuning','Mode switching','Motor coordination']
});
Object.assign(projects.find(p=>p.id==='biomechanics'),{
 name:'Human biomechanics & embodied simulation',
 summary:'Built OpenSim musculoskeletal models and analysed human-motion data for joint forces, loads and kinematic profiles.',
 contribution:'Model construction, motion-data processing and joint-level biomechanical analysis.',
 detail:'Established a simulation workflow for whole-body motion and joint biomechanics, translating the analysis into references for human-motion understanding and embodied simulation.',
 steps:['OpenSim','Motion data','Joint biomechanics','MATLAB']
});
projectMedia.aloha.unshift({src:'assets/projects/aloha-hardware-clear.webp',thumb:'assets/projects/aloha-hardware-clear-thumb.webp',caption:'Bimanual teleoperation hardware during the summer robotics practice.',kind:'Original practice photograph · hardware detail',width:1440,height:700});

const internshipProjectIds = window.INTERNSHIP_PROJECTS.projects.map(p=>p.id);
window.INTERNSHIP_PROJECTS.projects.forEach(p=>{
 const existing=projects.find(item=>item.id===p.id);
 if(existing) Object.assign(existing,p);
 else projects.push(p);
});
Object.assign(projectMedia,window.INTERNSHIP_MEDIA);

let activeMedia = null;

function heading(text,link=''){
 return `<div class="section-heading"><h2>${text}</h2>${link}</div>`;
}
function selectedPaperHTML(p){
 return `<article class="selected-paper" id="selected-${p.id}"><a class="paper-figure" href="${p.pdf}" target="_blank" rel="noopener" aria-label="Read PDF: ${escapeHTML(p.title)}"><img src="assets/${p.id}-figure.png" alt="Figure from ${escapeHTML(p.title)}" width="640" height="320" loading="lazy" decoding="async"></a><div class="paper-description"><h3><button class="title-button" data-paper="${p.id}">${escapeHTML(p.title)}</button></h3><p class="paper-meta">Unpublished manuscript · ${p.year}</p><p class="paper-summary">${escapeHTML(p.display_summary)}</p><div class="paper-links"><a href="${p.pdf}" target="_blank" rel="noopener">[PDF]</a><button data-paper="${p.id}">[Research note]</button><a href="#project-${p.project}">[Project connection]</a></div></div></article>`;
}

function caseStudyHTML(p){
 return p.caseStudy.map(section=>`<section class="case-study-section"><h4>${escapeHTML(section.heading)}</h4>${(section.paragraphs||[]).map(text=>`<p>${escapeHTML(text)}</p>`).join('')}${section.bullets?`<ul>${section.bullets.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul>`:''}</section>`).join('');
}

function projectHTML(p){
 const media=projectMedia[p.id]||[], cover=media[0];
 const videos=projectVideos[p.id]||[];
 const previews=p.caseStudy?`<div class="project-preview-strip" aria-label="More images for ${escapeHTML(t(p.name))}">${media.slice(1,4).map((m,i)=>`<button class="project-image-button" data-project-media="${p.id}" data-media-index="${i+1}" aria-label="Preview image ${i+2}: ${escapeHTML(m.caption)}" aria-haspopup="dialog"><img src="${m.thumb}" alt="${escapeHTML(m.caption)}" width="180" height="120" loading="lazy" decoding="async"></button>`).join('')}</div>`:'';
 const coverHTML=cover?`<figure class="project-cover"><button class="project-image-button" data-project-media="${p.id}" data-media-index="0" aria-label="View photographs and figures: ${escapeHTML(t(p.name))}" aria-haspopup="dialog"><img src="${cover.thumb}" alt="${escapeHTML(cover.caption)}" width="540" height="360" loading="lazy" decoding="async"></button>${previews}</figure>`:'';
 const metrics=p.metrics?`<dl class="project-metrics">${p.metrics.map(m=>`<div><dt>${escapeHTML(m.value)}</dt><dd>${escapeHTML(m.label)}</dd></div>`).join('')}</dl>`:'';
 const detail=p.caseStudy?caseStudyHTML(p):`<p>${t(p.detail)}</p>`;
 const summary=p.caseStudy?`My contributions, results & ${media.length} images`:media.length?`Details & gallery (${media.length} images${videos.length?`, ${videos.length} ${videos.length===1?'video':'videos'}`:''})`:t(['Details & related research','项目细节与关联研究']);
 return `<article class="project-item${p.caseStudy?' internship-project':''}" id="project-${p.id}">
 <div class="project-layout ${cover?'has-media':''}">${coverHTML}<div class="project-copy">
 <div class="project-heading"><h3>${t(p.name)}</h3><span class="date">${t(p.date)}</span></div>
 <p class="project-affiliation">${t(p.org)} · ${t(p.context)}</p><p class="project-summary">${t(p.summary)}</p>
 ${p.contribution?`<p class="project-contribution"><strong>My work:</strong> ${escapeHTML(p.contribution)}</p>`:''}${metrics}
 <details><summary>${summary}</summary><div class="project-details">${detail}<p class="methods">${p.steps.join(' · ')}</p>
 ${p.links.length?`<div class="paper-links">${p.links.map(([id,name])=>`<button data-paper="${id}">[${t(name)}]</button>`).join('')}</div>`:''}</div>
 ${media.length?`<div class="project-gallery" aria-label="${escapeHTML(t(p.name))} image gallery">${media.map((m,i)=>`<figure><button class="project-image-button" data-project-media="${p.id}" data-media-index="${i}" aria-label="View image ${i+1}: ${escapeHTML(m.caption)}" aria-haspopup="dialog"><img src="${m.thumb}" alt="${escapeHTML(m.caption)}" width="540" height="360" loading="lazy" decoding="async"></button></figure>`).join('')}</div>`:''}
 ${videos.length?`<div class="project-videos">${videos.map(v=>`<figure><video controls playsinline preload="none" poster="${v.poster}" aria-label="${v.title}"><source src="${v.src}" type="video/mp4">Your browser does not support embedded video. <a href="${v.src}">Download the demonstration</a>.</video><figcaption>${v.title}</figcaption></figure>`).join('')}</div>`:''}
 </details></div></div></article>`;
}
function openProjectMedia(id,index=0){
 const media=projectMedia[id], project=projects.find(p=>p.id===id);
 if(!media||!project)return;
 index=(Number(index)+media.length)%media.length;
 activeMedia={id,index};
 const item=media[index],dialog=document.getElementById('paper-dialog');
 dialog.innerHTML=`<div class="dialog-body media-dialog"><button class="close-dialog" data-close aria-label="Close project image">×</button><p class="eyebrow">${escapeHTML(item.kind)} · ${index+1} / ${media.length}</p><h2 id="dialog-title">${escapeHTML(t(project.name))}</h2><figure class="media-figure"><img src="${item.src}" alt="${escapeHTML(item.caption)}" width="${item.width}" height="${item.height}"><figcaption>${escapeHTML(item.caption)}</figcaption></figure><div class="media-navigation"><button class="button outline" data-media-step="-1" aria-label="Previous project image">← Previous</button><a href="${item.src}" target="_blank" rel="noopener">Open image ↗</a><button class="button outline" data-media-step="1" aria-label="Next project image">Next →</button></div></div>`;
 if(!dialog.open){dialog.showModal();document.body.style.overflow='hidden'}
 else dialog.querySelector('[data-media-step="1"]').focus({preventScroll:true});
}

function render(){
 document.documentElement.lang='en';
 document.title='Xiongyule Zhou | Robotics & Learning';
 const orderedProjects=[...internshipProjectIds.map(id=>projects.find(p=>p.id===id)),...projects.filter(p=>!internshipProjectIds.includes(p.id)).sort((a,b)=>projectRecency[b.id]-projectRecency[a.id])];
 document.getElementById('site').innerHTML=`
 <header class="header"><div class="page-width header-inner"><a class="brand" href="#about">Xiongyule Zhou</a><nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#selected">Research</a><a href="#experience">Experience</a><a href="#awards">Honors</a></nav></div></header>
 <main id="main" class="page-width">
 <section id="about" class="profile">
 <div class="profile-copy"><h1>Xiongyule Zhou</h1><p class="profile-role">Mechatronics Engineering · Beijing Jiaotong University<br>B.Eng., expected 2027 <span class="profile-credentials">GPA 3.67/4.0 · IELTS 7.5</span></p>
 <p class="profile-intro">I work on <strong>robot learning, visual manipulation and reliable robot systems</strong>. Currently, I am an embodied AI software engineering intern at <a href="#internship-projects">Anyverse Technology</a>, working on robot motion control, policy inference and humanoid control SDKs.</p>
 <div class="profile-links"><a href="assets/Xiongyule_Zhou_CV.pdf" target="_blank" rel="noopener">Curriculum vitae</a><span>/</span><a href="mailto:jensenzhou47@gmail.com">Email</a><span>/</span><a href="#selected">Selected research</a></div></div>
 <figure class="profile-photo" data-photo-slot><img src="${escapeHTML(profile.photo||'assets/portrait-placeholder.svg')}" alt="Portrait of Xiongyule Zhou" width="240" height="300" fetchpriority="high" decoding="async"></figure></section>
 <section id="projects" class="academic-section projects-first">${heading('Selected engineering projects')}<p class="internship-intro">My current work at Anyverse connects robot-policy inference, visual–proprioceptive data and real-arm execution.</p>
 <div id="internship-projects" class="internship-projects projects-list">${orderedProjects.map(projectHTML).join('')}</div></section>
 <section id="selected" class="academic-section"><span id="library" class="anchor-target" aria-hidden="true"></span>${heading('Selected research manuscripts')}<div class="selected-list">${papers.map(selectedPaperHTML).join('')}</div><details class="manuscript-status"><summary>Manuscript status</summary><p>These are draft retrospective studies. Original PDFs are unchanged; author metadata remains pending final confirmation. Project connections are thematic.</p></details></section>
 <section id="experience" class="academic-section">${heading('Education & experience')}<div class="timeline">${experienceHTML()}</div></section>
  <section id="awards" class="academic-section">${heading('Honors & awards')}${awardRows()}</section>
 <section id="skills" class="academic-section supplementary"><div>${heading(t(['Methods & tools','方法与工具']))}<p><strong>${t(['Programming:','编程：'])}</strong> Python · C / C++ · MATLAB</p><p><strong>${t(['Robotics:','机器人：'])}</strong> ROS / ROS 2 · STM32 · PID · FK / IK</p><p><strong>${t(['Learning & perception:','学习与感知：'])}</strong> PyTorch · TensorRT · OpenCV · DINOv2</p><p><strong>${t(['Simulation:','仿真：'])}</strong> Isaac Sim / Lab · MuJoCo · Simulink · OpenSim · SolidWorks</p></div><div>${heading(t(['Beyond research','科研之外']))}<p>${t(['I captain the School of Mechanical Engineering basketball team and helped lead the team to a top-four university finish. I also worked on campus photography and video production as a deputy director at the University Arts Center.','担任机械工程学院篮球队队长，组织训练与赛事，带队获校级比赛四强。曾任校团委文化艺术中心副部长，参与校园摄影与视频制作。'])}</p></div></section>

 <footer id="contact"><p><a href="mailto:jensenzhou47@gmail.com">jensenzhou47@gmail.com</a><span> · </span><a href="assets/Xiongyule_Zhou_CV.pdf" target="_blank" rel="noopener">CV</a><span> · </span><a href="#about">Back to top</a></p><p>© 2026 Xiongyule Zhou · Updated October 2026</p></footer></main>`;
}

function experienceHTML(){
 const items=[
 [['AUG 2026 — PRESENT','2026.08 — 至今'],'Anyverse Technology',['Software Engineer Intern · Embodied AI','具身智能软件工程实习生'],['C++ robot motion control, mixed-precision policy inference, humanoid SDK interfaces and camera–joint data pairing.','C++机器人运动控制、混合精度策略推理、人形机器人SDK接口及图像—关节数据配对。']],
 [['JAN — MAR 2026','2026.01 — 03'],'Chongqing Xingshijie Co., Ltd.',['Human Biomechanics & Embodied Simulation Intern','人体生物力学与具身仿真实习生'],['OpenSim musculoskeletal models, human-motion datasets and joint-level load analysis for motion understanding and embodied simulation.','使用OpenSim建立肌肉骨骼模型，分析人体动作数据与关节载荷，服务运动理解和具身仿真。']],
 [['JUL — AUG 2024','2024.07 — 08'],'Csoft',['Robot Learning and Manipulation Intern','机器人学习与操作实习生'],['ROS / ALOHA bimanual teleoperation, calibration, demonstration execution and real-robot integration.','ROS / ALOHA双臂遥操作、标定、示教执行及实机集成。']],
 [['2023 — 2027','2023 — 2027'],['Beijing Jiaotong University','北京交通大学'],['B.Eng. in Mechatronics Engineering · expected 2027','机械电子工程 · 工学学士，预计2027年毕业'],['Coursework includes artificial intelligence, robotics, control theory, embedded systems and signals and systems.','相关课程包括人工智能、机器人技术、控制理论、嵌入式系统及信号与系统。']]
 ];return items.map(x=>`<article class="experience-item"><div class="date">${t(x[0])}</div><div><h3>${t(x[1])}</h3><div class="role">${t(x[2])}</div><p>${t(x[3])}</p></div></article>`).join('');
}
function awardRows(){
 const awards=[
 {year:2026,order:1,date:'2025–26<br>2024–25',name:'Academic Excellence Scholarship',detail:'Third class · Beijing Jiaotong University'},
 {year:2026,order:2,date:'2025–26<br>2024–25',name:'Scholarship for Outstanding Social Work',detail:'Third class · Beijing Jiaotong University'},
 {year:2026,order:3,date:'2025–26<br>2024–25<br>2023–24',name:'Outstanding Communist Youth League Member',detail:'Three academic years · Beijing Jiaotong University'},
 {year:2025,order:1,date:'2025',name:'Mechanical Innovation Competition · Third Prize',detail:'Beijing Jiaotong University'},
 {year:2025,order:2,date:'2025',name:'Vocabulary Competition · Campus First Prize',detail:'Beijing Jiaotong University'},
 {year:2025,order:3,date:'MAR 2025',name:'Second Prize, Beijing College Students Engineering Practice and Innovation Competition',detail:'Thermoelectric vehicle event',certificate:'assets/engineering-award.jpg'},
 {year:2024,order:1,date:'2023–24',name:'Sports Activity Scholarship',detail:'Second class · Beijing Jiaotong University'}
 ];
 return awards.sort((a,b)=>b.year-a.year||a.order-b.order).map(a=>`<article class="award-row"><span class="date">${a.date}</span><div><h3>${a.name}</h3><p>${a.detail}${a.certificate?` <a href="${a.certificate}" target="_blank" rel="noopener">[Certificate]</a>`:''}</p></div></article>`).join('');
}

function openPaper(id){
 activeMedia=null;
 const p=papers.find(x=>x.id===id);if(!p)return;
 const project=projects.find(x=>x.id===p.project);
 const status=p.status?t(['Under Review at IEEE Access — local record, 15 October 2026. Not a live status check.','IEEE Access在审——依据2026年10月15日本地记录，未实时查验。']):t(label.status);
 const dialog=document.getElementById('paper-dialog');
 dialog.innerHTML=`<div class="dialog-body"><button class="close-dialog" data-close aria-label="${t(['Close research note','关闭研究解读'])}">×</button><div class="eyebrow">${p.id.toUpperCase()} / ${kind(p)} / ${p.pages}${t([' PAGES','页'])}</div><h2 id="dialog-title">${escapeHTML(title(p))}</h2>${lang==='zh'?`<div class="original-title">${escapeHTML(p.title)}</div>`:''}<div class="dialog-status">${status}</div>${[[t(['Research question & approach','研究问题与方法']),t(p.summary)],[t(['Evidence & contribution','证据与贡献']),t(p.finding)],[t(['Interpretation & limitations','解释与边界']),t(p.limit)]].map(([h,b])=>`<section class="dialog-part"><h3>${h}</h3><p>${b}</p></section>`).join('')}<section class="dialog-part"><h3>${t(['Project connection','项目关联'])}</h3><p>${t(project.title)} · ${t(['Thematic connection; experimental provenance is described in the manuscript itself.','主题关联；具体实验来源以论文自身说明为准。'])}</p></section><div class="dialog-actions"><a class="button" href="${p.pdf}" target="_blank" rel="noopener">${t(label.pdf)}</a>${p.tables?`<a class="button outline" href="${p.tables}" target="_blank" rel="noopener">${t(['Main Tables I–III ↗','独立主表I–III ↗'])}</a>`:''}<button class="button outline" data-reference="${p.id}">${t(['Copy reference','复制引用'])}</button></div>${p.type==='research'?`<p class="author-note">${t(['The supplied manuscript retains author metadata pending final confirmation. The PDF is provided unchanged.','原稿作者信息仍待最终确认；网站所附PDF保持原始字节不变。'])}</p>`:''}</div>`;
 if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden';
}
function toast(message){const e=document.getElementById('toast');e.textContent=message;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2500)}
async function copyReference(id){
 const p=papers.find(x=>x.id===id);const reference=`${p.title}. (2026). ${p.type==='review'?'Unpublished review manuscript':'Unpublished research manuscript'}. ${new URL(p.pdf,location.href).href}`;
 try{await navigator.clipboard.writeText(reference);toast(t(['Reference copied','引用已复制']))}catch{const input=document.createElement('textarea');input.value=reference;input.style.position='fixed';input.style.opacity='0';document.getElementById('paper-dialog').append(input);input.select();const ok=document.execCommand('copy');input.remove();toast(ok?t(['Reference copied','引用已复制']):t(['Copy is unavailable in this browser','当前浏览器无法自动复制']))}
}

document.addEventListener('click',e=>{
 const b=e.target.closest('[data-paper],[data-close],[data-reference],[data-project-media],[data-media-step]');if(!b)return;
 if(b.dataset.projectMedia)openProjectMedia(b.dataset.projectMedia,b.dataset.mediaIndex);
 if(b.dataset.mediaStep&&activeMedia)openProjectMedia(activeMedia.id,activeMedia.index+Number(b.dataset.mediaStep));
 if(b.dataset.paper)openPaper(b.dataset.paper);
 if(b.hasAttribute('data-close'))document.getElementById('paper-dialog').close();
 if(b.dataset.reference)copyReference(b.dataset.reference);
});
const dialog=document.getElementById('paper-dialog');
dialog.addEventListener('close',()=>{document.body.style.overflow='';activeMedia=null});
dialog.addEventListener('keydown',e=>{if(activeMedia&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){e.preventDefault();openProjectMedia(activeMedia.id,activeMedia.index+(e.key==='ArrowRight'?1:-1))}});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.addEventListener('toggle',e=>{if(e.target.matches?.('details')&&!e.target.open)e.target.querySelectorAll('video').forEach(v=>v.pause())},true);
render();
