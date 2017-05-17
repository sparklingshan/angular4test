import { createStore } from 'redux';

//action types
const USER_LOGIN = "USER_LOGIN";

//store
const initialStates = {
    userToken: null,
    currentUser: null
}

//reducer
function appReducer(state = initialStates, action) {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                userToken: action.user.token,
                currentUser: action.user.email
            });
    }
    return state;
}

//action
export const userLogin = function (user) {
    return {
        type: USER_LOGIN,
        user
    }
}

export const store = createStore(appReducer);