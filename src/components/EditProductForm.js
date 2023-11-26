import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm (props) {
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      ...product,
      name: event.target.name.value, 
      blend: event.target.blend.value, 
      weight: event.target.weight.value,
      origin: event.target.origin.value, 
      description: event.target.description.value,
      price: event.target.price.value,
      id: product.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Product" />
    </React.Fragment>
  );
}
EditProductForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
};

export default EditProductForm;