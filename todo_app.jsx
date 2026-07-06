import { useState } from "react";
import { Plus, X, Check } from "lucide-react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aaj RAG revise karo", done: true },
    { id: 2, text: "MCP notes clean up karo", done: false },
    { id: 3, text: "LinkedIn profile update karo", done: false },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input.trim(), done: false }, ...tasks]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div className="min-h-screen w-full flex items-start justify-center pt-16 px-4" style={{ background: "#EFEAE3" }}>
      <div className="w-full max-w-md">
        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8A7F6E" }}>
            Aaj ka kaam
          </p>
          <h1 className="text-3xl font-bold" style={{ color: "#2E2A24", fontFamily: "Georgia, serif" }}>
            Task List
          </h1>
          <p className="text-sm mt-1" style={{ color: "#8A7F6E" }}>
            {doneCount} of {tasks.length} done
          </p>
        </div>

        <div className="flex gap-2 mb-5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Naya task likho..."
            className="flex-1 px-4 py-3 rounded-xl outline-none text-sm"
            style={{ background: "#FFFFFF", border: "1px solid #DDD5C7", color: "#2E2A24" }}
          />
          <button
            onClick={addTask}
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#B5502F" }}
          >
            <Plus size={20} color="white" />
          </button>
        </div>

        <div className="space-y-2">
          {tasks.length === 0 && (
            <p className="text-sm text-center py-8" style={{ color: "#8A7F6E" }}>
              Koi task nahi hai. Ek add karo!
            </p>
          )}
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 px-4 py-3 rounded-xl group"
              style={{ background: "#FFFFFF", border: "1px solid #E6DFD3" }}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                style={{
                  border: task.done ? "none" : "2px solid #CBBFA9",
                  background: task.done ? "#7C8A5E" : "transparent",
                }}
              >
                {task.done && <Check size={14} color="white" strokeWidth={3} />}
              </button>
              <span
                className="flex-1 text-sm"
                style={{
                  color: task.done ? "#B0A691" : "#2E2A24",
                  textDecoration: task.done ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ color: "#B0A691" }}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}