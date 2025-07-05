import {
  ArrowRight,
  ArrowLeft,
  TrendingDown,
  TrendingUp,
  Trophy,
  AlertTriangle,
  Mail,
  MessageSquare,
  Bell,
  Smartphone,
  Info,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

export default function OnboardingStep5({ onNext, onPrev }) {
  const [alerts, setAlerts] = useState({
    sentimentDrop: {
      enabled: true,
      threshold: -0.1,
    },
    volumeSpike: {
      enabled: true,
      threshold: 50,
    },
    competitor: {
      enabled: true,
    },
    crisis: {
      enabled: true,
    },
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    slack: false,
  });

  const [brandName] = useState("Nike"); // This would come from previous steps
  const [industry] = useState("fashion"); // This would come from previous steps

  const handleAlertToggle = (alertType, field = "enabled", value = null) => {
    setAlerts((prev) => ({
      ...prev,
      [alertType]: {
        ...prev[alertType],
        [field]: value !== null ? value : !prev[alertType][field],
      },
    }));
  };

  const handleNotificationToggle = (channel) => {
    setNotifications((prev) => ({
      ...prev,
      [channel]: !prev[channel],
    }));
  };

  const handleContinue = () => {
    if (onNext) {
      onNext({ alerts, notifications });
    }
  };

  const getIndustryRecommendation = () => {
    const recommendations = {
      fashion:
        "Fashion brands typically set sentiment alerts at -0.1 threshold",
      technology:
        "Tech companies often use lower thresholds (-0.2) for sentiment alerts",
      food: "Food & beverage brands benefit from quick crisis detection",
      education: "Education brands focus on reputation management alerts",
      finance: "Financial institutions require immediate crisis alerts",
      entertainment: "Entertainment brands monitor competitor mentions closely",
    };
    return (
      recommendations[industry] ||
      "Customize alerts based on your brand's needs"
    );
  };

  const alertExamples = {
    sentimentDrop: `"Alert: ${brandName} sentiment dropped 15% due to product recall mentions"`,
    volumeSpike: `"Alert: ${brandName} mentions up 120% - new product launch trending"`,
    competitor: `"Alert: '${brandName} vs Adidas' trending on Twitter"`,
    crisis: `"Alert: Negative keywords detected - '${brandName} quality issues'"`,
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
        {/* Progress & Header */}
        <div className="text-center mb-6">
          <div className="text-sm text-slate-500 mb-2">Step 5 of 6</div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Never miss important conversations
          </h1>
          <p className="text-slate-600">
            Set up smart alerts to stay informed about your brand
          </p>
        </div>

        {/* Alert Types */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Alert Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sentiment Drop Alert */}
            <div className="border border-slate-200 rounded-lg p-4 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <span className="font-medium text-slate-800">
                    Sentiment Drop Alert
                  </span>
                </div>
                <button
                  onClick={() => handleAlertToggle("sentimentDrop")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    alerts.sentimentDrop.enabled
                      ? "bg-purple-600"
                      : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      alerts.sentimentDrop.enabled
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              {alerts.sentimentDrop.enabled && (
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-slate-600 mb-2 block">
                      Notify when sentiment drops below
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="-1"
                        max="0"
                        step="0.1"
                        value={alerts.sentimentDrop.threshold}
                        onChange={(e) =>
                          handleAlertToggle(
                            "sentimentDrop",
                            "threshold",
                            parseFloat(e.target.value)
                          )
                        }
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm font-medium text-slate-700 min-w-[3rem]">
                        {alerts.sentimentDrop.threshold.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 italic">
                    {alertExamples.sentimentDrop}
                  </div>
                </div>
              )}
            </div>

            {/* Volume Spike Alert */}
            <div className="border border-slate-200 rounded-lg p-4 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-medium text-slate-800">
                    Volume Spike Alert
                  </span>
                </div>
                <button
                  onClick={() => handleAlertToggle("volumeSpike")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    alerts.volumeSpike.enabled
                      ? "bg-purple-600"
                      : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      alerts.volumeSpike.enabled
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              {alerts.volumeSpike.enabled && (
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-slate-600 mb-2 block">
                      Notify when mentions increase by
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="10"
                        max="200"
                        step="10"
                        value={alerts.volumeSpike.threshold}
                        onChange={(e) =>
                          handleAlertToggle(
                            "volumeSpike",
                            "threshold",
                            parseInt(e.target.value)
                          )
                        }
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm font-medium text-slate-700 min-w-[3rem]">
                        {alerts.volumeSpike.threshold}%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 italic">
                    {alertExamples.volumeSpike}
                  </div>
                </div>
              )}
            </div>

            {/* Competitor Alert */}
            <div className="border border-slate-200 rounded-lg p-4 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="font-medium text-slate-800">
                    Competitor Alert
                  </span>
                </div>
                <button
                  onClick={() => handleAlertToggle("competitor")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    alerts.competitor.enabled ? "bg-purple-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      alerts.competitor.enabled
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              {alerts.competitor.enabled && (
                <div className="space-y-3">
                  <div className="text-sm text-slate-600">
                    Notify when competitors are mentioned with your brand
                  </div>
                  <div className="text-xs text-slate-500 italic">
                    {alertExamples.competitor}
                  </div>
                </div>
              )}
            </div>

            {/* Crisis Alert */}
            <div className="border border-slate-200 rounded-lg p-4 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span className="font-medium text-slate-800">
                    Crisis Alert
                  </span>
                </div>
                <button
                  onClick={() => handleAlertToggle("crisis")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    alerts.crisis.enabled ? "bg-purple-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      alerts.crisis.enabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              {alerts.crisis.enabled && (
                <div className="space-y-3">
                  <div className="text-sm text-slate-600">
                    Notify about potential PR crises
                  </div>
                  <div className="text-xs text-slate-500 italic">
                    {alertExamples.crisis}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notification Channels */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Notification Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Email */}
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-white/90 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="font-medium text-slate-800">Email</span>
              </div>
              <button
                onClick={() => handleNotificationToggle("email")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.email ? "bg-purple-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.email ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* SMS */}
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-white/90 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-green-500" />
                <span className="font-medium text-slate-800">SMS</span>
              </div>
              <button
                onClick={() => handleNotificationToggle("sms")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.sms ? "bg-purple-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.sms ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onPrev}
            className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-200 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          <button
            onClick={handleContinue}
            className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-200 bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl cursor-pointer"
          >
            Continue
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-xs text-slate-500">
            You can modify these alert settings anytime in your dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
