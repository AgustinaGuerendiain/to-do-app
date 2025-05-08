import React from "react";
import { TaskItem } from "./TaskItem";
import type { Task } from "../hooks/useTasks";

type TaskListProps = {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  removeTask: (id: number) => void;
};

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTaskCompletion,
  removeTask,
}) => {
  return (
    <ul role="list" className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTaskCompletion}
          onRemove={removeTask}
        />
      ))}
    </ul>
  );
};
