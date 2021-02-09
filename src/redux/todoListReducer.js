const todoListState = {
  todoList: ["Sample item"],
};

export default function todoListReducer(state = todoListState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { todoList: [...state.todoList, action.payload] };
    case "DELETE_ITEM":
      return {
        todoList: state.todoList.filter((item) => item != action.payload),
      };
    default:
      return state;
  }
}
