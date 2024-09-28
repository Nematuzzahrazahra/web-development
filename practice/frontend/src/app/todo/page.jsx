'use client'
import React, {useState} from 'react'

const Todo = () => {

    const [todoList, setTodoList] = useState([])
    const addNewTodod = (e) => {
        if(e.code === 'Enter' && e.target.value.trim() != '') {
            setTodoList([...todoList, e.target.value])
            console.log(todoList)
            e.target.value = ''
        }
    }

  return (
    <div className='h-screen flex-items-c enter flex-col mt-10'>
        <h1 className='text-4xl font-bold mb-8'>my to do list</h1>
        <div className='w-full md:w-1/2'>
            <input type='text'
             className='w-full p-3 border rounded-lg shadow-md mb-4 placeholder-grey-500'
            placeholder='add a new task'
            onKeyDown={addNewTodod} />
        </div>
        <div className='w-full md:w-1/2 bg-yellow-200 shadow-lg rounded-lg p-8'>
            {todoList.length===0 ? (
                <p className='text-center text-gray-500'>No task yet. Add your first task</p>
            ) : (
                todoList.map((todo, index) => (
                    <div key={index} className='flex justify-between items-center mb-3 p-2 rounded-lg bg-yellow-300'>
                        <h5 className='text-lg font-semibold text-gray-800'>{todo}</h5>
                        <button className='bg-red-500 hover: bg-red-700 text white font-bold py-1 px-3 rounded '>Delete</button>
                    </div>
                ))

            )}
        </div>
    </div>
  )
}

export default Todo