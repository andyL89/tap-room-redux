import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props){
  const { beer, onClickingBuy, onClickingRestock, onClickingDelete } = props;

  return (
    <>
      <h1>Beer Detail</h1>
      <h3>{beer.name}</h3>
      <p>${beer.price}</p>
      <p>{beer.alcoholContent}%</p>
      <p>Pint Count: {beer.pints}</p>
      {beer.pints > 0 &&
        <button onClick={()=> onClickingBuy(beer.id) }>Pint Sold</button>
      }
      {beer.pints <= 10 && beer.pints !== 0 &&
        <h1>Almost Empty!</h1>
      }
      {beer.pints === 0 &&
        <h1>RESTOCK KEG!</h1>
      }
      {beer.pints === 0 &&
      <button onClick={()=> onClickingRestock(beer.id) }>Restock</button>
      }
      <button onClick={ props.onClickingEdit }>Edit Beer</button>
      <button onClick={()=> onClickingDelete(beer.id)}>Delete Beer</button>
    </>
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