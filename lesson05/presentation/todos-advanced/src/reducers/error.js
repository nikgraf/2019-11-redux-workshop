const error = (state = null, action) => {
  switch (action.type) {
    case "CREATE_TODO_FAILED":
      return "Failed to create the todo";
    case "FETCH_TODOS_FAILED":
      return "Failed to fetch the todos";
    case "CREATE_TODO_SUCCESS":
      return null;
    default:
      return state;
  }
};

export default error;
