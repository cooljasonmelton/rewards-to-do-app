import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import MainToDoList from '../../components/MainToDoList/MainToDoList';
import ProjectGroupContainer from '../../components/ProjectGroupContainer/ProjectGroupContainer';
import RewardsContainer from '../../components/RewardsContainer/RewardsContainer';
import sampleData from '../../sampleData';
import './Dashboard.scss';

const Dashboard = () => {
  const [initDashboard, setInitDashboard] = useState(false);
  const [todoData, setTodoData] = useState([]);

  // GET TODOS FROM LOCALSTORAGE
  useEffect(() => {
    if (!initDashboard) {
      localStorage.setItem('todoData', JSON.stringify(sampleData)); // sample data

      const todoDataFromLS = localStorage.getItem('todoData');
      if (!todoDataFromLS) {
        localStorage.setItem('todoData', JSON.stringify([]));
      } else {
        setTodoData(JSON.parse(todoDataFromLS));
      }
      setInitDashboard(true);
    }
  }, []);

  console.log(todoData);

  return (
    <>
      <div className="Dashboard">
        <RewardsContainer />
        <MainToDoList />
        <ProjectGroupContainer />
      </div>
      <Card>list of to dos</Card>
    </>
  );
};

export default Dashboard;
