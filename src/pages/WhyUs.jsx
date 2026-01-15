import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WhyUs = () => {
    const reasons = [
        {
            title: "Compliance-Driven Approach",
            desc: "Our services are guided by a strong emphasis on regulatory compliance and disclosure discipline. Compliance is treated as a core foundation rather than a procedural formality.",
            tag: "Foundational"
        },
        {
            title: "Structured Execution",
            desc: "We follow defined processes and documentation workflows to reduce execution risks and ensure methodical regulatory alignment.",
            tag: "Methodical"
        },
        {
            title: "Professional Coordination",
            desc: "Effective management of experienced intermediaries including merchant bankers, CAs, and legal advisors for seamless execution.",
            tag: "Synergetic"
        },
        {
            title: "End-to-End Lifecycle Support",
            desc: "Our engagement extends beyond the listing event to support companies in their long-term responsibilities as listed entities.",
            tag: "Long-term"
        },
        {
            title: "Focused SME Expertise",
            desc: "Tailored specifically for SME Exchanges, allowing us to navigate unique challenges and regulatory nuances of the SME sector.",
            tag: "Specialized"
        },
        {
            title: "Transparent Engagement",
            desc: "We emphasize clear communication and realistic expectations to support informed decision-making throughout the process.",
            tag: "Professional"
        }
    ];

    return (
        <main className="bg-white text-slate-900 font-sans">
            <Header />
            {/* 1. HERO / INTRO */}
            <section className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6">Value Proposition</h2>
                        <h1 className="text-4xl md:text-5xl font-light leading-tight">
                            Choosing the right advisory support is <span className="italic font-serif text-slate-500">critical</span> for a well-structured listing.
                        </h1>
                    </div>
                    <div className="pt-4">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            The SME IPO process involves complex regulatory requirements and multiple stakeholders. ListMySME provides the discipline and regulatory focus necessary to navigate this lifecycle with clarity.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. REASONS GRID */}
            <section className="py-20 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                        {reasons.map((item, index) => (
                            <div key={index} className="bg-white p-10 md:p-12 hover:bg-slate-50 transition-colors duration-500 group">
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-6 group-hover:text-slate-900 transition-colors">
                                    {item.tag}
                                </span>
                                <h3 className="text-xl font-normal mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DETAILED BREAKDOWN (STRUCTURED EXECUTION) */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-light mb-12">How our structured approach assists companies:</h2>
                    <div className="space-y-8">
                        {[
                            { label: "Preparedness", text: "Ensuring adequate preparation before entering the public market." },
                            { label: "Methodology", text: "Addressing regulatory requirements through a systematic framework." },
                            { label: "Risk Mitigation", text: "Reducing execution risks during the issue lifecycle." }
                        ].map((detail, i) => (
                            <div key={i} className="flex items-baseline gap-6 border-b border-slate-100 pb-6">
                                <span className="text-xs font-bold text-slate-300 w-24 uppercase tracking-tighter">{detail.label}</span>
                                <p className="text-slate-600 text-sm italic">{detail.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CLOSING STATEMENT */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto bg-slate-900 text-white p-16">
                    <p className="text-2xl font-light leading-relaxed mb-8">
                        By combining regulatory understanding, structured processes, and coordinated execution, we assist SMEs in navigating the IPO process with confidence.
                    </p>
                    <div className="w-12 h-px bg-slate-500 mx-auto"></div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default WhyUs;