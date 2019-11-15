export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch({ type: "FETCH_TODOS_STARTED" });

    fetch("http://localhost:4000/todos")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "FETCH_TODOS_SUCCESS", todos: res });
      })
      .catch(() => {
        dispatch({ type: "FETCH_TODOS_FAILED" });
      });
  };
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const addTodo = text => {
  return dispatch => {
    const todo = {
      id: `client${uuidv4()}`,
      text,
      completed: false,
      clientSideId: uuidv4()
    };
    dispatch({ type: "CREATE_TODO_STARTED", todo });

    fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "CREATE_TODO_SUCCESS", todo: res });
      })
      .catch(() => {
        dispatch({ type: "CREATE_TODO_FAILED", todo });
      });
  };
};
