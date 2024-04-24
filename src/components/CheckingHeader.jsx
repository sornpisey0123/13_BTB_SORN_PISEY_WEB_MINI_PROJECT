import React from 'react'
import TodoCardComponent from './TodoCardComponent'

export default function CheckingHeader() {
  return (
    <div className='w-full'>
        <h1>CHECKING</h1>
        <div className="divider divider-error"></div>
        <TodoCardComponent/>
        <TodoCardComponent/>
    </div>
  )
}
