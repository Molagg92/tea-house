import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
    <input
        type='text'
        name='name'
        placeholder='Title/Name' />
      <input
        type='text'
        name='origin'
        placeholder='Origin' />
      <input
        type='text'
        name='blend'
        placeholder='Blend/Roast' />
      <textarea
        name='description'
        placeholder='Give a description.' />
      <button type='submit'>{props.buttonText}</button>
    </form>

    {}
  </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;