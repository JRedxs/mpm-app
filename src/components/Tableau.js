import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  padding: 8px;
  margin-bottom: 8px;
`;

const data = [
  { id: '1', title: 'Tâche 1' },
  { id: '2', title: 'Tâche 2' },
  { id: '3', title: 'Tâche 3' },
  { id: '4', title: 'Tâche 4' },
];

const Tableau = () => {
  const [cards, setCards] = useState(data);

  const handleDrop = (sourceIndex, destinationIndex) => {
    const newCards = [...cards];
    const [removed] = newCards.splice(sourceIndex, 1);
    newCards.splice(destinationIndex, 0, removed);
    setCards(newCards);
  };

  const DraggableItem = ({ id, title, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'item',
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const [, drop] = useDrop({
      accept: 'item',
      hover: (item, monitor) => {
        if (item.index !== index) {
          const dragIndex = item.index;
          const hoverIndex = index;
  
          handleDrop(dragIndex, hoverIndex);
  
          item.index = hoverIndex;
        }
      },
    });
  
    return (
      <div ref={(node) => drag(drop(node))}>
        <Item style={{ opacity: isDragging ? 0.5 : 1 }}>
          {title}
        </Item>
      </div>
    );
  };
  

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        {cards.map((card, index) => (
          <DraggableItem
            key={card.id}
            id={card.id}
            title={card.title}
            index={index}
          />
        ))}
      </Container>
    </DndProvider>
  );
};

export default Tableau;
