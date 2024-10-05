import { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import type { Problem } from '../types/types';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CircleIcon,
  CheckCircledIcon,
} from '@radix-ui/react-icons';
import Markdown from 'react-markdown';

import { Button } from '../components/ui/button';

type CodeProps = React.ComponentPropsWithoutRef<'code'>;

function ProblemPanel({ problems }: { problems: Problem[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    console.log(idx);
    console.log(problems[idx]);
  }, [idx, problems]);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">
            {problems.length > 0 ? problems[idx].title : ''}
          </h1>
          <h3 className="text-zinc-400 text-sm">
            Question {idx + 1} of {problems.length}
          </h3>
        </div>
        <div className="flex flex-row gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIdx((idx - 1) % problems.length)}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIdx((idx + 1) % problems.length)}
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
            const { children } = props;

            return (
              <code className="bg-zinc-200 py-0.5 px-1 rounded-sm">
                {children}
              </code>
            );
          },
        }}
      >
        Given the `head` of a singly linked list, reverse the list, and return
        _the reversed list_.
      </Markdown>
    </div>
  );
}

export default function EditorLayout() {
  const [players] = useState(['Player 1', 'Player 2', 'Player 3']);

  const [problems] = useState<Problem[]>([
    { title: 'Reverse a Linked List', solved: true },
    { title: 'Invert a Binary Tree', solved: false },
  ]);

  return (
    <div className="flex h-screen">
      {/* Problem Statement Panel */}
      <div className="flex-1 border-r border-gray-300 p-4">
        <ProblemPanel problems={problems} />
      </div>

      {/* Editor Panel */}
      <div className="flex-3 border-r border-gray-300 p-4">
        <Editor
          height="90vh"
          width="40vw"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          options={{
            minimap: { enabled: false },
            scrollbar: {
              vertical: 'hidden',
            },
            renderLineHighlight: 'none',
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
      </div>

      {/* Players Panel */}
      <div className="flex-1 p-4">
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
      </div>
    </div>
  );
}
