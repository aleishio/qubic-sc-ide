import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ initialCode, onCodeChange }) => {
  const [code, setCode] = useState(initialCode || '');

  // Update local state whenever the initialCode prop changes
  useEffect(() => {
    setCode(initialCode || '');
  }, [initialCode]);

  const handleEditorChange = (value) => {
    setCode(value);
    if (onCodeChange) onCodeChange(value);
  };

  return (
    <Editor
      height="100%"
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