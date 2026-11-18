import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle, Sparkles, SlidersHorizontal } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Core Software', 'Print Expertise', 'Compliance', 'Digital Marketing'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory || (selectedCategory === 'Print Expertise' && (s.category === 'Print Expertise' || s.category === 'Production')));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Tools & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            ทักษะ & <span className="text-gradient">เครื่องมือที่เชี่ยวชาญ</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            ความเชี่ยวชาญตั้งแต่การใช้งานโปรแกรมระดับสูง ไปจนถึงกระบวนการทางเทคนิคด้านการพิมพ์และการปฏิบัติตามมาตรฐาน
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden group border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">
                  {skill.category}
                </span>
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full ${
                  skill.level === 'Expert' 
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                }`}>
                  {skill.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {skill.desc}
              </p>

              {/* Progress bar visual indicator */}
              <div className="w-full bg-white/5 h-1.5 rounded-full mt-6 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-accent to-brand-secondary rounded-full"
                  style={{ width: skill.level === 'Expert' ? '95%' : '85%' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
