import {
  Instagram,
  Twitter,
  Youtube,
  Music,
  Linkedin,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";

export const PlatformsList = () => {
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-purple-400 to-purple-600",
      borderColor: "border-purple-200 hover:border-purple-300",
      shadowColor: "hover:shadow-purple-100",
      example:
        "Track Nike's latest drops and Physics Wallah's student engagement",
      mentions: "2.3M",
      sentiment: "+42%",
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "from-purple-500 to-purple-700",
      borderColor: "border-purple-200 hover:border-purple-300",
      shadowColor: "hover:shadow-purple-100",
      example:
        "Monitor McDonald's customer service and Apple's product launches",
      mentions: "5.7M",
      sentiment: "+38%",
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-purple-600 to-purple-800",
      borderColor: "border-purple-200 hover:border-purple-300",
      shadowColor: "hover:shadow-purple-100",
      example: "Analyze PW's course reviews and How a SDE at Google is spending their day",
      mentions: "1.8M",
      sentiment: "+51%",
    },
    {
      name: "TikTok",
      icon: Music,
      color: "from-purple-700 to-purple-900",
      borderColor: "border-purple-200 hover:border-purple-300",
      shadowColor: "hover:shadow-purple-100",
      example: "Catch Starbucks trends and Spotify playlist mentions",
      mentions: "3.2M",
      sentiment: "+47%",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-200 hover:border-purple-300",
      shadowColor: "hover:shadow-purple-100",
      example:
        "Follow HDFC's corporate updates and Microsoft's B2B conversations",
      mentions: "890K",
      sentiment: "+35%",
    },
    {
      name: "Reddit",
      icon: MessageSquare,
      color: "from-purple-800 to-purple-900",
      borderColor: "border-purple-200 hover:border-purple-300",
      shadowColor: "hover:shadow-purple-100",
      example: "Discover authentic discussions about your brand",
      mentions: "1.1M",
      sentiment: "+29%",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 md:px-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Every Platform. Every Industry.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Every Brand.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            From fashion giants to education startups, monitor brand
            conversations across all major social platforms in one unified
            dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ease-out hover:scale-105 ${platform.shadowColor} hover:shadow-2xl border-2 ${platform.borderColor} rounded-2xl bg-white backdrop-blur-sm overflow-hidden transform hover:-translate-y-2`}
              >
                <div className="relative">
                  <div
                    className={`h-2 bg-gradient-to-r ${platform.color}`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${platform.color} text-white shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                        {platform.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-full group-hover:bg-slate-200 transition-colors">
                      <Users size={12} />
                      {platform.mentions}
                    </div>
                    <div className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full group-hover:bg-emerald-200 transition-colors">
                      <TrendingUp size={12} />
                      {platform.sentiment}
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                    {platform.example}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full animate-pulse"></span>
                    <span>Real-time monitoring</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
