import { Outlet } from "@remix-run/react"
import { ActivitySideBar } from "../components/activity-side-bar"
import { ChannelsSideBar } from "../components/channels-side-bar"

export default function Layout() {
  return (
    <div className="flex h-full">
      <ChannelsSideBar />
      <Outlet />
      <ActivitySideBar />
    </div>
  )
}
