import React, { Component } from 'react';
import TodoList from './TodoList'
import Todo from './Todo'
import TodoListContainer from './containers/TodoListContainer';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderMarkAllComplete = () => {
        return (
            <div>
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all" onClick={()=>this.props.markAllComplete()}>Mark all as complete</label>
            </div>
        )
    }

    render() {
        if (this.props.count === 0) { return null }
        return (
            <section className="main">
                {this.renderMarkAllComplete()}
                <TodoListContainer />
            </section>
        )
            {/*
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                     <!-- These are here just to show the structure of the list items -->
                        <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> 
                    <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" defaultChecked />
                            <label>Taste JavaScript</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" defaultValue="Create a TodoMVC template" />
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Buy a unicorn</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" defaultValue="Rule the web" />
                    </li>
                </ul>
            </section> */}
    }
}

export default Main