import React from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ id, name, duration, prevTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="task"
    >
      {name} ({duration} jours)
      <div>Tâches précédentes : {prevTasks.join(', ')}</div>
    </div>
  );
};

export default Task;