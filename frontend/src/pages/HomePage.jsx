import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAddTaskMutation ,useDeleteUserTaskMutation ,useGetTaskQuery ,useUpdateUserTaskMutation } from '../slices/tasksApiSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'



const HomePage = () => {

  // const [tasks ,setTasks] = useState([])
  const [taskText , setTaskText] = useState('')


  const [editingTaskId , setEditingTaskId] = useState(null)
  const [updatedText , setUpdatedText] = useState('')


const {userInfo} = useSelector((state)=>state.auth)

const {
  data: tasks = [],
  isLoading,
  error,
  refetch
} = useGetTaskQuery()
const [addTask] = useAddTaskMutation()
const [deleteTask] = useDeleteUserTaskMutation()
const [updateTask] = useUpdateUserTaskMutation()

      const addTaskHandler =async (e)=>{
        e.preventDefault()
          if(!taskText){
            toast.error('task cannot be empty')
          }
          try {
            const res = await addTask({text : taskText}).unwrap()
            // setTasks([...tasks , res])
            setTaskText('')
            refetch()
            toast.success('task added successfully')

          } catch (err) {
            toast.error(err?.data?.message || err.error)
          }

      }




    const updateTaskHandler = async(id)=>{

            try {

              await updateTask({
                id,
                text : updatedText
              }).unwrap()
              console.log(id)
              setEditingTaskId(null)
              setUpdatedText('')

              refetch()

              toast.success('Task updated')

            } catch (err) {

              toast.error(err?.data?.message || err.error)

            }
          }
    const completeTaskHandler = async(id)=>{

          try {

            await deleteTask(id).unwrap()

            refetch()

            toast.success('Task completed 🎉')

          } catch (err) {

            toast.error(err?.data?.message || err.error)

          }
        }


  return (
    <>
    {userInfo ? (
      <div className="min-h-screen from-blue-950 via-blue-900 to-slate-950 px-6 py-12">

      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome
            <span className="text-blue-400">
              {' '}
              {userInfo.name}
            </span>
            ⚡
          </h1>

          <p className="text-blue-200 text-lg">
            Track your missions and conquer your tasks.
          </p>

        </div>

        {/* Add Task */}
        <form
          onSubmit={addTaskHandler}
          className="flex gap-3 mb-8"
        >

          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl bg-blue-950 border border-blue-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition duration-300"
          >
            Add
          </button>

        </form>

        {/* Tasks Container */}
        <div className="bg-blue-950/40 backdrop-blur-md border border-blue-900 rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-white mb-8">
            Your Tasks
          </h2>

          {tasks.length === 0 ? (
            <div className="text-center py-10 text-blue-300">
              No tasks remaining 🎉
            </div>
          ) : (

            <div className="space-y-5">

              {tasks.map((task) => (

                <div
                  key={task._id}
                  className="bg-blue-900/30 border border-blue-800 rounded-2xl p-5"
                >

                  {/* Task Row */}
                  <div className="flex items-center justify-between gap-4">

                    <p className="text-white text-lg">
                      {task.text}
                    </p>

                    <div className="flex items-center gap-3">

                      {/* Update */}
                      <button
                        onClick={() => {
                          setEditingTaskId(task._id)
                          setUpdatedText(task.text)
                        }}
                        className="px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-white font-medium transition duration-300"
                      >
                        Update
                      </button>

                      {/* Complete */}
                      <button
                        onClick={() =>
                          completeTaskHandler(task._id)
                        }
                        className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium transition duration-300"
                      >
                        ✓
                      </button>

                    </div>

                  </div>

                  {/* Edit Box */}
                  {editingTaskId === task._id && (

                    <div className="mt-5 flex gap-3">

                      <input
                        type="text"
                        value={updatedText}
                        onChange={(e) =>
                          setUpdatedText(e.target.value)
                        }
                        className="flex-1 px-4 py-3 rounded-xl bg-blue-950 border border-blue-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      <button
                        onClick={() =>
                          updateTaskHandler(task._id)
                          
                        }
                        className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition duration-300"
                      >
                        Save
                      </button>

                    </div>

                  )}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </div>) : (<div className="min-h-screen  from-blue-950 via-blue-900 to-slate-950 flex items-center justify-center px-6">
      
      <div className="max-w-3xl text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-blue-400">
            TaskApp
          </span>
        </h1>

        {/* Description */}
        <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10">
          Organize your workflow, track your progress, and stay focused on
          what matters most. TaskApp helps you create, manage, and complete
          tasks with a clean and simple experience built for productivity 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg transition duration-300"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-3 rounded-xl border border-blue-400 text-blue-100 hover:bg-blue-800 transition duration-300"
          >
            Create Account
          </Link>

        </div>

      </div>
    </div>)}

    </>
  )
}

export default HomePage
