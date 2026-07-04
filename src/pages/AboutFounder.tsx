import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  { year: "Early Career", text: "Built a foundation in corporate leadership roles, developing a disciplined, analytical approach to decision-making." },
  { year: "MS, MBA", text: "Pursued advanced management education, sharpening a structured, research-first view of markets and finance." },
  { year: "Transition to Wealth Advisory", text: "Moved from corporate leadership into personal finance, driven by a desire to help individuals invest with the same rigour institutions do." },
  { year: "Founding Vaibhava Wealth", text: "Launched Vaibhava Wealth to bring transparent, goal-based investment advisory to individuals and families." },
  { year: "Today", text: "Advising 1000+ investors with a consistent, research-driven, client-first philosophy." },
];

const philosophy = [
  "Invest with Discipline",
  "Focus on Long-Term Wealth",
  "Goal-Oriented Planning",
  "Risk Management",
  "Transparency",
  "Integrity",
  "Client-first Approach",
];

export default function AboutFounder() {
  return (
    <>
      <section className="pt-40 pb-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10 text-center">
          <div className="eyebrow" style={{ color: "#E4C77E" }}>Meet The Founder</div>
          <h1 className="text-white text-4xl md:text-5xl mt-3">R. Sathiyanarayanan</h1>
          <p className="text-gold-light font-ui text-sm mt-3 tracking-wide">MS, MBA — Wealth &amp; Investment Consultant</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-w grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <Reveal>
            <div className="bg-emerald rounded-md aspect-[4/5] relative overflow-hidden">
              <img
                src="/founder.jpeg"
                alt="R. Sathiyanarayanan — Founder of Vaibhava Wealth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">Founder's Story</div>
            <h2 className="text-[2rem] mt-2.5 mb-5">People before products</h2>
            <p className="text-charcoal/65 leading-relaxed mb-4">
              R. Sathiyanarayanan's path to wealth advisory began not in finance sales, but in
              corporate leadership — years of making structured, high-stakes decisions under
              uncertainty. That discipline forms the backbone of how Vaibhava Wealth approaches
              every client's portfolio today.
            </p>
            <p className="text-charcoal/65 leading-relaxed mb-4">
              After years of watching friends and family navigate their finances through
              fragmented, product-first advice, the shift toward wealth management became a
              natural next chapter — grounded in an MS and MBA, and a conviction that individual
              investors deserve the same rigour institutions apply to their own portfolios.
            </p>
            <p className="text-charcoal/65 leading-relaxed">
              Today, that philosophy has translated into hundreds of client relationships built on
              transparency, patience, and a plan tied to real goals — not quarterly targets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-w grid md:grid-cols-2 gap-16">
          <Reveal>
            <div className="eyebrow">Investment Philosophy</div>
            <h2 className="text-[2rem] mt-2.5 mb-6">Principles that don't change with the market</h2>
            <div className="grid grid-cols-1 gap-3">
              {philosophy.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <span className="text-[0.92rem] text-charcoal/75">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">Credentials</div>
            <h2 className="text-[2rem] mt-2.5 mb-6">Certifications &amp; Memberships</h2>
            <div className="space-y-4">
              {[
                "AMFI Registered Mutual Fund Distributor",
                "Valid ARN Registration",
                "MS, MBA — Management &amp; Finance",
                "Ongoing industry training and professional development",
                "Member, professional financial advisory networks",
              ].map((c) => (
                <div key={c} className="border-l-2 border-gold pl-4 py-1">
                  <p className="text-[0.9rem] text-charcoal/75" dangerouslySetInnerHTML={{ __html: c }} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-emerald-deep">
        <div className="container-w">
          <SectionHeading
            eyebrow="Career Milestones"
            title="Vision: People Invest in People"
            desc="Before they invest in products — which is why trust is built deliberately, one relationship at a time."
            center
            light
          />
          <div className="max-w-[720px] mx-auto space-y-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06} className="flex gap-6">
                <div className="flex-shrink-0 w-36 font-ui text-gold-light text-[0.8rem] font-semibold pt-0.5">{m.year}</div>
                <div className="border-l border-white/15 pl-6 pb-2">
                  <p className="text-white/65 text-[0.9rem] leading-relaxed">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream text-center">
        <div className="container-w">
          <h2 className="text-[1.9rem] mb-4">Start a conversation with the founder</h2>
          <p className="text-charcoal/60 mb-8 max-w-[500px] mx-auto">
            A first consultation is complimentary and comes with no obligation.
          </p>
          <Link to="/contact" className="btn btn-outline-dark">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
