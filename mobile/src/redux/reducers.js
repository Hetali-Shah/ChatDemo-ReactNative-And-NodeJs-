import {
    NOTIFICATION_PUSH,
    NOTIFICATION_POP,
    CURRENT_USER_SET,
    LOADER_SET,
    GO_BACK_SET,
    ROUTE_INDEX_SET
} from './actions';

export const toast = (state = [], action) => {
    switch (action.type) {
        case NOTIFICATION_PUSH:
            return [...state, action.text];

        case NOTIFICATION_POP:
            return state.length > 0 ? state.slice(1) : state;

        default:
            return state;
    }
};

export const currentUser = (state = null, action) => {
    switch (action.type) {
        case CURRENT_USER_SET:
            return action.user;

        default:
            return state;
    }
};

export const loader = (state = false, action) => {
    switch (action.type) {
        case LOADER_SET:
            return action.state;

        default:
            return state;
    }
};

export const goBack = (state = null, action) => {
    switch (action.type) {
        case GO_BACK_SET:
            return action.state;

        default:
            return state;
    }
};

export const routeIndex = (state = 0, action) => {
    switch (action.type) {
        case ROUTE_INDEX_SET:
            return action.state;

        default:
            return state;
    }
}
