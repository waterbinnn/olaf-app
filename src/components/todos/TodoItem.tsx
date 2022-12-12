import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkBox, deleteTodo } from '../../redux/todoSlice';
import { TodoPropsType } from '../../common/types';
import './TodoItem.scss';

const TodoItem = (props: TodoPropsType) => {
  const { todo } = props;
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo.completed) {
      setIsChecked(true);
    }
  }, [todo.completed]);

  const handleToEdit = () => {
    navigate(`/editTodo?id=${todo.id}`);
  };

  const handleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsChecked(!isChecked);
    dispatch(checkBox({ id: todo.id, completed: !isChecked }));
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <div className="list-item" onClick={handleToEdit} key={todo.id}>
      <div className="item-top-wrapper">
        <button
          className={isChecked ? 'check-box active' : 'check-box'}
          type="button"
          onClick={handleCheck}
        ></button>

        <strong className={isChecked ? 'item-title active' : 'item-title'}>
          {todo.title}
        </strong>

        <button className="btn-delete" type="button" onClick={handleDelete}>
          ✕
        </button>
      </div>

      <div className="item-bottom-wrapper">
        <p className="item-desc">{todo.desc}</p>
      </div>
    </div>
  );
};

export default TodoItem;
