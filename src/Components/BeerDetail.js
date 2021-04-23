import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Gose = styled.div`
  color: rgb(255, 0, 213);
  font-size: 20px;
  font-weight: 700;
`

const BeerCard = styled.div`
  margin-left: 31.2%;
  max-width: 500px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border: solid rgb(200,200,200);
  border-radius: 30%;
  background: rgb(240,240,240);
  background: linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(195,195,195,1) 7%, rgba(150,150,150,1) 15%, rgba(196,196,196,1) 23%, rgba(240,240,240,1) 32%, rgba(195,195,195,1) 41%, rgba(150,150,150,1) 50%, rgba(196,196,196,1) 59%, rgba(240,240,240,1) 68%, rgba(195,195,195,1) 77%, rgba(150,150,150,1) 86%, rgba(150,150,150,1) 93%, rgba(240,240,240,1) 100%);
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