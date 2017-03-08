import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//  ToDo Component
import ToDoList from './components/todolist'


import todoApp from './reducers/todo-reducer';

// Calling redux library
const {createStore} = Redux;
// conste createStore = Redux.createsore;
const myStore = createStore(todoApp);

let globalID = 0;

const FilterLink = ({
    filter,
    children,
    currentFilter,
    onClick
}) => {
    if(filter === currentFilter){
        return <span>{children}</span>
    }
    return (
        <a href="#"
           onClick={(e) => {
               e.preventDefault();
               onClick(filter);
           }}>
            {children}
        </a>
    )
};

class AddToDo extends Component{
    render(){
        let textInput;
        return (
            <div className="btn-group">
                <input type="text" ref={(input) => {
                    textInput = input;
                }}/>
                <button className="btn btn-secondary" onClick={() => {
                    this.props.onAddClick(textInput.value);
                    textInput.value = '';
                }}>Add todo
                </button>
            </div>
        )
    }
}

class Filter extends Component{
    render(){
        return (
            <p>
                Show:
                {' '}
                <FilterLink 
                    filter="SHOW_ALL" 
                    currentFilter = {this.props.visibilityFilter}
                    onClick = {this.props.onFilterClick}
                    >
                    ALL
                </FilterLink>
                {' '}
                <FilterLink 
                    filter="SHOW_ACTIVE" 
                    currentFilter = {this.props.visibilityFilter}
                    onClick = {this.props.onFilterClick}    
                    >
                    ACTIVE
                </FilterLink>
                {' '}
                <FilterLink 
                    filter="SHOW_COMPLETED" 
                    currentFilter = {this.props.visibilityFilter}
                    onClick = {this.props.onFilterClick} 
                    >
                    COMPLETED
                </FilterLink>
            </p>
        )
    }
}


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
                <AddToDo 
                    onAddClick = {(text) => {
                        myStore.dispatch({
                                type: 'ADD_TODO',
                                id: globalID++,
                                text
                            });
                        }
                    }
                />

                <ToDoList
                    todos = {visibleTodos}
                    onToDoClick = {(id) => {
                        myStore.dispatch({
                            type: 'TOGGLE_TODO', id
                        });
                    }}
                />

                <Filter 
                    visibilityFilter = {visibilityFilter}
                    onFilterClick = {(filter) => {
                        myStore.dispatch({
                           type: 'SET_VISIBILITY_FILTER',
                           filter
                        });
                    }}
                />
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





