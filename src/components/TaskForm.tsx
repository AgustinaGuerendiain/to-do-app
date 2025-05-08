import React, { useState } from "react";

type TaskFormProps = {
  addTask: (title: string) => void;
};

export const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agregar tarea"
        className="p-2 border border-gray-300 rounded-lg "
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg cursor-pointer font-bold"
      >
        Agregar
      </button>
    </form>
  );
};
