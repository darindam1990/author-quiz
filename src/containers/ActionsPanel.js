import React from 'react';

const actionsStyle = {
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '0em 2em',
    marginBottom: '2em'
};

const ActionsPanel = (state) => {
    return <div style={actionsStyle}>
        <button disabled={!state.continue} className="NextBtn" onClick={() => onNextClick(state.onContinue)}>NEXT</button>
    </div>;
};

const onNextClick = (cb) => {
    cb();
}



export default ActionsPanel;