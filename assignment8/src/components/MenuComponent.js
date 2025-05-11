import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Link to={`/menu/${dish.id}`}>  
        <Card> 
          <CardImg 
            width="100%" 
            src={baseUrl + dish.image} 
            alt={dish.name} 
          />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            <CardText>{dish.price}</CardText>
          </CardBody>
        </Card>
      </Link>
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
