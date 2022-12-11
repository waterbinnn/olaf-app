import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import TodoItem from '../components/todos/TodoItem';
import './TodoList.scss';

const TodoList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header type="list" link="/todolist">
        TODO LIST
      </Header>
      <main className="main">
        <button
          className="btn-todo"
          type="button"
          onClick={() => navigate('/addTodo')}
        >
          Add Todo
        </button>
        <section className="list-container">
          <h2 className="visually-hidden">todo list</h2>
          <TodoItem />
        </section>
      </main>
    </>
  );
};

export default TodoList;
