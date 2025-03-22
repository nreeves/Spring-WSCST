import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments.js';  // Import comments data

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,  // Add comments to state
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const selectedDish = this.state.dishes.find(dish => dish.id === this.state.selectedDish);
        const selectedComments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish);

        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu 
                    dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)} 
                />
                <DishDetail 
                    dish={selectedDish} 
                    comments={selectedComments}  // Pass comments as a prop
                />
            </div>
        );
    }
}

export default Main;
