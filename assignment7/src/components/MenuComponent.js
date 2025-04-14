import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


function RenderMenuItem({ dish, onClick }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card onClick={() => onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText>{dish.price}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

const Menu = (props) => {
  if (props.dishes.length === 0) {
    return <div>No dishes available</div>;
  }

  const menu = props.dishes.map((dish) => {
    return (
      <RenderMenuItem
        key={dish.id}
        dish={dish}
        onClick={props.onClick}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
};

export default Menu;
