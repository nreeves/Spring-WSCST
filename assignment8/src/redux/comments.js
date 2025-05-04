import * as ActionTypes from './ActionTypes';

export const Comments = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            return state.concat(action.payload); 

        default:
            return state;
    }
};
