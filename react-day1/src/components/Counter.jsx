import {Component} from 'react';

class Counter extends Component {
  state = {
    counter:0
  }
  render(){
    return(
    <div>
      <button onClick={()=> this.setState({counter: this.state.counter + 1})}>+</button>
      <p>This is the counter: {this.state.counter}</p>
      <button onClick={()=> this.setState({counter: this.state.counter - 1})}>-</button>
    </div>)
  }
}
export default Counter
