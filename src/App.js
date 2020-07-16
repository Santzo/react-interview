import React, { useState } from 'react';
import './App.css';
import TodoData from './data/TodoData';
import Todo from './components/Todo';
import TodoHeader from './components/TodoHeader';
import AddTodo from './components/AddTodo';
import { v4 } from 'uuid';

function App() {
    const [emptyTodoWarning, setEmptyTodoWarning] = useState(false);
    const [todos, setTodos] = useState(TodoData);
    const [newTodoName, setNewTodoName] = useState('');

    const onTodoSubmit = event => {
        event.preventDefault();
        // Check if the new todo doesnt have text in it and shows a warning message accordingly.
        if (newTodoName === '') {
            if (emptyTodoWarning) return;
            setEmptyTodoWarning(true);
            setTimeout(() => setEmptyTodoWarning(false), 3000);
            return;
        }
        const newTodos = [...todos];
        // Generate an uuid for the new todo. Using array length as the ID would cause duplicate
        // IDs if the user removes a todo from the middle of the list and then adds new ones. 
        newTodos.push({
            id: v4(),
            name: newTodoName,
            complete: false
        });
        setTodos(newTodos);
        setNewTodoName('');
    }
    const onTodoCompletedClick = event => {
        const id = event.target.value;
        const todoItems = [...todos];
        const item = todoItems.find(item => item.id === id);
        item.complete = !item.complete;
        setTodos(todoItems);
    }

    const onAddTodoInputChange = event => setNewTodoName(event.target.value);

    // Remove a todo by finding its array index
    const onTodoRemoveClick = event => {
        const id = event.target.value;
        const todoItems = [...todos];
        const itemToRemove = todoItems.findIndex(item => item.id === id);
        todoItems.splice(itemToRemove, 1);
        setTodos(todoItems);
    }

    // Map through the todos array to show the todos for the user
    const getTodoItems = () => {
        return todos.map(todo => {
            return <Todo
                key={todo.id}
                todo={todo}
                itemsLength={todos.length}
                onClick={onTodoCompletedClick}
                onRemoveClick={onTodoRemoveClick}
            />
        });
    };

    return (
        <div>
            <h1>Todos</h1>
            <div className="main-wrapper">
                {todos.length > 0 ? <div> < TodoHeader /> {getTodoItems()}</div> : <h3>No todos available.</h3>}
            </div>
            <div className="main-wrapper add-todos-wrapper">
                {emptyTodoWarning && <h3 className="warning-text">Please enter some text for the todo.</h3>}
                <AddTodo
                    onSubmit={onTodoSubmit}
                    newTodoName={newTodoName}
                    onInputChange={onAddTodoInputChange}
                />
            </div>
        </div>
    );
}

export default App;




