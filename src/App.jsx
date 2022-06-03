import { useState } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import FullMenu from './containers/FullMenu/FullMenu';
import Navigation from './containers/Navigation/Navigation';
import './App.scss';

const App = () => {
  const [workspace, setWorkspace] = useState(0);

  return (
    <div className="App">
      <Navigation setWorkspace={setWorkspace} workspace={workspace} />
      {workspace === 0 && <Dashboard />}
      {workspace === 1 && <FullMenu />}
    </div>
  );
};

export default App;
