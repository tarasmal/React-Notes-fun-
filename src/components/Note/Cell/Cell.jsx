import React from 'react';

const Cell = ({name, value}) => {
    return (
        <div className={'cell-item'}>
            <div>
                {name}
            </div>
            <div>
                {value}
            </div>
        </div>
    );
};

export default Cell;