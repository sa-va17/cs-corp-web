import { Link } from "react-router-dom";

export default function Header() {

    const isActive = (path) =>
        location.pathname === path
            ? "text-white font-medium"
            : "text-slate-300 hover:text-white";

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Brand */}
                <div>
                    <div className="text-lg font-serif font-semibold text-slate-100">
                        ListMySME
                    </div>
                    <div className="text-xs text-slate-400">
                        SME IPO & Capital Markets Advisory
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-x-6 text-sm">
                    <Link to="/" className={`${isActive("/")}`}>Home</Link>
                    <Link to="/about" className={`${isActive("/about")}`}>About</Link>
                    <Link to="/services" className={`${isActive("/services")}`}>Services</Link>
                    <Link to="/ipo-process" className={`${isActive("/ipo-process")}`}>Process</Link>
                    <Link to="/why-us" className={`${isActive("/why-us")}`}>Approach</Link>
                    <Link to="/eligibility" className={`${isActive("/eligibility")}`}>Readiness</Link>
                    <Link to='/governance' className={`${isActive("/governance")}`}>Governance</Link>
                    <Link to="/team" className={`${isActive("/team")}`}>Team</Link>
                    <Link to="/contact" className={`${isActive("/contact")}`}>Contact</Link>
                </nav>

            </div>
        </header>
    );
}
