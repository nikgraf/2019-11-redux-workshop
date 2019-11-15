export const increment = value => ({
  type: "INCREMENT",
  value
});

export const decrement = () => ({
  type: "DECREMENT"
});

export const reset = () => ({
  type: "RESET"
});
