import './Navigation.scss';

const Navigation = ({ workspace, setWorkspace }) => {
  return (
    <div className="Navigation">
      <button onClick={() => setWorkspace(0)}>dashboard</button>
      <button onClick={() => setWorkspace(1)}>full menu</button>
    </div>
  );
};

export default Navigation;
