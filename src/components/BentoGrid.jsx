import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Quote, 
  Clock, 
  MapPin, 
  Copy, 
  Check, 
  Briefcase, 
  Layers, 
  Award, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo, experiences, skills } from '../data/portfolioData';

export default function BentoGrid() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('th-TH', { 
        timeZone: 'Asia/Bangkok', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    
    // Trigger festive confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF4A60', '#7928CA', '#00F0FF', '#FFB800']
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="bento" className="py-24 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Identity & Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            เรื่องราว ตัวตน และ <span className="text-gradient">วิธีคิดในการออกแบบ</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            ผสานความหลงใหลในศิลปะเข้ากับระเบียบวินัยด้านการผลิตและการตลาด เพื่อสร้างชิ้นงานที่ตอบโจทย์ทั้งความสวยงามและยอดขาย
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: Main Slogan & Philosophy (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-accent/25 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Quote className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  Design Slogan & Philosophy
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed tracking-tight mb-6">
                “{personalInfo.slogan}”
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-accent to-brand-secondary flex items-center justify-center font-bold text-white shadow-md">
                  W
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{personalInfo.name}</h4>
                  <p className="text-xs text-slate-400">{personalInfo.role} • 8+ Years Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-xl border border-brand-accent/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Work Under Pressure & High Standards</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Live Status & Instant Contact (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-secondary/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{personalInfo.location}</span>
                </div>
                
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-800 text-xs font-mono text-slate-300 border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{currentTime || '12:00:00'} (GMT+7)</span>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-2">
                เปิดรับงานและโปรเจกต์ใหม่
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                พร้อมร่วมงานในรูปแบบ Full-time, Contract, หรือ Project-based สำหรับงานบรรจุภัณฑ์และแบรนด์ดิ้ง
              </p>
            </div>

            {/* Click to Copy Box */}
            <div 
              onClick={handleCopyEmail}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between group/box"
            >
              <div className="overflow-hidden mr-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                  Direct Email
                </span>
                <span className="text-sm font-semibold text-white tracking-wide truncate block">
                  {personalInfo.email}
                </span>
              </div>
              <button 
                type="button"
                className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                  copied 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                    : 'bg-white/10 text-slate-200 group-hover/box:bg-brand-accent group-hover/box:text-white'
                }`}
                title="คลิกเพื่อคัดลอกอีเมล"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* Card 3: Experience Snapshot (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">เส้นทางประสบการณ์ทำงาน</h3>
              </div>
              <a 
                href="#experience" 
                className="text-xs font-semibold text-brand-accent hover:underline flex items-center gap-1"
              >
                <span>ดูรายละเอียดทั้งหมด</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold text-white">{exp.company}</span>
                    <span className="text-xs font-semibold text-brand-accent px-2.5 py-0.5 rounded-full bg-brand-accent/10">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium mb-2">{exp.role}</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Tools & Expertise Core (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">เครื่องมือ & ความเชี่ยวชาญ</h3>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                ใช้งานซอฟต์แวร์ระดับมืออาชีพ พร้อมความรู้เชิงลึกด้านระบบการพิมพ์และระเบียบฉลากสินค้า
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-dark-800/80 border border-white/10">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>Adobe Illustrator</span>
                    <span className="text-[10px] text-amber-400 font-mono">Expert</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Vector, Packaging, Box</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-800/80 border border-white/10">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>Adobe Photoshop</span>
                    <span className="text-[10px] text-cyan-400 font-mono">Expert</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Retouch, Compositing, Art</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-800/80 border border-white/10">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>FDA Food Labels</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Advanced</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">ข้อมูลโภชนาการ, กฎหมาย</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-800/80 border border-white/10">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>Motion & Video</span>
                    <span className="text-[10px] text-purple-400 font-mono">Intermediate</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">2D Animation & Editing</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <span className="text-xs text-slate-400">
                พร้อมเรียนรู้และปรับตัวกับเครื่องมือ & AI Design Tools ใหม่ๆ เสมอ
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
