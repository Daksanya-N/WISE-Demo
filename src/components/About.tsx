import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Sparkles, GraduationCap, Target } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'B.E Computer Science',
    desc: 'ABC College · 2nd Year · CGPA 8.5/10',
  },
  {
    icon: Sparkles,
    title: 'Exploring Generative AI',
    desc: 'Diving deep into LLMs, prompt engineering, and AI-powered applications',
  },
  {
    icon: Target,
    title: 'Full-Stack Enthusiast',
    desc: 'Building end-to-end web applications with modern frameworks and cloud tools',
  },
];

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Who I Am</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 text-base leading-relaxed mb-5">
                Hey there! I'm <span className="text-white font-semibold">Daksanya Nandhakumar</span>, a second-year
                Computer Science student passionate about building software that solves real problems. I love the
                intersection of design and technology — creating things that are not just functional, but genuinely
                useful.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-5">
                My journey started with Python and C, and quickly expanded into web development, AI integrations, and
                cloud tools. Right now, I'm excited about{' '}
                <span className="text-cyan-400 font-medium">Generative AI</span> and its potential to transform how we
                build software.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                When I'm not coding, I enjoy participating in hackathons, contributing to open-source projects, and
                learning from the developer community.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-gray-800/60 border border-gray-700/50 rounded-xl p-5 hover:border-cyan-400/30 transition-all duration-300 hover:bg-gray-800"
                >
                  <div className="mt-0.5 bg-cyan-400/10 p-2.5 rounded-lg">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
