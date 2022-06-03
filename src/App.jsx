import { useState } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import FullMenu from './containers/FullMenu/FullMenu';
import Navigation from './containers/Navigation/Navigation';
import './App.scss';

const App = () => {
  const [workSpace, setWorkSpace] = useState(0);

  return (
    <div className="App">
      <Navigation />
      {workSpace === 0 && <Dashboard />}
      {workSpace === 1 && <FullMenu />}
    </div>
  );
};

export default App;
