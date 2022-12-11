import { createSlice } from '@reduxjs/toolkit';

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
    checkBox: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');

      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo: any) => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    //
  },
});

export const { addTodo, checkBox } = todoSlice.actions;
export default todoSlice.reducer;
