import Card from '../Card/Card';
import MainToDoItem from './MainToDoItem';
import './MainToDoList.scss';

const MainToDoList = () => {
  const emptyList = new Array(5).fill(0);

  return (
    <Card className="MainToDoList">
      <h2 className="mainListHeading">Main List</h2>
      <ul className="mainUnorderedList">
        {emptyList.map((item, index) => {
          return (
            <MainToDoItem
              key={`${index}-main-item`}
              text={`${index} main to do`}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default MainToDoList;
