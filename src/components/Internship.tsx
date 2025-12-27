import { Clock, IndianRupee, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export function Internship() {
  return (
    <section id="internship" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 shadow-lg rounded-full mb-5">
              <Sparkles size={14} />
              <span className="font-semibold text-xs">Limited Time Offer</span>
              <Sparkles size={14} />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              Enroll in Our Internship Program
            </h2>
            <p className="text-base text-slate-300">
              Get industry-ready skills at an unbeatable price
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-5 mb-6">
              <div className="text-center group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="text-2xl font-bold mb-1">6-8 Weeks</div>
                <div className="text-slate-300 text-sm">Program Duration</div>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="text-2xl font-bold mb-1">Flexible</div>
                <div className="text-slate-300 text-sm">Start Anytime</div>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <IndianRupee className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="text-2xl font-bold mb-1">₹3,999</div>
                <div className="text-slate-300 text-sm">
                  <span className="line-through opacity-60">₹13,000</span> Save 70%
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5 mb-6">
              <h3 className="text-lg font-bold mb-4">What's Included:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Live interactive sessions',
                  'Hands-on projects',
                  'Industry mentorship',
                  'Placement assistance',
                  'Certificate of completion',
                  'Lifetime community access',
                  'Interview preparation',
                  'Portfolio building'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-3.5 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-50 hover:scale-105 transition-all shadow-lg hover:shadow-white/20">
                Enroll Now - Limited Seats
              </button>
              <p className="text-slate-300 text-sm mt-4">
                Save ₹9,001 • Offer ends soon • Only 20 seats available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
