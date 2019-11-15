1. Take the existing places app (boilerplate folder) we previously built and add Redux to it. The places should be stored in the Redux store (instead of useState in App).

_Hint_:

- install redux & redux-react
- Setup the Store
- Add the provider
- Create an reducer for places with data.places as initial state
- use connect to extract the places directly in the Places component

(Passing down places to the Places component as props is not necessary anymore)

2. Implement adding a place.

_Hint_:

- create an action creator `addPlace` to build the action `ADD_PLACE`
- implement the action `ADD_PLACE` in the places reducer
- use `connect` to add the `addPlace` inside AddForm and trigger it on submit

(Now adding a place should be possible again)
