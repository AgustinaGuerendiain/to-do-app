import React from "react";
import type { Task } from "../hooks/useTasks";
import { TrashIcon } from "@heroicons/react/24/outline";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onRemove,
}) => (
  <li className="flex items-center justify-between py-3 px-4 bg-[#f2f9ff] rounded-lg hover:bg-blue-100 transition">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 rounded cursor-pointer"
      />
      <span
        className={`text-base sm:text-lg ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </span>
    </div>

    <button
      onClick={() => onRemove(task.id)}
      className="p-2 text-red-500 hover:text-red-600 focus:outline-none cursor-pointer"
      aria-label="Eliminar tarea"
    >
      <TrashIcon className="w-5 h-5" />
    </button>
  </li>
);
