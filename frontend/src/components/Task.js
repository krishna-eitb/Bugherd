import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../features/tasks/tasksSlice';

const Task = ({ columnId }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.columnId === columnId)
  );

  const handleAddTask = () => {
    if (taskName) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        description,
        columnId,
      };
      dispatch(addTask(newTask));
      setTaskName('');
      setDescription('');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter Task Name"
          className="border p-2 rounded-lg w-full mb-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Task Description"
          className="border p-2 rounded-lg w-full mb-2"
        ></textarea>
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 bg-white shadow rounded-lg relative mb-2"
        >
          <h4 className="text-lg font-bold">{task.name}</h4>
          <p className="text-gray-600 text-sm">{task.description}</p>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="absolute top-2 right-2 text-red-500 hover:text-red-600"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
