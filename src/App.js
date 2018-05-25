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
        products: []
      }
    }

    componentDidMount(){
      axios.get('/api/inventory').then((res)=> {
          this.setState({
              products: res.data
          })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
