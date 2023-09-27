import { TodoId, type Todo as Todotype } from '../types';

/* type Props = Todotype; */

interface Props extends Todotype {
  onRemoveTodo: ({ id }: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
}) => {
  return (
    <div className="view">
      <input
        className="toogle"
        type={'checkbox'}
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemoveTodo({ id })} />
    </div>
  );
};
