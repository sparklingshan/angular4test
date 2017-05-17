import { createStore } from 'redux';

//action types
const USER_LOGIN = "USER_LOGIN";

//store
const initialStates = {
    userToken: null
}

//reducer
function appReducer(state = initialStates, action) {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                userToken: action.token
            });
    }
    return state;
}

//action
export const userLogin = function (token) {
    return {
        type: USER_LOGIN,
        token
    }
}

export const store = createStore(appReducer);