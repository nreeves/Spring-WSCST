import { connect } from 'react-redux';
import { addComment } from '../index'; 
import { actions } from 'react-redux-form'; 
import CommentForm from './CommentForm';

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  resetFeedbackForm: () => dispatch(actions.reset('feedback')),
});

export default connect(null, mapDispatchToProps)(CommentForm);
