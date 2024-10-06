import { Hash, Plus } from "lucide-react"
import {
  CHANNEL_TABS,
  CODING_TABS,
  INFORMATION_TABS,
  NAVIGATION_TABS,
} from "../lib/constants"
import { Button } from "./ui/button"

export function SideBar() {
  return (
    <aside className="w-60">
      <div className="flex flex-col p-4">
        <div className="flex gap-2 items-center">
          <img className="size-8" src="/logo.png" alt="logo" />
          <p className="text-xl font-semibold">Leetmates</p>
        </div>
        <Button className="my-4">
          <Plus className="mr-2 size-4" />
          Create Room
        </Button>
        {NAVIGATION_TABS.map((item, index) => {
          return (
            <Button key={index} className="justify-start" variant="ghost">
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          )
        })}
        <p className="my-2 text-sm font-semibold">INFORMATION</p>
        {INFORMATION_TABS.map((item, index) => {
          return (
            <Button key={index} className="justify-start" variant="ghost">
              <Hash className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          )
        })}
        <p className="my-2 text-sm font-semibold">GENERAL</p>
        {CHANNEL_TABS.map((item, index) => {
          return (
            <Button key={index} className="justify-start" variant="ghost">
              <Hash className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          )
        })}
        <p className="my-2 text-sm font-semibold">CODING</p>
        {CODING_TABS.map((item, index) => {
          return (
            <Button key={index} className="justify-start" variant="ghost">
              <Hash className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          )
        })}
      </div>
    </aside>
  )
}
