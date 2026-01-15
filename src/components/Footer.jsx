export default function Footer() {
    return (
        <footer className="bg-[#1F2937] text-slate-300 mt-24">

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">

                {/* About */}
                <div>
                    <h4 className="font-serif text-slate-100 mb-4">
                        ListMySME
                    </h4>
                    <p className="leading-relaxed">
                        Professional advisory platform providing structured SME IPO
                        and capital markets compliance support to Small and Medium
                        Enterprises in India.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-serif text-slate-100 mb-4">
                        Our Services
                    </h4>
                    <ul className="space-y-2">
                        <li>SME IPO Advisory</li>
                        <li>Issue Structuring & Coordination</li>
                        <li>Regulatory Filings Support</li>
                        <li>Post-Listing Compliance</li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-serif text-slate-100 mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        <li className="hover:text-white">About Us</li>
                        <li className="hover:text-white">SME IPO Services</li>
                        <li className="hover:text-white">IPO Process</li>
                        <li className="hover:text-white">Why Choose Us</li>
                        <li className="hover:text-white">Contact Us</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-serif text-slate-100 mb-4">
                        Contact Information
                    </h4>
                    <p>Email: info@listmysme.com</p>
                    <p>Phone: +91-98XXXXXXXX</p>
                    <p>Business Hours: Monday to Saturday<br /><span className="text-xs text-gray-200">9 AM - 6 PM</span></p>
                </div>
            </div>

            {/* Legal strip */}
            <div className="border-t border-slate-700 px-6 py-4 text-xs text-slate-400 text-center">
                All services are provided in accordance with applicable laws, SEBI
                regulations, and exchange requirements. ListMySME does not act as
                a merchant banker, stock exchange, or registrar to an issue.
            </div>
        </footer>
    );
}
