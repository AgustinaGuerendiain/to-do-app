import { useState } from "react";
import {
  FunnelIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

type FilterButtonsProps = {
  setFilter: React.Dispatch<
    React.SetStateAction<"todas" | "completadas" | "pendientes">
  >;
};

export const FilterButtons = ({ setFilter }: FilterButtonsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<
    "todas" | "completadas" | "pendientes"
  >("todas");

  const handleSelect = (value: typeof selected) => {
    setSelected(value);
    setFilter(value);
    setIsOpen(false);
  };

  return (
    <div className="inline-block text-left mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f2f9ff] flex items-center justify-between px-3 py-2 w-full sm:w-44 rounded-lg cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <FunnelIcon className="w-5 h-5 text-blue-500" />
          <span className="capitalize font-bold text-blue-500">{selected}</span>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-4 h-4 text-blue-500" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 text-blue-500" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute  w-full sm:w-44 bg-white border border-gray-200 rounded shadow-md text-sm">
          {["todas", "completadas", "pendientes"].map((option) => (
            <li key={option}>
              <button
                onClick={() => handleSelect(option as typeof selected)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition capitalize"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
