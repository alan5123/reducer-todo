import React from 'react'
import Item from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.item.map(item => (
                <Item
                key={item.id}
                item={item}
                toggleDone={props.toggleDone}
                />

            ))}
        </div>
    )
}

export default TodoList