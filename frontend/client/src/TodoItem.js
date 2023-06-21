import React from 'react';

const TodoItem = ({ task, onDelete }) => {
  return (
    <li>
      {task} <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
