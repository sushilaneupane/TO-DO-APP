import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete, startEditing }) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          startEditing={startEditing}
        />
      ))}
    </div>
  );
}

export default TaskList;
