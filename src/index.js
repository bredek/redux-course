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

const FilterLink = ({
    filter,
    children,
    currentFilter
}) => {
    if(filter === currentFilter){
        return <span>{children}</span>
    }
    return (
        <a href="#"
           onClick={(e) => {
               e.preventDefault();
               myStore.dispatch({
                   type: 'SET_VISIBILITY_FILTER',
                   filter
               });
           }}>
            {children}
        </a>
    )
};

const getVisibleTodos = (todos,
                         filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => {
                return todo.completed;
            });
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => {
                return !todo.completed;
            })
    }
};
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todoID: 0
        }
    }

    render() {
        const todos = this.props.todos,
            visibilityFilter = this.props.visibilityFilter,
            visibleTodos = getVisibleTodos(
                todos,
                visibilityFilter
            );
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
                        this.textInput.value = '';
                    }}>Add todo
                    </button>
                </div>
                <ul>
                    {visibleTodos.map((todo) => {
                        return (
                            <li key={todo.id}
                                onClick={() => {
                                    myStore.dispatch({
                                        type: 'TOGGLE_TODO',
                                        id: todo.id
                                    });
                                }}
                                style={
                                    {
                                        cursor: 'pointer',
                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                    }
                                }>
                                {todo.text}
                            </li>
                        )
                    })}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink filter="SHOW_ALL" currentFilter = {visibilityFilter}>
                        ALL
                    </FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_ACTIVE" currentFilter = {visibilityFilter}>
                        ACTIVE
                    </FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_COMPLETED" currentFilter = {visibilityFilter}>
                        COMPLETED
                    </FilterLink>
                </p>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Todos
                    todos={myStore.getState().TodoReducer}
                    visibilityFilter={myStore.getState().visibilityFilter}
                />
            </div>
        )
    }
}


const renderRedux = () => {
    ReactDOM.render(<App />, document.querySelector('.container-fluid'));
};

renderRedux();
myStore.subscribe(renderRedux);





