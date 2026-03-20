import { Link } from "react-router-dom";
import Logo from "./logo";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-bold">AgroJet</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            AI-powered agriculture platform built for Indian farmers and agri businesses.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Products</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/products/agrobuddy" className="hover:opacity-100 transition-opacity">AgroBuddy</Link></li>
            <li><Link to="/products/agrovault" className="hover:opacity-100 transition-opacity">AgroVault</Link></li>
            <li><Link to="/products/agrodesk" className="hover:opacity-100 transition-opacity">AgroDesk</Link></li>
            <li><Link to="/products/agroflow" className="hover:opacity-100 transition-opacity">AgroFlow</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Legal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link to="/whatsapp-policy" className="hover:opacity-100 transition-opacity">WhatsApp Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:opacity-100 transition-opacity">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm opacity-50">
        © {new Date().getFullYear()} TECHARDENT INTERNET PVT LTD. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
