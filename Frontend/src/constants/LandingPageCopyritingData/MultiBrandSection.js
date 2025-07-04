import { Building2, BarChart3, Settings } from "lucide-react";

export const brands = [
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

export const features = [
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
