
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using ReceptixAI services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  ReceptixAI provides AI-powered receptionist services for medical practices, including but not limited to call handling, appointment scheduling, patient reminders, and insurance verification. Our services are designed to integrate with existing healthcare systems while maintaining HIPAA compliance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
                <p className="text-gray-700 leading-relaxed mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use the service in any way that violates applicable laws or regulations</li>
                  <li>Transmit any harmful, threatening, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service for any purpose other than legitimate medical practice operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy. We are committed to maintaining HIPAA compliance and protecting all protected health information (PHI) in accordance with applicable healthcare regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We may temporarily suspend access for maintenance, updates, or other operational reasons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by applicable law, ReceptixAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate this agreement at any time with appropriate notice. Upon termination, you will lose access to our services, and we will securely delete your data in accordance with our data retention policies and applicable regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>Email: legal@receptixai.com</p>
                  <p>Phone: (855) 737-2374</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
