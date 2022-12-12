import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editTodo } from '../redux/todoSlice';
import Header from '../components/common/Header';
import { TodoStateType } from '../common/types';

const EditTodo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [id, setId] = useState('');

  const todoList = useSelector((state: TodoStateType) => state.todo.todoList);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryId = location.search.slice(4);

  useEffect(() => {
    setId(queryId);
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id.toString() === queryId) {
        setTitle(todoList[i].title);
        setDesc(todoList[i].desc);
      }
    }
  }, [queryId, todoList]);

  const handleSubmit = () => {
    let todoItem = {
      id: id,
      title: title,
      desc: desc,
    };
    dispatch(editTodo(todoItem));
    navigate('/todolist');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any): void => {
    if (e.target.id === 'todoTitle') {
      setTitle(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  };

  return (
    <>
      <Header type="todo" link="/editTodo">
        EDIT TODO
      </Header>
      <main className="main">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="todoTitle">TITLE</label>
            <input
              id="todoTitle"
              value={title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="todoDesc">DESCRIPTION</label>
            <textarea
              id="todoDesc"
              value={desc}
              onChange={handleChange}
              rows={10}
            />
          </div>
          <button type="submit" className="btn-todo">
            ADD TODO
          </button>
        </form>
      </main>
    </>
  );
};

export default EditTodo;
