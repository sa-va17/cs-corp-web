import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Governance = () => {
    const complianceTiers = [
        {
            title: "Immediate Post-IPO Obligations",
            desc: "Critical activities required immediately following the issue closure to finalize listed status.",
            items: [
                "Submission of post-issue reports",
                "Final listing formalities & exchange coordination",
                "Issue closure activities with intermediaries",
                "Initial regulatory disclosure requirements"
            ]
        },
        {
            title: "Continuous Listing Requirements",
            desc: "Ongoing disclosures to maintain transparency and regulatory confidence on the exchange.",
            items: [
                "Periodic financial & operational reporting",
                "Shareholding pattern disclosures",
                "Material event-based notifications",
                "LODR (Listing Obligations) adherence"
            ]
        },
        {
            title: "Governance & Monitoring",
            desc: "Long-term internal frameworks required to sustain the company’s reputation as a listed entity.",
            items: [
                "Statutory record maintenance",
                "Board & Committee meeting compliance",
                "Monitoring of SEBI regulatory updates",
                "Timely secretarial filings"
            ]
        }
    ];

    return (
        <main className="bg-white text-slate-900 font-sans">

            <Header />
            {/* 1. HEADER - The "Commitment" Section */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6">Listed Lifecycle</h2>
                    <h1 className="text-4xl md:text-5xl font-light mb-8">
                        Post-IPO & <span className="italic font-serif">Listing Compliance</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light border-l border-slate-200 pl-8">
                        Listing is not the end of the regulatory journey. Once listed, companies transition into a higher tier of disclosure, reporting, and governance obligations.
                    </p>
                </div>
            </section>

            {/* 2. COMPLIANCE GRID */}
            <section className="py-20 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {complianceTiers.map((tier, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="mb-6">
                                <span className="text-xs font-mono text-slate-400">CATEGORY 0{index + 1}</span>
                                <h3 className="text-2xl font-normal mt-2 text-slate-900">{tier.title}</h3>
                            </div>
                            <p className="text-sm text-slate-500 mb-8 flex-grow italic leading-relaxed">
                                {tier.desc}
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-slate-200">
                                {tier.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-slate-700">
                                        <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. MIGRATION TO MAIN BOARD - Strategic Focus */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="bg-white border border-slate-200 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-light mb-6 text-slate-900">Support for Migration to Main Board</h2>
                        <p className="text-slate-600 leading-relaxed">
                            SME Exchanges offer eligible companies a path to transition to the Main Board. We assist in evaluating eligibility, transition compliance, and procedural considerations for long-term capital market growth.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1 gap-4">
                        {["Eligibility Assessment", "Transition Compliance", "Procedural Advisory"].map((step, i) => (
                            <div key={i} className="bg-slate-50 px-6 py-4 text-sm font-medium text-slate-700 border-l-2 border-slate-900">
                                {step}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ADVISORY ROLE & CLOSING */}
            <section className="py-24 px-6 md:px-12 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-12">Our Advisory Role</h2>
                    <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">
                        "Our objective is to help companies remain compliant, transparent, and well-governed after listing, building long-term credibility with stakeholders."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs uppercase tracking-widest text-slate-400">
                        <div>Coordinating Activities</div>
                        <div>Timeline Guidance</div>
                        <div>Strategic Planning</div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Governance;