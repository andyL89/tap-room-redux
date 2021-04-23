import React from "react";
import PropTypes from "prop-types";


function Beer(props) {
  return (
    <>
    <div onClick = {() => props.whenBeerClicked(props.id)}>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <h5>{props.price}</h5>
      <p>{props.alcoholContent}</p>
      <p>Pints Left: {props.pints}</p>
      </div>
      <hr/>
    </>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Beer;