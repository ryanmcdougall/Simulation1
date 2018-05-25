import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

class App extends Component {
    constructor(){
      super();

      this.state = {
        products: [{name: 'thing', price: 10, image: 'fnjdsan'},
        {name: "thin2", price: 898, image: 'njdsavo'}]
      }
      this.update = this.update.bind(this)
    }

    componentDidMount(){
      axios.get('/api/inventory').then((res)=> {
          this.setState({
              products: res.data
          })
      })
  }

  update(products){
    this.setState({
      products: products
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard {...this.state}/>
        <Form {...this.state}/>
      </div>
    );
  }
}

export default App;
