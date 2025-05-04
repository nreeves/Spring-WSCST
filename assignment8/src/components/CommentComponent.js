import React from 'react';
import { connect } from 'react-redux';  
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';  


const CommentsComponent = (props) => {
    const comments = props.comments.map((comment) => {
        return (
            <div key={comment.id} className="col-12 mt-4">
                <Card>
                    <CardBody>
                        <CardTitle>{comment.firstname} {comment.lastname}</CardTitle>
                        <CardText>{comment.message}</CardText>
                        <CardText><i>Contact: {comment.telnum}</i></CardText>
                        <CardText><i>Email: {comment.email}</i></CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <h3>Comments</h3>
                {comments}
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        comments: state.comments,  
    };
};


export default CommentComponent;
