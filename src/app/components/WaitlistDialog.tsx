import { useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { COUNTRIES } from '../../lib/countries';
import { submitWaitlist } from '../../lib/waitlist';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormErrors = Partial<Record<'fullName' | 'email' | 'submit', string>>;

export function WaitlistDialog() {
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setFullName('');
    setEmail('');
    setCountry('');
    setErrors({});
    setIsSubmitting(false);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) reset();
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (fullName.trim().length < 2) next.fullName = 'Please enter your full name.';
    if (!email.trim()) next.email = 'Email is required.';
    else if (!EMAIL_RE.test(email.trim())) next.email = 'That email looks off. Try again.';
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const entry = {
      fullName: fullName.trim(),
      email: email.trim(),
      ...(country ? { country } : {}),
    };

    const result = await submitWaitlist(entry);

    setIsSubmitting(false);

    if (!result.success) {
      setErrors({ submit: result.error ?? 'Something went wrong. Try again.' });
      return;
    }

    toast.success("Welcome to the arena.", {
      description: "You're on the list. We'll be in touch personally.",
    });
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="w-full md:w-auto px-12 py-5 bg-white text-black uppercase tracking-[0.2em] text-xs font-medium rounded-full hover:bg-[#F5F5F5] transition-all shadow-2xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Request Early Access →
        </button>
      </DialogTrigger>

      <DialogContent
        className="bg-[#0A0A0A] border border-[#2A2A2A] text-white p-0 gap-0 sm:max-w-md rounded-sm shadow-[0_25px_80px_-15px_rgba(192,21,42,0.25)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C0152A]/60 to-transparent" />

        <div className="px-8 pt-10 pb-8">
          <DialogTitle
            className="text-3xl tracking-wider uppercase text-white leading-none"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Secure your <span className="text-[#C0152A]">spot</span>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Join the CloserAI waitlist. Provide your full name, email, and optionally your country.
          </DialogDescription>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-7">
            <Field
              label="Full Name"
              htmlFor="wl-name"
              error={errors.fullName}
              required
            >
              <input
                id="wl-name"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                aria-invalid={!!errors.fullName}
                placeholder="Jane Doe"
                className="w-full bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 py-2 text-white placeholder:text-[#444444] focus:outline-none focus:border-[#C0152A] transition-colors text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </Field>

            <Field
              label="Email"
              htmlFor="wl-email"
              error={errors.email}
              required
            >
              <input
                id="wl-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                placeholder="you@company.com"
                className="w-full bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 py-2 text-white placeholder:text-[#444444] focus:outline-none focus:border-[#C0152A] transition-colors text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </Field>

            <Field
              label="Country"
              htmlFor="wl-country"
              hint="optional"
            >
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger
                  id="wl-country"
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 py-2 h-auto text-white data-[placeholder]:text-[#444444] focus:ring-0 focus-visible:ring-0 focus-visible:border-[#C0152A] hover:bg-transparent shadow-none [&>svg]:text-[#666666] [&>svg]:opacity-100 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <SelectValue placeholder="Where are you based?" />
                </SelectTrigger>
                <SelectContent
                  className="bg-[#0A0A0A] border border-[#2A2A2A] text-white max-h-[280px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {COUNTRIES.map((c) => (
                    <SelectItem
                      key={c.code}
                      value={c.code}
                      className="text-white focus:bg-[#1A1A1A] focus:text-white data-[state=checked]:text-[#C0152A]"
                    >
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            {errors.submit && (
              <div className="text-[#C0152A] text-xs tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-12 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs font-medium rounded-full hover:bg-[#F5F5F5] transition-all shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {isSubmitting ? 'Sending…' : 'Join the waitlist →'}
            </button>

            <div
              className="text-[#555555] text-[10px] tracking-[0.25em] uppercase text-center pt-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              No spam. No noise. Closers only.
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label
          htmlFor={htmlFor}
          className="text-[10px] tracking-[0.3em] uppercase text-[#999999] font-light"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {label}
          {required && <span className="text-[#C0152A] ml-1">*</span>}
        </label>
        {hint && (
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-[#444444] font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <div
          className="mt-1.5 text-[#C0152A] text-xs tracking-wide"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
