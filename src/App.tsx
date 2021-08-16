import React from 'react';
import './Global.css'
import Chapter2 from './chapter2';
import 'react-dat-gui/dist/index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Chapter2 />
    </div>
  );
}

export default App;
