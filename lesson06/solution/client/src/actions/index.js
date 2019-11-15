export const addPlace = place => {
  return dispatch => {
    dispatch({ type: "CREATE_PLACE_STARTED" });

    fetch("http://localhost:4000/places", {
      method: "POST",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "CREATE_PLACE_SUCCESS", place: res });
      })
      .catch(() => {
        dispatch({ type: "CREATE_PLACE_FAILED" });
      });
  };
};

export const fetchPlaces = () => {
  return dispatch => {
    dispatch({ type: "FETCH_PLACES_STARTED" });

    fetch("http://localhost:4000/places")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "FETCH_PLACES_SUCCESS", places: res });
      })
      .catch(() => {
        dispatch({ type: "FETCH_PLACES_FAILED" });
      });
  };
};
