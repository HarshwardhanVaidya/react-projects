import { useState } from 'react'
import { useTodo } from '../contexts'
import { BiSolidAddToQueue } from 'react-icons/bi'
const TodoForm = () => {
  const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }
  return (
    <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Add a Task"
              className="w-full border border-gray-200 rounded-l-lg px-3 outline-none duration-150 text-zinc-800 py-3.5 "
              value={todo} 
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className=" rounded-r-lg  p-2 bg-blue-500 text-4xl hover:bg-blue-600  ">
          <BiSolidAddToQueue className=' text-white '/>
          </button>
      </form>
  )
}

export default TodoForm