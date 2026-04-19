import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
          <Code2 size={18} />
          <span>Daksanya Nandhakumar</span>
        </div>
        <p className="text-gray-600 text-xs">
          Built with React &amp; Tailwind &nbsp;·&nbsp; &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/daksanya', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/daksanya', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:daksanya.n@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cyan-400 transition-colors duration-200"
              aria-label={label}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
