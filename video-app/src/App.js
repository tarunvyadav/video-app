import React from 'react'
import './App.css';
import data from './data';

import Videos from './Videos';

 

function App() {
  return (
    <div className="app">
     <Videos data={data}/>
    </div>
  );
}

export default App;
