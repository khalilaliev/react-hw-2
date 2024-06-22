// import { todoTasks, columns } from "../../data/mockData";
import { columns } from "../../data/mockData";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Card = () => {
  // const [tasks, setTasks] = useState(todoTasks);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTaskData = async () => {
      try {
        const res = await fetch(
          "https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks"
        );
        if (!res.ok) throw new Error("Tasks not found");
        const data = await res.json();
        setTasks(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getTaskData();
  }, []);

  const changeStatusTasks = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const getTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className="container">
      <div className=" min-h-screen flex justify-around items-center">
        {columns.map((column) => (
          <CardItem
            key={column.status}
            text={`${column.title}:`}
            tasks={getTasksByStatus(column.status)}
            onChangeStatus={changeStatusTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
