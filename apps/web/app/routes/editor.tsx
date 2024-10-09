import { useState, useEffect } from "react"
import { Editor } from "@monaco-editor/react"
import type { Problem } from "../types/types"
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CircleIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons"
import Markdown from "react-markdown"

import { Button } from "../components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { json, useLoaderData } from "@remix-run/react"
import axios from "axios"

type CodeProps = React.ComponentPropsWithoutRef<"code">

function ProblemPanel({ problems }: { problems: Problem[] }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    console.log(idx)
    console.log(problems[idx])
  }, [idx, problems])

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">
            {problems.length > 0 ? problems[idx].title : ""}
          </h1>
          <h3 className="text-zinc-400 text-sm">
            Question {idx + 1} of {problems.length}
          </h3>
        </div>
        <div className="flex flex-row gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIdx(Math.abs((idx - 1) % problems.length))}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIdx(Math.abs((idx + 1) % problems.length))}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-row py-3 gap-1 items-center">
        <div className="inline-block px-1 py-0.5 bg-green-200 text-zinc-800 text-sm font-semibold rounded-sm">
          Easy
        </div>
        <div className="text-xl font-bold">
          {problems[idx].solved ? (
            <CheckCircledIcon className="text-3xl" />
          ) : (
            <CircleIcon className="font-3xl" />
          )}
        </div>
      </div>

      <Markdown
        components={{
          code(props: CodeProps) {
            const { children } = props

            return (
              <code className="bg-zinc-200 py-0.5 px-1 rounded-sm">
                {children}
              </code>
            )
          },
        }}
      >
        {problems[idx].description}
      </Markdown>
    </div>
  )
}

type Language = {
  id: number
  name: string
  is_archived: boolean
}

export async function loader() {
  const response = await axios.get(
    "https://judge0-ce.p.rapidapi.com/languages/all",
    {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      },
    }
  )

  const languages: Language[] = response.data.filter(
    (item: Language) => item.is_archived
  )

  return json({ languages })
}

export default function EditorLayout() {
  const { languages } = useLoaderData<typeof loader>()

  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }

  const [players] = useState(["Player 1", "Player 2", "Player 3"])

  const [problems] = useState<Problem[]>([
    {
      title: "Reverse a Linked List",
      solved: true,
      description:
        "Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.",
      tags: ["Linked List"],
    },
    {
      title: "Invert a Binary Tree",
      solved: false,
      description: "",
      tags: ["Binary Search Tree"],
    },
  ])

  return (
    <div className="flex h-full">
      <PanelGroup
        autoSaveId="persistence"
        direction="horizontal"
        onLayout={onLayout}
      >
        {/* Problem Statement Panel */}
        <Panel className="p-4" defaultSize={30} minSize={20} maxSize={50}>
          <ProblemPanel problems={problems} />
        </Panel>
        <PanelResizeHandle className="w-[1px] bg-gray-300" />
        {/* Editor Panel */}
        <Panel className="p-4" defaultSize={50} minSize={30}>
          <Editor
            height="90vh"
            width="40vw"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            options={{
              minimap: { enabled: false },
              scrollbar: {
                vertical: "hidden",
              },
              renderLineHighlight: "none",
              codeLens: false,
              colorDecorators: false,
              contextmenu: false,
              guides: {
                bracketPairs: false,
                bracketPairsHorizontal: false,
                highlightActiveBracketPair: false,
                highlightActiveIndentation: false,
                indentation: false,
              },
              hideCursorInOverviewRuler: true,
              overviewRulerBorder: false,
            }}
          />
          <div className="flex justify-between pt-3">
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map(item => {
                    return (
                      <SelectItem key={item.id} value={item.name}>
                        {item.name}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row gap-2">
              <Button variant="secondary">Run</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </Panel>
        <PanelResizeHandle className="w-[1px] bg-gray-300" />
        {/* Players Panel */}
        <Panel className="p-4" defaultSize={20} minSize={20} maxSize={40}>
          <h2 className="text-xl font-semibold mb-4">Players in Room</h2>
          <ul className="space-y-2">
            {players.map((player, index) => (
              <li
                key={index}
                className="bg-gray-200 p-4 rounded shadow text-center"
              >
                {player}
              </li>
            ))}
          </ul>
        </Panel>
      </PanelGroup>
    </div>
  )
}
