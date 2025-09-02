import React, { useState, useEffect } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import EditModal from "./Components/EditModal";
import { FaTrash, FaEdit } from "react-icons/fa";


function App() {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
    ];
  });

  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 const addTask = () => {
    const trimmedTask = newTask.trim();

    if (!trimmedTask) {
      setError("Task cannot be empty!");
      return;
    }
    if (trimmedTask.length < 5) {
      setError("Task must be at least 5 characters long!");
      return;
    }
    if (trimmedTask.length > 60) {
      setError("Task cannot be more than 50 characters!");
      return;
    }

    const currentDate = new Date().toLocaleString();
    setTasks([
      ...tasks,
      { id: Date.now(), text: trimmedTask, completed: false, date: currentDate }
    ]);

    setNewTask("");  
    setError("");    
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

const saveEdit = () => {
  setTasks(
    tasks.map((task) => {
      if (task.id === editingTask) {

        if (task.text !== editText) {
          const currentDate = new Date().toLocaleString();
          return { ...task, text: editText, editedDate: currentDate };
        }
        return task;
      }
      return task;
    })
  );

  setEditingTask(null);
  setEditText("");
};


  return (
    <>

<div className="flex items-start justify-center bg-gradient-to-b from-gray-200 to-white min-h-screen">
  <div className="bg-black text-white p-6 rounded-2xl shadow-lg border border-blue-500 w-full
    max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col h-screen">
       <div className="flex-shrink-0">
        <TaskInput
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
           error={error} 
        />
        <h2 className="text-xl font-bold mb-3 text-center">Task List</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto my-3">
        

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          startEditing={startEditing}
        />
</div>

        <div className="flex-shrink-0 border-t border-blue-500 mt-4 pt-2 text-center text-sm">
          Completed: {tasks.filter((t) => t.completed).length} | Uncompleted:{" "}
          {tasks.filter((t) => !t.completed).length}
        </div>
      </div>

      {editingTask && (
        <EditModal
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
          cancelEdit={() => setEditingTask(null)}
        />
      )}
    </div>
    </>
  );
}

export default App;
