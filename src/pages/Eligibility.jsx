import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EligibilityPage = () => {
    const readinessFactors = [
        {
            title: "Eligibility Framework",
            desc: "SME Exchanges prescribe specific conditions that companies must satisfy prior to listing.",
            items: ["Corporate structure & legal status", "Promoter background review", "Track record of operations", "Financial net worth parameters", "Compliance history"]
        },
        {
            title: "Financial Readiness",
            desc: "Transparency and consistency in financial records are non-negotiable for the IPO process.",
            items: ["Audited financial statements", "Consistent operational performance", "Clean accounting disclosures", "Regulatory financial alignment"]
        },
        {
            title: "Governance & Compliance",
            desc: "Listed entities must adhere to higher standards of governance and reporting.",
            items: ["Statutory record maintenance", "Corporate law compliance", "Optimal Board structure", "Disclosure & reporting mechanisms"]
        },
        {
            title: "Operational Preparedness",
            desc: "Extensive documentation and coordination with multiple stakeholders are required.",
            items: ["Business info availability", "Supporting documentation review", "Promoter-Management alignment", "Due diligence readiness"]
        }
    ];

    return (
        <main className="bg-white text-slate-900 font-sans">
            <Header />
            {/* 1. HEADER - Minimalist & Serious */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-100">
                <div className="max-w-4xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6">Assessment</h2>
                    <h1 className="text-4xl md:text-5xl font-light mb-8">SME IPO <br /><span className="italic font-serif">Eligibility & Readiness</span></h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        An SME IPO requires companies to meet specific criteria and demonstrate readiness across financial, legal, and governance parameters.
                    </p>
                </div>
            </section>

            {/* 2. THE READINESS GRID - Diagnostic Style */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16">
                    {readinessFactors.map((factor, index) => (
                        <div key={index} className="border-l border-slate-200 pl-8 relative">
                            <div className="absolute -left-[1px] top-0 h-12 w-[2px] bg-slate-900"></div>
                            <h3 className="text-2xl font-normal mb-4">{factor.title}</h3>
                            <p className="text-slate-500 text-sm mb-8 leading-relaxed italic">{factor.desc}</p>
                            <ul className="space-y-4">
                                {factor.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-4"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. COMMON CHALLENGES - Contrast Section */}
            <section className="bg-slate-900 text-white py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-6">Common Challenges</h2>
                        <h3 className="text-3xl font-light leading-snug">Addressing structural gaps before listing.</h3>
                    </div>
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-400 text-sm">
                        <p className="border border-slate-800 p-6">Incomplete compliance records and governance gaps.</p>
                        <p className="border border-slate-800 p-6">Documentation inconsistencies during due diligence.</p>
                        <p className="border border-slate-800 p-6">Misalignment between business practices and regulatory norms.</p>
                        <p className="border border-slate-800 p-6">Lack of internal coordination among management teams.</p>
                    </div>
                </div>
            </section>

            {/* 4. OUR ADVISORY ROLE */}
            <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
                <div className="space-y-8">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Our Advisory Role</h2>
                    <p className="text-2xl font-light text-slate-700 leading-relaxed">
                        ListMySME assists companies in conducting preliminary assessments, identifying gaps, and outlining corrective action plans to ensure <span className="underline decoration-slate-200 underline-offset-8">regulatory alignment.</span>
                    </p>
                    <div className="pt-8">
                        <p className="text-sm text-slate-500 italic">
                            Assessing eligibility at an early stage is essential for long-term sustainability as a listed entity.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default EligibilityPage;