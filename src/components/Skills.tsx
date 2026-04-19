import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Skill = { name: string; level: number };

const categories: { label: string; color: string; skills: Skill[] }[] = [
  {
    label: 'Languages',
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'C', level: 75 },
    ],
  },
  {
    label: 'Web & Frameworks',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 78 },
      { name: 'HTML & CSS', level: 88 },
      { name: 'Flask', level: 72 },
    ],
  },
  {
    label: 'Tools & Platforms',
    color: 'from-teal-500 to-green-500',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Firebase', level: 68 },
      { name: 'OpenAI API', level: 74 },
    ],
  },
];

const tags = [
  'Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript',
  'React', 'Flask', 'Git', 'Firebase', 'OpenAI API', 'Generative AI',
];

function SkillBar({ name, level, color }: Skill & { color: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-500 text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700/60 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">What I Use</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Skills</h2>

          <div className="flex flex-wrap gap-2.5 mb-14">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-full hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-gray-800/80 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map(({ label, color, skills }) => (
              <div
                key={label}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <h3 className={`text-sm font-bold tracking-wide uppercase mb-5 text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
                  {label}
                </h3>
                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={color} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
