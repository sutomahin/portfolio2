import {useState, type FormEvent, type RefObject} from 'react';
import {ArrowRight, Check, CheckCircle2, Copy, Mail, MapPin, Phone, Send} from 'lucide-react';
import {PROFILE} from '../data/portfolio';
import {validateContactForm, type ContactFormValues} from '../utils/portfolio';

interface ContactSectionProps {
  nameInputRef: RefObject<HTMLInputElement | null>;
}

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactSection({nameInputRef}: ContactSectionProps) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submittedInquiry, setSubmittedInquiry] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleFieldChange = (field: keyof ContactFormValues, nextValue: string) => {
    setValues((prev) => ({...prev, [field]: nextValue}));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = {...prev};
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(values);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedInquiry({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    });
    setValues(INITIAL_VALUES);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <section id="contact" className="pt-6 pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-cyan-400/15 dark:bg-[#081426]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-3">
              <div>
                <div className="flex items-center gap-2.5">
                  <Send className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Let&apos;s Build Something Great
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => nameInputRef.current?.focus()}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform duration-150 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap shrink-0"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="space-y-4 border-y border-slate-100 py-6 lg:col-span-4 lg:border-y-0 lg:border-x lg:px-6 lg:py-0 dark:border-slate-800/80">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Email</div>
                  <div className="mt-0.5 flex items-center gap-2">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-xs font-medium text-slate-900 hover:text-cyan-600 dark:text-slate-100 dark:hover:text-cyan-400"
                    >
                      {PROFILE.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded border border-slate-200 text-slate-500 transition-colors hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-300"
                    >
                      {copiedEmail ? (
                        <Check className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                      ) : (
                        <Copy className="h-3 w-3" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Phone</div>
                  <a
                    href="tel:+923101234567"
                    className="font-mono-nums mt-0.5 block text-xs font-medium text-slate-900 hover:text-cyan-600 dark:text-slate-100 dark:hover:text-cyan-400"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                  <div className="mt-0.5 text-xs font-medium text-slate-900 dark:text-slate-100">
                    {PROFILE.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Availability</div>
                  <div className="mt-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    {PROFILE.availabilityDetail}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              {submittedInquiry ? (
                <div
                  role="status"
                  className="flex h-full flex-col justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 dark:bg-emerald-500/10"
                >
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      <span>Message received</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      Thanks, <span className="font-semibold text-slate-900 dark:text-white">{submittedInquiry.name}</span>.
                      Your inquiry regarding <span className="font-medium">&ldquo;{submittedInquiry.subject}&rdquo;</span> has
                      been recorded and a reply will be sent to{' '}
                      <span className="font-medium">{submittedInquiry.email}</span>.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedInquiry(null)}
                    className="mt-5 w-fit rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 transition-colors hover:border-cyan-500/50 dark:border-slate-700 dark:bg-[#0a192f] dark:text-slate-100"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="sr-only">
                        Your Name
                      </label>
                      <input
                        ref={nameInputRef}
                        id="contact-name"
                        type="text"
                        value={values.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        placeholder="Your Name"
                        aria-invalid={Boolean(errors.name)}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700/90 dark:bg-[#050e1d] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400"
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="sr-only">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={values.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        placeholder="Your Email"
                        aria-invalid={Boolean(errors.email)}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700/90 dark:bg-[#050e1d] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400"
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={values.subject}
                      onChange={(e) => handleFieldChange('subject', e.target.value)}
                      placeholder="Subject"
                      aria-invalid={Boolean(errors.subject)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700/90 dark:bg-[#050e1d] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={values.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      placeholder="Your Message"
                      aria-invalid={Boolean(errors.message)}
                      className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700/90 dark:bg-[#050e1d] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400"
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2.5 text-xs font-semibold text-slate-950 transition-colors duration-150 hover:from-cyan-400 hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
