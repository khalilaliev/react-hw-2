import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Status, TaskStatus, TO_ARCHIVE } from "../../constants/constants";

const CardItem = ({ text, tasks, onChangeStatus, handleDelete }) => {
  const [lengthIndex, setLengthIndex] = useState(tasks.length);

  useEffect(() => {
    setLengthIndex(tasks.length);
  }, [tasks]);

  return (
    <div className="card h-600 border border-gray-500 border-opacity-50">
      <div className="card-body gap-6">
        <h2 className="card-header text-3xl">
          {text} {lengthIndex}
        </h2>
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            <span className="text-2xl">{task.title}</span>
            {task.status !== TaskStatus.DONE && (
              <Button onClick={() => onChangeStatus(task.id, task.status + 1)}>
                {task.status === TaskStatus.TODO
                  ? Status[TaskStatus.IN_PROGRESS]
                  : Status[TaskStatus.DONE]}
              </Button>
            )}
            {task.status !== TaskStatus.TODO && (
              <Button onClick={() => handleDelete(task.id)}>
                {task.status === TaskStatus.IN_PROGRESS
                  ? Status[TaskStatus.TODO]
                  : TO_ARCHIVE}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
