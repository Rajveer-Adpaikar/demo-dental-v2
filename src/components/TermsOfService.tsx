import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing or using Demo-Dental.com, you agree to be bound by these Terms of Service. Our platform provides a digital ecosystem for dental care, including AI assessments, virtual consultations, and provider matching.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Medical Disclaimer</h2>
        <p>The AI Smart Scan and related automated assessments are intended for informational purposes and preliminary guidance. They do not replace professional medical advice, diagnosis, or treatment by a qualified dental professional. Always seek the advice of your dentist with any questions you may have regarding a medical condition.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. User Responsibilities</h2>
        <p>You agree to provide accurate and complete information when utilizing our virtual services and Smart Scan technology. You are responsible for maintaining the confidentiality of your account credentials.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Service Modifications</h2>
        <p>Demo-Dental.com reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
      </div>
    </div>
  );
}
