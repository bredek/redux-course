import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CounterReducer from './reducers/counter-reducer';

const Counter = ({
    value,
    onInc,
    onDec
}) => {
    return (
        <div className='col-md-8'>
            <h1>{value}</h1>
            <div class="btn-group">
                <button className="btn btn-secondary" onClick={onInc}>+</button>
                <button className="btn btn-secondary" onClick={onDec}>-</button>
            </div>
        </div>
    )
};

// Calling redux library
const {createStore} = Redux;
// conste createStore = Redux.createsore;
const myStore = createStore(CounterReducer);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Counter
                    value={myStore.getState()}
                    onInc={(e) => {
                        e.preventDefault();
                        console.log(myStore);
                        myStore.dispatch({type: 'INCREMENT'});
                    }}
                    onDec={() => {
                        myStore.dispatch({type: 'DECREMENT'});
                    }}
                />
            </div>
        )
    }
}
;

const renderRedux = () => {
    ReactDOM.render(<App />, document.querySelector('.container-fluid'));
};

renderRedux();
myStore.subscribe(renderRedux);

