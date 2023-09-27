import { useState } from 'react';
import { Todos } from './components/Todos';
import { TodoId } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Ver el twich de midu',
    completed: false,
  },
  {
    id: '2',
    title: 'Aprender react en TS',
    completed: false,
  },
  {
    id: '3',
    title: 'Sacar ticket de midufest',
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
