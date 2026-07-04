import { Link, useParams, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pt-40 pb-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10">
          <Link to="/services" className="font-ui text-gold-light text-[0.78rem] hover:underline">
            ← All Services
          </Link>
          <h1 className="text-white text-3xl md:text-[2.6rem] mt-4 max-w-[720px]">{service.name}</h1>
          <p className="text-white/60 mt-3 max-w-[560px]">{service.shortDesc}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-w grid lg:grid-cols-[1.3fr_0.7fr] gap-16">
          <div>
            <Reveal>
              <div className="eyebrow">Overview</div>
              <p className="text-charcoal/70 leading-relaxed mt-3 text-[1.02rem]">{service.overview}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-14">
              <div className="eyebrow">Benefits</div>
              <div className="grid sm:grid-cols-2 gap-4 mt-5">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-[0.9rem] text-charcoal/75 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <div className="eyebrow">How It Works</div>
              <div className="mt-5 space-y-4">
                {service.howItWorks.map((h, i) => (
                  <div key={h} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald text-white flex items-center justify-center font-display text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-[0.9rem] text-charcoal/75">{h}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {service.faqs.length > 0 && (
              <Reveal delay={0.2} className="mt-14">
                <div className="eyebrow">Frequently Asked Questions</div>
                <div className="mt-5 space-y-5">
                  {service.faqs.map((f) => (
                    <div key={f.q} className="border-b border-emerald/10 pb-5">
                      <h4 className="text-[0.98rem] mb-2">{f.q}</h4>
                      <p className="text-[0.87rem] text-charcoal/60 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <div>
            <Reveal delay={0.1} className="bg-white border border-emerald/10 rounded-md p-8 sticky top-28">
              <div className="eyebrow mb-4">Who Should Choose This</div>
              <div className="space-y-3 mb-8">
                {service.whoShouldChoose.map((w) => (
                  <div key={w} className="flex items-start gap-2.5">
                    <ArrowRight size={15} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-[0.85rem] text-charcoal/70 leading-relaxed">{w}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-gold w-full justify-center">Book Free Consultation</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-w">
          <div className="eyebrow mb-6">Related Services</div>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="group bg-cream border border-emerald/10 rounded-md p-6 hover:border-gold transition-colors"
              >
                <h4 className="text-[1rem] mb-2 group-hover:text-gold transition-colors">{r.name}</h4>
                <p className="text-[0.82rem] text-charcoal/55 leading-relaxed">{r.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
