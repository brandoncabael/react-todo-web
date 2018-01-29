import React, { Component } from 'react';
import TodoList from './TodoList';


class Todo extends Component {
    render(){
        return(
            <div>
                <h3>Todo List</h3>
                <TodoList />
            </div>
        )
    }
}

export default Todo