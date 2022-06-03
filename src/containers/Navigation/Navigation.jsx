import Button from '../../components/Button/Button';
import './Navigation.scss';

const Navigation = ({ workspace, setWorkspace }) => {
  return (
    <div className="Navigation">
      <Button onClick={() => setWorkspace(0)} text={'dashboard'} />
      <Button onClick={() => setWorkspace(1)} text={'full menu'} />
    </div>
  );
};

export default Navigation;
