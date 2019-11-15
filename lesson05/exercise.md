1. Install and add the redux-thunk middleware to your application and
   fetch the places from the server using redux-thunk.

_Hint_

- `yarn add redux-thunk`
- Remove importing data from the places reducer and start with an empty list.
- Create a thunk action creator function `fetchPlaces` fetching the places. On success update trigger a success action. The reducer then can update the state.

3. When adding a place submit the place to the server using redux-thunk.
