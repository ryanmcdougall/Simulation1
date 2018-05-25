import React, { Component } from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: this.props.products
        }
    }
    render(){
        let mappedProducts = this.state.products.map((e, i) => {
            return (
              <div key={i}>
                <Product
                  product={e.item}
                  price={e.price}
                  quantity={e.quantity}
                />
              </div>
            )
          })
        return(
            <div>
                <Product />
                {mappedProducts}
            </div>
        )
    }
}