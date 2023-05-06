import {useContext} from 'react'
import {TaskConstext} from '../context/TaskContext'
function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskConstext)
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize' >{task.title}</h1>
      <p className='text-grey-500 text-sm'>{task.description}</p>
      <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
