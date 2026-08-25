/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './booking';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SmartScan from './components/SmartScan';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HIPAA from './components/HIPAA';

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <SmartScan />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <BookingProvider>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-200 selection:text-teal-900 text-slate-800">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/hipaa" element={<HIPAA />} />
        </Routes>
        <Footer />
      </div>
      </BookingProvider>
    </BrowserRouter>
  );
}

