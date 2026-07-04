import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-[620px] mb-14 ${center ? "mx-auto text-center" : ""}`}
    >
      <div className="eyebrow" style={light ? { color: "#E4C77E" } : undefined}>
        {eyebrow}
      </div>
      <h2 className={`text-[2.1rem] md:text-[2.3rem] mt-2.5 leading-tight ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {desc && (
        <p className={`mt-3.5 leading-relaxed ${light ? "text-white/65" : "text-charcoal/65"}`}>{desc}</p>
      )}
    </motion.div>
  );
}
