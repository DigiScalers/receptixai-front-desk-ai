
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Clock, Calendar, Check } from "lucide-react";

const Index = () => {
  const benefits = [
    {
      icon: Phone,
      title: "24/7 Call Handling",
      description: "Never miss a patient call again with our AI-powered receptionist"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking and rescheduling"
    },
    {
      icon: Clock,
      title: "Instant Response",
      description: "Immediate patient support without wait times"
    }
  ];

  const features = [
    "HIPAA-compliant architecture",
    "Seamless EHR integration",
    "Multi-language support",
    "Insurance verification",
    "Patient reminders & follow-ups",
    "Real-time analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                24/7 AI Receptionist
              </span>
              <br />
              for Medical Practices
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automate your front office with intelligent AI that handles calls, schedules appointments, 
              and provides exceptional patient care around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/features">See It in Action</Link>
              </Button>
            </div>
          </div>

          {/* AI Mockup Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Receptionist Demo</h3>
                <p className="text-gray-600 mb-6">
                  "Hello, this is ReceptixAI for Dr. Johnson's office. How can I help you today?"
                </p>
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Assistant Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Medical Practices Choose ReceptixAI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your operations and improve patient satisfaction with our intelligent AI receptionist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything Your Practice Needs
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI receptionist handles all the complexities of medical office communication, 
                so you can focus on patient care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/features">View All Features</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-900">Scheduling appointment for John Smith...</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-900">Insurance verification completed ✓</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-900">Sending appointment reminder...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of medical practices already using ReceptixAI to improve patient care and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/contact">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
