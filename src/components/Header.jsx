import { Link } from "react-router-dom";

export default function Header() {

    const isActive = (path) =>
        location.pathname === path
            ? "text-white font-medium"
            : "text-slate-300 hover:text-white";

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-4 group">
                    {/* Replace '/logo-horizontal.png' with your actual asset path. 
                       The 'h-12' ensures it doesn't make the header too bulky.
                    */}
                    <img
                        src="/logo_sme.png"
                        alt="ListMySME Logo"
                        className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Vertical Divider (Optional for extra formality) */}
                    <div className="hidden md:block w-px h-8 bg-slate-700 mx-2"></div>

                    {/* Hidden on mobile to keep things clean, visible on larger screens */}
                    <div className="hidden lg:block">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium leading-tight">
                            Your gateway to <br /> capital markets
                        </div>
                    </div>
                </Link>

                {/* Navigation - Using streamlined titles */}
                <nav className="hidden xl:flex items-center space-x-6 text-[13px] uppercase tracking-widest">
                    <Link to="/" className={isActive("/")}>Home</Link>
                    <Link to="/about" className={isActive("/about")}>About</Link>
                    <Link to="/services" className={isActive("/services")}>Services</Link>
                    <Link to="/ipo-process" className={isActive("/ipo-process")}>Process</Link>
                    <Link to="/why-us" className={isActive("/why-us")}>Approach</Link>
                    <Link to="/eligibility" className={isActive("/eligibility")}>Readiness</Link>
                    <Link to="/governance" className={isActive("/governance")}>Governance</Link>
                    <Link to="/team" className={isActive("/team")}>Team</Link>

                    {/* Contact - Styled as a subtle Ghost Button */}
                    <Link
                        to="/contact"
                        className="ml-4 px-5 py-2 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-500 font-bold"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
