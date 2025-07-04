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
    example: "Monitor McDonald's customer service and Apple's product launches",
    mentions: "5.7M",
    sentiment: "+38%",
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "from-purple-600 to-purple-800",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "hover:shadow-purple-100",
    example:
      "Analyze PW's course reviews and How a SDE at Google is spending their day",
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

export default platforms;
