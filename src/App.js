import React, { useState } from "react";
import "./index.css"
function App() {
  // State to hold the tasks
  const [tasks, setTasks] = useState([]);
  // State to hold the new task input
  const [newTask, setNewTask] = useState("");

  // Add new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Remove task
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">To-Do List</h1>
        
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddTask}
            className="ml-3 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
          >
            Add Task
          </button>
        </div>
        
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm cursor-pointer 
                ${task.completed ? "line-through text-gray-400" : "text-black"}`}
              onClick={() => toggleTaskCompletion(index)}
            >
              <span>{task.text}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggle when clicking remove button
                  handleRemoveTask(index);
                }}
                className="ml-3 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
