import { Link, useParams, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data/content";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <section className="pt-40 pb-16 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10">
          <Link to="/blog" className="font-ui text-gold-light text-[0.78rem] hover:underline">
            ← All Articles
          </Link>
          <div className="flex items-center gap-3 mt-6 font-ui text-[0.75rem] text-gold-light">
            <span className="font-semibold">{post.category}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50">{post.date}</span>
          </div>
          <h1 className="text-white text-3xl md:text-[2.5rem] mt-3 max-w-[760px]">{post.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-w max-w-[720px]">
          <Reveal>
            <p className="text-[1.05rem] text-charcoal/75 leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-charcoal/65 leading-relaxed mb-5">
              This is a sample article placeholder generated for the Vaibhava Wealth blog template.
              Replace this section with the full article content — market commentary, planning
              frameworks, or client education — written in your own voice.
            </p>
            <p className="text-charcoal/65 leading-relaxed">
              Every article on this blog links back to a relevant service page and consultation
              call-to-action, helping readers move from insight to action.
            </p>
          </Reveal>
          <div className="mt-14 pt-8 border-t border-emerald/10 flex justify-between items-center">
            <Link to="/blog" className="font-ui text-[0.8rem] font-semibold text-emerald hover:text-gold">
              ← Back to all articles
            </Link>
            <Link to="/contact" className="btn btn-outline-dark">Book Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
