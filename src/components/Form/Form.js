import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            products:[],
            imageURL: '',
            productName: '',
            price: 0
        }
    }

    componentDidMount(){
        axios.get('/api/inventory').then((res)=> {
            this.setState({
                products: res.data
            })
        })
    }

    addProduct(){
        let body = {
            products: this.state.products,
            imageUrl: this.state.imageURL,
            productName: this.state.productName,
            price: this.state.price
        }
        axios.post('/api/inventory', body).then((res) => {
            this.setState({
                products: res.data,
                imageUrl: '',
                productName: '',
                price: 0
            })
        })
    }
    
    cancelForm(){
        this.setState({
            imageURL:'',
            productName: '',
            price: 0
        }
        )
    }

    render(){
        return(
            <div>
                <h2>Image URL</h2>
                <input value={this.state.imageURL} onChange={(e) => this.setState({ imageURL: e.target.value })} />
                <h2>Product Name</h2>
                <input value={this.state.productName} onChange={(e) => this.setState({ productName: e.target.value})} />
                <h2>Price</h2>
                <input value={this.state.price} onChange={(e) => this.setState({ price: e.target.value})}/>
                <br />
                <br />
                <button onClick = { () => this.cancelForm()}>Cancel</button>
                <button onClick = {() => this.addProduct()}>Add to Inventory</button>
            </div>
        )
    }
}