import { Twitter, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CONTACT_EMAIL, PARTNERS_EMAIL, EMERGENCY_PHONE } from '../config';

export default function Footer() {
  const openBooking = useBooking();
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-2xl">
                D
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Demo-Dental.com
              </span>
            </Link>
            <p className="text-slate-500 mb-8 max-w-sm">
              Your Virtual Dentist & Dental Health Companion. AI-powered oral health assessments and 24/7 access to licensed professionals.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 py-3 text-slate-400 hover:text-teal-400 transition-colors mb-8">
              <Mail className="w-4 h-4" />
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Patients</h4>
            <ul className="space-y-1">
              <li><a href="#smart-scan" className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Smart Scan</a></li>
              <li><button onClick={openBooking} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Virtual Consultations</button></li>
              <li><a href="#services" className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Find a Dentist</a></li>
              <li><a href="#services" className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Second Opinions</a></li>
              <li><button onClick={openBooking} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Emergency Care</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Professionals</h4>
            <ul className="space-y-1">
              <li><a href={`mailto:${PARTNERS_EMAIL}`} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Join the Network</a></li>
              <li><a href={`mailto:${PARTNERS_EMAIL}`} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Embed Smart Scan</a></li>
              <li><a href={`mailto:${PARTNERS_EMAIL}`} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Practice Solutions</a></li>
              <li><a href={`mailto:${PARTNERS_EMAIL}`} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-1">
              <li><a href="#services" className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Press</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="inline-block py-2 text-slate-400 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Demo-Dental.com &bull; Excellence in Oral Health
            </p>
            <a href={`tel:${EMERGENCY_PHONE}`} className="inline-flex items-center gap-8 py-4 text-xs font-medium uppercase tracking-widest">
              <span className="text-slate-500">Emergency</span>
              <span className="text-white">+91 12345 67890</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/privacy-policy" className="py-2.5 text-slate-500 hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="py-2.5 text-slate-500 hover:text-teal-400 transition-colors">Terms of Service</Link>
            <Link to="/hipaa" className="py-2.5 text-slate-500 hover:text-teal-400 transition-colors">HIPAA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
