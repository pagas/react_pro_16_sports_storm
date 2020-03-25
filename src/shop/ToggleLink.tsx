import React from "react";
import {Route, Link} from "react-router-dom";

const ToggleLink = (props:any) => {
    const {to, exact,
        className,
        activeClass = 'btn-primary',
        inActiveClass = 'btn-secondary',
        children
    } = props;
    return <Route path={to} exact={exact} children={ routeProps => {
        const baseClasses = className || 'm-2 btn btn-block';
        const combinedClasses = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`;
        return <Link to={to} className={combinedClasses}>
            {children}
        </Link>
    }}/>
};

export {ToggleLink};