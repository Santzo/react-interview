import React from 'react';

// Use React.memo to prevent unnecessary re-rendering. We will only re-render this component
// if the length of the todo items array has changed size, which only happens when the user
// either adds or removes todos from the list.
const Todo = React.memo((props) => {
    // Changed the onClick events from having anonymous functions to avoid unnecessary re-rendering of the
    // component. The todo ID is stored in the JSX element value field instead.
    return (
        <div className="wrapper todos-wrapper" >
            <h3 className="todoName">{props.todo.name}</h3>
            <label className="checkbox-wrapper">
                <input
                    type="checkbox"
                    id="check"
                    defaultChecked={props.todo.complete}
                    value={props.todo.id}
                    hidden
                    onClick={props.onClick}>
                </input>
                <label htmlFor="check" className="checkmark"></label>
            </label>
            <button
                className="btn"
                value={props.todo.id}
                onClick={props.onRemoveClick}>
                Remove
                </button>
        </div >
    );
}, (prevProps, nextProps) => {
    return prevProps.itemsLength === nextProps.itemsLength;
});
export default Todo;
