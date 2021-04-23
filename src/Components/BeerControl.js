import React from 'react';
import styled from 'styled-components';
import Button from './defaults/Button';
import NewBeerForm from './NewBeerForm';
import BeerDetail from './BeerDetail';
import BeerList from './BeerList';
import EditBeerForm from './EditBeerForm'

const StyledButton = styled(Button)`
  cursor: pointer;
  outline: none;
  background: white;
  margin-top: 10px;
  margin-left: 20px;
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
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      selectedBeer: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== this.state.selectedBeer.id).concat(beerToEdit);
    this.setState({
        masterBeerList: editedMasterBeerList,
        editing: false,
        selectedBeer: null
      });
  }

  handleRestockingBeer = (id) => {
    const chosenBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    if (chosenBeer) {
      const newQuantity = (parseInt(chosenBeer.pints) + 124);
      chosenBeer.pints = newQuantity
      this.setState({selectedBeer: chosenBeer})
    }
  }

  handleBuyingBeer = (id) => {
    const chosenBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    if (chosenBeer) {
      const newQuantity = (parseInt(chosenBeer.pints) - 1);
      chosenBeer.pints = newQuantity
      this.setState({selectedBeer: chosenBeer})
    }
  }

  handleAddingNewBeerToList = (newBeer) => {
    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({masterBeerList: newMasterBeerList,
                  formVisibleOnPage: false});
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    this.setState({selectedBeer: selectedBeer});
  }

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {
      currentlyVisibleState = <EditBeerForm beer = {this.state.selectedBeer} onEditBeer = {this.handleEditingBeerInList} />
      buttonText = "Return to Beer List";
    }
    else if (this.state.selectedBeer != null) {
      currentlyVisibleState = <BeerDetail beer = {this.state.selectedBeer} onClickingDelete = {this.handleDeletingBeer} onClickingRestock = {this.handleRestockingBeer} onClickingBuy = { this.handleBuyingBeer } onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Beer List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState =
      <BeerList
        beerList={this.state.masterBeerList} onBeerSelection={this.handleChangingSelectedBeer}/>;
        buttonText = "Add Beer";
    }
    return (
      <>
        {currentlyVisibleState}
        <StyledButton onClick={this.handleClick} text={buttonText}/>
      </>
    );
  }

}

export default BeerControl;