import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import { Button, Col, Row, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

// Validation functions
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

const CommentForm = ({ addComment, resetFeedbackForm }) => {
    const handleSubmit = (values) => {
        console.log('Current State is: ' + JSON.stringify(values));
        addComment(values.firstname, values.lastname, values.telnum, values.email, values.message, values.contactType);
        resetFeedbackForm();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                    <Form model="feedback" onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>
                                First Name
                            </Label>
                            <Col md={10}>
                                <Control.text
                                    model=".firstname"
                                    id="firstname"
                                    name="firstname"
                                    className="form-control"
                                    placeholder="First Name"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15),
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less',
                                    }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    addComment: (firstname, lastname, telnum, email, message, contactType) =>
        addComment(firstname, lastname, telnum, email, message, contactType),
};

export default connect(null, mapDispatchToProps)(CommentForm);