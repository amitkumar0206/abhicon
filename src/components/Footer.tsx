import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <img
                  src="https://krprashant3008-lang.github.io/Abhicon/assets/logo.png"
                  alt="Abhicon Logo"
                  className="h-10 w-auto max-w-[180px] object-contain"
                />
              </div>
              <p className="text-slate-400 mb-4 max-w-md text-sm">
                Empowering the next generation of data scientists and ML engineers with industry-grade training and placement support.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Programs
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('placements')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Placements
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Contact</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Abhicon, Pune</li>
                <li>Maharashtra, India</li>
                <li>
                  <a href="tel:+918550900185" className="hover:text-cyan-400 transition-colors">
                    +91 8550900185
                  </a>
                </li>
                <li>
                  <a href="mailto:info@abhicon.com" className="hover:text-cyan-400 transition-colors">
                    info@abhicon.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-xs mb-3 md:mb-0">
              © 2022-2024 Abhicon. All rights reserved.
            </p>
            <div className="flex space-x-5 text-xs">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
