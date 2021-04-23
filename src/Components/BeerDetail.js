import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props){
  const { beer, onClickingBuy, onClickingRestock, onClickingDelete } = props;

  return (
    <>
      <h1>{beer.name}</h1>
      <h4>{beer.type}</h4>
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