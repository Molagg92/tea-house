import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>{product.name} - {product.blend}</h3>
      <p><em>{product.weight}</em></p>
      <button onClick={ props.onClickingEdit }>Update Product</button> 
      <button onClick={()=> onClickingDelete(product.id) }>Delete Tea Product </button> 
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProductDetail;