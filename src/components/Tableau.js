import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tableau = () => {
  // Tableau de données pour les éléments à afficher
  const data = [
    { id: '1', title: 'Tâche 1' },
    { id: '2', title: 'Tâche 2' },
    { id: '3', title: 'Tâche 3' },
    { id: '4', title: 'Tâche 4' },
  ];

  // Fonction pour afficher chaque élément draggable
  const Item = ({ item, index }) => (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          className="item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {item.title}
        </div>
      )}
    </Draggable>
  );

  // Fonction pour afficher la liste des éléments draggable
  const List = ({ data }) => (
    <Droppable droppableId="list">
      {(provided) => (
        <div
          className="list"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {data.map((item, index) => (
            <Item key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  // Fonction pour gérer les événements de drag and drop
  const onDragEnd = (result) => {
    // TODO: Implémenter la logique pour le drag and drop
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <List data={data} />
    </DragDropContext>
  );
};

export default Tableau;