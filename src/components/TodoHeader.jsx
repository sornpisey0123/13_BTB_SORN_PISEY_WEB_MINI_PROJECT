import React from 'react'
import TodoCardComponent from './TodoCardComponent'

export default function TodoHeader() {
  return (
    <div className='w-full '>
        <h1>TODO</h1>
        {/* <hr className="divider divider-warning" /> */}
        <div className="divider divider-warning"></div>
        <TodoCardComponent/>
        <TodoCardComponent/>
    </div>
  )
}
