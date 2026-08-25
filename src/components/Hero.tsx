import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useBooking } from '../booking';

export default function Hero() {
  const openBooking = useBooking();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-teal-100/50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              24/7 Virtual Dental Care
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Modern Dentistry <br/><span className="text-teal-600">Redefined.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Experience personalized oral care, get AI-powered assessments, and consult with licensed dentists on-demand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={openBooking} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center">
                Book a Virtual Visit
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 font-bold mb-1">
                  ★★★★★ 4.9
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Trusted by 100k+ patients
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Hero Image / Mockup composite */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-blue-400 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Woman smiling beautifully" 
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-white/50"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-12 -right-3 sm:-right-12 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Health Score: 92/100</div>
                  <div className="text-xs text-slate-500">Looks great!</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-12 -left-3 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Dentist Match</div>
                </div>
                <div className="text-sm font-medium text-slate-600">Dr. Sarah Jenkins is available<br/>for a virtual consult today.</div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
