/* MAGIC STRINGS & CONSTANTS */

const TaskStatus = {
  TODO: 0,
  IN_PROGRESS: 1,
  DONE: 2,
};

const Status = {
  [TaskStatus.TODO]: "To Do",
  [TaskStatus.IN_PROGRESS]: "In Progress",
  [TaskStatus.DONE]: "Done",
};

const TO_ARCHIVE = "To Archive";

export { TaskStatus, Status, TO_ARCHIVE };
