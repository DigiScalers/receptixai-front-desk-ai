
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  ReceptixAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered receptionist services and visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">HIPAA Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a service provider to healthcare organizations, we understand the critical importance of protecting protected health information (PHI). ReceptixAI is designed to be HIPAA-compliant and we:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Execute Business Associate Agreements (BAAs) with covered entities</li>
                  <li>Implement appropriate administrative, physical, and technical safeguards</li>
                  <li>Limit access to PHI to authorized personnel only</li>
                  <li>Maintain audit logs of all PHI access and modifications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may collect personal information including names, email addresses, phone numbers, and practice information when you request a demo or contact us.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Usage Data</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We collect information about how you interact with our services, including call logs, appointment data, and system usage metrics.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide and maintain our AI receptionist services</li>
                  <li>Process appointments and patient communications</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations and healthcare regulations</li>
                  <li>Communicate with you about our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement industry-standard security measures including encryption at rest and in transit, regular security audits, access controls, and continuous monitoring to protect your information from unauthorized access, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>Email: privacy@receptixai.com</p>
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

export default Privacy;
