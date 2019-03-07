/**
 * @providesModule ReduxActions
 */

export const NOTIFICATION_PUSH = 'notification/PUSH';
export const NOTIFICATION_POP = 'notification/POP';
export const CURRENT_USER_SET = 'currentUser/SET';
export const LOADER_SET = 'loader/SET';
export const GO_BACK_SET = 'goBack/SET';
export const ROUTE_INDEX_SET = 'routeIndex/SET';

// action creators

export const notificationPush = text => ({
    type: NOTIFICATION_PUSH,
    text
});

export const notificationPop = () => ({
    type: NOTIFICATION_POP
});

export const currentUserSet = user => ({
    type: CURRENT_USER_SET,
    user
});

export const loaderSet = state => ({
    type: LOADER_SET,
    state
});

export const routeIndexSet = state => ({
    type: ROUTE_INDEX_SET,
    state
});

export const gobackSet = state => ({
    type: GO_BACK_SET,
    state
});
