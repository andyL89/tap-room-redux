import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {
  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: event.target.name.value,
                              brand: event.target.brand.value,
                              type: event.target.type.value,
                              price: event.target.price.value,
                              alcoholContent: event.target.alcoholContent.value,
                              pints: event.target.pints.value,
                              id: v4()});
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Add Beer" />
    </>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;