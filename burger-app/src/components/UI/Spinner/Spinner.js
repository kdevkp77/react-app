import React from 'react';
import Aux from '../../../hoc/Aux';
import './Spinner.css';

const Spinner = () => {
    return (
        <Aux>
            <div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>
        </Aux>

    )
}
export default Spinner;