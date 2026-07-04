import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const values = [
  { title: "Client-First", desc: "Every recommendation is judged by one standard: is this right for the client." },
  { title: "Transparency", desc: "Clear explanations, clear costs, no fine print surprises." },
  { title: "Discipline", desc: "We hold to the plan through market cycles, not just calm ones." },
  { title: "Research-Driven", desc: "Decisions are grounded in data and analysis, not trends." },
  { title: "Long-Term View", desc: "We build for decades of compounding, not this quarter's returns." },
  { title: "Accountability", desc: "We review outcomes with you, openly, on a regular schedule." },
];

export default function AboutCompany() {
  return (
    <>
      <section className="pt-40 pb-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10 text-center">
          <div className="eyebrow" style={{ color: "#E4C77E" }}>About Vaibhava Wealth</div>
          <h1 className="text-white text-4xl md:text-5xl mt-3">Built for the long run</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-w grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="eyebrow">Our Story</div>
            <h2 className="text-[2rem] mt-2.5 mb-5">Why we exist</h2>
            <p className="text-charcoal/65 leading-relaxed mb-4">
              Vaibhava Wealth started from a simple observation: most individual investors are
              sold products, not given plans. Bank relationship managers rotate every few months.
              Insurance agents lead with commission-heavy bundles. Investors are left holding a
              scattered mix of instruments with no coherent strategy behind them.
            </p>
            <p className="text-charcoal/65 leading-relaxed">
              We built Vaibhava Wealth to be the opposite of that experience — a single, consistent
              advisory relationship centred on your actual goals, reviewed regularly, and free of
              product-push incentives.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-emerald/10 rounded-md p-7">
                <h4 className="text-[1rem] mb-2">Mission</h4>
                <p className="text-[0.85rem] text-charcoal/60 leading-relaxed">
                  Make disciplined, goal-based investing accessible to every Indian household.
                </p>
              </div>
              <div className="bg-white border border-emerald/10 rounded-md p-7">
                <h4 className="text-[1rem] mb-2">Vision</h4>
                <p className="text-[0.85rem] text-charcoal/60 leading-relaxed">
                  Be the most trusted wealth partner for first-generation investors.
                </p>
              </div>
              <div className="bg-white border border-emerald/10 rounded-md p-7 col-span-2">
                <h4 className="text-[1rem] mb-2">Client Promise</h4>
                <p className="text-[0.85rem] text-charcoal/60 leading-relaxed">
                  We will always explain the "why" behind a recommendation, disclose how we're
                  compensated, and put your goals ahead of any single product.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-w">
          <SectionHeading eyebrow="What We Stand For" title="Our Core Values" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="border-t-2 border-gold pt-5">
                <h4 className="text-[1.05rem] mb-2">{v.title}</h4>
                <p className="text-[0.85rem] text-charcoal/60 leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-deep">
        <div className="container-w grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="eyebrow" style={{ color: "#E4C77E" }}>Business Ethics</div>
            <h2 className="text-white text-[2rem] mt-2.5 mb-5">Held to a higher standard</h2>
            <p className="text-white/60 leading-relaxed">
              As an AMFI-registered distributor, we operate under a compliance framework that
              governs how we're compensated and what we can recommend. We treat that as a floor,
              not a ceiling — holding ourselves to a client-first standard well beyond what's
              strictly required.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow" style={{ color: "#E4C77E" }}>Future Roadmap</div>
            <h2 className="text-white text-[2rem] mt-2.5 mb-5">Where we're headed</h2>
            <p className="text-white/60 leading-relaxed">
              We're expanding our research capabilities, deepening our retirement and estate
              planning offerings, and investing in tools that make it easier for clients to track
              progress toward their goals in real time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-cream text-center">
        <div className="container-w">
          <h2 className="text-[1.9rem] mb-4">Ready to build a plan around your goals?</h2>
          <Link to="/contact" className="btn btn-outline-dark mt-2 inline-flex">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
