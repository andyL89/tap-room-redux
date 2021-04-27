import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Gose = styled.div`
  color: rgb(255, 0, 213);
  text-shadow: 1px 1px 2px #000000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 18px;
`
const Pale = styled.div`
  color: rgb(255, 205, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 18px;
`
const Amber = styled.div`
  color: rgb(255, 0, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 18px;
`
const Stout = styled.div`
  color: rgb(144, 96, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 18px;
`
const IPA = styled.div`
  color: rgb(255, 128, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 18px;
`
const Cider = styled.div`
  color: rgb(26, 255, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 18px;
`
const StyledBeer = styled.div`
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
function Beer(props) {
  return (
    <>
    <StyledBeer onClick = {() => props.whenBeerClicked(props.id)}>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      {(props.type === "Gose" || props.type === "Sour") &&
        <Gose>{props.type}</Gose>
      }
      {props.type === "Pale" &&
        <Pale>{props.type}</Pale>
      }
      {props.type === "Amber" &&
        <Amber>{props.type}</Amber>
      }
      {props.type === "Stout" &&
        <Stout>{props.type}</Stout>
      }
      {props.type === "IPA" &&
        <IPA>{props.type}</IPA>
      }
      {props.type === "Cider" &&
        <Cider>{props.type}</Cider>
      }
      <h5>${props.price}/Pint</h5>
      <h5>{props.alcoholContent}% ABV</h5>
      <h5>{props.pints} Pints</h5>
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