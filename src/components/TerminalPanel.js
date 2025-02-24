import React from 'react';

const TerminalPanel = ({ logs }) => {
  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        padding: '10px',
        fontFamily: 'monospace',
        height: '100%',
        overflowY: 'auto'
      }}
    >
      <pre>{logs}</pre>
    </div>
  );
};

export default TerminalPanel;