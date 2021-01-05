import { Component } from 'react';

class InputElementClass extends Component {

  constructor() {
    super()
    this.state = {
      inputText: '',
      historyList: []
    };
  };

  handleChange = event => {
    const { value } = event.target
    this.setState(previousState => {
      return {
        inputText: value,
        historyList: [...previousState.historyList, value]
      };
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder='Enter some text'
          onChange={this.handleChange}
        />
        <br/>
        {this.state.inputText}
        <hr/>
        <br/>
        <ul>
          {this.state.historyList.map(rec => (
            <li>{rec}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InputElementClass