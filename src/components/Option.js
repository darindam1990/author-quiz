import React from 'react';

const optionStyle = {
    padding: '1em',
    border: '1px solid #f1f1f1',
    background: '#9B56BB',
    color: '#f1f1f1',
    borderRadius: '3px',
    marginBottom: '1em',
    cursor: 'pointer',
    minWidth: '24em'
};

const Option = (state) => {
    return <div className="Option" style={optionStyle}>{state.option}</div>;
};

export default Option;