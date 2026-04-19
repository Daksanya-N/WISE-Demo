import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.E Computer Science & Engineering',
    institution: 'ABC College',
    period: '2023 – 2027',
    cgpa: '8.5 / 10',
    desc: 'Currently in 2nd year, focusing on algorithms, data structures, web development, and AI/ML fundamentals. Active in technical clubs and hackathons.',
    status: 'Ongoing',
  },
];

export default function Education() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Academic Background</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Education</h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 to-transparent hidden sm:block" />

            {education.map(({ degree, institution, period, cgpa, desc, status }) => (
              <div key={degree} className="relative sm:pl-16">
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-gray-950 hidden sm:block" />

                <div className="bg-gray-800/50 border border-gray-700/60 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={18} className="text-cyan-400" />
                        <h3 className="text-white font-bold text-lg">{degree}</h3>
                      </div>
                      <p className="text-cyan-400/80 font-medium text-sm">{institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                        <Calendar size={13} />
                        <span>{period}</span>
                      </div>
                      <span className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-3 py-1 rounded-full font-semibold">
                        {status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>

                  <div className="inline-flex items-center gap-2 bg-gray-700/40 border border-gray-600/40 px-4 py-2 rounded-lg">
                    <span className="text-gray-500 text-xs font-medium">CGPA</span>
                    <span className="text-white font-bold text-sm">{cgpa}</span>
                    <div className="w-24 h-1.5 bg-gray-600 rounded-full overflow-hidden ml-2">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" style={{ width: '85%' }} />
                    </div>
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
