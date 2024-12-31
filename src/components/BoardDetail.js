import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ColumnList from "./ColumnList";

const BoardDetail = () => {
  const { boardId } = useParams();
  const board = useSelector((state) =>
    state.boards.boards.find((board) => board.id === parseInt(boardId, 10))
  );

  if (!board) {
    return <p>Board not found.</p>;
  }

  return (
    <div className="p-6 bg-white font-roboto">
      <div className="flex w-[70%] mb-6 items-center gap-[40px] bg-gray-100 hover:bg-gray-200 transition-all rounded-lg shadow-md shadow-neon-green p-6">
        <div className="w-[30%]">
          {" "}
          <img src={board.image} className="w-full rounded-2xl mb-4 h-full object-cover object-top" />
         
        </div>
        <div className="">
        <h2 className="text-3xl font-semibold mb-4">{board.name}</h2>
          <p><span className="text-xl font-semibold mr-2">Manager:</span> {board.projectManager}</p>
          <p><span className="text-xl font-semibold mr-2">Period:</span> {board.projectPeriod}</p>
          <p><span className="text-xl font-semibold mr-2">Technologies:</span> {board.technologies}</p>
        </div>
      </div>

      <ColumnList boardId={board.id} />
    </div>
  );
};

export default BoardDetail;
