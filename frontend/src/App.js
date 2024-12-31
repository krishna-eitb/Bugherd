import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail"; // Import BoardDetail
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="board" element={<BoardList />} />
            <Route path="board/:boardId" element={<BoardDetail />} /> {/* Board Detail Route */}
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
