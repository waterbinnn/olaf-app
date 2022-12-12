import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import { addTodo } from '../redux/todoSlice';
import './Todo.scss';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let date = new Date();
    let id = date.getTime();

    let todoItem = {
      id: id,
      title: title,
      desc: desc,
    };
    dispatch(addTodo(todoItem));
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
      <Header type="todo" link="/addTodo">
        ADD TODO
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

export default AddTodo;
