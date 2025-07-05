import {
  ArrowRight,
  Shirt,
  BookOpen,
  Coffee,
  Laptop,
  CreditCard,
  Music,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

export default function OnboardingStep1({ onNext, onPrev }) {
  const [brandName, setBrandName] = useState("");
  const [brandWebsite, setBrandWebsite] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const industries = [
    {
      id: "fashion",
      icon: Shirt,
      label: "Fashion & Apparel",
      color: "text-pink-600",
    },
    {
      id: "education",
      icon: BookOpen,
      label: "Education & E-Learning",
      color: "text-blue-600",
    },
    {
      id: "food",
      icon: Coffee,
      label: "Food & Beverage",
      color: "text-amber-600",
    },
    {
      id: "technology",
      icon: Laptop,
      label: "Technology",
      color: "text-purple-600",
    },
    {
      id: "finance",
      icon: CreditCard,
      label: "Finance & Banking",
      color: "text-green-600",
    },
    {
      id: "entertainment",
      icon: Music,
      label: "Entertainment & Media",
      color: "text-red-600",
    },
  ];

  const handleContinue = () => {
    if (brandName.trim() && onNext) {
      onNext({ brandName, industry: selectedIndustry, brandWebsite });
    }
  };

  localStorage.setItem("brandName", brandName);
  localStorage.setItem("brandWebsite", brandWebsite);
  localStorage.setItem("industry", selectedIndustry);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            What brand are we monitoring?
          </h1>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4 w-full">
          <div className="w-1/2">
            {/* Brand Name Input */}
            <label className="block text-base font-semibold text-slate-700 mb-2">
              📝 Brand Name
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="e.g., Nike, Physics Wallah, Claude"
              className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm"
            />
          </div>

          <div className="w-1/2">
            {/* Brand Wesbite Input */}
            <label className="block text-base font-semibold text-slate-700 mb-2">
              🌐 Brand Website
            </label>
            <input
              type="text"
              value={brandWebsite}
              onChange={(e) => setBrandWebsite(e.target.value)}
              placeholder="e.g., nike.com, pw.live, claude.ai"
              className="w-full px-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Industry Selection */}
        <div className="mb-6">
          <label className="block text-base font-semibold text-slate-700 mb-3">
            🏢 Industry
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-left flex items-center space-x-3 hover:shadow-md cursor-pointer ${
                    selectedIndustry === industry.id
                      ? "border-purple-500 bg-purple-50 shadow-md"
                      : "border-slate-200 bg-white/90 backdrop-blur-sm hover:border-slate-300"
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${industry.color}`} />
                  <span className="font-medium text-slate-700 text-sm">
                    {industry.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-between mb-6 w-full">
          <button
            onClick={handleContinue}
            className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-400 shadow-lg transform ${
                bg-slate-900 hover:bg-purple-600 text-white hover:shadow-xl cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!brandName.trim()}
            className={`px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-400 shadow-lg transform ${
              brandName.trim() && selectedIndustry
                ? "bg-purple-600 hover:bg-slate-900 text-white hover:shadow-xl cursor-pointer"
                : "bg-slate-400 cursor-not-allowed"
            }`}
          >
            Continue
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            Don't worry, you can change these later
          </p>
        </div>
      </div>
    </div>
  );
}
