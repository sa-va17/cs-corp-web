import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Process = () => {
    const stages = [
        {
            number: "01",
            title: "Initial Assessment & Feasibility Review",
            desc: "The process begins with an initial evaluation of the company’s eligibility and preparedness for an SME IPO.",
            points: ["Business model & promoter background check", "Financial & compliance readiness assessment", "SME Exchange eligibility evaluation", "Identification of key action points"]
        },
        {
            number: "02",
            title: "Appointment of Intermediaries",
            desc: "Once feasibility is established, required intermediaries are appointed to initiate the IPO process.",
            points: ["Merchant Banker appointment", "Engagement of legal & financial advisors", "Coordination with registrars", "Process efficiency planning"]
        },
        {
            number: "03",
            title: "Structuring of the IPO",
            desc: "At this stage, the IPO is structured in consultation with appointed intermediaries.",
            points: ["Issue size & pricing framework", "Capital structure review", "Shareholding pattern alignment", "Regulatory objective setting"]
        },
        {
            number: "04",
            title: "Due Diligence & Offer Document Preparation",
            desc: "Due diligence and documentation form the core of the IPO process.",
            points: ["Legal, financial & secretarial due diligence", "Draft offer document (DRHP) preparation", "Stakeholder coordination", "Transparency & disclosure audit"]
        },
        {
            number: "05",
            title: "Filing & Regulatory Review",
            desc: "The draft offer document is filed with the relevant SME Exchange for review.",
            points: ["Filing with the exchange", "Addressing regulatory queries", "Revision & clarification management", "Finalisation of offer documents"]
        },
        {
            number: "06",
            title: "Marketing & Issue Opening",
            desc: "Following approvals, the issue is marketed in accordance with prescribed guidelines.",
            points: ["Investor communication strategy", "Roadshows & presentations", "Opening/Closing timeline management", "Regulatory supervision adherence"]
        },
        {
            number: "07",
            title: "Listing & Post-Issue Activities",
            desc: "Upon completion, the company’s securities are listed on the SME Exchange.",
            points: ["Listing formalities completion", "Credit of securities", "Commencement of trading", "Post-issue reporting"]
        },
        {
            number: "08",
            title: "Ongoing Compliance & Obligations",
            desc: "Post-listing, companies must comply with ongoing regulatory and disclosure obligations.",
            points: ["Periodic exchange filings", "Corporate governance adherence", "Financial reporting requirements", "Main Board migration advisory"]
        }
    ];

    return (
        <main className="bg-white text-slate-900 font-sans">
            <Header />
            {/* 1. HEADER */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6 text-left">The Roadmap</h2>
                    <h1 className="text-4xl md:text-5xl font-light mb-8 italic font-serif">SME IPO Process</h1>
                    <p className="text-lg text-slate-600 leading-relaxed border-l-2 border-slate-100 pl-8">
                        The SME IPO process involves multiple stages and regulatory reviews. A structured and compliant approach is essential to ensure a smooth listing on SME Exchanges in India.
                    </p>
                </div>
            </section>

            {/* 2. THE TIMELINE FLOW */}
            <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="relative">
                    {/* Vertical Line (Centered for Desktop, Left for Mobile) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block"></div>

                    <div className="space-y-24">
                        {stages.map((stage, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Number Indicator */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 
                                bg-white border border-[#C5A059] rounded-full flex 
                                items-center justify-center z-10 text-[10px] font-bold text-[#C5A059] group-hover:border-slate-900 transition-colors">
                                    {stage.number}
                                </div>

                                {/* Content Block */}
                                <div className="md:w-1/2 pl-12 md:pl-0">
                                    <div className={`${index % 2 === 0 ? 'md:pl-16 ' : 'md:pr-16 text-left md:text-right'}`}>
                                        <h3 className="text-xl font-medium mb-4 text-slate-900">{stage.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6">{stage.desc}</p>
                                        <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'md:items-end'}`}>
                                            {stage.points.map((point, i) => (
                                                <li key={i} className="text-xs  text-slate-400 flex items-center gap-2 justify-start md:justify-normal">
                                                    <span className={`h-1 w-1 bg-slate-200 rounded-full ${index % 2 !== 0 ? 'md:order-last' : ''}`}></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty spacer for the other side of the timeline */}
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PROFESSIONAL NOTE (Footer-style Callout) */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-100 mt-20">
                <div className="bg-slate-50 p-12 text-center">
                    <h4 className="text-sm uppercase tracking-widest font-semibold mb-4">Professional Note</h4>
                    <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed font-light italic">
                        "The SME IPO process requires careful planning, regulatory understanding, and coordination with multiple stakeholders. A structured approach helps ensure compliance, transparency, and long-term sustainability post listing."
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Process;