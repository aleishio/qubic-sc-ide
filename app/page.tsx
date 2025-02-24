"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import * as monacoEditor from "monaco-editor"; // used for typing, if needed

// Dynamically import Monaco Editor to disable SSR
const MonacoEditor = dynamic(() => import("react-monaco-editor"), { ssr: false });

// Define a type for our function snippets
type FunctionSnippet = {
  label: string;
  snippet: string;
};

// List of reusable contract functions (only those that make sense for new contracts)
const REUSABLE_FUNCTIONS: FunctionSnippet[] = [
  {
    label: "GPI: SomeFunction", // Replace with an actual function name from GPI if available
    snippet: `// Example call to a GPI function
GPI_output out = GPI::SomeFunction(/* parameters */);`
  },
  {
    label: "QX: IssueAsset", // This is the one you mentioned that makes sense
    snippet: `// Prepare to issue an asset via QX
QX::IssueAsset_input issueIn;
issueIn.assetName = /* asset id */;
issueIn.numberOfShares = /* desired shares */;
issueIn.unitOfMeasurement = /* unit, e.g., 1 */;
issueIn.numberOfDecimalPlaces = /* decimals, e.g., 2 */;

QX::IssueAsset_output issueOut;
CALL_CONTRACT(QX_CONTRACT_ID, IssueAsset, issueIn, issueOut);

// Check if the asset was issued successfully
if (issueOut.issuedNumberOfShares > 0) {
    qpi.log("Asset issued successfully. Shares issued:", issueOut.issuedNumberOfShares);
} else {
    qpi.log("Asset issuance failed. Check fees/invocation reward.");
}`
  },
  // Add more snippets as needed that are relevant to new smart contracts...
];

export default function ContractEditorPage() {
  // State to store the code from the editor
  const [code, setCode] = useState("// Write your smart contract code here in C++\n");
  // A ref to store the Monaco editor instance
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(null);

  // Callback when the editor is mounted
  const handleEditorDidMount = (editorInstance: monacoEditor.editor.IStandaloneCodeEditor) => {
    editorRef.current = editorInstance;
  };

  // Function to insert a snippet at the current cursor position
  const insertSnippet = (snippet: string) => {
    if (editorRef.current) {
      const selection = editorRef.current.getSelection();
      // If no selection is found, default to beginning of document
      const range = selection || new monacoEditor.Range(1, 1, 1, 1);
      editorRef.current.executeEdits("", [
        {
          range,
          text: "\n" + snippet + "\n",
          forceMoveMarkers: true,
        },
      ]);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Contract Editor</h1>
      <div style={{ border: "1px solid #ccc", height: "60vh" }}>
        <MonacoEditor
          language="cpp"
          theme="vs-dark"
          value={code}
          editorDidMount={handleEditorDidMount}
          onChange={(newValue) => setCode(newValue)}
          options={{
            automaticLayout: true,
            minimap: { enabled: false },
          }}
        />
      </div>

      <h2 style={{ marginTop: "1.5rem" }}>Reusable Contract Functions</h2>
      <p>
        Click any function below to insert its code snippet into your contract.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {REUSABLE_FUNCTIONS.map((fn) => (
          <button
            key={fn.label}
            onClick={() => insertSnippet(fn.snippet)}
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            {fn.label}
          </button>
        ))}
      </div>
    </div>
  );
}