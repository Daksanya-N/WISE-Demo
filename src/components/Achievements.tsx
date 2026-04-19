import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Trophy, Award, Users } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    title: 'Smart India Hackathon 2025',
    subtitle: 'Participant',
    desc: 'Represented college at one of India\'s largest national-level hackathons. Collaborated in a team to build an innovative tech solution addressing real-world problems within a 36-hour sprint.',
    tag: 'Hackathon',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    textColor: 'text-orange-400',
  },
  {
    icon: Award,
    title: 'Google IT Automation with Python',
    subtitle: 'Certificate',
    desc: 'Completed the Google-offered professional certificate on Coursera covering Python scripting, automation, version control with Git, troubleshooting, and configuration management with a focus on real-world applications.',
    tag: 'Certification',
    color: 'from-green-500 to-teal-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    textColor: 'text-green-400',
  },
];

export default function Achievements() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Milestones</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Achievements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map(({ icon: Icon, title, subtitle, desc, tag, color, bg, border, textColor }) => (
              <div
                key={title}
                className="group bg-gray-800/50 border border-gray-700/60 rounded-2xl p-7 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${bg} border ${border} flex-shrink-0`}>
                    <Icon size={22} className={textColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-2 mb-1">
                      <h3 className="text-white font-bold text-base">{title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${textColor} bg-transparent border ${border} ${bg} px-2.5 py-0.5 rounded-full`}>
                        {tag}
                      </span>
                      <span className="text-gray-500 text-xs">{subtitle}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

                <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${color} transition-all duration-500 rounded-full`} />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-800/30 border border-gray-700/40 rounded-2xl p-6 flex flex-wrap gap-8 justify-around text-center">
            {[
              { value: '8.5', label: 'CGPA', sub: 'out of 10' },
              { value: '2', label: 'Projects', sub: 'completed' },
              { value: '2', label: 'Achievements', sub: 'unlocked' },
              { value: '8+', label: 'Technologies', sub: 'mastered' },
            ].map(({ value, label, sub }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  {value}
                </div>
                <div className="text-white text-sm font-semibold mt-1">{label}</div>
                <div className="text-gray-500 text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
