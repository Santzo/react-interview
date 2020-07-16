import React from 'react';

function AddTodo(props) {
    return (
        <form
            className="wrapper"
            style={{ 'gridTemplateColumns': '7fr 2fr' }}
            onSubmit={props.onSubmit}>
            <input
                className="add-todo-input-field"
                placeholder="Add a new todo"
                value={props.newTodoName}
                onChange={props.onInputChange}
            />
            <button
                className="btn btn-submit"
                type="submit"
                value="Submit">
                Add
                </button>
        </form>
    );
}
export default AddTodo;