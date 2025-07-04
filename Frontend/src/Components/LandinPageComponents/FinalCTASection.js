import { ArrowRight, Check, Users, Calendar, Shield } from "lucide-react";

export default function FinalCTASection() {
  const benefits = [
    {
      icon: Check,
      text: "No credit card required",
    },
    {
      icon: Check,
      text: "14-day free trial",
    },
    {
      icon: Check,
      text: "Cancel anytime",
    },
  ];

  return (
    <section className="py-16 pb-10 bg-gradient-to-br from-purple-600 via-purple-700 to-violet-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-colors mb-8">
          <Users className="w-4 h-4 mr-2" />
          Join 500+ brands already monitoring smarter
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Ready to Master Your Brand's
          <br />
          <span className="text-purple-200">Social Presence?</span>
        </h2>

        <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Don't let another mention slip by. Start monitoring every conversation
          about your brand across all platforms with intelligent insights and
          real-time alerts.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button className="bg-white text-purple-600 hover:bg-gray-50 px-10 py-6 text-lg font-bold transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 rounded-lg inline-flex items-center justify-center cursor-pointer">
            Start Free 14-Day Trial
            <ArrowRight className="ml-3 h-6 w-6" />
          </button>
          <button className="border border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold transition-all duration-200 rounded-lg bg-transparent inline-flex items-center justify-center cursor-pointer">
            <Calendar className="mr-3 h-6 w-6" />
            Schedule Demo with Expert
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-white"
            >
              <benefit.icon className="h-5 w-5 text-purple-200" />
              <div className="font-medium">{benefit.text}</div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-purple-200 font-medium mb-4">
            Questions? We're here to help.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-purple-100">
            <a
              href="mailto:hello@brandmonitor.com"
              className="hover:text-white transition-colors"
            >
              hello@brandmonitor.com
            </a>
            <span className="text-purple-300">•</span>
            <a
              href="tel:+1-800-MONITOR"
              className="hover:text-white transition-colors"
            >
              +1 (800) MONITOR
            </a>
            <span className="text-purple-300">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Live Chat 24/7
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
