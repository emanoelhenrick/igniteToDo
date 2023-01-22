import styles from './TaskList.module.css'
import { Task } from './Task'
import clipIcon from '../assets/Clipboard.svg'

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

interface TKProps {
  props: TaskSectionProps
}


export function TaskList({ props }: TKProps) {

  function renderTasks() {
    if (props.content.length === 0) {
      return (
        <div className={styles.tasksEmpty}>
          <img src={clipIcon} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )
    } else {
      return (
        <div className={styles.tasks}>
          {props.content.map(task => {
            return (
              <Task
                contentTask={task}
                key={task.id}
                deleteTask={props.deleteTask}
                checkTask={props.checkTask}
              />
            )
          })}
        </div>
      )
    }
  }

  return (
    <div>

      <div className={styles.progress}>
        <span>Tarefas criadas <span className={styles.count}>{props.tasksCreated}</span></span>
        <span>Concluídas <span className={styles.count}>{props.tasksProgress}</span></span>
      </div>

      {renderTasks()}


    </div>
  )
}