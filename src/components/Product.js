import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h3>{props.name} - {props.blend}</h3>
        <p><em>{props.weight}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  blend: PropTypes.string,
  weight: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenProductClicked: PropTypes.func // new PropType
};

export default Product;