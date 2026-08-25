import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
        <p>At Demo-Dental.com, we collect personal information such as your name, contact details, and dental health history to provide you with tailored virtual and in-person care. Additionally, when you use our Smart Scan feature, we collect the images you submit strictly for diagnostic and assessment purposes.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the information collected to facilitate virtual consultations, match you with appropriate dental providers, provide second opinions, and improve the accuracy of our AI-powered Smart Scan. Your data helps us deliver a secure and personalized oral health companion experience.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Data Security and Sharing</h2>
        <p>We implement robust security measures to protect your personal and medical information. We do not sell your personal data. Information is only shared with licensed dental professionals within our network as necessary to provide your requested services.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Your Rights</h2>
        <p>You have the right to access, correct, or request the deletion of your personal data at any time. You can manage your preferences through your account settings or by contacting our privacy team directly.</p>
      </div>
    </div>
  );
}
