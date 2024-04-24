import React from 'react'
import TodoCardComponent from './TodoCardComponent'

export default function Completeheader() {
  return (
    <div className='w-full'>
        <h1>COMPLETE</h1>
        <div className="divider divider-success"></div>
        <TodoCardComponent/>
        <TodoCardComponent/>
    </div>
  )
}
