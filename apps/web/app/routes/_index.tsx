import type { MetaFunction } from "@remix-run/node"
import { Crown, Hash } from "lucide-react"
import { SideBar } from "../components/side-bar"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { PLAYERS, ROOMS } from "../lib/constants"
import { cn } from "../lib/utils"

export const meta: MetaFunction = () => {
  return [
    { title: "Leetmates" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div className="flex h-full">
      <SideBar />
      <main className="flex flex-col grow border-x-[1px] border-slate-100">
        <div className="flex items-center border-b-[1px] border-slate-100 p-4">
          <Hash className="mr-2 size-4" />
          <p>Title</p>
        </div>
        <div className="grow p-4">
          <div className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Luke Kim</p>
                <div className="bg-blue-500 rounded-sm flex items-center justify-center px-2 py-[1px]">
                  <Crown className="size-3 mr-1 text-white" />
                  <p className="text-xs font-semibold text-white">Admin</p>
                </div>
              </div>
              <p className="text-sm">Did you guys finish the RL homework?</p>
            </div>
          </div>
        </div>
        <Input className="m-4" placeholder="Message #Problems" />
      </main>
      <aside className="w-72 overflow-scroll">
        <div className="flex flex-col p-4">
          <p className="text-sm font-semibold">ACTIVE ROOMS</p>
          <div className="flex flex-col gap-2 mb-4 mt-2">
            {ROOMS.map((item, index) => {
              return (
                <Card key={index} className="p-3 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <div
                      className={cn(
                        "rounded-sm flex items-center justify-center px-2 py-[1px]",
                        item.difficulty === "Hard" && "bg-red-400",
                        item.difficulty === "Medium" && "bg-orange-300",
                        item.difficulty === "Easy" && "bg-green-300"
                      )}
                    >
                      <p className="text-xs font-semibold text-white">
                        {item.difficulty}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs">{item.creator}</p>
                  <div className="flex justify-between">
                    <p className="text-xs">{item.players}/4 Players</p>
                    <p className="text-xs">{item.visibility}</p>
                  </div>
                </Card>
              )
            })}
          </div>
          <p className="text-sm font-semibold">MEMBERS</p>
          <div className="flex flex-col gap-2 my-3">
            {PLAYERS.map((item, index) => {
              return (
                <div key={index} className="flex">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col ml-2">
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-semibold">{item.player}</p>
                      <div className="rounded-sm flex items-center justify-center h-4 w-5 px-[2px] py-[1px] bg-slate-500">
                        <p className="text-[10px] text-white">{item.level}</p>
                      </div>
                    </div>
                    <p className="text-xs">{item.status}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </aside>
    </div>
  )
}
