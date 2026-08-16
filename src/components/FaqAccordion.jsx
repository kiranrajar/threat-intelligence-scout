import React, { useState } from 'react';

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How does Threat Intelligence Scout verify zero-day vulnerabilities in real time?",
      a: "Scout enforces mandatory system message guardrails. Before answering any cybersecurity query, the LangChain ReAct agent automatically formulates dynamic search queries ($fromAI) and dispatches real-time web telemetry requests via Tavily, NIST NVD, and CISA databases."
    },
    {
      q: "Are the vulnerability and CVE links official and authentic?",
      a: "Yes. All vulnerability reports contain direct clickable URLs pointing to official NIST National Vulnerability Database (NVD) entries (https://nvd.nist.gov/vuln/detail/CVE-...), CISA Known Exploited Vulnerabilities catalog, CVE Details, and MITRE ATT&CK matrix pages."
    },
    {
      q: "Can I connect Threat Intelligence Scout to my own n8n instance or API keys?",
      a: "Yes. Scout is 100% compatible with n8n workflow exports (n8n node type @n8n/n8n-nodes-langchain.agent v3.1). You can run it directly using built-in threat feeds or supply your own Tavily Search / Google Gemini PaLM API keys."
    },
    {
      q: "Does Scout generate automated YARA and Sigma detection rules?",
      a: "Yes. In addition to CVSS 3.1 vector strings and Indicators of Compromise (SHA256/MD5 malware hashes, C2 IP addresses), Scout generates actionable YARA rules and tactical remediation plans."
    }
  ];

  return (
    <section id="faq" className="py-16 border-b border-cyber-border bg-[#090A0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">+ FREQUENTLY ASKED QUESTIONS +</span>
          <h2 className="text-3xl font-serif text-white">Technical specifications & system behavior.</h2>
        </div>

        {/* Minimalist Border-Bottom Accordion Lines */}
        <div className="space-y-4 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-cyber-border pb-4">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left flex items-center justify-between gap-4 py-2 group cursor-pointer"
                >
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                    {faq.q}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-bold shrink-0">
                    {isOpen ? '[-]' : '[+]'}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-2 text-xs text-slate-400 leading-relaxed font-sans bg-[#12151E] p-4 border-l-2 border-cyan-400">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
