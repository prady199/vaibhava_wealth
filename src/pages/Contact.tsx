import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Reveal from "../components/Reveal";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  goal: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);

  // Replace this endpoint with your FormSubmit or EmailJS integration.
  // FormSubmit example: https://formsubmit.co/your@email.com
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('http://localhost:5000/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation');
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <>
      <section className="pt-40 pb-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-[0.06]" />
        <div className="container-w relative z-10 text-center">
          <div className="eyebrow" style={{ color: "#E4C77E" }}>Get In Touch</div>
          <h1 className="text-white text-4xl md:text-5xl mt-3">Let's Plan Your Wealth Journey</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-w grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <Reveal>
            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-cream border border-emerald/15 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[0.92rem] text-emerald mb-1">Phone</h4>
                  <p className="text-[0.85rem] text-charcoal/60">+91 9952960792</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-cream border border-emerald/15 flex items-center justify-center text-gold flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[0.92rem] text-emerald mb-1">Email</h4>
                  <p className="text-[0.85rem] text-charcoal/60">vaibhavawealthcreater@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-cream border border-emerald/15 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[0.92rem] text-emerald mb-1">Office</h4>
                  <p className="text-[0.85rem] text-charcoal/60">5/9 Rajeshwari Nagar 2nd cross street, Hosur, Tamil Nadu 635109</p>
                  <p className="text-[0.85rem] text-charcoal/60 mt-2">105, Harmony Santhosh, PV Rajamannar Salai, KK Nagar, Chennai 600078</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-cream border border-emerald/15 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-[0.92rem] text-emerald mb-1">Business Hours</h4>
                  <p className="text-[0.85rem] text-charcoal/60">Mon – Sat, 10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-md overflow-hidden border border-emerald/10 aspect-video">
              <iframe
                title="Vaibhava Wealth Office Location"
                src="https://www.google.com/maps?q=5/9+Rajeshwari+Nagar+Hosur+Tamil+Nadu&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="bg-emerald text-white rounded-md p-10 text-center">
                <h3 className="text-white text-[1.4rem] mb-3">Thank you!</h3>
                <p className="text-white/70 leading-relaxed">
                  Your consultation request has been received. Our team will reach out within one
                  business day.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-6">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="mb-1">
                    <label className="block font-ui text-[0.76rem] font-semibold text-emerald mb-1.5">Full Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-emerald/15 rounded-sm bg-cream text-sm"
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="mb-1">
                    <label className="block font-ui text-[0.76rem] font-semibold text-emerald mb-1.5">Phone</label>
                    <input
                      {...register("phone", { required: "Phone number is required" })}
                      placeholder="+91"
                      className="w-full px-4 py-3 border border-emerald/15 rounded-sm bg-cream text-sm"
                    />
                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mt-4">
                  <div>
                    <label className="block font-ui text-[0.76rem] font-semibold text-emerald mb-1.5">Email</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                      })}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 border border-emerald/15 rounded-sm bg-cream text-sm"
                    />
                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block font-ui text-[0.76rem] font-semibold text-emerald mb-1.5">City</label>
                    <input
                      {...register("city", { required: "City is required" })}
                      placeholder="Your city"
                      className="w-full px-4 py-3 border border-emerald/15 rounded-sm bg-cream text-sm"
                    />
                    {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block font-ui text-[0.76rem] font-semibold text-emerald mb-1.5">Investment Goal</label>
                  <select
                    {...register("goal")}
                    className="w-full px-4 py-3 border border-emerald/15 rounded-sm bg-cream text-sm"
                  >
                    <option>Retirement Planning</option>
                    <option>Child Education</option>
                    <option>Tax Saving</option>
                    <option>Wealth Creation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block font-ui text-[0.76rem] font-semibold text-emerald mb-1.5">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us a bit about your goals"
                    className="w-full px-4 py-3 border border-emerald/15 rounded-sm bg-cream text-sm"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn btn-gold w-full justify-center mt-6 disabled:opacity-60">
                  {isSubmitting ? "Sending…" : "Request Consultation"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
