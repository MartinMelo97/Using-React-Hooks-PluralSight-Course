import { Component } from 'react';

class InputElementClass extends Component {

  constructor() {
    super()
    this.state = {
      inputText: ''
    };
  };

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <br/>
        {this.state.inputText}
      </div>
    );
  }
}

export default InputElementClass