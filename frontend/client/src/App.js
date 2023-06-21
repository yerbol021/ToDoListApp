import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const onDeleteItem = (id) => {
    fetch(`/todos/${id}/delete`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } else {
          throw new Error('Error deleting item');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const todoItemComponentsArr = items.map((item) => (
    <TodoItem key={item.id} task={item.task} onDelete={() => onDeleteItem(item.id)} />
  ));

  return (
    <div className="App">
      <ul>{todoItemComponentsArr}</ul>
    </div>
  );
}

export default App;
