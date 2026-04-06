import { useState } from "react";
import { FadeIn } from "../FadeIn";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/** Email subject line in your inbox. Set VITE_WEB3FORMS_SUBJECT in .env — use {name} and/or {email} as placeholders. */
function buildEmailSubject(name, email) {
  const template =
    import.meta.env.VITE_WEB3FORMS_SUBJECT?.trim() ||
    "Portfolio: message from {name}";
  return template.replaceAll("{name}", name).replaceAll("{email}", email);
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormError(
        "Form is not configured yet. Add your Web3Forms access key to the .env file.",
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: buildEmailSubject(formState.name, formState.email),
          // Inbox “From” line (Web3Forms default is “Notifications” without this)
          from_name: formState.name.trim(),
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        setFormError(
          typeof data.message === "string"
            ? data.message
            : "Something went wrong. Please try again.",
        );
        return;
      }
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch {
      setFormError(
        "Could not send your message. Check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 relative border-t border-white/5 bg-zinc-950"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl lg:max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-start">
          <FadeIn className="w-full min-w-0 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3">
                Get in touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-100 mb-6">
                Let's build something <br className="hidden md:block" /> amazing
                together.
              </h3>
              <p className="text-zinc-400 font-light">
                I'm currently available for freelance work and full-time roles.
                If you have a project that needs some creative engineering, I'd
                love to hear about it.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:adeyemi.tomiwa.ng@gmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group w-fit"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <iconify-icon icon="solar:letter-linear" class="text-xl" />
                </div>
                <span className="font-medium">adeyemi.tomiwa.ng@gmail.com</span>
              </a>

              <a
                href="tel:+2348148664606"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group w-fit"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <iconify-icon icon="solar:phone-linear" class="text-xl" />
                </div>
                <span className="font-medium">+234 814 866 4606</span>
              </a>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/Tommycity"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  <iconify-icon icon="simple-icons:github" class="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adeyemi-tomiwa-joshua/"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  <iconify-icon icon="simple-icons:linkedin" class="text-xl" />
                </a>
                <a
                  href="https://x.com/hapothecaryjosh"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  <iconify-icon icon="simple-icons:x" class="text-xl" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left" className="w-full min-w-0">
            <form
              onSubmit={handleSubmit}
              className="h-full space-y-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm sm:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {formError && (
                <p className="text-sm text-amber-400/90" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-2 rounded-lg bg-zinc-100 text-zinc-950 font-medium hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <iconify-icon
                      icon="solar:spinner-linear"
                      class="animate-spin text-xl"
                    />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <iconify-icon
                      icon="solar:check-circle-linear"
                      class="text-xl text-emerald-600"
                    />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <iconify-icon icon="solar:plain-linear" class="text-lg" />
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
