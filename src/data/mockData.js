export const todoTasks = [
  {
    id: 1,
    title: "Task 1",
    status: 0,
  },
  {
    id: 2,
    title: "Task 2",
    status: 0,
  },
  {
    id: 3,
    title: "Task 3",
    status: 0,
  },
  {
    id: 4,
    title: "Task 4",
    status: 0,
  },
  {
    id: 5,
    title: "Task 5",
    status: 0,
  },
  {
    id: 6,
    title: "Task 6",
    status: 2,
  },
  {
    id: 7,
    title: "Task 7",
    status: 2,
  },
];

const columns = [
  { title: "To Do", status: 0 },
  { title: "In Progress", status: 1 },
  { title: "Done", status: 2 },
];

const API = "https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks";

export { columns, API };
