import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2, Users2, Award, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            ประสบการณ์การทำงาน <span className="text-gradient">มากกว่า 8 ปี</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            เส้นทางสายอาชีพด้านงานกราฟิกดีไซน์ สื่อสิ่งพิมพ์ บรรจุภัณฑ์ และการประสานงานฝ่ายการตลาดและการขาย
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 border-brand-accent group-hover:scale-125 transition-transform duration-300" />

              {/* Year Tag on Left (for desktop) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-bold font-mono text-brand-accent mb-2 sm:mb-0">
                {exp.period}
              </div>

              {/* Card Container */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Building2 className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{exp.company}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-accent">{exp.role}</p>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-slate-400 px-3 py-1 rounded-full bg-white/5">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-dark-800 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cross-functional Collaboration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-accent/10 via-brand-secondary/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent shrink-0">
              <Users2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                การทำงานร่วมกับฝ่ายขายและการตลาด (Cross-functional Teamwork)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                มีประสบการณ์ประสานงานอย่างใกล้ชิดกับฝ่ายขาย (Sales) ฝ่ายการตลาด และโรงพิมพ์ เพื่อให้ชิ้นงานตอบโจทย์วัตถุประสงค์ทางธุรกิจ ส่งมอบตรงเวลา และได้คุณภาพตามมาตรฐานสากล
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
