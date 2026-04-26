import React from 'react'

const CompletedTask = ({data}) => {
  const taskData = data || {category: 'General', date: '20 Feb 2024', title: 'Make a YouTube Video', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'};
  return (
    <div className='flex-shrink-0 w-[300px] h-full p-5 bg-green-400 rounded-xl items-center'>
      <div className='flex justify-between text-sm px-3 py-1'>
        <h3 className='bg-red-600 px-2 rounded'>{taskData.category}</h3>
        <h4 className='text-sm'>{taskData.date}</h4>
      </div>
      <h2 className='mt-2 text-2xl font-semibold'>{taskData.title}</h2>
      <p className='text-sm mt-2'>
        {taskData.description}
      </p>
      <div className='flex justify-between mt-4'>
        <button className='bg-blue-500 px-2 py-1 text-sm w-full'>Task Completed</button>
      </div>
    </div>
  )
}

export default CompletedTask
