import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const SERVICES_OPTIONS = ["SEO", "Social Media", "Meta Ads", "Email Marketing", "Content Writing", "Digital Marketing", "Other"];

const initial = { name: "", email: "", phone: "", service: "", message: "" };

const validate = (values) => {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  const digits = values.phone.replace(/[\s\-()+]/g, "");
  if (!/^\d{7,15}$/.test(digits)) errors.phone = "Please enter a valid phone number.";
  if (!values.service) errors.service = "Please select a service.";
  if (values.message.trim().length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  return errors;
};

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-[#111827]/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 transition-colors focus:border-electric focus:outline-none ${
    hasError ? "border-red-500/70" : "border-slate-800 hover:border-slate-700"
  }`;

export const ContactForm = () => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      toast.success("Your enquiry has been received. We will get back to you soon.");
    } catch {
      toast.error("Something went wrong while sending. Please try again or use email or WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-premium border-electric/40 p-10 text-center" data-testid="contact-success">
        <CheckCircle2 className="mx-auto h-12 w-12 text-electric-bright" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-white">Message received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-400 leading-relaxed">
          Thank you, {values.name.split(" ")[0]}. Your enquiry about {values.service} has been received and sent to our
          inbox. Expect a reply at {values.email} soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setSubmitted(false);
          }}
          data-testid="contact-send-another"
          className="mt-7 rounded-full border border-electric/40 px-6 py-2.5 text-sm font-medium text-electric-bright transition-colors hover:bg-electric-deep/20"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-premium p-7 sm:p-9" data-testid="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={set("name")}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass(errors.name)}
            data-testid="contact-name-input"
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-red-400" data-testid="contact-name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={set("email")}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass(errors.email)}
            data-testid="contact-email-input"
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-red-400" data-testid="contact-email-error">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="Your phone number"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={inputClass(errors.phone)}
            data-testid="contact-phone-input"
          />
          {errors.phone && (
            <p id="contact-phone-error" role="alert" className="mt-1.5 text-xs text-red-400" data-testid="contact-phone-error">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-service" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Service
          </label>
          <select
            id="contact-service"
            value={values.service}
            onChange={set("service")}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "contact-service-error" : undefined}
            className={`${inputClass(errors.service)} ${values.service ? "" : "text-slate-600"}`}
            data-testid="contact-service-select"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="contact-service-error" role="alert" className="mt-1.5 text-xs text-red-400" data-testid="contact-service-error">
              {errors.service}
            </p>
          )}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="contact-message" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          placeholder="Tell us about your goals, your market and what you want to improve."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${inputClass(errors.message)} resize-y`}
          data-testid="contact-message-input"
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-red-400" data-testid="contact-message-error">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={submitting}
        data-testid="contact-submit-button"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric-deep px-8 py-4 text-sm font-semibold text-white transition-[background-color,box-shadow,opacity] duration-300 hover:bg-electric hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Start a Conversation
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-slate-500">
        Your details go straight to our inbox and are used only to respond to your enquiry.
      </p>
    </form>
  );
};
