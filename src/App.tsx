import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { FilterButtons } from "./components/FilterButtons";
import { useTasks } from "./hooks/useTasks";

const App = () => {
  const {
    tasks,
    addTask,
    toggleTaskCompletion,
    removeTask,
    setFilter,
    loading,
  } = useTasks();

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Lista de Tareas</h1>

        {loading ? (
          <div className="text-center text-gray-500">Cargando tareas...</div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3">
            <TaskForm addTask={addTask} />
            <FilterButtons setFilter={setFilter} />
          </div>
        )}

        {!loading && (
          <TaskList
            tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
          />
        )}
      </div>
    </div>
  );
};

export default App;
