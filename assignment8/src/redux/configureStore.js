import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

const initialCommentForm = {
    author: '',
    rating: '',
    comment: ''
};

const rootReducer = combineReducers({
    dishes: Dishes,
    comments: Comments,
    promotions: Promotions,
    leaders: Leaders,
    ...createForms({
        feedback: InitialFeedback,
        commentForm: initialCommentForm
    })
});

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const ConfigureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, logger))
    );
    return store;
};
