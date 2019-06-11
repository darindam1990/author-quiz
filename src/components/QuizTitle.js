import React from 'react';

const QuizTitle = (state) => {
    return <div className="QuizTitle">
        <span>Select the option that correctly matches a literary work of the author pictured below</span>
        <span>{state.current} / {state.total}</span>
    </div>;
};

export default QuizTitle;