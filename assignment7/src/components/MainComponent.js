import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDishes } from '../redux/ActionCreators';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }

  handleDishClick = (dishId) => {
    this.props.history.push(`/menu/${dishId}`);
  };

  render() {
    const { dishes, isLoading, errMess, comments, promotions, leaders } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (errMess) {
      return <div>{errMess}</div>;
    }

    const featuredDish = dishes.dishes.filter((dish) => dish.featured)[0];
    const featuredPromotion = promotions.filter((promo) => promo.featured)[0];
    const featuredLeader = leaders.filter((leader) => leader.featured)[0];

    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/home"
            render={() => (
              <Home
                dish={featuredDish}
                promotion={featuredPromotion}
                leader={featuredLeader}
              />
            )}
          />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Route exact path="/aboutus" component={About} />
          <Route
            exact
            path="/menu"
            render={() => (
              <Menu
                dishes={dishes.dishes}
                onClick={this.handleDishClick}
              />
            )}
          />
          <Route
            path="/menu/:dishId"
            render={({ match }) => {
              const dishId = parseInt(match.params.dishId, 10);
              const selectedDish = dishes.dishes.find((dish) => dish.id === dishId);
              const selectedComments = comments.filter((comment) => comment.dishId === dishId);
              return (
                <DishDetail
                  dish={selectedDish}
                  comments={selectedComments}
                />
              );
            }}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders,
  isLoading: state.dishes.isLoading,
  errMess: state.dishes.errMess,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));