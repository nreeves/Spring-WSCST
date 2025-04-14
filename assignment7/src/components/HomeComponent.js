import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderCard({ item }) {
    if (item != null) {
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    return <div />;
}

const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1">
                    <h3>Featured Dish</h3>
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <h3>Featured Promotion</h3>
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <h3>Featured Leader</h3>
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
};

export default Home;
