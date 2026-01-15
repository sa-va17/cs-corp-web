import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return (

        <main className="bg-white text-slate-900 font-sans selection:bg-slate-200">
            <Header />

            {/* 1. HERO SECTION - Minimal & High Impact */}
            <section className="relative pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                        SME IPO & <br />
                        <span className="text-slate-400 italic font-serif">Capital Markets Advisory</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl border-l border-slate-300 pl-8 py-2">
                        Providing end-to-end advisory, compliance, and coordination support for Small and Medium Enterprises seeking listing on SME Exchanges in India.
                    </p>
                </div>
            </section>

            {/* 2. INTRODUCTION - The "Professional Face" */}
            <section className="bg-slate-50 py-24 px-6 md:px-12 border-y border-slate-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6">Introduction</h2>
                        <h3 className="text-3xl font-normal leading-snug">Professional Advisory for SME Growth & Listing</h3>
                    </div>
                    <div className="md:col-span-7 text-slate-600 space-y-6 text-lg leading-relaxed">
                        <p>
                            ListMySME is a professional advisory platform focused on assisting Small and Medium Enterprises through the SME IPO journey. We provide structured advisory services covering pre-IPO readiness, issue structuring, regulatory coordination, and post-listing compliance support.
                        </p>
                        <p>
                            Our approach is <span className="text-slate-900 font-medium">compliance-driven, process-oriented</span>, and strictly aligned with applicable SEBI regulations and exchange requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CORE SERVICES - Clean List with Subtle Interaction */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-2">Capabilities</h2>
                    <h3 className="text-3xl font-normal">Our Core Service Areas</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {[
                        { title: "SME IPO Advisory", desc: "End-to-end issue management and strategic support." },
                        { title: "Pre-IPO Structuring", desc: "Readiness assessment and capital structure optimization." },
                        { title: "Intermediary Coordination", desc: "Liaising with merchant bankers, registrars, and legal teams." },
                        { title: "Regulatory Filings", desc: "Drafting and filing of offer documents and compliance papers." },
                        { title: "Listing Compliance", desc: "Post-IPO regulatory adherence and exchange reporting." },
                        { title: "Migration Support", desc: "Guidance on transitioning from SME to the Main Board." }
                    ].map((item, i) => (
                        <div key={i} className="group border-b border-slate-100 pb-8 hover:border-slate-400 transition-colors duration-500">
                            <span className="text-[10px] text-slate-300 mb-4 block">0{i + 1}</span>
                            <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. WHY SME IPO - Positioning (Minimal Quote Style) */}
            <section className="bg-slate-50 py-32 px-6 border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-light text-slate-800 leading-relaxed mb-12">
                        An SME IPO enables growing enterprises to access capital markets, enhance visibility, and create long-term growth opportunities.
                    </h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                        We assist companies in navigating regulatory requirements with clarity and professional guidance.
                    </p>
                </div>
            </section>

            {/* 5. PROCESS - Structured Columns */}
            <section className="py-24 px-6 md:px-12 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6">Our Methodology</h2>
                            <h3 className="text-4xl font-light">A Structured & Compliance-Focused Approach</h3>
                        </div>
                        <p className="text-slate-400 max-w-xs text-sm italic">
                            Focused on preparing businesses for sustainable listing rather than short-term execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            "Regulatory Accuracy",
                            "Structured Coordination",
                            "Documentation Discipline",
                            "Long-term Support"
                        ].map((step, i) => (
                            <div key={i} className="bg-slate-800/50 p-8 border border-slate-800 hover:border-slate-700 transition">
                                <h4 className="text-lg font-normal mb-2">{step}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHO WE SERVE & CTA */}
            <section className="py-32 px-6 text-center max-w-3xl mx-auto">
                <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-8">Who We Work With</h2>
                <p className="text-2xl font-light text-slate-700 mb-16">
                    Small and Medium Enterprises and Promoter-driven companies seeking structured capital market access.
                </p>

                <div className="pt-12 border-t border-slate-100">
                    <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Professional Consultation</h3>
                    <p className="text-slate-500 mb-8">For advisory discussions and service enquiries, please contact us.</p>
                    <button className="text-slate-900 border-b border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all uppercase text-xs tracking-widest font-bold">
                        Send an Enquiry
                    </button>
                </div>
            </section>

            <Footer />
        </main>


    );
}