import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aditya Malhotra',
    role: 'Data Scientist at Infosys',
    image: 'AM',
    content: 'The hands-on projects and mentorship I received at Abhicon were invaluable. I landed my dream job within 2 months of completing the internship!',
    rating: 5
  },
  {
    name: 'Neha Kapoor',
    role: 'ML Engineer at TCS',
    image: 'NK',
    content: 'Best decision of my career! The practical approach and real-world projects made me industry-ready. The placement support was exceptional.',
    rating: 5
  },
  {
    name: 'Rohan Joshi',
    role: 'Data Analyst at Wipro',
    image: 'RJ',
    content: 'The instructors are highly knowledgeable and supportive. The curriculum is well-structured and covers everything needed to excel in DS/ML.',
    rating: 5
  },
  {
    name: 'Kavya Menon',
    role: 'AI Engineer at Accenture',
    image: 'KM',
    content: 'From zero to hero! The program transformed my understanding of ML. The portfolio I built here helped me stand out in interviews.',
    rating: 5
  },
  {
    name: 'Arjun Reddy',
    role: 'Data Engineer at Cognizant',
    image: 'AR',
    content: 'Outstanding program with great mentors. The focus on practical implementation and industry tools gave me a competitive edge.',
    rating: 5
  },
  {
    name: 'Divya Singh',
    role: 'Senior Data Scientist at Tech Mahindra',
    image: 'DS',
    content: 'The placement preparation and mock interviews were incredibly helpful. I got multiple offers and chose the best one. Highly recommend!',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg text-cyan-700 rounded-full mb-4 font-semibold text-xs">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Loved By Students
            </h2>
            <p className="text-base text-slate-600">
              Real feedback from our successful graduates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/80 relative hover:-translate-y-1"
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-cyan-100 group-hover:text-cyan-200 transition-colors" />

                <div className="flex items-center space-x-3 mb-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-slate-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
