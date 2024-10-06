import {
  Bell,
  BookOpen,
  Crown,
  Diamond,
  GraduationCap,
  ListChecks,
  Mail,
  MessageSquareMore,
} from "lucide-react"

export const NAVIGATION_TABS = [
  {
    id: "guide",
    icon: BookOpen,
    title: "Guide",
  },
  {
    id: "problems",
    icon: ListChecks,
    title: "Problems",
  },
  {
    id: "leaderboards",
    icon: Crown,
    title: "Leaderboards",
  },
  {
    id: "contest",
    icon: Mail,
    title: "Contests",
  },
  {
    id: "shop",
    icon: Diamond,
    title: "Shop",
  },
  {
    id: "notificatios",
    icon: Bell,
    title: "Notificatons",
  },
  {
    id: "jobs",
    icon: GraduationCap,
    title: "Jobs",
  },
  {
    id: "live",
    icon: MessageSquareMore,
    title: "Live",
  },
]

export const INFORMATION_TABS = [
  {
    title: "welcome",
  },
  {
    title: "announcements",
  },
  {
    title: "introductions",
  },
  {
    title: "suggestions",
  },
]

export const CHANNEL_TABS = [
  {
    title: "general",
  },
  {
    title: "random",
  },
]

export const CODING_TABS = [
  {
    title: "system-design",
  },
  {
    title: "operating-systems",
  },
]

export const ROOMS = [
  {
    title: "Cookie's Room",
    difficulty: "Medium",
    creator: "PeytonPoops",
    visibility: "Public",
    players: 3,
  },
  {
    title: "Luke's Bathroom",
    difficulty: "Hard",
    creator: "its-edmund",
    visibility: "Public",
    players: 3,
  },
]

export const PLAYERS = [
  {
    player: "its-edmund",
    level: 34,
    status: "Online",
  },
  {
    player: "PeytonPoops",
    level: 3,
    status: "Online",
  },
  {
    player: "annafan",
    level: 3,
    status: "Offline",
  },
  {
    player: "ditto",
    level: 3,
    status: "Offline",
  },
]
