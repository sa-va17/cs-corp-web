import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <main className="bg-white text-slate-900 font-sans">
            <Header />
            {/* 1. HEADER */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-100">
                <div className="max-w-4xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-6">Inquiry</h2>
                    <h1 className="text-4xl md:text-5xl font-light mb-8">Professional Consultation</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Reach out for advisory discussions related to SME IPO readiness,
                        regulatory compliance, and capital markets support.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT CONTENT & FORM */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left Side: Contact Details */}
                    <div className="lg:col-span-4 space-y-12">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-md text-slate-400 uppercase mb-1">Email</p>
                                    <a href="mailto:support@listmysme.in" className="text-lg hover:text-slate-500 transition-colors">info@listmysme.com<br /><span className="text-sm text-slate-400">We reply within 24 hours.</span></a>
                                </div>
                                <div>
                                    <p className="text-md text-slate-400 uppercase mb-1">Phone</p>
                                    <p className="text-lg">+91-98XXXXXXXX</p>
                                </div>
                                <div>
                                    <p className="text-md text-slate-400 uppercase mb-1">Hours</p>
                                    <p className="text-lg text-slate-600">Monday to Saturday<br /><span className='text-sm text-gray-400'>9 AM - 6 PM</span></p>
                                </div>
                                <div>
                                    <p className="text-md text-slate-400 uppercase mb-1">Address</p>
                                    <p className="text-lg text-slate-600">New Delhi<br /><span className='text-sm text-gray-400'>Barakhamba Rd, 110001</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-slate-100">
                            <h4 className="text-sm font-bold text-slate-900 mb-4 italic font-serif">Note on Consultations</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Initial discussions are intended to understand the company’s background and readiness. Appointments are subject to prior confirmation.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Query Form */}
                    <div className="lg:col-span-8">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 text-left">Service Enquiry Form</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-500">Full Name</label>
                                <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 transition-colors bg-transparent" placeholder="e.g. John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-500">Company Name</label>
                                <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 transition-colors bg-transparent" placeholder="Company Pvt Ltd" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-500">Email Address</label>
                                <input type="email" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 transition-colors bg-transparent" placeholder="name@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-500">Service Required</label>
                                <select className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 transition-colors bg-transparent text-slate-500">
                                    <option>Pre-IPO Readiness</option>
                                    <option>SME IPO Advisory</option>
                                    <option>Post-Listing Compliance</option>
                                    <option>Other Enquiry</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-500">Brief Message</label>
                                <textarea rows="4" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-slate-900 transition-colors bg-transparent resize-none" placeholder="How can we assist you?"></textarea>
                            </div>
                            <div className="md:col-span-2 pt-6">
                                <button type="submit" className="bg-slate-900 text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-slate-700 transition-all font-semibold">
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            {/* 3. IMPORTANT DISCLAIMER - Technical Bottom Section */}
            <section className="bg-slate-50 py-16 px-6 md:px-12 border-t border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start opacity-60">
                    <div className="md:w-1/4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Important Disclaimer</h4>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-[12px] leading-relaxed text-slate-600">
                            ListMySME provides advisory and coordination support in association with qualified professionals and intermediaries. We do not act as a merchant banker, stock exchange, registrar to an issue, or underwriter. All advisory is conducted within the framework of applicable SEBI and exchange regulations.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Contact;