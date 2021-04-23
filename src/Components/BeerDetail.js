import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Gose = styled.div`
  color: rgb(255, 0, 213);
  font-weight: 500;
`

const BeerCard = styled.div`
  margin-left: 32%;
  max-width: 500px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid ;
  h1 {
    margin-top: 0px;
  }
`

function BeerDetail(props){
  const { beer, onClickingBuy, onClickingRestock, onClickingDelete } = props;

  return (
    <BeerCard>
      <h1>{beer.name}</h1>
      {beer.type === "Gose" &&
        <Gose>{beer.type}</Gose>
      }
      <h4>{beer.alcoholContent}%</h4>
      <h4>${beer.price}</h4>
      <h4>Pint Count: {beer.pints}</h4>
      {beer.pints > 0 &&
        <button onClick={()=> onClickingBuy(beer.id) }>Pint Sold</button>
      }
      {beer.pints <= 10 && beer.pints !== 0 &&
        <h1>Almost Empty!</h1>
      }
      {beer.pints === 0 &&
        <h1>Restock Keg!</h1>
      }
      {beer.pints === 0 &&
      <button onClick={()=> onClickingRestock(beer.id) }>Restock</button>
      }
      <button onClick={ props.onClickingEdit }>Edit Beer</button>
      <button onClick={()=> onClickingDelete(beer.id)}>Delete Beer</button>
    </BeerCard>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingRestock: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BeerDetail;