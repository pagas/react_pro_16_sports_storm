import React from 'react';
import {Link} from 'react-router-dom';

const CategoryNavigation = (props) => {
    const {baseUrl, categories} = props;
    return <React.Fragment>
        <Link className="btn btn-secondary btn-block" to={baseUrl}>All</Link>
        {categories.map(category =>
            <Link className="btn btn-secondary btn-block" to={`${baseUrl}/${category.toLowerCase()}`} key={category}>
                {category}
            </Link>)
        }
    </React.Fragment>
};
export {CategoryNavigation};