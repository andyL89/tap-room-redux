import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  background: rgba(255, 255, 255, .9);
  padding: 40px;
  width: 300px;
  margin: auto;
  form {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 225px;
    height: 300px;
    input {
      height: 30px;
      text-align: center;
      border: 1px solid black;
      border-radius: 5px;
    }
    button {
      cursor: pointer;
      outline: none;
      margin-left: 20%;
      margin-top: 10px;
      background: white;
      padding-top: 5px;
      padding-bottom: 5px;
      border: 2px solid black;
      width: 130px;
      font-size: 15px;
      font-weight: 900;
      color: black;
      border-radius: 5px;
    }
  }
`

function ReusableForm(props) {
  return (
    <>
      <StyledForm>
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
            placeholder = 'Alcohol Content (ABV)' />
          <input
            type = 'text'
            name = 'pints'
            placeholder = 'Pints in Keg (Avg: 124)' />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </StyledForm>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;