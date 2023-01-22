import styles from './Task.module.css'
import { Trash, Circle } from 'phosphor-react'
import checkIcon from '../assets/check.svg'

interface Task {
  content: string;
  check: boolean;
  id: string;
}

interface TaskProps {
  contentTask: Task;
  deleteTask: (taskId: string) => void;
  checkTask: (taskId: string) => void;
}

export function Task(props: TaskProps) {


  function checkBtn() {
    if (!props.contentTask.check) {
      return <Circle size={24} />
    } else {
      return <img src={checkIcon} />
    }
  }

  function checkSpan() {
    if (!props.contentTask.check) {
      return ''
    } else {
      return styles.done
    }
  }

  function deleteTask() {
    props.deleteTask(props.contentTask.id)
  }

  function checkTask() {
    props.checkTask(props.contentTask.id)
  }


  return (
    <div>
      <section className={styles.task}>
        <section>
          <div onClick={checkTask} className={styles.checkBtn}>{checkBtn()}</div>
          <span className={checkSpan()}>{props.contentTask.content}</span>
        </section>
        <div onClick={deleteTask} className={styles.deleteBtn}><Trash size={20} /></div>
      </section>
    </div>
  )
}

