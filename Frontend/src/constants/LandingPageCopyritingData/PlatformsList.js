import {
  Instagram,
  Twitter,
  Youtube,
  Music,
  Linkedin,
  MessageSquare,
} from "lucide-react";

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "from-purple-400 to-purple-600",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "hover:shadow-purple-100",
    example:
      "Track visual trends, user engagement through Reels, and conversations via comments and DMs.",
    mentions: "2.3M",
    sentiment: "+42%",
    recommended: true,
    defaultSelected: true,
    trackingFeatures: ["Posts", "Stories", "Reels", "Comments"],
  },
  {
    name: "Twitter",
    icon: Twitter,
    color: "from-purple-500 to-purple-700",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "hover:shadow-purple-100",
    example:
      "Monitor real-time conversations, trending topics, and public sentiment on fast-paced events.",
    mentions: "5.7M",
    sentiment: "+38%",
    recommended: true,
    defaultSelected: true,
    trackingFeatures: ["Tweets", "Replies", "Retweets", "Trending"],
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "from-purple-600 to-purple-800",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "hover:shadow-purple-100",
    example:
      "Analyze long-form video engagement, sentiment in comments, and brand mentions in content.",
    mentions: "1.8M",
    sentiment: "+51%",
    recommended: false,
    defaultSelected: false,
    trackingFeatures: ["Comments", "Video descriptions", "Channel mentions"],
  },
  {
    name: "TikTok",
    icon: Music,
    color: "from-purple-700 to-purple-900",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "hover:shadow-purple-100",
    example:
      "Explore short-form video trends, hashtag performance, and viral audio usage.",
    mentions: "3.2M",
    sentiment: "+47%",
    recommended: true,
    defaultSelected: true,
    trackingFeatures: ["Video captions", "Comments", "Hashtags"],
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "hover:shadow-purple-100",
    example:
      "Gain insights from professional content, hiring trends, and corporate updates.",
    mentions: "890K",
    sentiment: "+35%",
    recommended: false,
    defaultSelected: false,
    trackingFeatures: ["Posts", "Articles", "Company updates"],
  },
  {
    name: "Reddit",
    icon: MessageSquare,
    color: "from-purple-800 to-purple-900",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "hover:shadow-purple-100",
    example:
      "Discover deep community insights, user-generated discussions, and emerging niche topics.",
    mentions: "1.1M",
    sentiment: "+29%",
    recommended: false,
    defaultSelected: false,
    trackingFeatures: ["Posts", "Comments", "Subreddit discussions"],
  },
];

export default platforms;
