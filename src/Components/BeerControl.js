import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerDetail from './BeerDetail';
import BeerList from './BeerList';

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      selectedBeer: null
    };
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
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

    if (this.state.selectedBeer != null) {
      currentlyVisibleState = <BeerDetail beer = {this.state.selectedBeer} onClickingDelete = {this.handleDeletingBeer} onClickingRestock = {this.handleRestockingBeer} onClickingBuy = { this.handleBuyingBeer }/>
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
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }

}

export default BeerControl;