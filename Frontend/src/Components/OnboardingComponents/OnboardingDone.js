import {
  ArrowRight,
  ChartPie,
  BarChart,
  Database,
  Search,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function OnboardingDone({ onNext }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [brandName, setBrandname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("onboardingComplete", true);
    navigate("/dashboard");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);

    setBrandname(localStorage.getItem("brandName"));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Congratulations,
              <br />
              You're All Set!
            </h1>
            <p className="text-lg md:text-xl text-slate-600 w-2/3 mx-auto leading-tight">
              Now you'll have brands insights at your tips.
            </p>
          </div>

          {/* Central Illustration */}
          <div className="relative mb-10 flex justify-center">
            <div className="relative">
              {/* Central Dashboard */}
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 shadow-lg flex items-center justify-center flex-col">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-white">
                  {brandName ? (
                    <img
                      src={`https://img.logo.dev/${brandName}?token=pk_DqhPz-piQqeDaR3o1tTDGw`}
                      className="rounded-full"
                    />
                  ) : (
                    <LayoutDashboard className="h-8 w-8 text-purple-600" />
                  )}
                </div>
                <div className="mt-3 text-white text-sm font-semibold">
                  Insights Await
                </div>
              </div>

              {/* Floating Social Media Icons */}
              <div className="absolute -top-2 -left-8 bg-white rounded-full p-3 shadow-lg animate-float -z-10 scale-75">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute -top-6 right-0 bg-white rounded-full p-3 shadow-lg animate-float delay-200 scale-75">
                <ChartPie className="h-6 w-6 text-blue-400" />
              </div>
              <div className="absolute top-12 -right-10 bg-white rounded-full p-3 shadow-lg animate-float delay-300 scale-75">
                <Database className="h-6 w-6 text-pink-600" />
              </div>
              <div className="absolute bottom-8 -left-8 bg-white rounded-full p-3 shadow-lg animate-float delay-500  scale-75">
                <Search className="h-6 w-6 text-red-600" />
              </div>
              <div className="absolute -bottom-10 right-4 bg-white rounded-full p-3 shadow-lg animate-float delay-700 scale-75">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleSubmit}
              className="bg-slate-900 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-400 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer ease-in-out"
            >
              Move to Dashboard
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              ⏱️ Your time invested will be worth it!
            </p>
          </div>
        </div>
      </div>

      <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
          .delay-700 {
            animation-delay: 0.7s;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
    </div>
  );
}
