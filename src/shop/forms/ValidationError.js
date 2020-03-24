import React from "react";

const ValidationError = (props) => {
    const {errors} = props;
    if(errors) {
        return errors.map(error =>
            <h6 className="text-danger" key={error}>
                {error}
            </h6>
        )
    }
    return null;
}

export {ValidationError};