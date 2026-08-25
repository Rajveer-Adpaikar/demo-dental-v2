import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openBooking = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-slate-200' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-2xl">
            D
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
            Demo-Dental.com
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Services</a>
          <a href="#smart-scan" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Smart Scan</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">For Providers</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={openBooking} className="px-6 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors shadow-md shadow-teal-200">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 -mr-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <a href="#services" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#smart-scan" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Smart Scan</a>
              <a href="#services" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>For Providers</a>
              <hr className="border-slate-100 my-2" />
              <button onClick={() => { setIsMobileMenuOpen(false); openBooking(); }} className="w-full text-center py-3 text-lg font-medium text-white bg-teal-600 rounded-xl shadow-md shadow-teal-200">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
