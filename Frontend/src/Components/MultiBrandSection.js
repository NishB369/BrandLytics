import {
  Building2,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export const MultiBrandSection = () => {
  const brands = [
    {
      name: "Nike",
      industry: "Fashion",
      sentiment: "+47%",
      mentions: "12.3K",
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      name: "Physics Wallah",
      industry: "Education",
      sentiment: "+52%",
      mentions: "8.7K",
      color: "bg-gradient-to-r from-purple-500 to-purple-700",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
    },
    {
      name: "Starbucks",
      industry: "F&B",
      sentiment: "+38%",
      mentions: "15.2K",
      color: "bg-gradient-to-r from-purple-600 to-purple-800",
      bgColor: "bg-purple-200",
      textColor: "text-purple-900",
    },
  ];

  const features = [
    {
      icon: Building2,
      title: "Switch between brands instantly",
      description: "Toggle between Nike and Physics Wallah in one click",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Compare performance",
      description: "Analyze sentiment across your entire brand portfolio",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Settings,
      title: "Industry-specific alerts",
      description: "Custom notifications for fashion vs education industries",
      color: "from-purple-600 to-purple-800",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50/30 md:px-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
            One Account.{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Multiple Brands.
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">Infinite Possibilities.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed px-4">
            Manage multiple brands from different industries with customized
            monitoring, alerts, and controls.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
          {/* Brand Cards */}
          <div className="space-y-4 order-2 lg:order-1">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Your Brand Portfolio
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Monitor all your brands in one unified dashboard
              </p>
            </div>
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group cursor-pointer border border-black/20 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100/50 bg-white rounded-2xl overflow-hidden transform hover:-translate-y-1"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${brand.color} shadow-lg text-white font-black p-4 flex items-center justify-center`}
                      >{brand.name.charAt(0)}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors">
                          {brand.name}
                        </h4>
                        <p className="text-slate-600 font-medium text-sm sm:text-base">
                          {brand.industry}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-full group-hover:bg-slate-200 transition-colors">
                        <MessageSquare size={10} className="sm:w-3 sm:h-3" />
                        <span className="text-xs">{brand.mentions}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full group-hover:bg-emerald-200 transition-colors">
                        <TrendingUp size={10} className="sm:w-3 sm:h-3" />
                        <span className="text-xs">{brand.sentiment}</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <span
                      className={`w-2 h-2 rounded-full ${brand.color} animate-pulse`}
                    ></span>
                    <span>Live monitoring active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-4 order-1 lg:order-2">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Powerful Features
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Everything you need to manage multiple brands effectively
              </p>
            </div>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex gap-3 sm:gap-4 sm:p-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1 border border-black/20"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-1 text-base sm:text-lg group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 transform hover:scale-105">
            Manage Multiple Brands
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <p className="mt-4 text-xs sm:text-sm text-slate-500">
            Start with 3 brands free • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};
