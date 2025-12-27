import { Database, Brain, TrendingUp, GitBranch, CheckCircle2 } from 'lucide-react';

const programs = [
  {
    icon: Database,
    title: 'Data Science Internship',
    description: 'Master Python programming, data analytics, and exploratory data analysis with real-world datasets.',
    features: [
      'Python fundamentals & advanced concepts',
      'Data manipulation with Pandas & NumPy',
      'Data visualization with Matplotlib & Seaborn',
      'Statistical analysis & hypothesis testing',
      'Real industry projects'
    ],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Brain,
    title: 'Machine Learning Internship',
    description: 'Build and deploy ML models from scratch. Learn supervised and unsupervised learning techniques.',
    features: [
      'Supervised & unsupervised algorithms',
      'Model training & evaluation',
      'Feature engineering & selection',
      'Model deployment & MLOps',
      'Deep learning fundamentals'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Career & Placement Support',
    description: 'Comprehensive career guidance and placement assistance with top companies.',
    features: [
      'Resume building & optimization',
      'Mock interviews & feedback',
      'Portfolio development',
      'Interview preparation',
      'Direct company referrals'
    ],
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    icon: GitBranch,
    title: 'Git & Portfolio Building',
    description: 'Learn version control and build an impressive portfolio to showcase your skills.',
    features: [
      'Git & GitHub fundamentals',
      'Collaborative workflows',
      'Portfolio website creation',
      'Project documentation',
      'Open-source contribution'
    ],
    gradient: 'from-blue-600 to-cyan-600'
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg text-cyan-700 rounded-full mb-4 font-semibold text-xs">
            Training Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Transform Your Career Path
          </h2>
          <p className="text-base text-slate-600">
            Comprehensive programs designed to make you industry-ready with hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-2.5">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
