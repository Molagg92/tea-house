import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product } = props;
  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>{product.name} - {product.blend}</h3>
      <p><em>{product.weight}</em></p>
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object
};

export default ProductDetail;