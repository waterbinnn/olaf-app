import { createSlice } from '@reduxjs/toolkit';
import { TodoItemType } from '../common/types';

const getInitialTodo = () => {
  const todoList = window.localStorage.getItem('todoList');

  if (todoList) {
    return JSON.parse(todoList);
  }
  window.localStorage.setItem('todoList', '');
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    //작성
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        let todoListArr = JSON.parse(todoList);
        todoListArr.push({ ...action.payload });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    //체크박스
    checkBox: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');

      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo: TodoItemType) => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    //수정
    editTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo: TodoItemType) => {
          if (JSON.stringify(todo.id) === action.payload.id) {
            todo.title = action.payload.title;
            todo.desc = action.payload.desc;
            todo.completed = action.payload.completed;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    //삭제
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo: TodoItemType, index: number) => {
          if (todo.id === action.payload.id) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
  },
});

export const { addTodo, checkBox, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
