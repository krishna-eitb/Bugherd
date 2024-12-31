import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBoard } from '../features/boards/boardsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to convert image to base64
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const EditBoardModal = ({ board, isOpen, closeModal }) => {
  const [boardName, setBoardName] = useState('');
  const [projectManager, setProjectManager] = useState('');
  const [image, setImage] = useState(null);
  const [projectPeriod, setProjectPeriod] = useState('');
  const [technologies, setTechnologies] = useState('');
  const dispatch = useDispatch();

  // Pre-fill the form with the current board data when modal is open
  useEffect(() => {
    if (isOpen) {
      setBoardName(board.name);
      setProjectManager(board.projectManager);
      setProjectPeriod(board.projectPeriod);
      setTechnologies(board.technologies.join(', ')); // Joining tech array into comma-separated string
      setImage(board.image); // If the image is already saved (base64 string)
    }
  }, [isOpen, board]);

  const handleUpdateBoard = async () => {
    if (boardName && projectManager && projectPeriod && technologies) {
      let updatedImage = image;

      // If a new image is selected, convert it to base64
      if (image instanceof File) {
        updatedImage = await convertToBase64(image);
      }

      const updatedBoard = {
        ...board,
        name: boardName,
        projectManager,
        image: updatedImage,
        projectPeriod,
        technologies: technologies.split(',').map((tech) => tech.trim()),
      };

      dispatch(updateBoard(updatedBoard));

      toast.success('Board updated successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: true,
      });
      closeModal();
    } else {
      toast.error('Please fill out all fields!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: true,
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg transition-all transform">
        <h2 className="text-2xl font-semibold mb-4">Edit Project</h2>

        <input
          type="text"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder="Project Name"
          className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          value={projectManager}
          onChange={(e) => setProjectManager(e.target.value)}
          placeholder="Project Manager"
          className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-indigo-500"
        />

        {image && image instanceof File && (
          <div className="mt-4">
            <p>Selected image: {image.name}</p>
          </div>
        )}

        <input
          type="text"
          value={projectPeriod}
          onChange={(e) => setProjectPeriod(e.target.value)}
          placeholder="Project Period"
          className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          placeholder="Technologies (comma-separated)"
          className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-between mt-4">
          <button
            onClick={handleUpdateBoard}
            className="p-3 bg-indigo-500 text-white text-lg font-semibold rounded-md hover:bg-indigo-600 transition-all"
          >
            Save Changes
          </button>
          <button
            onClick={closeModal}
            className="p-3 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBoardModal;
