
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBoard, deleteBoard, updateBoard } from '../features/boards/boardsSlice';
import AddBoard from './AddBoard';
import EditBoardModal from './EditBoardModal';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';


const BoardList = () => {
  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEditClick = (board) => {
    setSelectedBoard(board);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to convert image to base64 string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleAddBoard = async (boardData, imageFile) => {
    setLoading(true);
    try {
      if (imageFile) {
        const base64Image = await convertToBase64(imageFile);
        boardData.image = base64Image; // Store base64 image string
      }
      dispatch(addBoard(boardData));
    } catch (error) {
      console.error("Error adding board:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white font-roboto">
      <h2 className="text-3xl font-semibold mb-6">Projects Board</h2>

      <div className="mb-6">
        <AddBoard onAddBoard={handleAddBoard} />
      </div>

      {loading && <div className="text-center text-blue-500">Loading...</div>}

      {boards.length === 0 ? (
        <p className="text-gray-500">No boards available. Please add a board.</p>
      ) : (
        <ul className="flex items-center gap-4 mb-4 flex-wrap">
          {boards.map((board) => (
            <li key={board.id} className="w-[32%]">
              <div className="bg-gray-100 hover:bg-gray-200 transition-all rounded-lg shadow-md shadow-neon-green">
                <div className="">
                  {board.image ? (
                    <img
                      src={board.image} // Display base64 image
                      alt="Project"
                      className="w-full h-[200px] object-cover object-top rounded-t-lg"
                    />
                  ) : (
                    <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-xl capitalize font-semibold">{board.name}</h3>
                    <p className="text-gray-600">Manager: {board.projectManager}</p>
                    <p className="text-gray-600">Period: {board.projectPeriod}</p>
                    <p className="text-gray-600">Technologies: {board.technologies.join(", ")}</p>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-4 p-4">
                  <button
                    onClick={() => navigate(`/board/${board.id}`)}
                    className=" bg-black hover:bg-neon-green rounded-full p-2 transition-all ease-in-out"
                  >
                   < FaEye className='text-neon-green hover:text-black transition-all ease-in-out text-xl'/>
                  </button>

                  <button
                    onClick={() => handleEditClick(board)}
                    className=" bg-black hover:bg-neon-green transition-all ease-in-out rounded-full p-2"
                  >
                    <FaEdit className='text-neon-green transition-all ease-in-out hover:text-black text-xl'/>
                   
                  </button>

                  <button
                    onClick={() => dispatch(deleteBoard(board.id))}
                    className=" bg-black hover:bg-neon-green transition-all ease-in-out rounded-full p-2"
                  >
                    <FaTrashAlt className='text-neon-green transition-all ease-in-out hover:text-black text-xl'/>
                  
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedBoard && (
        <EditBoardModal
          board={selectedBoard}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default BoardList;

