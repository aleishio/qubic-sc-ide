import React, { useState } from 'react';

// A simulated in-memory list of contracts
const initialContracts = [
  {
    name: 'Contract1.cpp',
    content: `#include <iostream>
    
int main() {
  std::cout << "Hello, Qubic Smart Contract!" << std::endl;
  return 0;
}`
  },
  {
    name: 'Contract2.cpp',
    content: `// Contract2 code goes here`
  }
];

const FileExplorer = ({ onSelectFile, onCreateNew }) => {
  const [contracts, setContracts] = useState(initialContracts);

  const handleSelect = (contract) => {
    onSelectFile(contract);
  };

  const handleCreateNew = () => {
    const fileName = prompt('Enter new contract name (with .cpp extension):');
    if (fileName) {
      const newContract = { name: fileName, content: '// New contract code' };
      setContracts(prev => [...prev, newContract]);
      onCreateNew(newContract);
    }
  };

  return (
    <div style={{ borderRight: '1px solid #ccc', padding: '10px', width: '250px' }}>
      <h3>Contracts</h3>
      <button onClick={handleCreateNew}>New Contract</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contracts.map((contract, index) => (
          <li
            key={index}
            style={{ cursor: 'pointer', padding: '5px 0' }}
            onClick={() => handleSelect(contract)}
          >
            {contract.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;