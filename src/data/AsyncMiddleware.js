const isPromise = (payload) => {
    return (typeof(payload) === "object" || typeof(payload) === "function")
        && typeof(payload.then) === "function";
};

export const asyncActions = () => (next) => (action) => {
    if (isPromise(action.payload)) {
        action.payload.then(result => next({...action, playload: result}))
    } else {
        next(action);
    }
};
