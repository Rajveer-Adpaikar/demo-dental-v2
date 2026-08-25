import { motion } from 'motion/react';
import { ScanFace, Video, MapPin, Stethoscope, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <ScanFace className="w-8 h-8" />,
    title: "AI Smart Scan",
    description: "Take 5 guided photos on your phone for an instant AI-powered oral health assessment and personalized care plan."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Virtual Consultations",
    description: "Connect with licensed dentists 24/7 via video or phone for evaluations, care plans, and prescriptions."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Dentist Match",
    description: "We route you to the appropriate in-network provider based on your specific needs, insurance, and location."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Second Opinions",
    description: "Get an independent, expert review of any dental treatment plan for unbiased, trustworthy recommendations."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Emergency Care",
    description: "24/7 on-demand access to licensed dentists for immediate triage of urgent issues like tooth pain or trauma."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "For Professionals",
    description: "Embed Smart Scan on your practice website, offer after-hours coverage, and get priority in referral results."
  }
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            A comprehensive ecosystem <br/>of dental care.
          </h2>
          <p className="text-lg text-slate-600">
            From instant AI evaluations to connecting with local specialists, we cover every aspect of your oral health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow group"
            >
              <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform origin-left">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
