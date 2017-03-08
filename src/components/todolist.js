import React, {Component} from 'react';
//  ToDo Component
import ToDo from './todo'


class ToDoList extends Component {
    render() {
        return (
        <ul>
            {this.props.todos.map((todo) => {
                return (
                   <ToDo
                    key = {todo.id}
                    completed = {todo.completed}
                    text = {todo.text}
                    onClick = {() => this.props.onToDoClick(todo.id)}
                    />
                )
            })}
        </ul>
        )
    }
}

export default ToDoList;