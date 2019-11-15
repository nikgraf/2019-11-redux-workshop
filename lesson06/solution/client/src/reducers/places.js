const places = (state = [], action) => {
  switch (action.type) {
    case "CREATE_PLACE_SUCCESS":
      return [...state, action.place];
    case "FETCH_PLACES_SUCCESS":
      return [...action.places];
    default:
      return state;
  }
};

export default places;
