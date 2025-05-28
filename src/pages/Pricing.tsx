
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 299,
      annualPrice: 2390,
      description: "Perfect for small practices starting with AI automation",
      features: [
        "Up to 500 calls/month",
        "Basic appointment scheduling",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "HIPAA compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      monthlyPrice: 599,
      annualPrice: 4790,
      description: "Ideal for growing practices with comprehensive needs",
      features: [
        "Up to 2,000 calls/month",
        "Advanced scheduling & reminders",
        "Priority phone support",
        "Premium integrations",
        "Advanced analytics",
        "Custom workflows",
        "Insurance verification",
        "Multi-location support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 1299,
      annualPrice: 10392,
      description: "For large practices and healthcare systems",
      features: [
        "Unlimited calls",
        "Full feature access",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced reporting",
        "API access",
        "SLA guarantee",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (!isAnnual) return 0;
    return (plan.monthlyPrice * 12) - plan.annualPrice;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your practice. All plans include our core AI receptionist features 
              with HIPAA compliance and 24/7 availability.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                  Save up to 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-white hover:shadow-lg transition-shadow ${
                  plan.popular ? 'ring-2 ring-blue-600 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">${getPrice(plan).toLocaleString()}</span>
                    <span className="text-gray-600 ml-1">/{isAnnual ? 'year' : 'month'}</span>
                  </div>
                  {isAnnual && getSavings(plan) > 0 && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ${getSavings(plan).toLocaleString()} annually
                    </div>
                  )}
                  <p className="text-gray-600 mt-4">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    <Link to="/contact">
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in the free trial?</h3>
                <p className="text-gray-600">
                  All plans include a 14-day free trial with full access to features. No credit card required.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is setup and training included?</h3>
                <p className="text-gray-600">
                  Professional and Enterprise plans include comprehensive onboarding and training sessions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What about data security?</h3>
                <p className="text-gray-600">
                  All plans include HIPAA compliance, end-to-end encryption, and enterprise-grade security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
