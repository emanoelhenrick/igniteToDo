import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import rocketLogo from "./assets/rocket-logo.svg";
import { InputTask } from "./components/InputTask";
import { TaskSection } from "./components/TasksSection";


function App() {

  interface Task {
    content: string;
    check: boolean;
    id: string;
  }

  const [taskList, setTasklist] = useState<Array<Task>>([]);

  function generateID() {
    const array = new Uint32Array(4);
    window.crypto.getRandomValues(array);
    let str = "";
    for (let i = 0; i < array.length; i++) {
      str += array[i].toString(16);
    }
    return str;
  }

  function addTask(content: string) {
    const newTask = {
      content: content,
      check: false,
      id: generateID()
    };
    setTasklist([...taskList, newTask]);
  }

  function deleteTask(taskId: string) {
    const newTasks = taskList.filter(task => task.id !== taskId);
    setTasklist(newTasks);
  }

  function checkTask(taskId: string) {

    const newTasks = taskList.map(task => {
      if (task.id === taskId) {
        if (task.check === true) {
          task.check = false;
        } else {
          task.check = true;
        }
        return task;
      }
      return task;
    });

    setTasklist(newTasks);
  }

  function progressTasks() {
    const tasksCompleted = taskList.filter(task => task.check === true);
    return tasksCompleted.length;
  }

  return (
    <div>

      <header className={styles.header}>
        <img src={rocketLogo} />
        <h1>to<span>do</span></h1>
      </header>

      <div className={styles.container}>
        <InputTask onAddTask={addTask} />

        <TaskSection
          content={taskList}
          deleteTask={deleteTask}
          checkTask={checkTask}
          tasksCreated={taskList.length}
          tasksProgress={progressTasks()}
        />
      </div>
    </div>
  );
}

export default App;
