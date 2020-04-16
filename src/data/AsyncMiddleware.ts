const isPromise = (payload:any) => {
    return (typeof(payload) === "object" || typeof(payload) === "function")
        && typeof(payload.then) === "function";
};

export const asyncActions = () => (next:any) => (action:any) => {
    if (isPromise(action.payload)) {
        action.payload.then((result:any) => {
            next({...action, payload: result})
        })
    } else {
        next(action);
    }
};
