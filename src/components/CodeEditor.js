import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ initialCode, onCodeChange }) => {
  const [code, setCode] = useState(initialCode || '');

  const handleEditorChange = (value) => {
    setCode(value);
    if (onCodeChange) onCodeChange(value);
  };

  return (
    <Editor
      height="70vh"
      defaultLanguage="cpp"
      value={code}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
      }}
    />
  );
};

export default CodeEditor;