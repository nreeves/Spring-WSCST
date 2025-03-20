import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import { DISHES } from './shared/dishes'; // Import the DISHES data

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES // Store DISHES in state
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> {/* Pass dishes as props */}
      </div>
    );
  }
}

export default App;
