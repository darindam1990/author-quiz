import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './containers/Main';

class App extends React.Component {
  state = {
    questions: [],
    currentQuestion: -1,
    success: undefined
  };

  componentWillMount() {
    fetch('http://localhost:3001/api/v1/quiz/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        questions: data,
        currentQuestion: 0
      });
    })
    .catch(err => {
      this.setState({
        questions: [],
        currentQuestion: -1
      });
    });
  }

  successChange(success) {
    this.setState({ success });
  }

  onContinue() {
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        success: undefined
      });
    } else {
      this.setState({
        success: undefined
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          class={typeof this.state.success !== 'undefined' ? this.state.success ? 'Success' : 'Failure' : ''}
          question={this.state.questions[this.state.currentQuestion]}
          successChange={this.successChange.bind(this)}
          continue={this.state.success}
          onContinue={this.onContinue.bind(this)}
          current={this.state.currentQuestion + 1}
          total={this.state.questions.length}
        />
      </div>
    );
  }
}

export default App;
