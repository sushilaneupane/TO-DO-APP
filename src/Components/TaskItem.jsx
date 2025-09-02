import { FaTrash, FaEdit } from "react-icons/fa";

function TaskItem({ task, deleteTask, toggleComplete, startEditing }) {
  return (
    <div className=" h-full flex justify-between items-center border border-gray-600 px-3 py-2 rounded-md">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <div>
          <p className={task.completed ? "line-through" : ""}>
            {task.text.match(/.{1,25}/g)?.map((chunk, i) => (
              <span key={i}>
                {chunk}
                <br />
              </span>
            ))}
          </p>


          <div className="flex space-x-2 text-xs text-gray-400">
            <small>Added on: {task.date}</small>
            {task.editedDate && (
              <small className="text-yellow-300">Edited on: {task.editedDate}</small>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button onClick={() => deleteTask(task.id)}>
          <FaTrash className="text-red-500 hover:text-red-700" />
        </button>

        <button onClick={() => startEditing(task)}>
          <FaEdit className="text-pink-500 hover:text-pink-700" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
