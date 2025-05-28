
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "",
    practiceSize: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
    console.log("Demo request submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Started?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a personalized demo to see how ReceptixAI can transform your practice. 
              Our team will show you exactly how our AI receptionist works with your existing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Request a Demo</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll be in touch within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="practice">Practice Name</Label>
                    <Input
                      id="practice"
                      value={formData.practice}
                      onChange={(e) => handleChange("practice", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="practiceSize">Practice Size</Label>
                    <Select onValueChange={(value) => handleChange("practiceSize", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select practice size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo Practice (1 provider)</SelectItem>
                        <SelectItem value="small">Small Practice (2-5 providers)</SelectItem>
                        <SelectItem value="medium">Medium Practice (6-15 providers)</SelectItem>
                        <SelectItem value="large">Large Practice (16+ providers)</SelectItem>
                        <SelectItem value="health-system">Health System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="What challenges are you looking to solve with AI?"
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Schedule Demo
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">Get in touch via email</p>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium">hello@receptixai.com</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600">Speak with our team</p>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium">1-800-RECEPTIX</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">When we're available</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-gray-700">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>

              {/* Chatbot Placeholder */}
              <Card className="bg-gradient-to-br from-blue-600 to-teal-600 text-white shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Try Our AI Assistant</h3>
                  <p className="mb-6">
                    Experience ReceptixAI in action! Chat with our demo AI to see how we handle patient inquiries.
                  </p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Chat Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
