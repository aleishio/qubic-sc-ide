import React, { useState } from 'react';

// This is a placeholder: in practice, you'll need to load the WASM compiler script,
// initialize it, and then call its compile function with the source code.
const compileCode = async (sourceCode) => {
  // Assuming a global function `WasmClang.compile` exists:
  try {
    const result = await window.WasmClang.compile(sourceCode);
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

const Compiler = ({ sourceCode }) => {
  const [output, setOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);

  const handleCompile = async () => {
    setIsCompiling(true);
    const result = await compileCode(sourceCode);
    setOutput(result.error ? `Error: ${result.error}` : result.stdout);
    setIsCompiling(false);
  };

  return (
    <div>
      <button onClick={handleCompile} disabled={isCompiling}>
        {isCompiling ? 'Compiling...' : 'Compile Code'}
      </button>
      <pre>{output}</pre>
    </div>
  );
};

export default Compiler;