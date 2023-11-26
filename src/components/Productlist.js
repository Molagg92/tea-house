import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map ((product) =>
         <Product whenProductClicked = { props.onProductSelection }
                  whenSellClicked = { props.onSell }
                  blend={product.blend}
                  origin={product.origin}
                  name={product.name}
                  weight={product.weight}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                  key={product.id}/> 
        )}
    </React.Fragment>
      );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func,
  onSell: PropTypes.func
}

export default ProductList;