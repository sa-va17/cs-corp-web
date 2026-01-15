import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <main className="bg-white text-slate-900 font-sans selection:bg-slate-200">
            <Header />
            {/* 1. PAGE HEADER - The "Philosophy" Section */}
            <section className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-100">
                <div className="max-w-4xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-8 text-left">About ListMySME</h2>
                    <h1 className="text-4xl md:text-5xl font-light leading-tight mb-12">
                        A professional advisory platform supporting SMEs in their journey towards
                        <span className="text-slate-400 italic font-serif"> capital market access.</span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 leading-relaxed text-lg">
                        <p>
                            ListMySME provides structured advisory and coordination support across the SME IPO lifecycle, including pre-IPO preparedness, regulatory compliance, issue structuring, and post-listing obligations.
                        </p>
                        <p>
                            Our services are designed to help businesses navigate complex regulatory frameworks with clarity and confidence, ensuring every milestone is backed by professional diligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. OBJECTIVE - Centered & Impactful */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-6">Our Objective</h2>
                    <p className="text-2xl font-light text-slate-800 leading-relaxed mb-8 italic">
                        "To assist SMEs in achieving sustainable growth through a compliant and well-structured capital market approach."
                    </p>
                    <p className="text-slate-500 leading-relaxed">
                        We believe that a successful listing is built on preparation, governance, and long-term compliance rather than short-term execution. We aim to simplify the process while maintaining strict adherence to SEBI regulations.
                    </p>
                </div>
            </section>

            {/* 3. OUR APPROACH - Technical & Process Oriented */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-light sticky top-32">Our Advisory <br />Approach</h2>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            {
                                title: "Regulatory Accuracy",
                                desc: "A strong focus on compliance, ensuring documentation aligns with the highest regulatory standards."
                            },
                            {
                                title: "Structured Workflows",
                                desc: "Defined processes that move businesses from initial feasibility to listing with discipline."
                            },
                            {
                                title: "Professional Coordination",
                                desc: "Seamless collaboration with Company Secretaries, CAs, and Merchant Bankers."
                            },
                            {
                                title: "Governance First",
                                desc: "Emphasis on long-term post-listing obligations to ensure sustainable market presence."
                            }
                        ].map((item, i) => (
                            <div key={i} className="space-y-3">
                                <h4 className="text-lg font-medium border-l-2 border-slate-900 pl-4">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. NETWORK & COMMITMENT - Two Column Layout */}
            <section className="py-24 px-6 md:px-12 border-t border-slate-100 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-6">Professional Network</h3>
                        <p className="text-slate-600 leading-relaxed">
                            ListMySME operates in association with experienced professionals, including Company Secretaries, Chartered Accountants, legal advisors, and merchant bankers. This collaborative approach ensures that services are delivered in accordance with prevailing regulatory standards.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-6">Commitment to Governance</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Our role extends beyond listing support. We place significant emphasis on disclosure discipline and helping companies understand their ongoing obligations as a listed entity, building credibility with investors and regulators.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. CLOSING STATEMENT - Subdued */}
            <section className="py-32 px-6 text-center border-t border-slate-50 bg-slate-50/50">
                <div className="max-w-2xl mx-auto">
                    <p className="text-xl font-light italic text-slate-500 leading-relaxed">
                        ListMySME is committed to supporting SMEs with professional advisory services that align with regulatory expectations and long-term business objectives.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
