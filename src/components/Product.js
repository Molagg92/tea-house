import React from "react";
import PropTypes from "prop-types";

function Product(props){
  if (props.weight > 0){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id, props.type)}>
        <h3>{props.name} - {props.blend}</h3>
        <h6> price per pound : {props.price}</h6>
        <p><em>{props.description}</em></p>
      </div>
      <button onClick={() => {
    window.alert("Thank you for your purchase! Check the Details to see the weight go down!");
    props.whenSellClicked(props.id);
}} type="submit">Make Sale!</button><span>   </span>
        <hr/>
    </React.Fragment>
  );
} else {

  <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h3>{props.name} - {props.blend}</h3>
        <h6> price per pound : {props.price}</h6>
        <p><em>Out of Stock!</em></p>
        <hr/>
      </div>
    </React.Fragment>
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  blend: PropTypes.string.isRequired,
  weight: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Product;