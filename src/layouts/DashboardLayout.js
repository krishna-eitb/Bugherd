import React from "react";
import Sidebar from "../components/SideBar";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-grow bg-gray-100 p-6 overflow-auto">
        {children}
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={true}
      />

      </main>
    </div>
  );
};

export default DashboardLayout;
