import { Building2, TrendingUp, MapPin } from 'lucide-react';

const placements = [
  { name: 'Priya Sharma', company: 'TCS', package: '₹7.5 LPA', role: 'Data Analyst', location: 'Mumbai' },
  { name: 'Rahul Kumar', company: 'Infosys', package: '₹8.2 LPA', role: 'ML Engineer', location: 'Bangalore' },
  { name: 'Ankit Verma', company: 'Wipro', package: '₹6.8 LPA', role: 'Data Scientist', location: 'Pune' },
  { name: 'Sneha Patel', company: 'Accenture', package: '₹9.5 LPA', role: 'AI Engineer', location: 'Hyderabad' },
  { name: 'Vikram Singh', company: 'Cognizant', package: '₹7.0 LPA', role: 'Data Engineer', location: 'Chennai' },
  { name: 'Pooja Reddy', company: 'Tech Mahindra', package: '₹12.0 LPA', role: 'Senior ML Engineer', location: 'Bangalore' }
];

export function Placements() {
  return (
    <section id="placements" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg text-cyan-700 rounded-full mb-4 font-semibold text-xs">
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Alumni Network
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Our graduates are working at top companies across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {placements.map((placement, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {placement.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{placement.role}</p>
                  </div>
                  <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-base group-hover:scale-110 transition-all shadow-md">
                    {placement.name.charAt(0)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="font-semibold text-slate-900 text-sm">{placement.company}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="font-bold text-cyan-600 text-sm">{placement.package}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-slate-400" />
                    </div>
                    <span className="text-slate-600 text-sm">{placement.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => document.getElementById('internship')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
