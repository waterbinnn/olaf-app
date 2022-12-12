import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import TodoItem from '../components/todos/TodoItem';
import { TodoStateType, TodoItemType } from '../common/types';
import './TodoList.scss';

const TodoList = () => {
  const todoList = useSelector((state: TodoStateType) => state.todo.todoList);
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
          {todoList.map((todo: TodoItemType, key: number) => (
            <TodoItem todo={todo} key={key} />
          ))}
        </section>
      </main>
    </>
  );
};

export default TodoList;
