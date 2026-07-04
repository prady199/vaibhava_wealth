import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Users,
  Target,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { services } from "../data/services";
import { testimonials, processSteps, whyChooseUs } from "../data/content";

function Counter({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let cur = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      setVal(cur);
    }, 20);
    return () => clearInterval(t);
  }, [target]);
  return <>{val}</>;
}

export default function Home() {
  const [testiIdx, setTestiIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTestiIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 bg-[radial-gradient(ellipse_at_75%_20%,_#0a5240_0%,_#063B2E_45%,_#042920_100%)]">
        <div className="absolute inset-0 dotted-bg opacity-50" />
        <div className="container-w relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow" style={{ color: "#E4C77E" }}>
                Wealth &amp; Investment Consultancy
              </div>
              <h1 className="text-white text-4xl md:text-[3.4rem] leading-[1.12] mt-4 mb-6 font-semibold">
                Growing Wealth.
                <br />
                <em className="italic text-gold-light">Securing</em> Futures.
              </h1>
              <p className="text-white text-base md:text-[1.05rem] leading-[1.75] max-w-[520px] mb-9">
                Helping individuals and families create, grow, and preserve wealth through
                disciplined investing and strategic, goal-based financial planning.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact" className="btn btn-gold">Book Free Consultation</Link>
                <Link to="/services" className="btn btn-outline">Explore Services</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/[0.04] border border-gold/25 rounded-md p-8 pb-6 backdrop-blur-sm">
                <div className="font-ui text-white/55 text-[0.72rem] tracking-widest uppercase mb-1.5">
                  Illustrative Portfolio Growth
                </div>
                <div className="font-display text-white text-3xl mb-4">
                  ₹1 Cr <span className="text-gold-light text-lg">projected corpus, 15-yr SIP</span>
                </div>
                <svg viewBox="0 0 340 140" width="100%" height="140">
                  <polyline
                    points="0,120 40,118 80,100 120,104 160,80 200,86 240,50 280,58 320,15"
                    fill="none"
                    stroke="rgba(255,255,255,.08)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <motion.polyline
                    points="0,120 40,118 80,100 120,104 160,80 200,86 240,50 280,58 320,15"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#C89B3C" />
                      <stop offset="100%" stopColor="#E4C77E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute -bottom-7 -right-3 flex items-center gap-3 bg-white pl-3 pr-5 py-3 rounded-full shadow-2xl">
                <img
                  src="/founder.jpeg"
                  alt="R. Sathiyanarayanan"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-ui font-semibold text-[0.82rem] text-emerald">R. Sathiyanarayanan</div>
                  <div className="text-[0.7rem] text-charcoal/50">Founder, MS MBA</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white py-6 border-b border-emerald/10">
        <div className="container-w flex flex-wrap justify-between gap-5">
          {[
            "AMFI Registered Distributor",
            "ARN Registered Advisor",
            null,
            "Personalized Financial Planning",
            "Goal-Based Investing",
          ].map((t, i) =>
            t === null ? (
              <div key="counter" className="flex items-center gap-2.5 font-ui text-[0.78rem] font-semibold text-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <Counter target={1000} />+ Happy Investors
              </div>
            ) : (
              <div key={i} className="flex items-center gap-2.5 font-ui text-[0.78rem] font-semibold text-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {t}
              </div>
            )
          )}
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-28">
        <div className="container-w grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <Reveal className="bg-emerald rounded-md aspect-[4/5] relative overflow-hidden flex items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/35 to-transparent" />
            <div className="relative text-white font-display italic text-xl leading-relaxed">
              &ldquo;People invest in people before they invest in products.&rdquo;
              <span className="block mt-3.5 font-ui not-italic text-[0.75rem] text-gold-light tracking-wide">
                — R. Sathiyanarayanan, Founder
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">About Vaibhava Wealth</div>
            <h2 className="text-[2.1rem] md:text-[2.3rem] mt-2.5 leading-tight">
              Wealth advice built around your life, not a product catalogue.
            </h2>
            <p className="text-charcoal/65 leading-relaxed mt-4">
              Vaibhava Wealth was founded to bring institutional-grade financial discipline to
              individual investors and families — replacing guesswork with research, and sales
              pitches with a plan tied to your actual goals.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { h: "Mission", p: "Make disciplined, goal-based investing accessible to every Indian household." },
                { h: "Vision", p: "Be the most trusted wealth partner for first-generation investors." },
                { h: "Core Value", p: "Transparent advice, always in the client's interest first." },
                { h: "Approach", p: "Research-driven, long-term, and reviewed regularly with you." },
              ].map((v) => (
                <div key={v.h} className="border-l-2 border-gold pl-4">
                  <h4 className="text-[1.02rem] mb-1.5">{v.h}</h4>
                  <p className="text-[0.85rem] text-charcoal/60 leading-relaxed">{v.p}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-outline-dark mt-8 inline-flex">
              Read Our Full Story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-28 bg-white">
        <div className="container-w">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            desc="A complete suite of advisory services designed around each stage of your financial life."
            center
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-emerald/10 border border-emerald/10">
          {services.map((s, i) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.slug}
              className="group bg-cream hover:bg-emerald p-8 transition-colors duration-300"
            >
              <div className="font-ui text-[0.72rem] text-gold font-bold tracking-wide group-hover:text-gold-light">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="text-[1.05rem] mt-3.5 mb-2 group-hover:text-gold-light transition-colors">
                {s.name}
              </h4>
              <p className="text-[0.82rem] text-charcoal/55 group-hover:text-white/70 leading-relaxed transition-colors">
                {s.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-28 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10">
          <SectionHeading
            eyebrow="The Vaibhava Difference"
            title="Why Clients Choose Us"
            desc="Six principles that guide every recommendation we make."
            center
            light
          />
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/10 relative z-10">
          {whyChooseUs.map((w) => (
            <div key={w.title} className="bg-emerald-deep p-9">
              <div className="w-9.5 h-9.5 w-[38px] h-[38px] border border-gold rounded-full flex items-center justify-center text-gold-light font-display mb-4.5 mb-5">
                {w.letter}
              </div>
              <h4 className="text-white text-base mb-2">{w.title}</h4>
              <p className="text-white/55 text-[0.82rem] leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-28">
        <div className="container-w">
          <SectionHeading eyebrow="How We Work" title="Our Investment Process" center />
          <div className="grid md:grid-cols-6 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-[22px] left-0 right-0 h-px bg-[repeating-linear-gradient(90deg,#C89B3C_0_8px,transparent_8px_16px)]" />
            {processSteps.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="text-center relative px-2">
                <div className="w-11 h-11 rounded-full bg-cream border-[1.5px] border-gold flex items-center justify-center mx-auto mb-4.5 mb-5 font-display text-emerald font-bold relative z-10">
                  {i + 1}
                </div>
                <h4 className="text-[0.92rem] mb-1.5">{p.title}</h4>
                <p className="text-[0.76rem] text-charcoal/55 leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-28 bg-white">
        <div className="container-w">
          <SectionHeading eyebrow="Client Stories" title="What Our Investors Say" center />
          <div className="max-w-[720px] mx-auto text-center">
            <motion.div key={testiIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex justify-center gap-1 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#C89B3C" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display italic text-xl md:text-[1.35rem] leading-relaxed text-emerald mb-6">
                &ldquo;{testimonials[testiIdx].quote}&rdquo;
              </p>
              <div className="font-ui font-semibold text-[0.85rem]">{testimonials[testiIdx].name}</div>
              <div className="text-[0.76rem] text-charcoal/55 mt-0.5">{testimonials[testiIdx].role}</div>
            </motion.div>
            <div className="flex justify-center items-center gap-4 mt-9">
              <button
                onClick={() => setTestiIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="text-emerald/50 hover:text-emerald"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestiIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-[7px] rounded-full transition-all ${
                      i === testiIdx ? "w-[22px] bg-gold" : "w-[7px] bg-emerald/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestiIdx((i) => (i + 1) % testimonials.length)}
                className="text-emerald/50 hover:text-emerald"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-emerald to-emerald-deep text-center">
        <div className="container-w">
          <h2 className="text-white text-3xl md:text-[2.3rem] mb-3.5">Start Your Wealth Journey Today</h2>
          <p className="text-white/65 mb-8">A free, no-obligation consultation to map your first goal-based plan.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-gold">Book Consultation</Link>
            <a href="tel:+919800000000" className="btn btn-outline">Call Now</a>
            <a href="https://wa.me/919800000000" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* TRUST ICONS STRIP */}
      <section className="py-16 bg-white">
        <div className="container-w grid sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="text-gold" size={28} />
            <p className="text-[0.85rem] text-charcoal/60">AMFI Registered &amp; Compliant</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Users className="text-gold" size={28} />
            <p className="text-[0.85rem] text-charcoal/60">1000+ Families Advised</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Target className="text-gold" size={28} />
            <p className="text-[0.85rem] text-charcoal/60">Every Plan is Goal-Based</p>
          </div>
        </div>
      </section>
    </>
  );
}
