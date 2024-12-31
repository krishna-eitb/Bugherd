import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn, deleteColumn, updateColumn } from '../features/columns/columnsSlice';

const Column = ({ boardId }) => {
  const [columnName, setColumnName] = useState('');
  const dispatch = useDispatch();
  const columns = useSelector((state) =>
    state.columns.columns.filter((column) => column.boardId === boardId)
  );

  const handleAddColumn = () => {
    if (columnName) {
      const newColumn = {
        id: Date.now(),
        name: columnName,
        boardId,
      };
      dispatch(addColumn(newColumn));
      setColumnName('');
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="w-full mb-4">
        <input
          type="text"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
          placeholder="Enter Column Name"
          className="border p-2 rounded-lg w-3/4"
        />
        <button
          onClick={handleAddColumn}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add Column
        </button>
      </div>
      {columns.map((column) => (
        <div
          key={column.id}
          className="w-full p-4 bg-white shadow rounded-lg relative"
        >
          <h3 className="text-xl font-bold mb-2">{column.name}</h3>
          <button
            onClick={() => dispatch(deleteColumn(column.id))}
            className="absolute top-2 right-2 text-red-500 hover:text-red-600"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Column;