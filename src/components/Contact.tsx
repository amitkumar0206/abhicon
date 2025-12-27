import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg text-cyan-700 rounded-full mb-4 font-semibold text-xs">
              Contact Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Let's Start Your Journey
            </h2>
            <p className="text-base text-slate-600">
              Have questions? We're here to help you transform your career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 text-sm">Email</h4>
                      <a href="mailto:info@abhicon.com" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                        info@abhicon.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 text-sm">Phone</h4>
                      <a href="tel:+918550900185" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                        +91 8550900185
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 text-sm">Address</h4>
                      <p className="text-slate-600 text-sm">
                        Abhicon, Pune<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">Free Career Guidance</h3>
                <p className="text-cyan-50 mb-5 text-sm">
                  Join our free webinar on DS/ML careers and learn how to break into the industry
                </p>
                <button className="w-full px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 hover:scale-105 transition-all shadow-md text-sm">
                  Register for Webinar
                </button>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a message
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
