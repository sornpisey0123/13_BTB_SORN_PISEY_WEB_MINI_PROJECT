import React from 'react'
import TodoCardComponent from './TodoCardComponent'

export default function WorkingOnHeader() {
  return (
    <div className='w-full'>
        <h1>WORKING ON</h1>
        <div className="divider divider-info"></div>
        <TodoCardComponent/>
        <TodoCardComponent/>
    </div>
  )
}
