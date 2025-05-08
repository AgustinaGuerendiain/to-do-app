import { useState, useEffect } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<"todas" | "completadas" | "pendientes">(
    "todas"
  );

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data: Task[] = await response.json();
        setTasks(data.slice(0, 10)); //a modo de ejemplo solo uso los primeros 10
      } catch (error) {
        console.error("Error fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const addTask = (title: string) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completadas") return task.completed;
    if (filter === "pendientes") return !task.completed;
    return true;
  });

  return {
    tasks: filteredTasks,
    addTask,
    toggleTaskCompletion,
    removeTask,
    setFilter,
    loading,
  };
};
