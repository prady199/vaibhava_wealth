import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Footer() {
  return (
    <footer className="bg-emerald-deep pt-16 pb-6">
      <div className="container-w">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div>
            <div className="font-display text-lg font-bold text-white mb-3">
              Vaibhava <span className="text-gold-light">Wealth</span>
            </div>
            <p className="text-white/55 text-sm leading-7 max-w-[260px]">
              Growing Wealth. Securing Futures. Goal-based investment advisory for individuals and families.
            </p>
          </div>
          <div>
            <h4 className="font-ui text-gold-light text-[0.78rem] tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/55 text-sm">
              <li><Link to="/about" className="hover:text-gold-light">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold-light">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold-light">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:text-gold-light">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gold-light">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-ui text-gold-light text-[0.78rem] tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2 text-white/55 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-gold-light">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-ui text-gold-light text-[0.78rem] tracking-widest uppercase mb-4">Newsletter</h4>
            <p className="text-white/55 text-sm mb-4">Monthly market insights, no spam.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-3 py-2.5 bg-white/5 border border-white/15 text-white text-sm rounded-sm placeholder:text-white/40"
              />
              <button className="btn btn-gold px-5 py-2.5 text-xs">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-[0.76rem] text-white/40">
          <div>© 2026 Vaibhava Wealth. All rights reserved. Mutual fund investments are subject to market risks.</div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-light">Terms</Link>
            <span>AMFI Registered Mutual Fund Distributor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
