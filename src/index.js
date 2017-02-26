import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import CounterReducer from './reducers/counter-reducer';
import todoApp from './reducers/todo-reducer';

// Calling redux library
const {createStore} = Redux;
// conste createStore = Redux.createsore;
const myStore = createStore(todoApp);
//
// console.dir(myStore.getState());
//
// myStore.dispatch({
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Do something'
// });
//
// console.dir(myStore.getState());
//
// myStore.dispatch({
//     type: 'ADD_TODO',
//     id: 1,
//     text: 'Do another something'
// });
//
// console.dir(myStore.getState());
//
// myStore.dispatch({
//     type: 'TOGGLE_TODO',
//     id: 0
// });
//
// console.dir(myStore.getState());
//
// myStore.dispatch({
//     type: 'SET_VISIBILITY_FILTER',
//     filter: 'SHOW_COMPLETED'
// });
//
// console.dir(myStore.getState());


let globalID = 0;
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todoID: 0
        }
    }

    render() {
        return (
            <div className='col-md-8'>
                <div className="btn-group">
                    <input type="text" onChange={(e) => {
                        this.setState({
                                todoText: e.target.value
                            }
                        );
                        console.log(e.target.value)
                    }} ref={(input) => {
                        this.textInput = input;
                    }}/>
                    <button className="btn btn-secondary" onClick={() => {
                        myStore.dispatch({
                            type: 'ADD_TODO',
                            id: globalID++,
                            text: this.textInput.value
                        });
                    }}>Add todo
                    </button>
                </div>
                <ul>
                    {this.props.todos.map((todo) => {
                        return (
                            < Todo todo={todo}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

class Todo extends Component {
    constructor(props) {
        super(props);
        let todo = props.todo;
        this.state = {
            toggleClass: '',
            id: todo.id
        }
    }

    render() {
        return (
            <li key={this.state.id}
                className={this.state.toggleClass}
                onClick={() => {
                    myStore.dispatch({
                        type: 'TOGGLE_TODO',
                        id: this.state.id
                    });
                    this.setState({
                            toggleClass: 'toggled'
                        }
                    );
                }}>
                <p>Todo#{this.state.id}</p>
                <p>{"--> " + this.props.todo.text}</p>
                <p>{this.props.todo.completed.toString()}</p>
            </li>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Todos
                    todos={myStore.getState().TodoReducer}
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





