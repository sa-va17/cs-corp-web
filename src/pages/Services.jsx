import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
    const services = [
        {
            id: "pre-ipo",
            title: "Pre-IPO Advisory & Readiness Assessment",
            description: "We assist companies at the preliminary stage by evaluating their preparedness for an SME IPO and identifying key compliance and structural requirements.",
            points: [
                "Assessment of SME IPO feasibility",
                "Review of corporate structure and compliance status",
                "Guidance on financial and governance readiness",
                "Identification of gaps and corrective measures"
            ]
        },
        {
            id: "structuring",
            title: "IPO Structuring & Issue Management",
            description: "We provide advisory and coordination support during the structuring of the SME IPO, working closely with appointed intermediaries.",
            points: [
                "Advisory on IPO structure and issue framework",
                "Coordination with merchant bankers and other intermediaries",
                "Assistance in issue planning and timelines",
                "Support in documentation and disclosures"
            ]
        },
        {
            id: "diligence",
            title: "Due Diligence & Documentation Support",
            description: "Due diligence and documentation form a critical part of the SME IPO process. We assist companies in preparing and coordinating documentation required for regulatory review.",
            points: [
                "Coordination for legal, financial, and secretarial due diligence",
                "Support in preparation of draft offer documents",
                "Compilation and review of disclosure-related information",
                "Assistance in responding to queries from intermediaries"
            ]
        },
        {
            id: "regulatory",
            title: "Regulatory Filings & Exchange Coordination",
            description: "We assist companies in coordinating regulatory filings and interactions with exchanges as part of the IPO process.",
            points: [
                "Coordination for filing of draft offer documents",
                "Assistance in exchange submissions and correspondence",
                "Monitoring of regulatory timelines and observations",
                "Support in addressing regulatory comments"
            ]
        },
        {
            id: "marketing",
            title: "Marketing & Roadshow Support",
            description: "We assist in coordinating marketing-related activities in accordance with applicable regulations.",
            points: [
                "Advisory support for investor communication strategy",
                "Coordination for roadshows and presentations",
                "Assistance in preparing compliant marketing materials",
                "Ensuring adherence to regulatory guidelines"
            ]
        },
        {
            id: "post-listing",
            title: "Post-Listing Compliance Support",
            description: "Our engagement extends beyond listing to support companies in meeting ongoing post-IPO and post-listing obligations.",
            points: [
                "Assistance with post-IPO compliance requirements",
                "Support in periodic regulatory filings",
                "Guidance on ongoing disclosure obligations",
                "Advisory on migration to the Main Board"
            ]
        }
    ];

    return (
        <main className="bg-white text-slate-900 font-sans">
            <Header />
            {/* 1. HEADER SECTION */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-100">
                <div className="max-w-4xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6">Our Expertise</h2>
                    <h1 className="text-4xl md:text-5xl font-light mb-8">SME IPO Services</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        ListMySME provides structured advisory and coordination support to Small and Medium Enterprises seeking listing on SME Exchanges in India. We cover the complete lifecycle, from initial feasibility to post-listing compliance.
                    </p>
                </div>
            </section>

            {/* 2. DETAILED SERVICES LIST */}
            <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="space-y-32 py-12">
                    {services.map((service, index) => (
                        <div key={service.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">

                            {/* Left Side: Numbering & Title */}
                            <div className="md:col-span-4 sticky top-32">
                                <span className="text-xs font-mono text-slate-300 block mb-4">SECTION 0{index + 1}</span>
                                <h3 className="text-2xl font-normal leading-tight border-l-2 border-slate-100 pl-6 group-hover:border-slate-900 transition-colors">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Right Side: Content */}
                            <div className="md:col-span-8">
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-500 leading-relaxed group">
                                            <span className="mr-3 text-slate-300 group-hover:text-slate-900 transition-colors">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* 3. SCOPE & DISCLAIMER - The "Fine Print" Section */}
            <section className="bg-slate-50 py-20 px-6 md:px-12 mt-12">
                <div className="max-w-7xl mx-auto border border-slate-200 p-10 md:p-16 bg-white shadow-sm">
                    <h4 className="text-sm uppercase tracking-widest text-slate-900 font-bold mb-6">Scope & Professional Disclaimer</h4>
                    <div className="text-slate-500 text-sm leading-relaxed space-y-4 max-w-4xl">
                        <p>
                            ListMySME provides advisory and coordination support and works in association with qualified professionals and intermediaries.
                            <strong> We do not act as a merchant banker, stock exchange, or registrar to an issue.</strong>
                        </p>
                        <p>
                            All services are provided in accordance with applicable laws, SEBI regulations, and exchange requirements. Our role is strictly limited to professional advisory and coordination within the regulatory framework.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Services;