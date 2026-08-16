export const rawAgentJson = {
  "name": "Threat intelligence Scout",
  "nodes": [
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $('When chat message received').first().json.chatInput }} }}",
        "options": {
          "systemMessage": "IMPORTANT:\n\nFor every cybersecurity question, you MUST call the Tavily Search tool before answering.\n\nNever answer from your own knowledge if the question is about:\n- today's cyber threats\n- latest attacks\n- CVEs\n- ransomware\n- threat actors\n- malware\n- security news\n\nAlways search first, then summarize the results into a professional threat intelligence report."
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [-208, -16],
      "id": "73c8403e-6862-453c-a5d2-a965b1b92860",
      "name": "AI Agent",
      "alwaysOutputData": false
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1.1,
      "position": [-208, 192],
      "id": "200e1dfb-af8d-4efd-a32e-ae27c3b693c1",
      "name": "Google Gemini Chat Model",
      "credentials": {
        "googlePalmApi": {
          "id": "L7UqRj5gCeQsq1Uf",
          "name": "Google Gemini(PaLM) Api account"
        }
      }
    },
    {
      "parameters": {
        "public": true,
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1.4,
      "position": [-480, -16],
      "id": "2f494b8c-8e11-491c-943b-c134eca1d8ca",
      "name": "When chat message received",
      "webhookId": "3347cb76-f7c8-43f1-9bc0-3d919825db27"
    },
    {
      "parameters": {
        "query": "={{ $fromAI(\"search_query\") }}",
        "options": {}
      },
      "type": "@tavily/n8n-nodes-tavily.tavilyTool",
      "typeVersion": 1,
      "position": [-16, 192],
      "id": "91539598-a844-4ae3-9a45-da992face3e3",
      "name": "Search in Tavily",
      "credentials": {
        "tavilyApi": {
          "id": "tqU54JkhfGbEI8X0",
          "name": "Tavily account"
        }
      }
    }
  ],
  "pinData": {},
  "connections": {
    "Google Gemini Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Search in Tavily": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "When chat message received": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false,
    "timeSavedMode": "fixed",
    "callerPolicy": "workflowsFromSameOwner"
  },
  "versionId": "3681e778-42f3-4738-9b91-d41804cdeaa2",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "9efbdb71928a02ea4552fa1e7b10bb657086d475a31049fa8a8a5e11589abdfb"
  },
  "nodeGroups": [],
  "id": "Ejg93pwcRgr6e55J",
  "tags": []
};

export const agentMetadata = {
  name: rawAgentJson.name,
  id: rawAgentJson.id,
  versionId: rawAgentJson.versionId,
  activeStatus: rawAgentJson.active ? "ACTIVE" : "INACTIVE",
  nodeCount: rawAgentJson.nodes.length,
  connectionCount: Object.keys(rawAgentJson.connections).length,
  webhookId: rawAgentJson.nodes.find(n => n.name === "When chat message received")?.webhookId,
  systemMessage: rawAgentJson.nodes.find(n => n.name === "AI Agent")?.parameters?.options?.systemMessage,
  llmModel: "Google Gemini (PaLM/Gemini-1.5/2.0)",
  searchTool: "Tavily AI Search Engine",
  framework: "n8n LangChain ReAct Agent v3.1"
};

export const nodesDetailList = [
  {
    id: "2f494b8c-8e11-491c-943b-c134eca1d8ca",
    name: "When chat message received",
    type: "@n8n/n8n-nodes-langchain.chatTrigger",
    category: "Trigger Node",
    color: "#10b981",
    icon: "MessageSquareCode",
    description: "Listens for incoming user queries via public web interface or HTTP Webhook payload.",
    parameters: {
      public: true,
      webhookId: "3347cb76-f7c8-43f1-9bc0-3d919825db27",
      chatInputKey: "chatInput"
    },
    connectionsOut: ["AI Agent (main)"]
  },
  {
    id: "73c8403e-6862-453c-a5d2-a965b1b92860",
    name: "AI Agent",
    type: "@n8n/n8n-nodes-langchain.agent",
    category: "Core Reasoning Engine",
    color: "#00f2fe",
    icon: "Bot",
    description: "LangChain ReAct Agent orchestrating execution steps, enforcing system rules, invoking Tavily search, and generating structured threat intelligence reports.",
    parameters: {
      promptType: "define",
      text: "={{ $('When chat message received').first().json.chatInput }}",
      systemMessageRule: "FORCES Tavily Search execution BEFORE answering any cybersecurity, CVE, ransomware, or malware query."
    },
    connectionsIn: ["When chat message received (main)", "Google Gemini Chat Model (ai_languageModel)", "Search in Tavily (ai_tool)"]
  },
  {
    id: "200e1dfb-af8d-4efd-a32e-ae27c3b693c1",
    name: "Google Gemini Chat Model",
    type: "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
    category: "LLM Provider",
    color: "#9d4edd",
    icon: "Brain",
    description: "High-capacity multimodal reasoning engine supplying intelligence to the ReAct agent loop.",
    parameters: {
      credentialAccount: "Google Gemini(PaLM) Api account (ID: L7UqRj5gCeQsq1Uf)",
      typeVersion: 1.1
    },
    connectionsOut: ["AI Agent (ai_languageModel)"]
  },
  {
    id: "91539598-a844-4ae3-9a45-da992face3e3",
    name: "Search in Tavily",
    type: "@tavily/n8n-nodes-tavily.tavilyTool",
    category: "External Search Tool",
    color: "#f59e0b",
    icon: "Search",
    description: "Real-time AI web search integration extracting current cyber threat data, CVE databases, zero-day advisories, and threat actor TTPs.",
    parameters: {
      queryBinding: "={{ $fromAI(\"search_query\") }}",
      credentialAccount: "Tavily account (ID: tqU54JkhfGbEI8X0)"
    },
    connectionsOut: ["AI Agent (ai_tool)"]
  }
];

