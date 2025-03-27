import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <>
      <div className="p-4 h-screen">
        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </>
  );
}

export default EmployeeDashboard;
