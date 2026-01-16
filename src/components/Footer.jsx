import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
            {/* Main footer grid */}
            <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 text-sm">

                {/* Brand & Mission - 4 Columns */}
                <div className="lg:col-span-4 space-y-6">
                    <img
                        src="/logo_sme_bw.png"
                        alt="ListMySME"
                        className="h-14 w-auto  opacity-90 transition-opacity hover:opacity-100"
                    />
                    <p className="leading-relaxed text-slate-400 max-w-sm">
                        Professional advisory platform focused on supporting Small and Medium Enterprises through the structured SME IPO journey and capital markets compliance.
                    </p>
                </div>

                {/* Services - 3 Columns */}
                <div className="lg:col-span-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-bold mb-8">
                        Core Advisory
                    </h4>
                    <ul className="space-y-4 text-slate-400">
                        <li className="hover:text-[#C5A059] transition-colors cursor-default">SME IPO Advisory</li>
                        <li className="hover:text-[#C5A059] transition-colors cursor-default">Pre-IPO Restructuring</li>
                        <li className="hover:text-[#C5A059] transition-colors cursor-default">Regulatory Documentation</li>
                        <li className="hover:text-[#C5A059] transition-colors cursor-default">Post-Listing Compliance</li>
                    </ul>
                </div>

                {/* Quick Links - 2 Columns */}
                <div className="lg:col-span-2">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-bold mb-8">
                        Information
                    </h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                        <li><Link to="/ipo-process" className="hover:text-white transition-colors">Process</Link></li>
                        <li><Link to="/team" className="hover:text-white transition-colors">Leadership</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact - 3 Columns */}
                <div className="lg:col-span-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-bold mb-8">
                        Connect
                    </h4>
                    <div className="space-y-4 text-slate-400">
                        <p className="flex flex-col">
                            <span className="text-[10px] uppercase text-slate-500 mb-1">Email</span>
                            <a href="mailto:info@listmysme.com" className="text-white hover:text-[#C5A059] transition-colors italic">info@listmysme.com</a>
                        </p>
                        <p className="flex flex-col">
                            <span className="text-[10px] uppercase text-slate-500 mb-1">Phone</span>
                            <span className="text-white">+91-98XXXXXXXX</span>
                        </p>
                        <p className="flex flex-col">
                            <span className="text-[10px] uppercase text-slate-500 mb-1">Hours</span>
                            <span>Mon — Sat | 9 AM - 6 PM</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Regulatory Legal Strip */}
            <div className="border-t border-slate-800 bg-[#0a101f]">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
                    <div className="text-[11px] tracking-wider text-slate-500 leading-loose mb-8 text-center max-w-5xl mx-auto">
                        Disclaimer: ListMySME provides advisory and coordination support in association with qualified professionals and intermediaries.
                        We do not act as a merchant banker, stock exchange, or registrar to an issue.
                        All services are provided in accordance with applicable SEBI regulations and exchange requirements.
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/50 gap-4 text-[10px] tracking-widest text-slate-600">
                        <p>© {new Date().getFullYear()} LISTMYSME ADVISORY. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                            <a href="#" className="hover:text-white transition-colors">TERMS OF ENGAGEMENT</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}