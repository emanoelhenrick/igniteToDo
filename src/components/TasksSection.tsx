import React from "react";
import { TaskList } from "./TaskList";

interface Task {
  content: string;
  check: boolean;
  id: string;
}

interface TaskSectionProps {
  content: Task[];
  deleteTask: (taskId: string) => void;
  checkTask: (taskid: string) => void;
  tasksCreated: number;
  tasksProgress: number;
}

export function TaskSection(props: TaskSectionProps) {

  return (
    <div>
      <div>
        <TaskList props={props} />
      </div>
    </div>
  );
}