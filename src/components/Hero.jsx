import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Award, Layers, Box, CheckCircle2, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const floatingTags = [
    { label: 'Packaging Design', color: 'from-pink-500/20 to-rose-500/20 text-rose-300 border-rose-500/30' },
    { label: 'Food Label & FDA Compliance', color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30' },
    { label: 'Branding & Social Artwork', color: 'from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30' },
    { label: 'Prepress & Print Production', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30' },
    { label: 'Motion Graphics', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-accent/20 via-brand-secondary/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Experience Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-brand-accent/40 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-brand-accent" />
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            Senior Graphic Designer • ประสบการณ์กว่า <span className="text-white font-semibold">{personalInfo.experienceYears} ปี</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6"
        >
          เปลี่ยนไอเดียให้เป็นงานดีไซน์ <br />
          <span className="text-gradient">บรรจุภัณฑ์ & สื่อสิ่งพิมพ์</span> ที่ทรงพลัง
        </motion.h1>

        {/* Subtitle / Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-10"
        >
          ยินดีต้อนรับสู่พอร์ตโฟลิโอของ <strong className="text-white font-semibold">{personalInfo.name} ({personalInfo.nameEn})</strong> ผู้เชี่ยวชาญการออกแบบฉลากสินค้า บรรจุภัณฑ์ระดับสากล สื่อสิ่งพิมพ์ และคอนเทนต์การตลาดที่ผสานความคิดสร้างสรรค์เข้ากับมาตรฐานอุตสาหกรรม
        </motion.p>

        {/* Interactive Floating Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto mb-12"
        >
          {floatingTags.map((tag, idx) => (
            <motion.span
              key={tag.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium border bg-gradient-to-r ${tag.color} backdrop-blur-md cursor-default transition-all shadow-sm`}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-accent to-brand-secondary text-white font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-brand-accent/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>สำรวจผลงานเด่น (Highlight Projects)</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#bento"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-sm sm:text-base border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>ประวัติ & Bento Grid</span>
          </a>
        </motion.div>

        {/* Live Key Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {personalInfo.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-panel p-5 rounded-2xl relative overflow-hidden group hover:border-brand-accent/40 transition-all duration-300 text-left"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl group-hover:bg-brand-accent/20 transition-all duration-500" />
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                {stat.label}
              </div>
              <div className="text-[11px] text-brand-accent font-medium mt-1">
                {stat.highlight}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          onClick={() => {
            const bento = document.querySelector('#bento');
            bento?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>

      </div>
    </section>
  );
}
