// import { todoTasks, columns } from "../../data/mockData";
import { columns, API } from "../../data/mockData";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Card = () => {
  // const [tasks, setTasks] = useState(todoTasks);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTaskData = async () => {
      try {
        const res = await fetch(API);
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

  const handleDelete = (id) => {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
  };

  // const changeStatusTasks = async (id, newStatus) => {
  //   try {
  //     const res = await fetch(`${API}/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ status: newStatus }),
  //     });
  //     if (!res.ok) throw new Error("Failed");

  //     setTasks(
  //       tasks.map((task) =>
  //         task.id === id ? { ...task, status: newStatus } : task
  //       )
  //     );
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     const res = await fetch(`${API}/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (!res.ok) throw new Error("Failed");
  //     setTasks((prevState) => prevState.filter((item) => item.id !== id));
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

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
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
