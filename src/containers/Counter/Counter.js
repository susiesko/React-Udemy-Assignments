import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => { return { counter: prevState.counter + 1 } })
        break;
      case 'dec':
        this.setState((prevState) => { return { counter: prevState.counter - 1 } })
        break;
      case 'add':
        this.setState((prevState) => { return { counter: prevState.counter + value } })
        break;
      case 'sub':
        this.setState((prevState) => { return { counter: prevState.counter - value } })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {
            this.props.storedResults.map((storedResult) => (
              <li 
                key={storedResult.id} 
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.onDeleteResult(storedResult.id)}
              >{storedResult.value}</li>
            ))
          }
          {/* <li onClick={this.props.onDeleteResult}></li> */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch( actionCreators.increment() ),
    onDecrementCounter: () => dispatch( actionCreators.decrement() ),
    onAdd: () => dispatch( actionCreators.add({ val: 5 }) ),
    onSubtract: () => dispatch( actionCreators.subtract({ val: 5 }) ),
    onStoreResult: (ctrResult) => dispatch( actionCreators.storeResult({ result: ctrResult }) ),
    onDeleteResult: (id) => dispatch( actionCreators.deleteResult({ idToDelete: id } ))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);