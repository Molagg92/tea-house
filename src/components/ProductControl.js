import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm />
    } else {
      currentlyVisibleState = <ProductList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default ProductControl;