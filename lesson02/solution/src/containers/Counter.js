import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions";

const Counter = props => {
  const { dispatch, counter } = props;
  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch(increment(1));
        }}
      >
        +
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch(increment(10));
        }}
      >
        +10
      </button>
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state
  };
};

// We are injecting props here!
export default connect(mapStateToProps)(Counter);
