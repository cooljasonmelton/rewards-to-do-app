import Card from '../../components/Card/Card';
import MainToDoList from '../../components/MainToDoList/MainToDoList';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <>
      <div className="Dashboard">
        <MainToDoList />
        <Card>Rewards</Card>
      </div>
      <Card>list of to dos</Card>
    </>
  );
};

export default Dashboard;
