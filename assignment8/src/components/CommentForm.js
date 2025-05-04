import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  handleSubmit = (values) => {
    const { dishId, postComment } = this.props;
    postComment(dishId, values.rating, values.author, values.comment);
  };

  render() {
    return (
      <div className="container">
        <h4>Submit Comment</h4>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <Control.Select
              model=".rating"
              id="rating"
              name="rating"
              className="form-control"
              validators={{ required }}
            >
              <option value="">-- Select --</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </Control.Select>
            <Errors
              className="text-danger"
              model=".rating"
              show="touched"
              messages={{
                required: 'Rating is required.'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Your Name</label>
            <Control.Text
              model=".author"
              id="author"
              name="author"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15)
              }}
            />
            <Errors
              className="text-danger"
              model=".author"
              show="touched"
              messages={{
                required: 'Name is required.',
                minLength: 'Must be at least 3 characters.',
                maxLength: 'Must be 15 characters or less.'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <Control.Textarea
              model=".comment"
              id="comment"
              name="comment"
              rows="6"
              className="form-control"
              validators={{ required }}
            />
            <Errors
              className="text-danger"
              model=".comment"
              show="touched"
              messages={{
                required: 'Comment is required.'
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </LocalForm>
      </div>
    );
  }
}

export default CommentForm;
