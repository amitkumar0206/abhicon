import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Real-World Projects',
    description: 'Work on actual industry projects that add value to your portfolio and resume'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from experienced professionals working in top tech companies'
  },
  {
    icon: Lightbulb,
    title: 'Practical Learning',
    description: 'Focus on hands-on implementation rather than just theoretical concepts'
  },
  {
    icon: Rocket,
    title: 'Career Growth',
    description: 'Comprehensive placement support to kickstart your data science career'
  }
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg text-cyan-700 rounded-full mb-4 font-semibold text-xs">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                Shaping the Future of{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Tech Talent
                </span>
              </h2>

              <p className="text-base text-slate-700 mb-4 leading-relaxed">
                Established in 2022, Abhicon is a leading IT training company specializing in Data Science and Machine Learning education. We bridge the gap between academic learning and industry requirements.
              </p>

              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Our mission is to empower aspiring data scientists and ML engineers with practical skills, real-world project experience, and the confidence to excel in their careers.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-5 text-white hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  <div className="text-3xl font-bold mb-1">3+ Years</div>
                  <div className="text-cyan-50 text-sm font-medium">Industry Excellence</div>
                </div>
                <div className="group bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-5 text-white hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  <div className="text-3xl font-bold mb-1">200+</div>
                  <div className="text-blue-50 text-sm font-medium">Success Stories</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 hover:bg-white/80 hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
