import React, { useState } from 'react';
import Header from '../components/common/Header';
import './Todo.scss';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = () => {};
  const handleChange = () => {};
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
        </form>
      </main>
    </>
  );
};

export default AddTodo;
