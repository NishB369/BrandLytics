import { AlertTriangle, Clock, Target, TrendingDown } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Missing 70% of brand mentions",
      description: "Critical conversations happening without your knowledge",
    },
    {
      icon: Clock,
      title: "Alerts come when its too late",
      description: "Damage is done before you can respond",
    },
    {
      icon: Target,
      title: "Managing 5+ different tools",
      description: "Scattered data across multiple platforms",
    },
    {
      icon: TrendingDown,
      title: "No competitive intelligence",
      description: "Flying blind while competitors gain advantage",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Social Media Mentions Are Everywhere.
            <br />
            <span className="text-purple-600">Your Monitoring Isn't.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Every day, thousands of conversations about your brand happen across
            platforms. Are you part of them, or are you missing out?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="border-slate-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group bg-white border-1 rounded-md shadow-md"
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-50 transition-colors">
                  <problem.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">
                  {problem.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
