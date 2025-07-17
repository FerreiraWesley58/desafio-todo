import { Trash } from "phosphor-react";
import styles from "./task.module.css";

// Componente responsável por exibir uma tarefa individual
export function Task({ checked, title, id, onComplete, onDelete }: any) {
  // Marca a tarefa como concluída ou não concluída
  const handleCompleteTask = () => {
    onComplete(id);
  };

  // Remove a tarefa da lista
  const handleDeleteTask = () => {
    onDelete(id);
  };

  return (
    <div className={styles.task}>
      <div>
        {/* Checkbox para marcar a tarefa como concluída */}
        <input
          type="checkbox"
          id={`task-${id}`}
          name={`task-${id}`}
          checked={checked}
          onChange={handleCompleteTask}
        />
        {/* Exibe o título da tarefa */}
        <label htmlFor={`task-${id}`}>{title}</label>
      </div>
      {/* Botão para deletar a tarefa */}
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
