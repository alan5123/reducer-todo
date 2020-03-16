import React from 'react';

const Item = props => {
  return (
    <div
      onClick={() => props.toggleDone(props.item.id)}
      className={`item${props.item.done? ' done' : ''}`}
      
    >
      <p>{props.item.item}</p>
      <p>{props.item.completed ? 'Completed': 'incomplete'}</p>
      
    </div>
  );
};

export default Item;