import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
    <input
        type='text'
        name='name'
        placeholder='Title/Name'
        required />
      <input
        type='text'
        name='origin'
        placeholder='Origin'
        required />
      <input
        type='text'
        name='blend'
        placeholder='Blend/Roast'
        required />
        <input
        type='number'
        name='weight'
        placeholder='weight'
        required
        min="0" />
        <input
        type='number'
        name='price'
        placeholder='price'
        required
        min="0" />
      <textarea
        name='description'
        placeholder='Give a description.'
        required />
      <button type='submit'>{props.buttonText}</button>
    </form>

    {}
  </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default ReusableForm;