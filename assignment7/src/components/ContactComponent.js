import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { connect } from 'react-redux';  
import { addComment } from '../redux/ActionCreators';  

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            errorMessage: '' // State to hold error messages
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if ((name === 'firstname' || name === 'lastname') && value.length > 15) {
            this.setState({
                errorMessage: "Name cannot exceed 15 characters."
            });
        } else {
            this.setState({
                [name]: value,
                errorMessage: '' 
            });
        }
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));

        this.props.addComment(this.state);  

        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>

                    {/* Form Section */}
                    <div className="col-12 col-md-9">
                        <h3>Send us your Feedback</h3>
                        <Form onSubmit={this.handleSubmit}>
                            {/* Error Message */}
                            {this.state.errorMessage && (
                                <div className="alert alert-danger">
                                    {this.state.errorMessage}
                                </div>
                            )}

                            {/* First Name */}
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Last Name */}
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Telephone Number */}
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input
                                        type="tel"
                                        id="telnum"
                                        name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Email */}
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Agree Checkbox */}
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>

                                {/* Contact Type */}
                                <Col md={{size: 3, offset: 1}}>
                                    <Input
                                        type="select"
                                        name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            {/* Message */}
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input
                                        type="textarea"
                                        id="message"
                                        name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Submit Button */}
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addComment: (comment) => addComment(comment)  
};

export default connect(null, mapDispatchToProps)(Contact);