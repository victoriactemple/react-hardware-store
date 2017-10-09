import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      isAdmin: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Itsa hammer',
          price: 12.3
        },
        {
          productName: 'Nail',
          description: 'Itsa nail',
          price: 0.12
        }
      ],
      // empty array for newCartList.push(productList Index)
      cartList: []
    }
  }

  addProductToProductList = (newProduct) => {
    const newProductList = [...this.state.productList]
    newProductList.push(newProduct)
    this.setState({productList: newProductList})
  }

  addProductToCartList = (index) => {
    const newCartList = [...this.state.cartList]
    newCartList.push(this.state.productList[index])
    this.setState({cartList: newCartList})
  }

  deleteProductFromProductList = (id) => {
    const newProductList = [...this.state.productList]
    newProductList.splice(id, 1)
    this.setState({productList: newProductList})
  }

  deleteProductFromCartList = (index) => {
    const newCartList = [...this.state.cartList]
    newCartList.splice(index, 1)
    this.setState({cartList: newCartList})
  }

  toggleIsAdmin = () => {
    this.setState({isAdmin: !this.state.isAdmin})
  }

  render () {
    return (
      <div >
        <button onClick={this.toggleIsAdmin}>Toggle Admin</button>
        <div className="shop">
          <div className="products">
            {this.state.isAdmin
              ? <AdminView
                productList={this.state.productList}
                addProductToProductList={this.addProductToProductList}
                deleteProductFromProductList={this.deleteProductFromProductList}
              /> : <ShopView
                productList={this.state.productList}
                addProductToCartList={this.addProductToCartList}
                
              />}
          </div>
              <CartView 
              cartList={this.state.cartList}
              deleteProductFromCartList={this.deleteProductFromCartList}
              />
        </div>
      </div>
    )
  }
}

export default Shop