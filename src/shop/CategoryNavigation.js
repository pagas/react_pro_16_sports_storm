import React from 'react';
import { ToggleLink} from "./ToggleLink";

const CategoryNavigation = (props) => {
    const {baseUrl, categories} = props;
    return <React.Fragment>
        <ToggleLink to={baseUrl} exact={true}>All</ToggleLink>

        {categories.map(category =>
            <ToggleLink to={`${baseUrl}/${category.toLowerCase()}`} key={category}>
                {category}
            </ToggleLink>
        )}
    </React.Fragment>
};
export {CategoryNavigation};