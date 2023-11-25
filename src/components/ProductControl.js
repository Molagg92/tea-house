import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({mainProductList: newMainProductList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} />
      buttonText = "Return to Product List";
    } 
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.mainProductList} onProductSelection={this.handleChangingSelectedProduct} />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ProductControl;