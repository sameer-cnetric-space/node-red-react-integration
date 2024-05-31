import React from 'react';

const NodeRedEditor = () => {
  return (
    <iframe 
      src="http://127.0.0.1:1880/" 
      title="Node-RED Editor" 
      width="100%" 
      height="600px"
      style={{ border: 'none' }}
    ></iframe>
  );
};

export default NodeRedEditor;
