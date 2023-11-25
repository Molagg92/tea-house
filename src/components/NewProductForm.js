import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewProductForm(props){
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value, 
      blend: event.target.blend.value, 
      weight: event.target.weight.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Tea Names' />
        <input
          type='text'
          name='blend'
          placeholder='Blend' />
        <textarea
          name='weight'
          placeholder='How much of your produc?' />
        <button type='submit'>Submit New Product</button>
      </form>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;