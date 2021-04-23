import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditBeerForm (props) {
  const { beer } = props;
  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({name: event.target.name.value,
                      brand: event.target.brand.value,
                      type: event.target.type.value,
                      price: event.target.price.value,
                      alcoholContent: event.target.alcoholContent.value,
                      pints: event.target.pints.value,
                      id: beer.id});
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Edit/Update Beer" />
    </>
  );
}

EditBeerForm.propTypes = {
  ticket: PropTypes.object,
  onEditBeer: PropTypes.func
};

export default EditBeerForm;