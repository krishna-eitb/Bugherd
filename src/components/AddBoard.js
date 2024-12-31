// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addBoard } from '../features/boards/boardsSlice';
// import  {toast} from 'react-toastify'; // Correct import
// import 'react-toastify/dist/ReactToastify.css';  // Import styles

// const AddBoard = () => {
//   const [boardName, setBoardName] = useState('');
//   const dispatch = useDispatch();

//   const handleAddBoard = () => {
//     if (boardName) {
//       const newBoard = {
//         id: Date.now(), // Unique ID based on timestamp
//         name: boardName,
//       };
//       dispatch(addBoard(newBoard));
//       setBoardName(''); // Clear the input field after adding

//       // Show success notification
//       toast.success('Board added successfully!', {
//         position: 'top-right', // Correct position
//         autoClose: 2000,  // Make sure autoClose is 2000 (or 3000)
//         hideProgressBar: true, // Hide progress bar
//         closeButton: true, // Show close button
//       });
//     } else {
//       toast.error('Please enter a board name!', {
//         position: 'top-right', // Correct position
//         autoClose: 2000,  // Make sure autoClose is 2000 (or 3000)
//         hideProgressBar: true, // Hide progress bar
//         closeButton: true, // Show close button
//       });
//     }
//   };

//   return (
//     <div className="mb-4 font-roboto">
//       <input
//         type="text"
//         value={boardName}
//         onChange={(e) => setBoardName(e.target.value)}
//         placeholder="Enter Board Name"
//         className="border-2 border-[#bfeb9c]   p-3  rounded-lg"
//       />
//       <button
//         onClick={handleAddBoard}
//         className="ml-5 p-3 bg-[#bfeb9c] text-lg   font-semibold rounded-full"
//       >
//         Add Board
//       </button>

     
//     </div>
//   );
// };

// export default AddBoard;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addBoard } from '../features/boards/boardsSlice';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaPlus } from 'react-icons/fa';

// const AddBoard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [boardName, setBoardName] = useState('');
//   const [projectManager, setProjectManager] = useState('');
//   const [image, setImage] = useState(null);
//   const [projectPeriod, setProjectPeriod] = useState('');
//   const [technologies, setTechnologies] = useState('');
//   const dispatch = useDispatch();

//   const handleAddBoard = () => {
//     if (boardName && projectManager && projectPeriod && technologies) {
//       const newBoard = {
//         id: Date.now(),
//         name: boardName,
//         projectManager,
//         image,
//         projectPeriod,
//         technologies: technologies.split(',').map((tech) => tech.trim()),
//       };
//       dispatch(addBoard(newBoard));
//       setBoardName('');
//       setProjectManager('');
//       setImage(null);
//       setProjectPeriod('');
//       setTechnologies('');
//       setIsModalOpen(false);

//       toast.success('Board added successfully!', {
//         position: 'top-right',
//         autoClose: 2000,
//         hideProgressBar: true,
//         closeButton: true,
//       });
//     } else {
//       toast.error('Please fill out all fields!', {
//         position: 'top-right',
//         autoClose: 2000,
//         hideProgressBar: true,
//         closeButton: true,
//       });
//     }
//   };

//   return (
//     <div className="font-roboto">
//       {/* Add Board Button with + Icon */}
//       <button
//         className="flex items-center p-3 bg-[#bfeb9c] text-lg font-semibold rounded-full hover:bg-[#a9d88c] transition-all"
//         onClick={() => setIsModalOpen(true)}
//       >
//         <FaPlus className="mr-2" /> Add Board
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
//             <input
//               type="text"
//               value={boardName}
//               onChange={(e) => setBoardName(e.target.value)}
//               placeholder="Project Name"
//               className="border p-2 w-full mb-3 rounded-md"
//             />
//             <input
//               type="text"
//               value={projectManager}
//               onChange={(e) => setProjectManager(e.target.value)}
//               placeholder="Project Manager"
//               className="border p-2 w-full mb-3 rounded-md"
//             />
//             <input
//               type="file"
//               onChange={(e) => setImage(e.target.files[0])}
//               className="border p-2 w-full mb-3 rounded-md"
//             />
//             <input
//               type="text"
//               value={projectPeriod}
//               onChange={(e) => setProjectPeriod(e.target.value)}
//               placeholder="Project Period"
//               className="border p-2 w-full mb-3 rounded-md"
//             />
//             <input
//               type="text"
//               value={technologies}
//               onChange={(e) => setTechnologies(e.target.value)}
//               placeholder="Technologies (comma-separated)"
//               className="border p-2 w-full mb-3 rounded-md"
//             />
//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={handleAddBoard}
//                 className="p-2 bg-[#bfeb9c] text-lg font-semibold rounded-md hover:bg-[#a9d88c] transition-all"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="p-2 bg-red-500 text-lg text-white font-semibold rounded-md hover:bg-red-600 transition-all"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddBoard;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../features/boards/boardsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

// Function to convert image to base64
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const AddBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [projectManager, setProjectManager] = useState('');
  const [image, setImage] = useState(null);
  const [projectPeriod, setProjectPeriod] = useState('');
  const [technologies, setTechnologies] = useState('');
  const dispatch = useDispatch();

  const handleAddBoard = async () => {
    if (boardName && projectManager && projectPeriod && technologies) {
      const newBoard = {
        id: Date.now(),
        name: boardName,
        projectManager,
        projectPeriod,
        technologies: technologies.split(',').map((tech) => tech.trim()),
      };

      // If an image is selected, convert it to base64 and add it to the new board
      if (image) {
        const base64Image = await convertToBase64(image);
        newBoard.image = base64Image;
      }

      dispatch(addBoard(newBoard));

      // Reset form values
      setBoardName('');
      setProjectManager('');
      setImage(null);
      setProjectPeriod('');
      setTechnologies('');
      setIsModalOpen(false);

      toast.success('Board added successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: true,
      });
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
    <div className="font-roboto">
      <button
        className="flex items-center p-3 bg-[#bfeb9c] text-lg font-semibold rounded-full hover:bg-[#a9d88c] transition-all"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus className="mr-2" /> Add Board
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-1/2 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
            <input
              type="text"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              placeholder="Project Name"
              className="border-2 border-neon-green outline-none rounded-full p-4 w-full mb-6 "
            />
            <input
              type="text"
              value={projectManager}
              onChange={(e) => setProjectManager(e.target.value)}
              placeholder="Project Manager"
              className="border-2 border-neon-green outline-none rounded-full p-4 w-full mb-6 "
            />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border-2 border-neon-green outline-none rounded-full p-4 w-full mb-6 "
            />
            <input
              type="text"
              value={projectPeriod}
              onChange={(e) => setProjectPeriod(e.target.value)}
              placeholder="Project Period"
              className="border-2 border-neon-green outline-none rounded-full p-4 w-full mb-6 "
            />
            <input
              type="text"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="Technologies (comma-separated)"
              className="border-2 border-neon-green outline-none rounded-full p-4 w-full mb-6 "
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddBoard}
                className="p-2 bg-[#bfeb9c] text-lg font-semibold rounded-full hover:bg-[#a9d88c] transition-all"
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 bg-red-500 text-lg text-white font-semibold rounded-full hover:bg-red-600 transition-all flex items-center gap-2"
              >
               <FaTrashAlt/> Cancel 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBoard;
