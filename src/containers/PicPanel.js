import React from 'react';

const PicPanel = (state) => {
    return <section className="PicSection">
        <div className="PicPanel" style={{ backgroundImage: `url(${state.url})` }}></div>
    </section>;
};

export default PicPanel;