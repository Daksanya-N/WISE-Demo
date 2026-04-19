import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Github, ExternalLink, Bot, BarChart3 } from 'lucide-react';

const projects = [
  {
    icon: Bot,
    title: 'AI Chat Assistant',
    description:
      'A smart chatbot designed to answer student queries in real-time. Built with Python and Flask on the backend and integrated with the OpenAI API for intelligent, context-aware responses. Features a clean, responsive chat interface.',
    tags: ['Python', 'Flask', 'OpenAI API', 'HTML/CSS', 'REST API'],
    github: 'https://github.com/daksanya',
    live: null,
    accent: 'from-cyan-500 to-teal-500',
    glow: 'hover:shadow-cyan-500/10',
    badge: 'AI / Backend',
  },
  {
    icon: BarChart3,
    title: 'Student Expense Tracker',
    description:
      'A full-featured web application that helps students manage and visualize their daily expenses. Built with React for a dynamic UI and Firebase for real-time data sync. Includes interactive charts, category breakdowns, and monthly summaries.',
    tags: ['React', 'Firebase', 'JavaScript', 'Chart.js', 'CSS'],
    github: 'https://github.com/daksanya',
    live: null,
    accent: 'from-blue-500 to-cyan-500',
    glow: 'hover:shadow-blue-500/10',
    badge: 'Full-Stack',
  },
];

export default function Projects() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">What I've Built</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(({ icon: Icon, title, description, tags, github, live, accent, glow, badge }) => (
              <div
                key={title}
                className={`group relative bg-gray-800/50 border border-gray-700/60 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl ${glow} hover:-translate-y-1`}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${accent} bg-opacity-10`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-700/60 px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-400 transition-all duration-300">
                    {title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-700/60 text-gray-400 px-2.5 py-1 rounded-md border border-gray-600/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
                    >
                      <Github size={15} />
                      Source Code
                    </a>
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
