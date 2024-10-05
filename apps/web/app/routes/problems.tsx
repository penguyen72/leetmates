import { Editor } from '@monaco-editor/react';

export default function Problems() {
  return (
    <div className="w-full flex flex-col h-full p-12">
      <h1>List of problems</h1>
      <p>Problem</p>
      <Editor
        defaultLanguage="python"
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </div>
  );
}
