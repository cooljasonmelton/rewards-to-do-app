import './MainToDoItem.scss';

const MainToDoItem = ({ text }) => {
  return (
    <li className="MainToDoItem">
      <button className="MainToDoItemButton">
        <span>{text}</span>
        {/* ? text : on click, change to edit input */}
      </button>
      {/* ITEM CONTROLS:  DONE, DELETE, REMOVE MAIN, GROUP */}
    </li>
  );
};

export default MainToDoItem;
