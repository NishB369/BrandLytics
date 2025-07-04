import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [mentionsCount, setMentionsCount] = useState(9847523);
  const [brandsCount, setBrandsCount] = useState(487);

  useEffect(() => {
    const interval = setInterval(() => {
      setMentionsCount((prev) => prev + Math.floor(Math.random() * 10) + 1);
      if (Math.random() > 0.8) {
        setBrandsCount((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 mt-20 md:mt-4 pb-4 md:pb-0">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-25"></div>

      {/* Background gradient orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Trust badge */}
        <span className="bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200 transition-colors w-fit text-xs rounded-full p-2">
          🚀 Trusted by 500+ Global Brands
        </span>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight mt-8">
          Monitor Every Brand Mention.
          <br />
          <span className="text-purple-600">Master Every Conversation.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
          Track sentiment across all social platforms in real-time. From Nike to
          Physics Wallah - one dashboard rules them all.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center mb-10">
          <button className="bg-purple-500 text-white px-4 py-3 rounded-md flex items-center cursor-pointer hover:bg-purple-700 duration-200 ease-in-out transition-colors">
            Start Free Monitoring
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>

        {/* Stats banner */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              {mentionsCount.toLocaleString()}+
            </div>
            <div className="text-slate-600 font-medium">Mentions Tracked</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              {brandsCount}+
            </div>
            <div className="text-slate-600 font-medium">Brands Monitored</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
            <div className="text-slate-600 font-medium">Uptime</div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-28 left-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-lg animate-float hidden lg:block">
        <div className="text-purple-600 font-semibold text-sm">
          Nike: +47% Positive
        </div>
      </div>
      <div className="absolute bottom-72 right-16 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-lg animate-float delay-500 hidden lg:block">
        <div className="text-violet-600 font-semibold text-sm">
          Physics Wallah: Trending
        </div>
      </div>
    </section>
  );
};