export const presetThreatQueries = [
  {
    title: "Today's Ransomware Attacks",
    query: "What are today's latest active ransomware threat campaigns and targeted sectors?",
    category: "Ransomware"
  },
  {
    title: "Critical CVE Exploits 2026",
    query: "Identify recent critical CVE zero-day vulnerabilities exploited in the wild with CVSS > 9.0.",
    category: "Vulnerabilities"
  },
  {
    title: "APT Threat Actor Operations",
    query: "Provide a threat intelligence summary on recent APT nation-state cyber espionage activities.",
    category: "APT Groups"
  },
  {
    title: "Supply Chain & Malware Threats",
    query: "Summarize recent supply chain malware threats targeting NPM, PyPI, or software vendors.",
    category: "Malware"
  }
];

export const mockThreatDatabase = {
  ransomware: {
    searchQuery: "latest ransomware threat campaigns targeted sectors active cve",
    tavilyResults: [
      {
        title: "LockBit 4.0 & BlackCat Variant Surge Targeting Healthcare & Finance",
        url: "https://threatintel.cyber.example/advisory-2026-081",
        content: "New ransomware iterations incorporating zero-day exploitation of edge VPN gateways. Threat actors are utilizing dual-extortion tactics, exfiltrating cloud database backup snapshots before encrypting local drives."
      },
      {
        title: "CISA Emergency Directive: Active Ransomware Exploitation of Perimeter Devices",
        url: "https://cisa.gov/news-events/cybersecurity-advisories/ed-26-04",
        content: "CISA alerts organizations regarding remote code execution vulnerabilities in perimeter firewalls exploited by Akira ransomware affiliates."
      }
    ],
    severity: "CRITICAL",
    cvssScore: "9.8",
    cves: ["CVE-2026-1142", "CVE-2026-0988"],
    summary: `### Executive Threat Intelligence Briefing: Ransomware Surge

**Status**: ACTIVE UNCONFINED THREAT CAMPAIGN  
**Severity**: CRITICAL (CVSS 9.8)  
**Tavily Search Telemetry**: Verified live web telemetry from CISA and global threat response feeds.

#### Key Findings
1. **Perimeter Exploitation**: Threat actors are targeting unpatched VPN edge routers using RCE vulnerability **CVE-2026-1142**.
2. **Exfiltration & Double Extortion**: Rapid exfiltration of AWS S3 and Azure Blob buckets detected prior to payload deployment.
3. **Targeted Verticals**: Critical infrastructure, healthcare providers, financial services.

#### Tactical Mitigation Directives
- **Network Level**: Block inbound traffic to unauthenticated admin interfaces; enforce strict MFA.
- **Endpoint Level**: Deploy EDR rules targeting shadow copy deletion (\`vssadmin delete shadows\`).
- **Patch Management**: Apply vendor hotfix for **CVE-2026-1142** within 24 hours.`
  },
  vulnerabilities: {
    searchQuery: "critical zero-day CVE vulnerabilities 2026 CVSS 9.0 exploited in wild",
    tavilyResults: [
      {
        title: "NVD Alert: Remote Code Execution in Enterprise Gateway Authentication Engine",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2026-4401",
        content: "An unauthenticated remote code execution flaw in OAuth identity broker middleware allowing adversary access with elevated SYSTEM privileges."
      }
    ],
    severity: "HIGH",
    cvssScore: "9.6",
    cves: ["CVE-2026-4401"],
    summary: `### Threat Intelligence Advisory: High-Impact Vulnerability Analysis

**Status**: EXPLOITED IN THE WILD  
**CVE ID**: CVE-2026-4401  
**Impact Score**: 9.6 / 10 (Critical)

#### Technical Overview
- **Vulnerability Class**: Authentication Bypass leading to Remote Code Execution (RCE).
- **Affected Systems**: Enterprise OAuth authentication proxy containers.
- **Exploit Vector**: Specially crafted JWT tokens bypass signature verification checks due to key rotation parsing errors.

#### Remediation & IOCs
- **Hashes**: \`e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\`
- **Recommended Action**: Upgrade target identity broker services to v4.2.1-patch3.`
  },
  default: {
    searchQuery: "cyber threat intelligence report latest security incidents",
    tavilyResults: [
      {
        title: "Global Threat Landscape Report: August 2026",
        url: "https://cybersecurity.news/threat-report-aug-2026",
        content: "Comprehensive overview of emerging cyber threat trends, malware signatures, phishing techniques, and nation-state threat group tactics."
      }
    ],
    severity: "MODERATE",
    cvssScore: "8.4",
    cves: ["CVE-2026-0120"],
    summary: `### Comprehensive Threat Intelligence Report

**Agent Mode**: LangChain ReAct + Tavily Web Search + Google Gemini LLM  
**Target Query**: Processed via System Guardrail Enforcement

#### Threat Analysis Summary
- **Search Execution**: Automated Tavily query dispatched via \`$fromAI("search_query")\`.
- **System Guardrail Enforcement**: Agent strictly performed web search before generating threat intelligence output.
- **Threat Landscape**: Heightened credential-harvesting campaigns utilizing AI-generated spearphishing lures.

#### Recommended Action Plan
- Conduct phishing simulations targeting cloud identity credentials.
- Implement strict Domain-based Message Authentication, Reporting, and Conformance (DMARC) policies.`
  }
};
