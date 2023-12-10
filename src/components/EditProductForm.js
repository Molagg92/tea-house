import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm (props) {
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    
    const editedWeight = parseInt(event.target.weight.value, 10);
    const editedPrice = parseInt(event.target.weight.value, 10);

    props.onEditProduct({
      ...product,
      name: event.target.name.value, 
      blend: event.target.blend.value, 
      weight: editedWeight,
      origin: event.target.origin.value, 
      description: event.target.description.value,
      price:editedPrice,
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