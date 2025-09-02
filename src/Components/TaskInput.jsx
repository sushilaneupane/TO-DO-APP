function TaskInput({ newTask, setNewTask, addTask, error }) { // <-- accept error
  return (
    <div className="flex flex-col mb-4">
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
          className="flex-1 px-3 py-2 rounded-l-md border-2 border-white"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default TaskInput;
