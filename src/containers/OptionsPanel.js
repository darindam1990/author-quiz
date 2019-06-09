import React from 'react';
import Option from '../components/Option';

const flexStyle = {
    flex: 2,
    display: 'flex',
    padding: '2em'
};

const OptionsPanel = (state) => {
    return <div style={flexStyle} className="flex flex-col" onClick={(event) => validate(event, state.id, state.successChange)}>
        {state.options.map((o, i) => <Option key={i} option={o} />)}
    </div>;
};

const validate = (event, id, cb) => {
    if (event.target.classList.contains('Option')) {
        fetch('/api/v1/quiz/validate/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                option: event.target.innerText
            })
        })
            .then(response => response.json())
            .then(data => cb(data.success))
            .catch(err => {
                console.error(err);
            });
    }
}
export default OptionsPanel;