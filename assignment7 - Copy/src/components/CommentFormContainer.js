import { connect } from 'react-redux';
import { addComment } from '../actions'; 
import { resetFeedbackForm } from 'react-redux-form'; 
import CommentForm from './CommentForm'; 

const mapDispatchToProps = {
    addComment,       
    resetFeedbackForm, 
};

export default connect(null, mapDispatchToProps)(CommentForm);
