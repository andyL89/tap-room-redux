import React from 'react';
import styled from 'styled-components';
import Button from './defaults/Button';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

const StyledButton = styled(Button)`
  cursor: pointer;
  outline: none;
  background: white;
  margin-top: 10px;
  margin-left: 45.5%;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 2px solid black;
  width: 130px;
  font-size: 15px;
  font-weight: 900;
  color: black;
  border-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedBeer: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        selectedBeer: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    const action = a.addBeer(newBeer);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleRestockingBeer = (id) => {
    const { dispatch } = this.props;
    const action = a.restockBeer(id);
    dispatch(action);
  }

  handleBuyingBeer = (id) => {
    const { dispatch } = this.props;
    const action = a.buyBeer(id);
    dispatch(action);
  }

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBeer(id);
    dispatch(action);
    this.setState({selectedBeer: null});
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.props.masterBeerList[id];
    this.setState({ selectedBeer: selectedBeer });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedBeer != null) {
      currentlyVisibleState = <BeerDetail beer = {this.state.selectedBeer}
                              onClickingDelete = {this.handleDeletingBeer}
                              onClickingRestock = {this.handleRestockingBeer}
                              onClickingBuy = { this.handleBuyingBeer } />
                              buttonText = "Return to Beer List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation = {this.handleAddingNewBeerToList} />;
                              buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState =
      <BeerList
        beerList = {this.props.masterBeerList}
        onBeerSelection = {this.handleChangingSelectedBeer}/>;
        buttonText = "Add Beer";
    }
    return (
      <>
        {currentlyVisibleState}
        <StyledButton onClick = {this.handleClick} text = {buttonText}/>
      </>
    );
  }

}

BeerControl.propTypes = {
  masterBeerList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterBeerList: state.masterBeerList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;