import { Zap, Bell, TrendingUp, Target } from "lucide-react";
import { useState, useEffect } from "react";

export const RealTimeFeaturesSection = () => {
  const [liveCount, setLiveCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "30-second updates",
      description: "Mentions refresh every 30 seconds for real-time monitoring",
      metric: "99.9% accuracy",
    },
    {
      icon: Bell,
      title: "Instant alerts",
      description: "Get notified immediately when sentiment drops or spikes",
      metric: "< 1 min response",
    },
    {
      icon: TrendingUp,
      title: "Live competitor tracking",
      description: "Watch competitor mentions and trends as they happen",
      metric: "24/7 monitoring",
    },
  ];

  const liveMentions = [
    {
      brand: "Nike",
      platform: "Twitter",
      sentiment: "positive",
      time: "2m ago",
    },
    {
      brand: "Starbucks",
      platform: "Instagram",
      sentiment: "neutral",
      time: "4m ago",
    },
    {
      brand: "Netflix",
      platform: "Reddit",
      sentiment: "positive",
      time: "7m ago",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 md:px-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Real-Time Monitoring.
            <br />
            <span className="text-purple-600">Real-Time Action.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Don't just monitor your brand - stay ahead of every conversation
            with lightning-fast updates and intelligent alerts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Live Feed Card */}
          <div className="border border-slate-200 bg-white shadow-lg rounded-lg">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Live Mentions Feed
                </h3>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Live
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {liveCount.toLocaleString()}
                </div>
                <div className="text-slate-600 font-medium">
                  mentions tracked today
                </div>
              </div>

              <div className="space-y-4">
                {liveMentions.map((mention, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          mention.sentiment === "positive"
                            ? "bg-green-500"
                            : mention.sentiment === "neutral"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {mention.brand}
                        </div>
                        <div className="text-slate-600 text-sm">
                          {mention.platform}
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-500 text-sm">{mention.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-slate-200 hover:border-purple-200 transition-all duration-300 bg-white rounded-lg"
              >
                <div className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-slate-900 text-lg">
                          {feature.title}
                        </h3>
                        <div className="border border-purple-200 text-purple-700 text-xs px-2 py-1 rounded">
                          {feature.metric}
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
