import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledBeer = styled.div`
  cursor: pointer;
  
`

function Beer(props) {
  return (
    <>
    <StyledBeer onClick = {() => props.whenBeerClicked(props.id)}>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <h5>{props.type}</h5>
      <h5>${props.price}</h5>
      <h5>{props.alcoholContent}% ABV</h5>
      <p>{props.pints}</p>
      </StyledBeer>
      <hr/>
    </>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Beer;