import { motion } from 'motion/react';
import { Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../booking';

export default function SmartScan() {
  const openBooking = useBooking();

  return (
    <section id="smart-scan" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[320px]"
            >
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[40px] border-[8px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden aspect-[9/19.5]">
                {/* Screen Content */}
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Smile scan" 
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Scanning Reticle UI overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-24 border-2 border-teal-400 rounded-[50%] relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-sm -ml-24"></div>
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-sm ml-24"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-sm -ml-24"></div>
                    <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-sm ml-24"></div>
                    
                    <motion.div 
                      animate={{ y: [0, 96, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-full h-[2px] bg-teal-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]"
                    />
                  </div>
                </div>

                {/* UI Elements */}
                <div className="absolute top-0 inset-x-0 p-6 bg-gradient-to-b from-slate-900/80 to-transparent">
                  <div className="text-center font-semibold text-white tracking-wide">Align your smile</div>
                </div>
                
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-slate-900 to-transparent flex justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating feature card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hidden sm:block absolute top-1/4 -left-20 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-teal-400" />
                  <div>
                    <div className="text-sm font-bold text-white">AI Analysis</div>
                    <div className="text-xs text-slate-400">Powered by advanced ML</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold uppercase tracking-wider text-xs mb-6">
              <Camera className="w-4 h-4" />
              Introducing Smart Scan
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">
              Know your oral health in 60 seconds.
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Skip the waiting room. Using just 5 guided photos taken with your smartphone, our AI-powered Smart Scan technology instantly evaluates your oral health and provides actionable next steps.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Instant Oral Health Score (1-100)",
                "Detection of potential cavities, tartar, and gum issues",
                "Personalized self-care guidance",
                "Direct connection to a virtual or local dentist if needed"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <button onClick={openBooking} className="px-8 py-4 rounded-xl bg-teal-600 text-white font-bold text-lg hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/50">
              Try Smart Scan Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
