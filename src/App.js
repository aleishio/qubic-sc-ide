import React, { useState, useEffect } from 'react';
import CodeEditor from './components/CodeEditor';
import Compiler from './components/Compiler';

function App() {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Fetch initial contract from public folder
    fetch('/contracts/Contract1.cpp')
      .then((res) => res.text())
      .then(setCode)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Qubic Smart Contract IDE</h1>
      <div style={{ marginBottom: '20px' }}>
        <CodeEditor initialCode={code} onCodeChange={(newCode) => setCode(newCode)} />
      </div>
      <div>
        <Compiler sourceCode={code} />
      </div>
    </div>
  );
}

export default App;