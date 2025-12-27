import { TrendingUp, Award, Users, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg text-slate-700 rounded-full mb-6">
            <Sparkles size={16} className="text-cyan-600" />
            <span className="text-xs font-semibold">Est. 2022 • Industry Leading DS/ML Training</span>
            <Award size={16} className="text-cyan-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 leading-tight">
            Industry-Grade DS/ML
            <br />
            Internships with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                60% Success
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Transform your career with hands-on Data Science and Machine Learning internships. Real projects, expert mentorship, and guaranteed placement support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => document.getElementById('internship')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/60 backdrop-blur-md text-slate-700 rounded-xl font-semibold border border-white/20 shadow-lg hover:bg-white/80 hover:shadow-xl transition-all duration-300"
            >
              Explore Programs
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="group bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 hover:bg-white/80 hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-md">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">200+</div>
              <div className="text-sm text-slate-600 font-medium">Interns Trained</div>
            </div>

            <div className="group bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 hover:bg-white/80 hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-md">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">60%</div>
              <div className="text-sm text-slate-600 font-medium">Placement Rate</div>
            </div>

            <div className="group bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 hover:bg-white/80 hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-md">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">₹6.25L</div>
              <div className="text-sm text-slate-600 font-medium">Average Package</div>
            </div>

            <div className="group bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 hover:bg-white/80 hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-md">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">₹12L</div>
              <div className="text-sm text-slate-600 font-medium">Highest Package</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
