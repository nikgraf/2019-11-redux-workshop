import React from "react";
import { connect } from "react-redux";

// TODO use `connect` to connect your component to the redux store, get the state and dispatch. To get the state leverage mapStateToProps

// TODO on click dispatch the increment action (use the action creators created in ../actions)

const Counter = props => {
  return (
    <div>
      <div>42</div>
      <button
        onClick={e => {
          e.preventDefault();
          console.log("Should increment");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
