import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return <div>No Dish Available</div>;
    }
}

function RenderComments({ comments }) {
    if (comments && comments.length > 0) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <div>No comments yet.</div>;
    }
}

const DishDetail = (props) => {
    const { dishId } = useParams();
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);

    const handleCommentSubmit = (values) => {
        const { author, rating, comment } = values;
        props.addComment(props.dish.id, rating, author, comment);  
        toggleModal();
    };

    useEffect(() => {
        if (props.dish && props.dish.id !== parseInt(dishId, 10)) {
            props.fetchDishById(dishId);
        }
    }, [dishId, props]);

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.dish == null) {
        return <div>No dish available</div>;
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-inline-flex justify-content-start">
                            <li className="breadcrumb-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {props.dish.name}
                            </li>
                        </ol>
                    </nav>
                    <h3 className='border-bottom'>Menu</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-7 m-1">
                    <RenderComments comments={props.comments} />
                    <Button onClick={toggleModal} color="white" className="btn btn-outline-secondary mt-3 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil me-2" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                        Submit Comment
                    </Button>
                </div>
            </div>

            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm model="CommentForm" onSubmit={(values) => handleCommentSubmit(values)}>
                        <Label for="rating">Rating</Label>
                        <Control.Select
                            model=".rating"
                            name="rating"
                            className="form-control"
                            defaultValue="1"
                        >
                            {[...Array(5).keys()].map(i => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </Control.Select>

                        <Label for="author">Your Name</Label>
                        <Control.Text
                            model=".author"
                            name="author"
                            className="form-control"
                            placeholder="Your Name"
                            validators={{ required }}
                        />
                        <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{ required: 'Required' }}
                        />

                        <Label for="comment">Comment</Label>
                        <Control.Textarea
                            model=".comment"
                            name="comment"
                            className="form-control"
                            rows="5"
                            validators={{ required }}
                        />
                        <Errors
                            className="text-danger"
                            model=".comment"
                            show="touched"
                            messages={{ required: 'Required' }}
                        />

                        <Button type="submit" color="primary" className="mt-2">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default DishDetail;