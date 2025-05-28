
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former ER physician with 15+ years in healthcare technology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      background: "AI researcher specializing in natural language processing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Clinical Operations",
      background: "Healthcare administrator with expertise in practice management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ];

  const values = [
    {
      title: "Patient-First",
      description: "Every decision we make prioritizes patient care and experience"
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge AI to solve real healthcare challenges"
    },
    {
      title: "Accessibility",
      description: "Making advanced technology accessible to practices of all sizes"
    },
    {
      title: "Trust",
      description: "Building secure, reliable solutions that healthcare providers can depend on"
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
              Revolutionizing Healthcare
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Communication</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2023, ReceptixAI was born from the frustration of watching healthcare providers 
              struggle with administrative burdens while trying to focus on patient care.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that healthcare providers should spend their time caring for patients, not managing phone calls. 
                Our AI-powered receptionist technology eliminates administrative friction while maintaining the personal 
                touch that patients expect.
              </p>
              <p className="text-lg text-gray-600">
                By combining advanced artificial intelligence with deep healthcare industry knowledge, we're creating 
                solutions that don't just automate tasks—they enhance the entire patient experience.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-700 mb-4">Patient Interactions Handled</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700 mb-4">Medical Practices Served</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-700">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.background}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Built for Healthcare</h3>
                <p className="text-gray-600 mb-6">
                  Our AI is specifically trained on healthcare communications, understanding medical terminology, 
                  insurance processes, and the nuances of patient care coordination.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    HIPAA-compliant infrastructure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Advanced natural language processing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Continuous learning and improvement
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Seamless EHR integrations
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">🧠</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">AI That Understands Healthcare</h4>
                  <p className="text-gray-600">
                    Trained on millions of healthcare interactions to provide accurate, empathetic, and efficient patient communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
