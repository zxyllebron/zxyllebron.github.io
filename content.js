window.PORTFOLIO = {
  "papers": [
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
      "year": 2026,
      "display_summary": "Auditing demonstration exports for action meaning, controller context and timing provenance.",
      "connection": "Bimanual demonstrations"
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
      "year": 2026,
      "display_summary": "Evaluating numerical fidelity, recorded latency and resource costs in mixed-precision robot-policy inference.",
      "connection": "Policy deployment"
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
      "year": 2026,
      "display_summary": "A reusable field-specific validator for feedback messages across four robot-data schemas.",
      "connection": "Robot control & diagnostics"
    }
  ]
};
