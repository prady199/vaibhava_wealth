import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data/content";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogPosts.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <section className="pt-40 pb-16 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10 text-center">
          <div className="eyebrow" style={{ color: "#E4C77E" }}>Insights</div>
          <h1 className="text-white text-4xl md:text-5xl mt-3">The Vaibhava Wealth Blog</h1>
          <p className="text-white/60 mt-4 max-w-[520px] mx-auto">
            Practical thinking on SIPs, tax planning, retirement, and staying disciplined through
            market cycles.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-emerald/10">
        <div className="container-w flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
          <div className="relative max-w-[320px] w-full">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full pl-10 pr-4 py-2.5 border border-emerald/15 rounded-sm bg-cream text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`font-ui text-[0.76rem] font-medium px-4 py-2 rounded-full border transition-colors ${
                  category === c
                    ? "bg-emerald text-white border-emerald"
                    : "border-emerald/20 text-charcoal/60 hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-w grid sm:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link to={`/blog/${p.slug}`} className="group block bg-white border border-emerald/10 rounded-md p-8 h-full hover:border-gold hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4 font-ui text-[0.72rem] text-charcoal/45">
                  <span className="text-gold font-semibold">{p.category}</span>
                  <span>•</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="text-[1.2rem] mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
                <p className="text-[0.87rem] text-charcoal/55 leading-relaxed">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-charcoal/50 col-span-2 text-center py-12">No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
