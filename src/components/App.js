import React from 'react';
import Sidebar from './Sidebar';
import MediumClap from './patterns/medium_clap/MediumClap';
import MediumClapWithHooks from './patterns/medium_clap_hooks/MediumClap';
import MediumClapCompound from './patterns/compound_components/MediumClap';
import MediumClapControlProps from './patterns/control_props/MediumClap';
import MediumClapCustomHooks from './patterns/custom_hooks_pattern/MediumClap';

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
    },
    {
      id: 'custom_hooks',
      title: 'Custom Hooks',
      component: MediumClapCustomHooks
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
