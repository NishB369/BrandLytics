import {
  ArrowRight,
  ArrowLeft,
  Search,
  X,
  TrendingUp,
  BarChart3,
  Eye,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function OnboardingStep4({ onNext, onPrev }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [competitors, setCompetitors] = useState([
    {
      id: "adidas",
      name: "Adidas",
      industry: "Fashion & Apparel",
      emoji: "👟",
      sentiment: 0.72,
      mentions: "45K",
      marketShare: 28,
    },
    {
      id: "puma",
      name: "Puma",
      industry: "Fashion & Apparel",
      emoji: "👟",
      sentiment: 0.68,
      mentions: "28K",
      marketShare: 18,
    },
  ]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { name: "Under Armour", emoji: "👟", industry: "Fashion & Apparel" },
    { name: "Reebok", emoji: "👟", industry: "Fashion & Apparel" },
    { name: "New Balance", emoji: "👟", industry: "Fashion & Apparel" },
    { name: "Converse", emoji: "👟", industry: "Fashion & Apparel" },
  ];

  const brandData = {
    name: "Nike",
    sentiment: 0.65,
    mentions: "127K",
    marketShare: 42,
  };

  const handleAddCompetitor = (competitor) => {
    if (!competitors.find((c) => c.name === competitor.name)) {
      const newCompetitor = {
        id: competitor.name.toLowerCase().replace(/\s+/g, ""),
        name: competitor.name,
        industry: competitor.industry,
        emoji: competitor.emoji,
        sentiment: Math.random() * 0.4 + 0.5, // Random sentiment between 0.5-0.9
        mentions: Math.floor(Math.random() * 50 + 10) + "K",
        marketShare: Math.floor(Math.random() * 20 + 5),
      };
      setCompetitors([...competitors, newCompetitor]);
    }
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handleRemoveCompetitor = (id) => {
    setCompetitors(competitors.filter((c) => c.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleContinue = () => {
    if (onNext) {
      onNext({ competitors });
    }
  };

  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !competitors.find((c) => c.name === s.name)
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Who are your main competitors?
          </h1>
          <p className="text-slate-600">
            We'll help you track their performance and stay ahead
          </p>
        </div>

        {/* Competitor Search */}
        <div className="mb-6 relative">
          <label className="block text-base font-semibold text-slate-700 mb-3">
            🔍 Search Competitors
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(searchTerm.length > 0)}
              placeholder="Type competitor name..."
              className="w-full pl-6 pr-4 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm"
            />
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute z-10 w-full mt-1 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {searchTerm.length === 0 && (
                <div className="p-3 text-sm text-slate-500 border-b border-slate-100">
                  Popular suggestions: Adidas, Puma, Under Armour, Reebok
                </div>
              )}
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleAddCompetitor(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-purple-50 transition-colors duration-150 flex items-center space-x-3 cursor-pointer"
                >
                  <span className="text-lg">{suggestion.emoji}</span>
                  <div>
                    <div className="font-medium text-slate-900">
                      {suggestion.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {suggestion.industry}
                    </div>
                  </div>
                </button>
              ))}
              {searchTerm.length > 0 && filteredSuggestions.length === 0 && (
                <div className="p-4 text-sm text-slate-500 text-center">
                  No matches found. Try a different search term.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Added Competitors */}
        {competitors.length > 0 && (
          <div className="mb-6">
            <label className="block text-base font-semibold text-slate-700 mb-3">
              📊 Added Competitors
            </label>
            <div className="space-y-3">
              {competitors.map((competitor) => (
                <div
                  key={competitor.id}
                  className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{competitor.emoji}</span>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {competitor.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {competitor.industry}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-900">
                          Sentiment:{" "}
                          <span className="text-green-600">
                            +{competitor.sentiment.toFixed(2)}
                          </span>
                        </div>
                        <div className="text-sm text-slate-500">
                          {competitor.mentions} mentions/month
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveCompetitor(competitor.id)}
                        className="cursor-pointer p-1 text-slate-400 hover:text-purple-500 transition-colors duration-150"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onPrev}
            className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-200 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 hover:shadow-md cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>

          <div className="flex space-x-3">
            <button
              onClick={handleContinue}
              className="px-6 py-3 rounded-lg font-semibold text-slate-600 hover:text-slate-800 transition-colors duration-200 cursor-pointer underline"
            >
              Skip for now
            </button>
            <button
              onClick={handleContinue}
              className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-200 bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-lg hover:shadow-xl transform cursor-pointer"
            >
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            You can add competitors later from your dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
