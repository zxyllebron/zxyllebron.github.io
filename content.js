window.PORTFOLIO = {
  "papers": [
    {
      "id": "r09",
      "source": "1-09",
      "title": "Action semantics and timing provenance in robot imitation learning data",
      "type": "research",
      "topics": [
        "learning",
        "systems"
      ],
      "featured": true,
      "project": "aloha",
      "summary": "Audits whether robot demonstration exports preserve the evidence needed to interpret action arrays, source timing and controller meaning.",
      "finding": "The retrospective source/context corpus contains 1,298 episodes and 664,369 rows, alongside a paired 697-episode export.",
      "limit": "Bitwise preservation of arrays does not prove acquisition semantics or downstream policy quality; this is an archival audit.",
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
      "type": "research",
      "topics": [
        "learning",
        "systems"
      ],
      "featured": true,
      "project": "policy-inference",
      "summary": "Compares saved policy outputs, historical timing records and resource counters to examine the costs of mixed-precision deployment.",
      "finding": "One four-camera replay retained aggregate cosine 0.999999645, yet its maximum nominal left-flange discrepancy reached 4.867 mm.",
      "limit": "Recorded call latency is not a complete control-loop deadline; nominal kinematics do not establish physical task success or safety.",
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
      "type": "research",
      "topics": [
        "systems"
      ],
      "featured": true,
      "project": "deployment",
      "summary": "An executable contract declares required joints, fields, flags, units and clock continuity, returning property-specific results with explicit abstention.",
      "finding": "One validator spans four schema families. Field-specific checks retain finite arm inputs in 54,897 messages rejected by a message-wide check.",
      "limit": "The records lack physical fault labels; diagnostic accuracy, physical acquisition freshness and root cause remain unverified.",
      "pdf": "papers/r05.pdf",
      "pages": 19,
      "year": 2026,
      "display_summary": "A reusable field-specific validator for feedback messages across four robot-data schemas.",
      "connection": "Robot control & diagnostics"
    }
  ]
};
