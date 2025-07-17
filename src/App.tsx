import { PlusCircle, ClipboardText } from "phosphor-react";
import { useCallback, useMemo, useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

// Dados iniciais de exemplo para popular a lista na primeira execução
const data = [
  {
    id: uuidv4(),
    title: "Tarefa 1",
    isDeleted: false,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Tarefa 2",
    isDeleted: false,
    isCompleted: false,
  },
];

export function App() {
  // Estado das tarefas, inicializando do LocalStorage se existir
  const [tasks, setTasks] = useState<any[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : data;
  });
  // Estado do campo de nova tarefa
  const [newTask, setNewTask] = useState("");
  // Contador de tarefas concluídas
  const [totalCompleted, setTotalCompleted] = useState(0);
  // Estado para exibir mensagens rápidas (toast)
  const [toast, setToast] = useState("");
  // Referência para o input, para facilitar o foco automático
  const inputRef = useRef<HTMLInputElement>(null);

  // Sempre que as tarefas mudam, salva no LocalStorage e atualiza o contador de concluídas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTotalCompleted(tasks.filter((task) => task.isCompleted).length);
  }, [tasks]);

  // Atualiza o campo de nova tarefa conforme o usuário digita
  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  // Adiciona uma nova tarefa à lista
  const handleCreateTask = (event: React.FormEvent) => {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isDeleted: false,
        isCompleted: false,
      },
    ]);
    setNewTask("");
    setToast("Tarefa criada com sucesso!");
    setTimeout(() => setToast(""), 1500);
    // Mantém o foco no input para facilitar a adição de várias tarefas
    inputRef.current?.focus();
  };

  // Alterna o status de conclusão da tarefa
  const completeTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  // Remove uma tarefa da lista
  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setToast("Tarefa removida!");
    setTimeout(() => setToast(""), 1500);
  };

  return (
    <>
      <Header />
      {/* Exibe o toast de feedback quando necessário */}
      {toast && (
        <div style={{ position: "fixed", top: 20, right: 20, background: "#333", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 8, zIndex: 1000, boxShadow: "0 2px 8px #0003" }}>{toast}</div>
      )}
      <main className={styles.wrapper}>
        {/* Formulário para adicionar nova tarefa */}
        <form className={styles.newText} onSubmit={handleCreateTask}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Adicione uma tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>
            <div>
              <strong>Concluídas</strong>
              <span>
                {totalCompleted} de {tasks.length}
              </span>
            </div>
          </div>
          <div className={styles.contentBox}>
            {/* Renderiza as tarefas ou uma mensagem caso não haja nenhuma */}
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  checked={task.isCompleted}
                  title={task.title}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                />
              ))
            ) : (
              <>
                <ClipboardText size={56} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <small>Crie tarefas e organize seus itens a fazer</small>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
