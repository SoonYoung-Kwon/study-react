import React from 'react';
import PropTypes from 'prop-types'

const MyComponent = (props) => {
    return (
        <div>
            Hello {props.name} <pre/>
            {props.children} <pre/>
            {props.favoriteNumber}
        </div>
    );
};

MyComponent.defaultProps = {
    name: "default"
}

MyComponent.propType = { // Props Type Set
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;