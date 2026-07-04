import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-founder", label: "About Founder" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-emerald-deep/95 backdrop-blur-md py-3 shadow-xl" : "py-5"
      }`}
    >
      <div className="container-w flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-white tracking-wide flex items-center gap-3">
          Vaibhava <span className="text-gold-light">Wealth</span>
          <img src="/icon.png" alt="Vaibhava Wealth Icon" className="w-10 h-10 object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-ui text-[0.82rem] font-medium transition-colors ${
                  isActive ? "text-gold-light" : "text-white/85 hover:text-gold-light"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex font-ui font-semibold text-[0.78rem] px-6 py-2.5 bg-gradient-to-br from-gold-light to-gold text-emerald-deep rounded-sm"
        >
          Book Consultation
        </Link>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-emerald-deep mt-4 px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-white/90 font-ui text-sm">
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-gold justify-center">
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
