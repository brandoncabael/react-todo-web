import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            itemName: ''
        }
        this.done = this.done.bind(this);
        this.delete = this.delete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.addItem = this.addItem.bind(this);
        this.itemNameChange = this.itemNameChange.bind(this);
    }


    componentDidMount() {
        fetch('http://localhost:3000/todos', {
            method: 'GET',
            headers: {
                Authorization: sessionStorage.getItem('token')
            }
        }).then(response => response.json())
        .then(data => {
            let todos = [];
            let items = [];
            for (let i in data) {
            todos.push(
                <div>
                <h2>{data[i].title}</h2>
                <button onClick={e => this.deleteTodo(e, data[i].id)}>Delete?</button>
                <form onSubmit={this.addItem(data[i].id)}>
                <lable>
                Add Item: <br />
                    <input type="text" name="name" />
                </lable>
                <input type="submit" name="submit" />
                </form>
                </div>
        );
                for (let j in data[i].items) {
                todos.push(
                    <div>
                <table key={data[i].id}>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Task</td>
                            <td>Done?</td>
                            <td>Mark as Done?</td>
                            <td>Delete?</td>
                        </tr>
                        <tr>
                            <td>{data[i].items[j].id}</td>
                            <td>{data[i].items[j].name}</td>
                            <td>
                                {data[i].items[j].done.toString()}
                            </td>
                            <td>
                                <button onClick={e => this.done(e, data[i].items[j].id, data[i].id)} >Done</button>
                            </td>
                            <td>
                                <button onClick={e => this.delete(e, data[i].items[j].id, data[i].id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
                );
                }

                
            }
            this.setState({todos: todos});
        })
    }

    done(e, id, todo) {
        let address = "http://localhost:3000/todos/" + todo + "/items/" + id;
        let body = {
            method: 'PUT',
            headers: {
                Authorization: sessionStorage.getItem('token')
            },
            body: {
                done: true
            }
        }
        fetch(address, body)
    }

    delete(e, id, todo) {
        let address = "http://localhost:3000/todos/" + todo + "/items/" + id;
        let body = {
            method: 'DELETE',
            headers: {
                Authorization: sessionStorage.getItem('token')
            }
        }
        fetch(address, body)
    }

    deleteTodo(e, todo) {
        let address = "http://localhost:3000/todos/" + todo;
        let body = {
            method: 'DELETE',
            headers: {
                Authorization: sessionStorage.getItem('token')
            }
        }
        fetch(address, body)
    }

    addTodo(event) {
        let data = new FormData(event.target);
        let address = "http://localhost:3000/todos";
        let body = {
            method: 'POST',
            headers: {
                Authorization: sessionStorage.getItem('token')
            },
            body: data
        }
        fetch(address, body)
    }

    itemNameChange(key, event) {
        const newState = {};
        newState[key] = event.target.value;
        this.setState(newState);
        console.log(this.state.itemName)
    }

    addItem(todo) {
        let data = new FormData();
        let address = "http://localhost:3000/todos/" + todo + "/items";
        let body = {
            method: 'POST',
            headers: {
                Authorization: sessionStorage.getItem('token')
            },
            body: data
        }
        fetch(address, body)
    }

    render(){
        return(
            <div>
                <h3>Create Todo</h3>
                <form onSubmit={this.addTodo}>
                <lable>
                    Project: <br />
                <input type="text" name="title" />
                <br />
                </lable>
                <input type="submit" name="submit" />
                </form>
                
                {this.state.todos}
            </div>
        )
    }
}

export default TodoList