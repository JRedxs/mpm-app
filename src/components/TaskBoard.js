import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Task from './Task';

//import monImage from '../img/monImage2.png';


const TaskBoard = ({ tasks }) => {
  const findPrevTaskNames = (prevTaskIds) => {
    return prevTaskIds.map((id) => tasks.find((task) => task.id === id).name);
  };

  return (

    <DndProvider backend={HTML5Backend}>

      <div className="task-board">
        <div >
          
          {tasks.map((task) => (

            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              duration={task.duration}
              prevTasks={findPrevTaskNames(task.prevTasks)}
            />
          ))}
        </div>
      </div>

    </DndProvider>

  );
};

export default TaskBoard;
