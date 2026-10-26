window.PORTFOLIO = {
  "papers": [
    {
      "id": "r01",
      "source": "1-01",
      "title": "Pose coverage and held-out image validation for multi-camera robot calibration",
      "zh": "多相机机器人标定：位姿覆盖与留出图像验证",
      "type": "research",
      "topics": [
        "perception",
        "systems"
      ],
      "featured": true,
      "project": "deployment",
      "summary": [
        "Reconstructs archived camera images to examine how pose coverage, solver choice and pixel refinement affect calibration evidence.",
        "重建历史相机图像，比较位姿覆盖、求解器与像素优化对标定结果及验证结论的影响。"
      ],
      "finding": [
        "36 camera-session panels across eight robot archives; 6,383 accepted images and 14,832 subset fits.",
        "覆盖8组机器人档案、36个相机—会话组合，重建6,383张有效图像并完成14,832次子集拟合。"
      ],
      "limit": [
        "Historical holdouts were previously inspected. Internal consistency does not establish external positioning accuracy or synchronized camera-network calibration.",
        "历史留出集曾被查看；内部一致性不能直接证明外部定位精度，也不代表完成同步多相机网络标定。"
      ],
      "pdf": "papers/r01.pdf",
      "pages": 13,
      "year": 2026,
      "tables": "papers/r01-tables.pdf"
    },
    {
      "id": "r02",
      "source": "1-02",
      "title": "Mixed-Precision Robot Policy Inference: A Retrospective Evaluation of Numerical Fidelity, Latency, and Resource Costs",
      "zh": "机器人策略混合精度推理：数值保真、时延与资源成本",
      "type": "research",
      "topics": [
        "learning",
        "systems"
      ],
      "featured": true,
      "project": "deployment",
      "summary": [
        "Compares saved policy outputs, historical timing records and resource counters to examine the costs of mixed-precision deployment.",
        "结合策略输出、历史计时和资源记录，分析混合精度部署中的速度、数值一致性与资源代价。"
      ],
      "finding": [
        "One four-camera replay retained aggregate cosine 0.999999645, yet its maximum nominal left-flange discrepancy reached 4.867 mm.",
        "一组四相机回放的整体余弦相似度达到0.999999645，但名义左法兰位置最大偏差仍达4.867 mm。"
      ],
      "limit": [
        "Recorded call latency is not a complete control-loop deadline; nominal kinematics do not establish physical task success or safety.",
        "历史调用时延不等于完整控制闭环时延；名义运动学分析不直接证明实机任务成功率或安全性。"
      ],
      "pdf": "papers/r02.pdf",
      "pages": 13,
      "year": 2026
    },
    {
      "id": "r03",
      "source": "1-03",
      "title": "Temporal Validity of Robotic Camera Observations: Host Update Age and Image–Joint Timestamp Audits",
      "zh": "机器人相机观测的时间有效性：更新年龄与图像—关节时间戳审计",
      "type": "research",
      "topics": [
        "perception",
        "systems"
      ],
      "project": "deployment",
      "summary": [
        "Separates host update age, header alignment and recorder-order availability when auditing camera and joint observations.",
        "区分主机更新年龄、消息头时间对齐及记录顺序中的可用性，审计相机与关节观测的时间关系。"
      ],
      "finding": [
        "Audits original and extended long-duration records alongside 24 image–joint archives from three historical sessions.",
        "联合审计长期运行记录，以及来自3次历史会话的24组图像—关节档案。"
      ],
      "limit": [
        "Exposure time and consumer timing remain necessary for full observation-validity claims.",
        "完整的观测有效性结论仍需要曝光时刻和使用端计时证据。"
      ],
      "pdf": "papers/r03.pdf",
      "pages": 20,
      "year": 2026
    },
    {
      "id": "r04",
      "source": "1-04",
      "title": "A protocol for qualifying robot telemetry before interpreting motion metrics",
      "zh": "解释运动指标前的机器人遥测证据核验方法",
      "type": "research",
      "topics": [
        "systems"
      ],
      "project": "deployment",
      "summary": [
        "An offline method checks signal meaning, required events and observation coverage before attaching physical interpretations to telemetry summaries.",
        "在解释遥测统计量前，离线检查信号含义、必要事件和观测覆盖，并比较等样本预算下的采样配置。"
      ],
      "finding": [
        "Worked applications use 15 archived waist records and all 50 episodes / 55,000 numeric rows of a public ALOHA dataset.",
        "方法示例使用15组腰部档案，以及公开ALOHA数据集的全部50个回合、55,000行数值记录。"
      ],
      "limit": [
        "A computable recorded-data statistic does not itself establish activation response, reference tracking or source freshness.",
        "能计算记录中的统计量，不等于已有激活响应、参考跟踪或源数据新鲜度证据。"
      ],
      "pdf": "papers/r04.pdf",
      "pages": 8,
      "year": 2026
    },
    {
      "id": "r05",
      "source": "1-05",
      "title": "Field-Specific Evidence Contracts for Robot Feedback Monitoring: A Retrospective Multi-Schema Study",
      "zh": "面向机器人反馈监测的字段级证据契约",
      "type": "research",
      "topics": [
        "systems"
      ],
      "featured": true,
      "project": "deployment",
      "summary": [
        "An executable contract declares required joints, fields, flags, units and clock continuity, returning property-specific results with explicit abstention.",
        "将关节、字段、生产端标志、单位及时间连续性写入可执行契约，对不同性质分别判定，并在证据不足时保留不确定结论。"
      ],
      "finding": [
        "One validator spans four schema families. Field-specific checks retain finite arm inputs in 54,897 messages rejected by a message-wide check.",
        "同一验证器覆盖4类数据模式；字段级检查保留了54,897条被整消息检查拒绝、但机械臂输入仍有限有效的消息。"
      ],
      "limit": [
        "The records lack physical fault labels; diagnostic accuracy, physical acquisition freshness and root cause remain unverified.",
        "档案缺少物理故障标签；诊断准确率、真实采集新鲜度及根因尚未验证。"
      ],
      "pdf": "papers/r05.pdf",
      "pages": 19,
      "year": 2026
    },
    {
      "id": "r06",
      "source": "1-06",
      "title": "Auditing source correspondence and observation coverage in robot IMU snapshot logs",
      "zh": "机器人IMU快照日志的源帧对应与观测覆盖审计",
      "type": "research",
      "topics": [
        "systems"
      ],
      "project": "uav",
      "summary": [
        "Checks source packets and order-preserving payload correspondences while distinguishing repeated snapshots, internal omissions and capture-edge frames.",
        "核验源数据包及保序内容对应关系，区分重复快照、内部观测遗漏与采集边界帧。"
      ],
      "finding": [
        "Four paired historical captures contain 4,378 source frames and 20,835 application reads; short-sequence checks compare two independent implementations.",
        "4组配对历史采集包含4,378个源帧和20,835次应用读取，并通过短序列对照核验实现行为。"
      ],
      "limit": [
        "Offline correspondence checks do not establish sensor accuracy, internal delivery causality or dynamic repeatability.",
        "离线对应核验不能直接证明传感器精度、内部传输因果或动态可重复性。"
      ],
      "pdf": "papers/r06.pdf",
      "pages": 8,
      "year": 2026
    },
    {
      "id": "r07",
      "source": "1-07",
      "title": "CPU overhead and frame freshness in a robot perception pipeline with five cameras",
      "zh": "五相机机器人感知流水线的CPU开销与帧新鲜度",
      "type": "research",
      "topics": [
        "perception",
        "systems"
      ],
      "project": "deployment",
      "summary": [
        "Examines shared-memory versus UDP transport, conversion settings, matched preview delays and observer overhead in a deployed perception pipeline.",
        "比较部署中的共享内存与UDP传输、转换配置、预览帧时延及监测开销。"
      ],
      "finding": [
        "Reanalyzes 30 fixed-order runs from five historical batches; lower camera-process CPU does not eliminate preview delay.",
        "重新分析5批历史测试的30次固定顺序运行；相机进程CPU降低并不意味着预览时延消失。"
      ],
      "limit": [
        "Evidence comes from one robot with fixed-order runs and incomplete long-duration monitoring; it does not establish policy success.",
        "证据来自单台机器人和固定顺序运行，部分长期监测不完整，不能直接推导策略成功率。"
      ],
      "pdf": "papers/r07.pdf",
      "pages": 13,
      "year": 2026
    },
    {
      "id": "r08",
      "source": "1-08",
      "title": "A reproducible workflow for cross-layer diagnosis of mobile robot motion pauses",
      "zh": "移动机器人运动停顿的可复现跨层诊断流程",
      "type": "research",
      "topics": [
        "systems"
      ],
      "project": "navigation",
      "summary": [
        "Aligns motion, command, queue and avoidance-state records to test a specific explanation and document where causal attribution must stop.",
        "对齐运动、指令、队列及避障状态，检验指定解释，并明确因果归因的证据边界。"
      ],
      "finding": [
        "Four primary runs contain seven pause intervals and 1,304 acknowledged commands; the specified queue-to-stale-feedback progression was not observed.",
        "4次主要运行包含7段停顿和1,304条获确认指令，未观察到指定的队列增长至反馈陈旧这一演变过程。"
      ],
      "limit": [
        "Each condition has one fixed-order run. The workflow does not assign a physical root cause or establish diagnostic performance.",
        "各条件仅有一次固定顺序运行；流程未确定物理根因，也未验证诊断性能。"
      ],
      "pdf": "papers/r08.pdf",
      "pages": 12,
      "year": 2026
    },
    {
      "id": "r09",
      "source": "1-09",
      "title": "Action semantics and timing provenance in robot imitation learning data",
      "zh": "机器人模仿学习数据中的动作语义与时间来源",
      "type": "research",
      "topics": [
        "learning",
        "systems"
      ],
      "featured": true,
      "project": "aloha",
      "summary": [
        "Audits whether robot demonstration exports preserve the evidence needed to interpret action arrays, source timing and controller meaning.",
        "审计示教数据导出后，动作数组、源时间及控制语义所需证据是否仍被保留。"
      ],
      "finding": [
        "The retrospective source/context corpus contains 1,298 episodes and 664,369 rows, alongside a paired 697-episode export.",
        "历史源数据及上下文语料包含1,298个回合、664,369行记录，并核对697个回合的配对导出。"
      ],
      "limit": [
        "Bitwise preservation of arrays does not prove acquisition semantics or downstream policy quality; this is an archival audit.",
        "数组逐位一致不能证明采集语义完整或下游策略质量；研究属于历史档案审计。"
      ],
      "pdf": "papers/r09.pdf",
      "pages": 21,
      "year": 2026
    },
    {
      "id": "r10",
      "source": "1-10",
      "title": "Verifying Robot IMU Link Integrity beyond Packet Liveness",
      "zh": "超越消息存活：机器人IMU链路完整性验证",
      "type": "research",
      "topics": [
        "systems"
      ],
      "project": "uav",
      "summary": [
        "Separates valid packets, continuing feedback and evidence of accepted sensor samples through source–return payload comparisons.",
        "通过输入与返回载荷对照，区分数据包有效、反馈持续发布和传感器样本被接纳的证据。"
      ],
      "finding": [
        "Four complete captures contain 121,658 valid inputs and 40,380 valid returns, with temporal holdouts and a third-controller historical replay.",
        "4组完整采集包含121,658个有效输入与40,380个有效返回，并使用时间留出及第三控制器历史回放检验。"
      ],
      "limit": [
        "Unexplained end-of-session intervals bound the reconstructed mechanism; acceptance evidence is distinct from physical sensor accuracy.",
        "会话末仍有未解释区间，限制了机制重建的范围；接纳证据不同于传感器物理精度。"
      ],
      "pdf": "papers/r10.pdf",
      "pages": 18,
      "year": 2026
    },
    {
      "id": "s01",
      "source": "2-01",
      "title": "Data-Efficient Real-World Robotic Manipulation: A Critical Review of Data Collection, Augmentation, Adaptation, and Generalization",
      "zh": "数据高效的真实世界机器人操作：采集、增强、适应与泛化综述",
      "type": "review",
      "topics": [
        "learning"
      ],
      "featured": true,
      "project": "learning",
      "summary": [
        "Organizes manipulation studies by which resources they substitute, distinguishing fewer target demonstrations from lower total system cost.",
        "按资源替代方式组织机器人操作研究，区分目标任务示范减少与系统总成本降低。"
      ],
      "finding": [
        "An 88-work corpus supports resource accounting, conditional comparisons and a diagnosis-led physical-validation proposal.",
        "基于88项文献构建资源核算、条件化比较和诊断驱动的实机验证建议。"
      ],
      "limit": [
        "A structured critical review with selective coverage; the proposed physical-validation protocol was not executed as new robot experiments.",
        "属于选择性覆盖的结构化批判综述；文中提出的实机验证方案未作为新机器人实验执行。"
      ],
      "pdf": "papers/s01.pdf",
      "pages": 30,
      "year": 2026
    },
    {
      "id": "s02",
      "source": "2-02",
      "title": "Reliable Generalist Robot Policies for Manipulation: A Survey of Robustness Evaluation, Failure Detection, Recovery, and Continual Improvement",
      "zh": "可靠通用机器人策略：鲁棒性、故障检测、恢复与持续改进综述",
      "type": "review",
      "topics": [
        "learning",
        "systems"
      ],
      "featured": true,
      "project": "learning",
      "status": "review-record",
      "summary": [
        "Connects failure occurrence, observable evidence, timely alarms, recoverability and recovery outcomes in a reliability framework.",
        "将失败发生、可观察证据、及时报警、可恢复性及恢复结果连接为可靠性分析框架。"
      ],
      "finding": [
        "Maps 88 works, including 51 full-text-coded studies, and examines reporting completeness across five representative systems.",
        "整理88项文献，其中51项进行全文编码，并比较5个代表系统的报告完整性。"
      ],
      "limit": [
        "Framework and literature reanalysis, without a new robot-policy benchmark. The local portal record showed Under Review on 15 October 2026; acceptance is not established.",
        "属于分析框架与文献再分析，未建立新的实机策略基准。本地2026年10月15日记录显示Under Review，不代表录用。"
      ],
      "pdf": "papers/s02.pdf",
      "pages": 19,
      "year": 2026
    },
    {
      "id": "s03",
      "source": "2-03",
      "title": "Locking and Low Energy Holding in Soft and Hybrid Robotic Grippers",
      "zh": "软体与混合机器人夹爪的锁定及低能耗保持",
      "type": "review",
      "topics": [
        "systems"
      ],
      "project": "aloha",
      "summary": [
        "Separates load-retention mechanisms from supply dependence, comparing locking, bistability, jamming and release requirements.",
        "区分载荷保持机制与持续供能依赖，比较自锁、双稳态、阻塞及释放条件。"
      ],
      "finding": [
        "A two-axis framework and cycle-energy balance expose where transition costs can outweigh holding savings.",
        "双轴分类与完整周期能量平衡揭示：状态切换成本可能抵消保持阶段的节能。"
      ],
      "limit": [
        "No universal payload or energy ranking is inferred from studies with unmatched operating conditions.",
        "不将运行条件不一致的研究汇总为统一载荷或能耗排名。"
      ],
      "pdf": "papers/s03.pdf",
      "pages": 17,
      "year": 2026
    },
    {
      "id": "s04",
      "source": "2-04",
      "title": "Measuring End to End Latency in Robotic Edge Vision: A Critical Review of Timing Boundaries and Public Deployment Evidence",
      "zh": "机器人边缘视觉的端到端时延：计时边界与部署证据综述",
      "type": "review",
      "topics": [
        "perception",
        "systems"
      ],
      "project": "deployment",
      "summary": [
        "Distinguishes engine execution, host processing, acquisition-to-result delay and physical-event response.",
        "区分引擎执行、主机处理、采集至结果及物理事件响应四类计时边界。"
      ],
      "finding": [
        "A quantitative core of ten public reports informs a four-gate procedure for checking whether latency results are comparable.",
        "以10份公开报告为定量证据核心，提出检验时延结果可比性的四道检查。"
      ],
      "limit": [
        "Different timing boundaries and operating conditions prevent direct hardware rankings or guaranteed control deadlines.",
        "不同计时边界与运行条件不能直接用于硬件排名或控制时限保证。"
      ],
      "pdf": "papers/s04.pdf",
      "pages": 16,
      "year": 2026
    },
    {
      "id": "s05",
      "source": "2-05",
      "title": "Reproducibility conditions for open desktop robot arms",
      "zh": "开源桌面机械臂的可复现条件",
      "type": "review",
      "topics": [
        "systems"
      ],
      "project": "aloha",
      "summary": [
        "Traces reproducibility through mechanical design, procurement, assembly, commissioning, licensing and measured behavior.",
        "从机械设计、采购、装配、调试、许可到性能证据，分析机械臂复现所需条件。"
      ],
      "finding": [
        "Compares eight project families through a seven-domain framework anchored to public papers and versioned project artifacts.",
        "基于公开论文与有版本锚点的项目材料，通过七领域框架比较8个项目系列。"
      ],
      "limit": [
        "Public artifact availability is separate from demonstrated reconstruction and experimental replication.",
        "公开材料可获取，不等于已经完成重建或实验复现。"
      ],
      "pdf": "papers/s05.pdf",
      "pages": 16,
      "year": 2026
    },
    {
      "id": "s06",
      "source": "2-06",
      "title": "Model updating and data interfaces for industrial robot digital twins",
      "zh": "工业机器人数字孪生的模型更新与数据接口",
      "type": "review",
      "topics": [
        "systems"
      ],
      "project": "deployment",
      "summary": [
        "Distinguishes live state synchronization from geometry revision, physical parameter identification and learned model updates.",
        "区分实时状态同步、几何配置修订、物理参数辨识及学习模型更新。"
      ],
      "finding": [
        "Ten representative implementations are examined through an update–interface–evidence framework.",
        "通过更新—接口—证据框架比较10个代表实现。"
      ],
      "limit": [
        "Communication performance, calibration accuracy and downstream task performance support different claims.",
        "通信性能、标定精度和下游任务性能分别支持不同的结论。"
      ],
      "pdf": "papers/s06.pdf",
      "pages": 22,
      "year": 2026
    },
    {
      "id": "s07",
      "source": "2-07",
      "title": "Configuration and Reproducibility Reporting in Public Robot Manipulation Simulation Benchmarks",
      "zh": "公开机器人操作仿真基准的配置与可复现性报告",
      "type": "review",
      "topics": [
        "learning",
        "systems"
      ],
      "project": "learning",
      "summary": [
        "Examines software versions, robot models, control interfaces, randomness, task settings and evaluation configuration.",
        "检查软件版本、机器人模型、控制接口、随机性及任务评估配置。"
      ],
      "finding": [
        "Compares ten benchmark/framework entries, retaining immutable repository commits for source-level observations.",
        "比较10个基准或框架条目，使用不可变仓库提交锚定源码层面的观察。"
      ],
      "limit": [
        "Available configuration mechanisms do not establish which settings an experiment used or whether it was executed.",
        "存在配置机制，不等于知道某项实验实际使用了哪些设置，也不证明实验已执行。"
      ],
      "pdf": "papers/s07.pdf",
      "pages": 13,
      "year": 2026
    },
    {
      "id": "s08",
      "source": "2-08",
      "title": "Grounding and validation in language interfaces for symbolic robot task planning",
      "zh": "符号机器人任务规划语言接口中的落地与验证",
      "type": "review",
      "topics": [
        "learning"
      ],
      "project": "learning",
      "summary": [
        "Compares what language interfaces emit, how objects are bound, where preconditions live, who validates results and how feedback changes plans.",
        "比较语言接口输出、对象绑定、前置条件、验证主体及反馈如何改变规划。"
      ],
      "finding": [
        "Connects goal/domain compilation, program generation and skill selection with monitoring and model repair.",
        "将目标或领域编译、程序生成、技能选择与执行监测及模型修复联系起来。"
      ],
      "limit": [
        "A valid plan or well-typed skill call does not certify a correctly grounded goal, object or physical action.",
        "规划有效或技能调用类型正确，不能保证目标、对象与物理动作落地正确。"
      ],
      "pdf": "papers/s08.pdf",
      "pages": 22,
      "year": 2026
    },
    {
      "id": "s09",
      "source": "2-09",
      "title": "Object State Maintenance in 3D Scene Graphs for Robotic Manipulation",
      "zh": "机器人操作中三维场景图的对象状态维护",
      "type": "review",
      "topics": [
        "perception",
        "learning"
      ],
      "project": "learning",
      "summary": [
        "Organizes scene-state maintenance into association, state estimation, invalidation, dependency repair and verification.",
        "将场景状态维护划分为关联、状态估计、失效处理、依赖修复及验证。"
      ],
      "finding": [
        "Connects open-vocabulary mapping, dynamic reconstruction, interactive exploration and articulated-object modeling.",
        "联系开放词汇建图、动态重建、交互探索和关节物体建模。"
      ],
      "limit": [
        "Representational capacity is distinct from evaluated behavior; complementary systems are not interchangeable solutions.",
        "表示能力不同于已评估行为；互补系统不能直接视为可替换方案。"
      ],
      "pdf": "papers/s09.pdf",
      "pages": 17,
      "year": 2026
    },
    {
      "id": "s10",
      "source": "2-10",
      "title": "Clock Synchronization for Networked Robotic Sensor Systems from Packet Timestamps to Acquisition Events",
      "zh": "网络化机器人传感系统的时钟同步：从包时间戳到采集事件",
      "type": "review",
      "topics": [
        "perception",
        "systems"
      ],
      "project": "uav",
      "summary": [
        "Follows timing through network synchronization, local clock mapping, sensor triggers and temporal calibration.",
        "沿网络同步、局部时钟映射、传感器触发及时间标定追踪计时边界。"
      ],
      "finding": [
        "A boundary-based classification and explicit error budget connect acquisition requirements to available evidence.",
        "通过基于边界的分类和显式误差预算，连接采集要求与可获得的证据。"
      ],
      "limit": [
        "Agreement between network clocks does not itself establish agreement between physical acquisition events.",
        "网络时钟一致本身并不能证明物理采集事件同步。"
      ],
      "pdf": "papers/s10.pdf",
      "pages": 19,
      "year": 2026
    },
    {
      "id": "s11",
      "source": "2-11",
      "title": "Comparable evaluation of occluded 6D object poses in RGB D benchmarks",
      "zh": "RGB-D基准中遮挡六维物体位姿的可比评估",
      "type": "review",
      "topics": [
        "perception"
      ],
      "project": "navigation",
      "summary": [
        "Examines how visibility, object symmetries, allowed inputs and score aggregation constrain occlusion-robustness claims.",
        "分析可见度、物体对称性、允许输入及分数聚合方式如何限制遮挡鲁棒性结论。"
      ],
      "finding": [
        "Thirty scholarly sources and four documentation records support a selective methodological synthesis of BOP-related settings.",
        "基于30项学术来源与4项文档记录，对BOP相关设置进行选择性方法综述。"
      ],
      "limit": [
        "No new model evaluation or pooled performance estimate is reported.",
        "未进行新的模型评测，也未汇总估计跨研究性能。"
      ],
      "pdf": "papers/s11.pdf",
      "pages": 19,
      "year": 2026
    },
    {
      "id": "s12",
      "source": "2-12",
      "title": "Release readiness and grip force regulation during robotic handover to humans",
      "zh": "机器人向人递物中的释放准备与握力调节",
      "type": "review",
      "topics": [
        "learning",
        "perception"
      ],
      "project": "aloha",
      "summary": [
        "Separates evidence of receiving readiness, release triggering and grip unloading in robot-to-human object transfer.",
        "区分机器人向人递物中的接取准备证据、释放触发及握力卸载。"
      ],
      "finding": [
        "An evidence–decision–unloading framework connects vision, force and touch to premature release, missed release, latency and effort.",
        "以证据—决策—卸载框架，将视觉、力觉及触觉与过早释放、漏释放、时延和交互负担连接起来。"
      ],
      "limit": [
        "A focused narrative review and reporting proposal, without new participant data or a validated controller.",
        "属于聚焦叙述综述及报告建议，未新增受试者数据或验证新控制器。"
      ],
      "pdf": "papers/s12.pdf",
      "pages": 6,
      "year": 2026
    }
  ]
};
