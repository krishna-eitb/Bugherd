import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn, deleteColumn, renameColumn } from '../features/columns/columnsSlice';

const ColumnList = ({ boardId }) => {
  const dispatch = useDispatch();
  const columns = useSelector((state) =>
    state.columns.columns.filter((column) => column.boardId === boardId)
  );

  const [newColumnName, setNewColumnName] = useState('');
  const [editingColumnId, setEditingColumnId] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleAddColumn = () => {
    if (newColumnName) {
      const newColumn = {
        id: Date.now(),
        name: newColumnName,
        boardId,
      };
      dispatch(addColumn(newColumn));
      setNewColumnName('');
    }
  };

  const handleEditColumn = (id) => {
    setEditingColumnId(id);
    const column = columns.find((col) => col.id === id);
    setEditedName(column.name);
  };

  const handleSaveEdit = () => {
    dispatch(renameColumn({ id: editingColumnId, name: editedName }));
    setEditingColumnId(null);
    setEditedName('');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Columns</h3>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
          placeholder="New column name"
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={handleAddColumn}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {columns.map((column) => (
          <li key={column.id} className="p-3 bg-white rounded shadow">
            {editingColumnId === column.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="border rounded p-2 flex-1"
                />
                <button
                  onClick={handleSaveEdit}
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span>{column.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditColumn(column.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteColumn(column.id))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColumnList;
