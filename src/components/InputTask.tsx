import React from "react";
import "./InputTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface InputProps {
  onAddTask: (newTask: string) => void
}

export function InputTask({ onAddTask }: InputProps) {

  const [newTask, setNewTask] = useState("");

  function onSubmitTask(event: FormEvent) {
    event.preventDefault();
    onAddTask(newTask);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  const isNewTask = newTask.length === 0;

  return (
    <div>
      <form>
        <input
          onChange={handleNewTaskChange}
          type="text" placeholder='Adicione uma nova tarefa'
          value={newTask}
          required
        />
        <button
          onClick={onSubmitTask}
          type="submit"
          disabled={isNewTask}
        >Criar <PlusCircle size={18} />
        </button>
      </form>
    </div>
  );
}