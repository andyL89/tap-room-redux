import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Beer Name' />
        <input
          type = 'text'
          name = 'brand'
          placeholder = 'Brand'/>
        <input
          type = 'text'
          name = 'type'
          placeholder = 'Type'/>
        <input
          type = 'text'
          name = 'price'
          placeholder = 'Price per Pint' />
        <input
          type = 'text'
          name = 'alcoholContent'
          placeholder = 'Alcohol Content' />
        <input
          type = 'text'
          name = 'pints'
          placeholder = 'Pints In Keg' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;