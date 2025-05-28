
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Clock, Search, Info, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "AI-Powered Call Handling",
      description: "Advanced natural language processing to understand and respond to patient inquiries with human-like conversation.",
      benefits: ["24/7 availability", "Consistent quality", "Multilingual support", "Call routing and escalation"]
    },
    {
      icon: Calendar,
      title: "Intelligent Appointment Scheduling",
      description: "Seamlessly book, reschedule, and manage appointments based on provider availability and patient preferences.",
      benefits: ["Real-time calendar sync", "Conflict prevention", "Automatic confirmations", "Waitlist management"]
    },
    {
      icon: Clock,
      title: "Patient Reminders & Follow-ups",
      description: "Automated reminder system that reduces no-shows and keeps patients engaged with their care.",
      benefits: ["SMS and voice reminders", "Customizable timing", "Follow-up scheduling", "Treatment compliance"]
    },
    {
      icon: Search,
      title: "Insurance Verification",
      description: "Real-time insurance verification and eligibility checking to streamline the check-in process.",
      benefits: ["Instant verification", "Coverage details", "Prior authorization", "Claim preparation"]
    },
    {
      icon: Info,
      title: "HIPAA-Compliant Architecture",
      description: "Enterprise-grade security and compliance features to protect sensitive patient information.",
      benefits: ["End-to-end encryption", "Audit trails", "Access controls", "Compliance reporting"]
    },
    {
      icon: Users,
      title: "EHR Integration",
      description: "Seamless integration with popular Electronic Health Record systems for unified patient management.",
      benefits: ["Two-way data sync", "Reduced data entry", "Unified patient records", "Workflow automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Modern Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ReceptixAI combines cutting-edge AI technology with healthcare-specific workflows 
              to deliver unmatched efficiency and patient satisfaction.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt;200ms</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">EHR Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
