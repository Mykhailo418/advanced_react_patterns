import React from 'react';
import Sidebar from './Sidebar';

const App = () => {
  const patterns = [
    {
      id: 'clap',
      title: 'Medium Clap',
    },
    {
      id: 'clap2',
      title: 'Medium Clap2',
    }
  ];

  return (
    <div className="container">
      <Sidebar patterns={patterns} />
    </div>
  );


}

export default App;
