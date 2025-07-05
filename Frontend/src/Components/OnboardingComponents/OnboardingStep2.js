import {
  ArrowRight,
  ArrowLeft,
  Plus,
  X,
  Tag,
  ShoppingBag,
  Megaphone,
  Shield,
  Lightbulb,
  TrendingUp,
  Eye,
  Hash,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function OnboardingStep2({ onNext, onPrev, brandData }) {
  const [keywords, setKeywords] = useState({
    brand: [],
    products: [],
    campaigns: [],
    exclusions: [],
  });
  const [currentInput, setCurrentInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("brand");
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Smart suggestions based on brand name
  const generateSuggestions = (brandName, industry) => {
    const base = brandName?.toLowerCase();
    const suggestions = {
      brand: [
        base,
        base.toUpperCase(),
        `@${base}`,
        `${base}.com`,
        `${base} official`,
      ],
      products:
        industry === "fashion"
          ? [`${base} shoes`, `${base} apparel`, `${base} collection`]
          : [`${base} products`, `${base} services`, `${base} solutions`],
      campaigns: [`#${base}`, `#${base}style`, `#${base}community`],
      exclusions: [`fake ${base}`, `${base} replica`, `${base} counterfeit`],
    };
    return suggestions;
  };

  const suggestions = generateSuggestions(
    brandData?.brandName,
    brandData?.industry
  );

  // Auto-add essential keywords on mount
  useEffect(() => {
    if (brandData?.brandName && keywords.brand.length === 0) {
      setKeywords((prev) => ({
        ...prev,
        brand: [brandData.brandName, `@${brandData.brandName.toLowerCase()}`],
      }));
    }
  }, [brandData]);

  const categories = [
    {
      id: "brand",
      icon: Tag,
      label: "Brand Variations",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "Different ways people mention your brand",
    },
    {
      id: "products",
      icon: ShoppingBag,
      label: "Products",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Your products and services",
    },
    {
      id: "campaigns",
      icon: Megaphone,
      label: "Campaigns",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Marketing campaigns and hashtags",
    },
    {
      id: "exclusions",
      icon: Shield,
      label: "Exclusions",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      description: "Keywords to ignore",
    },
  ];

  const addKeyword = (keyword, category = activeCategory) => {
    if (!keyword.trim()) return;

    setKeywords((prev) => ({
      ...prev,
      [category]: [...prev[category], keyword.trim()],
    }));
    setCurrentInput("");
  };

  const removeKeyword = (keyword, category) => {
    setKeywords((prev) => ({
      ...prev,
      [category]: prev[category].filter((k) => k !== keyword),
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addKeyword(currentInput);
    }
  };

  const addSuggestion = (suggestion, category) => {
    if (!keywords[category].includes(suggestion)) {
      addKeyword(suggestion, category);
    }
  };

  const getTotalKeywords = () => {
    return Object.values(keywords).flat().length;
  };

  const getEstimatedMentions = () => {
    const total = getTotalKeywords();
    return Math.round(total * 1000 + Math.random() * 5000);
  };

  const handleContinue = () => {
    if (getTotalKeywords() > 0 && onNext) {
      onNext({ ...brandData, keywords });
    }
  };

  const activeTabData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
        {/* Progress & Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center text-sm text-slate-500">
              <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">
                Step 2 of 6
              </span>
              <span className="mx-2">•</span>
              <span>What should we track?</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Help us find every mention of your brand
          </h1>
          <p className="text-slate-600">
            We'll monitor these keywords across social media, news, and the web
          </p>
        </div>

        {/* Smart Suggestions */}
        {showSuggestions && (
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <Lightbulb className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-slate-800">
                  Smart Suggestions for "{brandData?.brandName || "Nike"}"
                </h3>
              </div>
              <button
                onClick={() => setShowSuggestions(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(suggestions).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700 capitalize">
                    {category === "brand" ? "Brand Variations" : category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.slice(0, 3).map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => addSuggestion(suggestion, category)}
                        disabled={keywords[category].includes(suggestion)}
                        className={`text-xs px-2 py-1 rounded-full border transition-all ${
                          keywords[category].includes(suggestion)
                            ? "bg-green-100 border-green-300 text-green-700"
                            : "bg-white border-slate-300 text-slate-700 hover:border-purple-400"
                        }`}
                      >
                        {keywords[category].includes(suggestion) ? "✓" : "+"}{" "}
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    isActive
                      ? `${category.bgColor} ${category.borderColor} shadow-md`
                      : "border-slate-200 bg-white/90 hover:border-slate-300"
                  }`}
                >
                  <IconComponent className={`h-4 w-4 ${category.color}`} />
                  <span className="font-medium text-slate-700 text-sm">
                    {category.label}
                  </span>
                  {keywords[category.id].length > 0 && (
                    <span className="bg-slate-200 text-slate-700 text-xs px-2 py-0.5 rounded-full">
                      {keywords[category.id].length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Category Description */}
          <p className="text-sm text-slate-600 mb-3">
            {activeTabData?.description}
          </p>

          {/* Keyword Input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Add ${activeTabData?.label.toLowerCase()} keyword...`}
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/90"
            />
            <button
              onClick={() => addKeyword(currentInput)}
              disabled={!currentInput.trim()}
              className={`px-4 py-3 rounded-lg font-medium flex items-center transition-all ${
                currentInput.trim()
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Keywords Display */}
          <div className="min-h-[100px] p-4 bg-slate-50 rounded-lg border">
            {keywords[activeCategory].length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {keywords[activeCategory].map((keyword, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${activeTabData?.bgColor} ${activeTabData?.color} border ${activeTabData?.borderColor}`}
                  >
                    {keyword}
                    <button
                      onClick={() => removeKeyword(keyword, activeCategory)}
                      className="ml-2 hover:text-red-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-500 py-8">
                <Tag className="h-8 w-8 mx-auto mb-2 text-slate-400" />
                <p>No keywords added yet</p>
                <p className="text-xs">
                  Type above and press Enter to add keywords
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Preview Stats */}
        <div className="mb-6 p-4 bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Eye className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-medium text-slate-800">Preview:</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-slate-600">
                  ~{getEstimatedMentions().toLocaleString()} mentions/month
                </span>
              </div>
              <div className="flex items-center">
                <Hash className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-slate-600">
                  {getTotalKeywords()} keywords
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={onPrev}
            className="px-6 py-3 rounded-lg font-semibold flex items-center transition-all duration-200 bg-slate-100 hover:bg-slate-200 text-slate-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>

          <div className="flex items-center space-x-4">
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              Need help? See examples for Fashion brands
            </button>
            <button
              onClick={handleContinue}
              disabled={getTotalKeywords() === 0}
              className={`px-6 py-3 rounded-lg font-semibold flex items-center transition-all duration-200 shadow-lg ${
                getTotalKeywords() > 0
                  ? "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-xl"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
            >
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
