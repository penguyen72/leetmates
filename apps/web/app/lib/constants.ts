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
    id: "welcome",
    title: "welcome",
  },
  {
    id: "announcements",
    title: "announcements",
  },
  {
    id: "introductions",
    title: "introductions",
  },
  {
    id: "suggestions",
    title: "suggestions",
  },
]

export const CHANNEL_TABS = [
  {
    id: "general",
    title: "general",
  },
  {
    id: "random",
    title: "random",
  },
]

export const CODING_TABS = [
  {
    id: "system-design",
    title: "system-design",
  },
  {
    id: "operating-systems",
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
