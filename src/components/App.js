import React from 'react';
import Sidebar from './Sidebar';
import MediumClap from './patterns/medium_clap/MediumClap'
import MediumClapWithHooks from './patterns/medium_clap_hooks/MediumClap'

const App = () => {
  const patterns = [
    {
      id: 'clap',
      title: 'Medium Clap',
      component: MediumClap
    },
    {
      id: 'clap_with_hooks',
      title: 'Medium Clap With Hooks',
      component: MediumClapWithHooks
    }
  ];

  return (
    <div className="container">
      <h1>Advanced React Patterns</h1>
      <Sidebar patterns={patterns} />
    </div>
  );


}

export default App;
