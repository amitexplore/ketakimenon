'use client';
import { useState } from 'react';

const subjects = [
  'Performance / Booking',
  'Vocal Training Enquiry',
  'Studio Recording',
  'Collaboration',
  'Recordings',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = "w-full border border-[#C9A84C]/25 bg-white text-[#3D1010] px-4 py-3 text-sm focus:outline-none focus:border-[#6B1A1A] transition-colors placeholder-[#C4A8A8]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {(['firstName', 'lastName'] as const).map((field) => (
          <div key={field}>
            <label className="block text-[9px] uppercase tracking-[0.35em] text-[#9B7070] mb-2">
              {field === 'firstName' ? 'First Name' : 'Last Name'}
            </label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field === 'firstName' ? 'Your first name' : 'Your last name'}
              required={field === 'firstName'}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-[9px] uppercase tracking-[0.35em] text-[#9B7070] mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-[9px] uppercase tracking-[0.35em] text-[#9B7070] mb-2">Subject</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a subject</option>
          {subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-[9px] uppercase tracking-[0.35em] text-[#9B7070] mb-2">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us more about your enquiry..."
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-[#6B1A1A] text-[#FAF6EE] text-[10px] font-semibold tracking-[0.4em] uppercase hover:bg-[#8B2E2E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="border border-[#C9A84C]/40 bg-[#FDF6E0] px-5 py-4 text-sm text-[#6B1A1A] text-center">
          ✦ &nbsp; Your message has been sent. We&apos;ll be in touch shortly.
        </div>
      )}

      {status === 'error' && (
        <div className="border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 text-center">
          {errorMsg}
        </div>
      )}
    </form>
  );
}
