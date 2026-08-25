import { useEffect } from 'react';

export default function HIPAA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">HIPAA Notice of Privacy Practices</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        <p className="font-semibold italic bg-slate-100 p-4 rounded-lg">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Our Commitment to Your Privacy</h2>
        <p>Demo-Dental.com is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We understand that medical information about you and your health is personal, and we are committed to protecting it. We create a record of the care and services you receive to provide you with quality care and to comply with legal requirements.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We May Use and Disclose Health Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>For Treatment:</strong> We may use health information about you to provide, coordinate, or manage your dental treatment and related services. For example, your Smart Scan images and virtual consultation notes are shared with licensed dentists in our network.</li>
          <li><strong>For Payment:</strong> We may use and disclose your health information so that the treatment and services you receive may be billed to and payment may be collected from you, an insurance company, or a third party.</li>
          <li><strong>For Health Care Operations:</strong> We may use and disclose your health information for our business operations, which are necessary to run Demo-Dental.com and make sure all our patients receive quality care.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Your Rights Regarding Your Health Information</h2>
        <p>You have the following rights regarding the medical information we maintain about you:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Right to Inspect and Copy your medical records.</li>
          <li>Right to Amend your records if you feel the information is incorrect or incomplete.</li>
          <li>Right to an Accounting of Disclosures.</li>
          <li>Right to Request Restrictions on certain uses or disclosures.</li>
          <li>Right to Request Confidential Communications.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Complaints</h2>
        <p>If you believe your privacy rights have been violated, you may file a complaint with Demo-Dental.com or with the Secretary of the Department of Health and Human Services. All complaints must be submitted in writing. You will not be penalized for filing a complaint.</p>
      </div>
    </div>
  );
}
