import { useParams } from "@remix-run/react"
import { Crown, Hash } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Input } from "../components/ui/input"

export default function Page() {
  const { channel } = useParams()
  return (
    <main className="flex flex-col grow border-x-[1px] border-slate-100">
      <div className="flex items-center border-b-[1px] border-slate-100 p-4">
        <Hash className="mr-2 size-4" />
        <p>{channel}</p>
      </div>
      <div className="grow p-4 flex flex-col-reverse">
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
      <Input className="mb-4 mx-4" placeholder="Message #Problems" />
    </main>
  )
}
