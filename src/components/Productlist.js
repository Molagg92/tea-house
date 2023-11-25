import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map ((product, index) =>
         <Product blend = {product.blend}
                  name = {product.name}
                  weight = {product.weight}
                  key={index}/> 
        )}
    </React.Fragment>
      );
}

ProductList.propTypes = {
  productList: PropTypes.array
}

export default ProductList;