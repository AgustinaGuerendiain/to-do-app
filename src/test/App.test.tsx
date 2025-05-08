import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

describe("App", () => {
  test("debería mostrar el título correctamente", () => {
    render(<App />);
    const title = screen.getByText("Lista de Tareas");
    expect(title).toBeInTheDocument();
  });

  test("debería agregar una tarea", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Agregar tarea");
    const addButton = screen.getByText("Agregar");

    userEvent.type(input, "Tarea de prueba");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Tarea de prueba")).toBeInTheDocument();
    });
  });

  test("debería marcar una tarea como completada", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Agregar tarea");
    const addButton = screen.getByText("Agregar");

    userEvent.type(input, "Tarea para completar");
    userEvent.click(addButton);

    const task = await screen.findByText("Tarea para completar");

    const checkbox = task.querySelector('input[type="checkbox"]')!;
    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("debería eliminar una tarea", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Agregar tarea");
    const addButton = screen.getByText("Agregar");

    userEvent.type(input, "Tarea para eliminar");
    userEvent.click(addButton);

    const task = await screen.findByText("Tarea para eliminar");

    const deleteButton = task.querySelector("button");
    userEvent.click(deleteButton!);

    expect(task).not.toBeInTheDocument();
  });
});
