import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { testimonials } from "../data/content";

const stats = [
  { value: "1000+", label: "Investors Advised" },
  { value: "4.9/5", label: "Average Client Rating" },
  { value: "95%", label: "Client Retention" },
];

export default function Testimonials() {
  return (
    <>
      <section className="pt-40 pb-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10 text-center">
          <div className="eyebrow" style={{ color: "#E4C77E" }}>Client Stories</div>
          <h1 className="text-white text-4xl md:text-5xl mt-3">What Our Investors Say</h1>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-emerald/10">
        <div className="container-w grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl text-emerald mb-1">{s.value}</div>
              <div className="text-[0.82rem] text-charcoal/55">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-w grid sm:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.1} className="bg-white border border-emerald/10 rounded-md p-8">
              <div className="flex gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} fill="#C89B3C" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display italic text-[1.1rem] leading-relaxed text-emerald mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-ui font-semibold text-[0.85rem]">{t.name}</div>
              <div className="text-[0.76rem] text-charcoal/55 mt-0.5">{t.role}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-emerald-deep text-center">
        <div className="container-w">
          <h2 className="text-white text-[1.9rem] mb-4">Ready to write your own success story?</h2>
          <Link to="/contact" className="btn btn-gold mt-2 inline-flex">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
