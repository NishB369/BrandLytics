import { useState, useEffect } from "react";
import OnboardingStep0 from "../Components/OnboardingComponents/OnboardingStep0";
import OnboardingStep1 from "../Components/OnboardingComponents/OnboardingStep1";
import OnboardingStep2 from "../Components/OnboardingComponents/OnboardingStep2";

// Progress Bar Component
const ProgressBar = ({ currentStep, totalSteps, isAnimating }) => {
  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-slate-200">
      <div className="flex justify-center items-center">
        <div className="flex space-x-2">
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentStep
                  ? "bg-purple-500 scale-125"
                  : i < currentStep
                  ? "bg-green-500"
                  : "bg-slate-300"
              } ${isAnimating && i === currentStep ? "animate-pulse" : ""}`}
            />
          ))}
        </div>
        <div className="ml-4 text-sm text-slate-600 font-medium">
          Step {currentStep} of {totalSteps - 1}
        </div>
      </div>
    </div>
  );
};

// Main Onboarding Controller
const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [onboardingData, setOnboardingData] = useState({
    brandName: "",
    industry: "",
    selectedPlatforms: [],
    notifications: true,
    teamSize: "",
  });

  const totalSteps = 7; // 0, 1, 2, 3, 4, 5, 6

  // Animated progress dots
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (stepNumber) => {
    if (stepNumber >= 0 && stepNumber < totalSteps) {
      setCurrentStep(stepNumber);
    }
  };

  const skipToEnd = () => {
    setCurrentStep(totalSteps - 1);
  };

  const finishOnboarding = () => {
    console.log("Onboarding complete!", onboardingData);
    // Handle completion - navigate to dashboard
    // You can call your navigation function here
  };

  // Update onboarding data
  const updateOnboardingData = (newData) => {
    setOnboardingData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  // Step props object to pass to each component
  const stepProps = {
    onNext: nextStep,
    onPrev: prevStep,
    onSkip: skipToEnd,
    onFinish: finishOnboarding,
    goToStep: goToStep,
    currentStep: currentStep,
    totalSteps: totalSteps,
    onboardingData: onboardingData,
    updateData: updateOnboardingData,
  };

  const brandName = localStorage.getItem("brandName");
  const industry = localStorage.getItem("industry");
  const brandData = {
    brandName: brandName,
    industry: industry,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Progress Bar - Fixed at top */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        isAnimating={isAnimating}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto pt-20">
        {/* Step Content */}
        <div className="step-content">
          {currentStep === 0 && (
            <div className="max-w-4xl mx-auto">
              <OnboardingStep0 {...stepProps} />
            </div>
          )}
          {currentStep === 1 && (
            <div className="max-w-2xl mx-auto">
              <OnboardingStep1 {...stepProps} />
            </div>
          )}
          {currentStep === 2 && (
            <OnboardingStep2 {...stepProps} brandData={brandData} />
          )}
          {currentStep === 3 && <OnboardingStep3 {...stepProps} />}
          {currentStep === 4 && <OnboardingStep4 {...stepProps} />}
          {currentStep === 5 && <OnboardingStep5 {...stepProps} />}
          {currentStep === 6 && <OnboardingStep6 {...stepProps} />}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

// Placeholder components for steps 2-6

const OnboardingStep3 = ({ onNext, onPrev }) => (
  <div className="max-w-2xl mx-auto">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Step 3 - Keywords
        </h2>
        <p className="text-slate-600 mb-8">
          Your keyword setup component goes here
        </p>
        <div className="flex justify-between">
          <button
            onClick={onPrev}
            className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border-2 border-slate-200 transition-all duration-200"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);

const OnboardingStep4 = ({ onNext, onPrev }) => (
  <div className="max-w-2xl mx-auto">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Step 4 - Notifications
        </h2>
        <p className="text-slate-600 mb-8">
          Your notification settings component goes here
        </p>
        <div className="flex justify-between">
          <button
            onClick={onPrev}
            className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border-2 border-slate-200 transition-all duration-200"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);

const OnboardingStep5 = ({ onNext, onPrev }) => (
  <div className="max-w-2xl mx-auto">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Step 5 - Team Setup
        </h2>
        <p className="text-slate-600 mb-8">
          Your team setup component goes here
        </p>
        <div className="flex justify-between">
          <button
            onClick={onPrev}
            className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border-2 border-slate-200 transition-all duration-200"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);

const OnboardingStep6 = ({ onFinish }) => (
  <div className="max-w-2xl mx-auto">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Step 6 - Complete!
        </h2>
        <p className="text-slate-600 mb-8">
          Your completion component goes here
        </p>
        <button
          onClick={onFinish}
          className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  </div>
);

export default Onboarding;
