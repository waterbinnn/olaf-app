# Olaf App

## Description

나만의 Todo, Wish를 작성할 수 있고,
오늘의 Date, 뉴욕 타임즈의 실시간 인기 News 를 볼 수 있는 웹앱 서비스입니다.

## stack

Typescript, React.js, Sass, Redux-toolkit

## 구현기능

Main Tab

- 오늘의 날짜와 요일을 볼 수 있습니다.
- 오늘의 소원을 작성 할 수 있으며 Session storage에 저장하도록 해주었습니다.
- 하루에 하나만 작성 할 수 있습니다. 하나 이상을 작성할 경우 alert가 뜹니다.
- 삭제 버튼 클릭시 삭제됩니다.
- Redux toolkit을 사용하여 구현하였습니다.

News Tab

- 뉴욕타임즈 실시간 핫뉴스 리스트 입니다.
  (New York Times API 사용)
- 받은 데이터는 axios를 사용하여 화면에 그려주었습니다.
- 이미지가 없는 경우 빈 이미지를 담도록 예외처리 해주었습니다.
- 클릭시 뉴욕타임즈 해당 기사로 이동합니다.

Todo Tab

- TodoList 에는 localStorage에 저장된 Todo가 나타납니다.
- checkbox로 todo complete 여부 확인 가능, 새로고침해도 남아있도록 localStorage에 체크상태를 저장하고 업데이트 하도록 하였습니다.
- Add Todo 버튼을 클릭해 Todo를 작성합니다.
- title, description을 작성할 수 있습니다.
- TodoList에서 Todo를 클릭하면 수정이 가능합니다.
- 수정된 내용에 따라 리스트에 새로 업데이트 됩니다.
- Todo를 삭제할 수 있습니다. 삭제 시 로컬스토리지에서도 삭제되어 투두 리스트에 더이상 보이지 않습니다.
- Redux toolkit을 사용하여 구현하였습니다.

## 구현UI

|                                                               HOME                                                               |                                                               NEWS                                                               |                                                               TODO                                                               |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img width="350px;" src="https://user-images.githubusercontent.com/96714788/206971384-9503159b-9396-4a76-9ade-56a94a47aea4.gif"> | <img width="350px;" src="https://user-images.githubusercontent.com/96714788/206971737-ad009afd-f6fe-4aed-8033-6639e684e4a9.gif"> | <img width="350px;" src="https://user-images.githubusercontent.com/96714788/206971412-ae019eb7-dffa-42f7-9a40-10f8f50dab71.gif"> |

## Trouble shooting

## trouble shooting

- EditTodo에 AddTodo 의 데이터를 불러오는 것에 대한 고민이 있었습니다. main 페이지에서 todo item을 클릭했을 때 id와 데이터를 불러와야하는데, local storage에서 데이터를 불러와 넣어주려 해도 id를 불러와야 했기 때문에 아예 AddTodo 와 EditTodo 의 라우트를 따로 분리할지 하나로 통합해서 삼항연산자로 보여줄 지 고민하였습니다.
  삼항연산자를 쓰면 비효율적이고 코드가 복잡하고 가독성이 떨어질 것 같아 라우트를 분리하였습니다.
  useParams 를 통해 id를 파라미터를 통해 가져오려 시도하였으나 parameter 보다는 querystring 으로 url을 관리하는게 맞다는 생각이 들었습니다. 그래서 `window.location.search` 를 사용해 id만 저장하였습니다. 그리고 useSelector 로 todoList 를 불러와 queryId 와 같은 index를 찾아 해당 index의 데이터를 불러오도록 해주었습니다.

```tsx
//EditTodo.tsx

const queryId = window.location.search.slice(4);

const todoList = useSelector((state) => state.todo.todoList);

// useEffect
setSelectId(queryId);

for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].id.toString() === selectId) {
    setEditTitle(todoList[i].title);
    setEditDesc(todoList[i].desc);
  }
}
```

- 수정 후 메인 화면으로 돌아가면 이전에 추가 한 todo가 있을 경우 데이터가 동일해지는 현상이 일어났습니다. 작성했던 todoSlice 를 보니 id일치 여부를 확인해주지 않았습니다.
  클릭한 todo item card의 id를 받아 일치하는 요소의 데이터를 업데이트 해주도록 함으로써 해결하였습니다.

```tsx
//todoSlice.tsx
 updateTodo: (state, action) => {
     const todoList = window.localStorage.getItem('todoList');
     if (todoList) {
       const todoListArr = JSON.parse(todoList);
       todoListArr.forEach((todo: TodoType) => {
         if (todo.id == action.payload.id) { // id 가 일치하는 요소를 업데이트 하도록 작성함으로써 문제 해결
           todo.title = action.payload.title;
           todo.desc = action.payload.desc;
           todo.completed = action.payload.completed;
         }
       });
       window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
       state.todoList = [...todoListArr];
     }
   },

```

- 체크박스가 AddTodo나 EditTodo 에 있는 것이 아닌, List의 TodoItem에 위치하기 때문에 구현에 고민이 있었습니다.
  updateTodo 리듀서를 사용하여 구현하려 하였으나 그렇게 했을 경우, 모든 todoList 가 동기화가 되어버리는 현상이 일어났습니다.

  선택한 todo의 id의 completed 의 상태만 업데이트 하고, localStorage에도 상태를 저장하여 새로고침했을 때에도 체크상태가 반영되게끔 updateComplete 리듀서를 생성하여 문제를 해결하였습니다.

```tsx
updateComplete: (state, action) => {
  const todoList = window.localStorage.getItem('todoList');
  if (todoList) {
    const todoListArr = JSON.parse(todoList);
    // updateTodo 와 마찬가지로 id가 일치하는지 여부를 확인하고 todo.completed의 상태를 업데이트 해줬습니다.
    todoListArr.forEach((todo: TodoType) => {
      if (todo.id === action.payload.id) {
        todo.completed = action.payload.completed;
      }
    });
    window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
    state.todoList = [...todoListArr];
  }
},
  //CheckBox.tsx
  // 페이지 로드시 체크박스상태 유지는 useEffect를 통해 todo.completed 를 불러와 구현하였습니다.
  useEffect(() => {
    if (todo.completed === false) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, [todo.completed]);
```
