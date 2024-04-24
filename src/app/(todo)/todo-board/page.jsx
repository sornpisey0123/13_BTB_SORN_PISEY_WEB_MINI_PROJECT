import CheckingHeader from '@/components/CheckingHeader'
import Completeheader from '@/components/Completeheader'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import TodoCardComponent from '@/components/TodoCardComponent'
import TodoHeader from '@/components/TodoHeader'
import WorkingOnHeader from '@/components/WorkingOnHeader'
import React from 'react'

export default function page() {
  return (
    <div>
        <ListBoardComponentHeader/>
        <div className='flex gap-5 mt-5'>
        <TodoHeader/>
        <WorkingOnHeader/>
        <CheckingHeader/>
        <Completeheader/>
        </div> 
    </div>
  )
}
