import React, {Component} from 'react';

// Turning into presentational component
// Only presentation, no actions
class ToDo extends Component{
    render(){
        return (
             <li
                onClick={this.props.onClick}
                style={
                    {
                        cursor: 'pointer',
                        textDecoration: this.props.completed ? 'line-through' : 'none'
                    }
                }>
                {this.props.text}
            </li>
        )    
    }
    
}

export default ToDo;