import React from 'react';
import Sidebar from './Sidebar';
import MediumClap from './patterns/medium_clap/MediumClap';
import MediumClapWithHooks from './patterns/medium_clap_hooks/MediumClap';
import MediumClapCompound from './patterns/compound_components/MediumClap';
import MediumClapControlProps from './patterns/control_props/MediumClap';

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
    },
    {
      id: 'compound_components',
      title: 'Compound Components',
      component: MediumClapCompound
    },
    {
      id: 'control_props',
      title: 'Control Props',
      component: MediumClapControlProps
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
