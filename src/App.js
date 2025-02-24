import React, { useState } from 'react';
import FileExplorer from './components/FileExplorer';
import CodeEditor from './components/CodeEditor';
import TerminalPanel from './components/TerminalPanel';

function App() {
  const [currentContract, setCurrentContract] = useState(null);
  const [logs, setLogs] = useState('');

  // Simulated compile function (replace with real API call later)
  const handleCompile = () => {
    // Example logs:
    setLogs('Compiling...\nCompilation successful!\n');
  };

  const handleSelectFile = (contract) => {
    setCurrentContract(contract);
  };

  const handleCreateNew = (newContract) => {
    setCurrentContract(newContract);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top bar */}
      <div
        style={{
          backgroundColor: '#f0f0f0',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h1 style={{ margin: 0 }}>Qubic Smart Contract IDE</h1>
        {currentContract && (
          <button onClick={handleCompile}>Compile Code</button>
        )}
      </div>

      {/* Main content: File Explorer + Editor */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <FileExplorer onSelectFile={handleSelectFile} onCreateNew={handleCreateNew} />
        <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column' }}>
          {currentContract ? (
            <>
              <h2 style={{ marginTop: 0 }}>{currentContract.name}</h2>
              {/* The editor takes up remaining vertical space */}
              <div style={{ flex: 1, border: '1px solid #ccc' }}>
                <CodeEditor
                  initialCode={currentContract.content}
                  onCodeChange={(newCode) =>
                    setCurrentContract({ ...currentContract, content: newCode })
                  }
                />
              </div>
            </>
          ) : (
            <p>Select a contract or create a new one.</p>
          )}
        </div>
      </div>

      {/* Bottom terminal/logs area */}
      <div style={{ height: '150px' }}>
        <TerminalPanel logs={logs} />
      </div>
    </div>
  );
}

export default App;