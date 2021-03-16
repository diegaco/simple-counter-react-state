import React, { Component } from 'react';

const setDocumentTitle = count => {
  document.title = `Counter: ${count}`;
}

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return { count: 0 };
}

const setStateFromLocalStorage = state => {
  localStorage.setItem('counterState', JSON.stringify(state));
  setDocumentTitle(state.count);
}

class Counter extends Component {
  state = getStateFromLocalStorage();

  increment() {
    this.setState((state, props) => ({
      count: state.count + props.step <= props.max ? state.count + props.step : state.count
    }), () => {
      setStateFromLocalStorage(this.state);
    });
  }

  componentDidMount() {
    setDocumentTitle(this.state.count);
  }

  decrement() {
    this.setState((state, props) => ({
      count: state.count - props.step >= 0 ? state.count - props.step : state.count
    }), () => {
      setStateFromLocalStorage(this.state);
    })
  }

  reset() {
    this.setState({
      count: 0
    }, () => {
      setStateFromLocalStorage(this.state);
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{ count }</p>
        <section className="controls">
          <button onClick={this.increment.bind(this)}>Increment</button>
          <button onClick={this.decrement.bind(this)}>Decrement</button>
          <button onClick={this.reset.bind(this)}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;

