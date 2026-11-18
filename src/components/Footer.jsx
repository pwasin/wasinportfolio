import React from 'react';
import { ArrowUp, Heart, Palette } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-900/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-secondary p-[1.5px]">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <Palette className="w-4 h-4 text-brand-accent" />
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-base text-white">
                {personalInfo.name} ({personalInfo.nameEn})
              </span>
              <p className="text-xs text-slate-400">
                Graphic Designer Portfolio • 8+ Years Experience
              </p>
            </div>
          </div>

          {/* Center text */}
          <div className="text-xs text-slate-400 text-center">
            Designed & Developed with Passion • Hosted on <span className="text-white font-medium">GitHub Pages</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all group"
          >
            <span>กลับด้านบน</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-slate-400">
          © {new Date().getFullYear()} Wasin Pongprasertsin. All rights reserved. Artwork, Packaging, and Photographs are property of their respective brands.
        </div>
      </div>
    </footer>
  );
}
