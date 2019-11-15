import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";

function Place(props) {
  const { id } = useParams();
  const place = props.places.find(place => place.id === id);
  if (place) {
    return (
      <div>
        <Link to="/">Home</Link>
        <div>Place: {place.name}</div>
      </div>
    );
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <div>404 - Place not found</div>
    </div>
  );
}

const mapStateToProps = state => ({
  places: state.places
});

export default connect(mapStateToProps)(Place);
