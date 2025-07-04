import { ChartPie, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-300/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-900 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">
                <ChartPie className="text-white text-xs p-1" />
              </span>
            </div>
            <span className="text-black font-bold text-xl">BrandLytics</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-black">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-purple-800 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="hover:text-purple-800 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-purple-800 transition-colors cursor-pointer"
            >
              Testimonials
            </button>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gradient-to-r from-purple-500 to-purple-900 text-white font-semibold hover:scale-105 transition-all duration-300 p-2 md:px-4 h-8 rounded-md cursor-pointer ease-in-out flex items-center justify-between shadow-md"
          >
            <LayoutDashboard className="w-4 h-4 md:mr-2" />
            <div className="hidden md:block">Dashboard</div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
