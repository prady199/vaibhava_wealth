import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <section className="pt-40 pb-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10 text-center">
          <div className="eyebrow" style={{ color: "#E4C77E" }}>What We Offer</div>
          <h1 className="text-white text-4xl md:text-5xl mt-3">Our Services</h1>
          <p className="text-white/60 mt-4 max-w-[520px] mx-auto">
            A complete suite of advisory services, each built around a specific stage of your
            financial life.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-w grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/services/${s.slug}`}
                className="group block h-full bg-white border border-emerald/10 rounded-md p-8 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="font-ui text-[0.72rem] text-gold font-bold tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="text-[1.15rem] mt-3.5 mb-2.5 group-hover:text-gold transition-colors">
                  {s.name}
                </h4>
                <p className="text-[0.85rem] text-charcoal/55 leading-relaxed mb-5">{s.shortDesc}</p>
                <span className="font-ui text-[0.78rem] font-semibold text-emerald group-hover:text-gold transition-colors">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-emerald-deep text-center">
        <div className="container-w">
          <h2 className="text-white text-[1.9rem] mb-4">Not sure which service fits your goal?</h2>
          <p className="text-white/60 mb-8 max-w-[480px] mx-auto">
            Book a free consultation and we'll map the right combination of services to your plan.
          </p>
          <Link to="/contact" className="btn btn-gold">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
