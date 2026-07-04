import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3">
      <a
        href="https://wa.me/919800000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-[#1DA851] flex items-center justify-center text-white shadow-xl"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+919800000000"
        aria-label="Call"
        className="w-[52px] h-[52px] rounded-full bg-gold flex items-center justify-center text-white shadow-xl"
      >
        <Phone size={20} />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="w-[42px] h-[42px] rounded-full bg-emerald flex items-center justify-center text-white shadow-lg opacity-85"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
