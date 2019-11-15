const todos = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TODO_SUCCESS":
      return [
        ...state,
        {
          id: action.todo.id,
          text: action.todo.text,
          completed: action.todo.completed
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "FETCH_TODOS_SUCCESS":
      return action.todos;
    default:
      return state;
  }
};

export default todos;
