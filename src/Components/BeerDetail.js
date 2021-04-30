import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Gose = styled.div`
  color: rgb(255, 0, 213);
  text-shadow: 1px 1px 2px #000000;
  font-size: 25px;
  font-weight: 700;
`
const Pale = styled.div`
  color: rgb(255, 205, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 25px;
  font-weight: 700;
`
const Amber = styled.div`
  color: rgb(255, 0, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 25px;
  font-weight: 700;
`
const Stout = styled.div`
  color: rgb(144, 96, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 25px;
  font-weight: 700;
`
const IPA = styled.div`
  color: rgb(255, 128, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 25px;
  font-weight: 700;
`
const Cider = styled.div`
  color: rgb(26, 255, 0);
  text-shadow: 1px 1px 2px #000000;
  font-size: 25px;
  font-weight: 700;
`
const BeerCard = styled.div`
  margin: auto;
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
  button {
    cursor: pointer;
    outline: none;
    background: white;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 2px solid black;
    width: 100px;
    font-size: 15px;
    font-weight: 900;
    color: black;
    border-radius: 5px;
  }
`

function BeerDetail(props){
  const { beer, onClickingBuy, onClickingRestock, onClickingDelete } = props;

  return (
    <BeerCard>
      <h1>{beer.name}</h1>
      {(beer.style === "Gose" || beer.style === "Sour") &&
        <Gose>{beer.style}</Gose>
      }
      {beer.style === "Pale" &&
        <Pale>{beer.style}</Pale>
      }
      {beer.style === "Amber" &&
        <Amber>{beer.style}</Amber>
      }
      {beer.style === "Stout" &&
        <Stout>{beer.style}</Stout>
      }
      {beer.style === "IPA" &&
        <IPA>{beer.style}</IPA>
      }
      {beer.style === "Cider" &&
        <Cider>{beer.style}</Cider>
      }
      <h4>{beer.alcoholContent}% ABV</h4>
      <h4>${beer.price}/Pint</h4>
      <h4>Pint Count: {beer.pints}</h4>
      {beer.pints <= 10 && beer.pints !== 0 &&
        <h1>Almost Empty!</h1>
      }
      {beer.pints > 0 &&
        <button onClick={()=> onClickingBuy(beer.id) }>Pint Sold</button>
      }
      {beer.pints === 0 &&
        <h1>Restock Keg!</h1>
      }
      {beer.pints === 0 &&
      <button onClick={()=> onClickingRestock(beer.id) }>Restock</button>
      }
      <button onClick={ props.onClickingEdit }>Edit</button>
      <button onClick={()=> onClickingDelete(beer.id)}>Delete</button>
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