export interface WishStateType {
  wish: {
    wishList: [];
  };
}

export type WishListType = {
  wish: {
    id: number;
    wish: string;
  };
};

export type WishItemType = {
  data: { id: number; wish: string };
};

export type TodoStateType = {
  todo: {
    todoList: any[];
  };
};

export type TodoPropsType = {
  todo: {
    id: number;
    title: string;
    desc: string;
    completed: boolean;
  };
};

export type TodoItemType = {
  id: number;
  title: string;
  desc: string;
  completed: boolean;
};
