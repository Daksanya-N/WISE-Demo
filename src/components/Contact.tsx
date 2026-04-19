import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const socials = [
  { icon: Mail, label: 'Email', value: 'daksanya.n@gmail.com', href: 'mailto:daksanya.n@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/daksanya', href: 'https://linkedin.com/in/daksanya' },
  { icon: Github, label: 'GitHub', value: 'github.com/daksanya', href: 'https://github.com/daksanya' },
];

export default function Contact() {
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Let's Connect</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-12 max-w-lg">
            Whether you have a project idea, an internship opportunity, or just want to say hi — my inbox is always open.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex flex-col gap-5 mb-8">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-gray-800/50 border border-gray-700/60 rounded-xl p-4 hover:border-cyan-400/40 hover:bg-gray-800 transition-all duration-200 group"
                  >
                    <div className="bg-cyan-400/10 p-2.5 rounded-lg">
                      <Icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{label}</p>
                      <p className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-7">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-8 text-center">
                  <CheckCircle size={48} className="text-cyan-400" />
                  <h3 className="text-white font-bold text-lg">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-cyan-400 text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-1.5 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Daksanya, I wanted to reach out about..."
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-70 text-gray-950 font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/25 text-sm"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-gray-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}
                    {loading ? 'Sending...' : 'Send Message'}
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
