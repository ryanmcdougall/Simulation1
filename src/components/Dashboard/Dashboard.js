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
        console.log(this.props)
        let mappedProducts = this.props.products.map((e, i) => {
            return (
              <div key={i}>
                <Product
                  image={e.image}
                  name={e.name}
                  price={e.price}
                />
              </div>
            )
          })

        return(
            <div>
                {mappedProducts}
                <Product {...this.state}/>
                
            </div>
        )
    }
}