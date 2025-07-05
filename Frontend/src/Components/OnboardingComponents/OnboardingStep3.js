import { ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import platforms from "../../constants/LandingPageCopyritingData/PlatformsList";

export default function OnboardingStep3({ onNext }) {
  const [selectedPlatforms, setSelectedPlatforms] = useState(
    platforms.reduce((acc, platform) => {
      acc[platform.name] = platform.defaultSelected;
      return acc;
    }, {})
  );

  const handleToggle = (platformName) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platformName]: !prev[platformName],
    }));
  };

  const selectedCount = Object.values(selectedPlatforms).filter(Boolean).length;

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          {/* Progress Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Where should we monitor your brand?
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto leading-tight">
              Select the platforms where your audience is most active.
              <br />
              You can always add more later.
            </p>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              const isSelected = selectedPlatforms[platform.name];

              return (
                <div
                  key={platform.name}
                  className={`relative bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-purple-300 shadow-lg shadow-purple-100"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                  onClick={() => handleToggle(platform.name)}
                >
                  {/* Recommended Badge */}
                  {platform.recommended && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Recommended
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {platform.name}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {platform.mentions} daily mentions
                          </p>
                        </div>
                      </div>

                      {/* Toggle Switch */}
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                            isSelected ? "bg-purple-600" : "bg-slate-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                              isSelected ? "translate-x-6" : "translate-x-0.5"
                            } mt-0.5`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Platform Description */}
                    <p className="text-sm text-slate-600 mb-3">
                      {platform.example}
                    </p>

                    {/* Sentiment */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-600 font-medium">
                          {platform.sentiment} sentiment
                        </span>
                      </div>
                    </div>

                    {/* Tracking Features */}
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-500 mb-2">Track:</p>
                      <div className="flex flex-wrap gap-1">
                        {platform.trackingFeatures.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={onNext}
              disabled={selectedCount === 0}
              className={`px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                selectedCount > 0
                  ? "bg-slate-900 hover:bg-purple-600 text-white cursor-pointer"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
            >
              Continue with {selectedCount} Selected Platform
              {selectedCount !== 1 ? "s" : ""}
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
              💡 You can add or remove platforms anytime from your dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
