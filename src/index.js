import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import CounterReducer from './reducers/counter-reducer';
import TodosReducer from './reducers/todo-reducer';

const Todos = ({
    value,
    onInc,
    onDec
}) => {
    return (
        <div className='col-md-8'>
            <h1>{value}</h1>
            <div class="btn-group">
                <button className="btn btn-secondary" onClick={onInc}>Add Todo</button>
                <button className="btn btn-secondary" onClick={onDec}>-</button>
            </div>
        </div>
    )
};

// Calling redux library
const {createStore} = Redux;
// conste createStore = Redux.createsore;
const myStore = createStore(TodosReducer);

console.log(myStore.getState());

myStore.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Do something'
});

console.log(myStore.getState());

myStore.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Do another something'
});

console.log(myStore.getState());

myStore.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log(myStore.getState());


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCounter: 0
        }
    }


    render() {
        return (
            <div>
                <Todos
                    value={myStore.getState()}
                    onInc={() => {
                        myStore.dispatch({
                            type: 'ADD_TODO',
                            id: 0,
                            text: 'Do something'
                        });
                    }}
                    onDec={() => {
                        console.log(myStore.getState());
                    }}
                />
            </div>
        )
    }
};


// const renderRedux = () => {
//     ReactDOM.render(<App />, document.querySelector('.container-fluid'));
// };
//
// renderRedux();
// myStore.subscribe(renderRedux);





