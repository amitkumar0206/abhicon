import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm transition-all">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <div className="flex items-center">
            <img
              src="https://krprashant3008-lang.github.io/Abhicon/assets/logo.png"
              alt="Abhicon Logo"
              className="h-10 md:h-12 w-auto max-w-[180px] object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => scrollToSection('home')} className="px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-all text-sm font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('programs')} className="px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-all text-sm font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('about')} className="px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-all text-sm font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('placements')} className="px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-all text-sm font-medium">
              Placements
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-all text-sm font-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-all text-sm font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('internship')}
              className="ml-3 px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all"
            >
              Apply Now
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 space-y-2 animate-fadeIn">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm">
              Home
            </button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm">
              Programs
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm">
              About
            </button>
            <button onClick={() => scrollToSection('placements')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm">
              Placements
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('internship')}
              className="block w-full text-left px-3 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold text-sm"
            >
              Apply Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
