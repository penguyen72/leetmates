import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card } from "../components/ui/card"
import { PLAYERS, ROOMS } from "../lib/constants"
import { cn } from "../lib/utils"

export function ActivitySideBar() {
  return (
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
  )
}
