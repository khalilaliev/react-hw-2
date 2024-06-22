import { useEffect, useState } from "react";
import Button from "../Button/Button";

const CardItem = ({ text, tasks, onChangeStatus }) => {
  const [lenghtIndex, setLenghtIndex] = useState(tasks.length);
  useEffect(() => {
    setLenghtIndex(tasks.length);
  }, [tasks]);
  return (
    <>
      <div className="card h-600 border border-gray-500 border-opacity-50">
        <div className="card-body gap-6">
          <h2 className="card-header text-3xl">
            {text} {lenghtIndex}
          </h2>
          {tasks.map((task) => (
            <div key={task.id} className=" flex items-center gap-3">
              <span className="text-2xl">{task.title}</span>
              {task.status !== 2 && (
                <Button
                  onClick={() => onChangeStatus(task.id, task.status + 1)}
                >
                  {task.status === 0 ? "In Progress" : "Done"}
                </Button>
              )}
              {task.status !== 0 && (
                <Button
                  onClick={() => onChangeStatus(task.id, task.status - 1)}
                >
                  {task.status === 1 ? "To Do" : "In Progress"}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardItem;
