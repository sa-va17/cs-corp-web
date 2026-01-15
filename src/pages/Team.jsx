import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Team = () => {
    const associates = [
        {
            name: "Swapna Agrawal",
            title: "Senior Associate",
            creds: "B.Com | FCA",
            bio: "Fellow Member of the ICAI with over 15 years of experience in audit, taxation, and corporate compliance. She specializes in financial due diligence, audit readiness, and compliance structuring for SME IPO mandates.",
            expertise: ["Financial Due Diligence", "GST & Indirect Taxation", "Audit Preparedness", "NBFC Compliance"]
        },
        {
            name: "Twinkle Gupta",
            title: "Associate",
            creds: "M.Com | ACS",
            bio: "Associate Member of the ICSI with over 7 years of experience. She focuses on Pre-IPO processes, corporate restructuring, and coordination with Merchant Bankers and Stock Exchanges.",
            expertise: ["Pre-IPO Compliance", "FEMA Compliance", "ESOP Structuring", "Corporate Governance"]
        },
        {
            name: "Shikha Garg",
            title: "Associate",
            creds: "M.Com | ACS",
            bio: "Associate Member of the ICSI with over 5 years of experience. Her practice covers acquisitions, takeovers, and post-listing obligations for companies navigating complex IPO mandates.",
            expertise: ["SME IPO Compliance", "Secretarial Audits", "FEMA & Cross-border", "Regulatory Documentation"]
        }
    ];

    return (
        <main className="bg-white text-slate-900 font-sans">
            <Header />
            {/* 1. HEADER */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-100">
                <div className="max-w-4xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6">Expertise</h2>
                    <h1 className="text-4xl md:text-5xl font-light mb-8">Leadership</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Bringing together deep expertise across SME IPO advisory, corporate governance, and financial diligence.
                    </p>
                </div>
            </section>

            {/* 2. FOUNDER SECTION (Prominent) */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <div className="aspect-[4/5] bg-slate-100 border border-slate-200 grayscale mb-6">
                            {/* <img src="/saurabh-agrawal.jpg" alt="Saurabh Agrawal" className="w-full h-full object-cover" /> */}
                        </div>
                        <h3 className="text-2xl font-normal">Saurabh Agrawal</h3>
                        <p className="text-slate-500 text-xs uppercase tracking-widest mt-1 mb-2">Founder & Principal Advisor</p>
                        <p className="text-[11px] font-bold text-slate-400">M.Com | LL.B | FCS | Insolvency Professional</p>
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Mr. Saurabh Agrawal is a highly accomplished professional with over 25 years of experience in corporate laws and capital markets. A Fellow Member of the ICSI and a registered Insolvency Professional (IBBI), he specializes in guiding enterprises through successful listings on BSE and NSE SME platforms.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                            <div className="space-y-3">
                                <h4 className="text-xs uppercase font-bold tracking-tighter text-slate-900">Core Specialization</h4>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li>• SME IPO End-to-End Lifecycle</li>
                                    <li>• SEBI & Stock Exchange Regulations</li>
                                    <li>• Due Diligence & Offer Documentation</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xs uppercase font-bold tracking-tighter text-slate-900">Strategic Advisory</h4>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li>• Mergers & Amalgamations</li>
                                    <li>• Venture Funding & ESOPs</li>
                                    <li>• NBFC & Startup Alliances</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ASSOCIATES GRID */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {associates.map((member, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="aspect-square bg-slate-50 border border-slate-100 mb-8 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* <img src="..." /> */}
                            </div>
                            <h3 className="text-xl font-normal text-slate-900">{member.name}</h3>
                            <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-1">{member.title}</p>
                            <p className="text-slate-400 text-[10px] font-bold mb-6">{member.creds}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                                {member.bio}
                            </p>
                            <div className="pt-6 border-t border-slate-100">
                                <h4 className="text-[10px] uppercase font-bold mb-4 tracking-widest">Focus Areas</h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {member.expertise.map((exp, j) => (
                                        <li key={j} className="text-[12px] text-slate-500 flex items-center">
                                            <span className="w-1 h-1 bg-slate-300 rounded-full mr-2"></span>
                                            {exp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. COLLECTIVE STRENGTH */}
            <section className="bg-slate-900 text-white py-20 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">Integrated Approach</h2>
                    <p className="text-2xl font-light leading-relaxed">
                        Together, the leadership team combines <span className="text-white font-normal">strategic advisory, regulatory precision, and financial diligence</span> to support SMEs across every stage of the IPO journey.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Team;