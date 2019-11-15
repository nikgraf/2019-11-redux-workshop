import data from "../data";

const places = (state = data.places, action) => {
  switch (action.type) {
    case "ADD_PLACE":
      return [...state, action.place];
    default:
      return state;
  }
};

export default places;
