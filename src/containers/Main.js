import React from 'react';
import PicPanel from './PicPanel';
import OptionsPanel from './OptionsPanel';
import ActionsPanel from './ActionsPanel';
import QuizTitle from '../components/QuizTitle';



const Main = (state) => {
    if (state.question) {
        return <div className={"flex flex-col " + state.class}>
            <QuizTitle current={state.current} total={state.total} />
            <div className="flex">
                <PicPanel url={state.question.url} />
                <div style={ {flex: 2, marginTop: '12em', marginLeft: '12em'} }>
                    <OptionsPanel
                        id={state.question.id}
                        options={state.question.options}
                        successChange={state.successChange}
                    />
                    <ActionsPanel continue={state.continue} onContinue={state.onContinue} />
                </div>
            </div>
        </div>;
    } else {
        return <div className="flex empty">Sorry we are out of questions!</div>;
    }

};

export default Main;