import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.div`
  background: rgba(255, 255, 255, .8);
  width: 60%;
  margin: auto;
  border-radius: 5px;
`

function BeerList(props){
  return (
    <>
      <StyledList>
        {Object.values(props.beerList).map((beer) =>
          <Beer
            whenBeerClicked = { props.onBeerSelection }
            name={beer.name}
            brand={beer.brand}
            style={beer.style}
            alcoholContent={beer.alcoholContent}
            price={beer.price}
            pints={beer.pints}
            id={beer.id}
            key={beer.id}/>
        )}
      </StyledList>
    </>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  onBeerSelection: PropTypes.func
};

export default BeerList;