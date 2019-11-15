const todos = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TODO_SUCCESS":
      const filteredState = state.filter(
        todo => todo.clientSideId !== action.todo.clientSideId
      );
      return [
        ...filteredState,
        {
          id: action.todo.id,
          text: action.todo.text,
          completed: action.todo.completed
        }
      ];
    case "CREATE_TODO_FAILED":
      const failedFilteredState = state.filter(
        todo => todo.clientSideId !== action.todo.clientSideId
      );
      return [...failedFilteredState];
    case "CREATE_TODO_STARTED":
      return [...state, action.todo];
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
