import { Zap, Bell, TrendingUp, Target } from "lucide-react";

export const features = [
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

export const liveMentions = [
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
