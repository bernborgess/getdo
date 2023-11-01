import { FormEvent, useState } from "react";
import { createTask } from "../../services/createTask";
import { deleteTask } from "../../services/deleteTask";
import { getTasks } from "../../services/getTasks";

export function Home() {
  const [tasks, setTasks] = useState([] as Task[]);
  const [day, setDay] = useState(0);
  const [title, setTitle] = useState("");

  async function refreshTasks() {
    setTasks(await getTasks());
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await createTask({ day, title });
    await refreshTasks();
  }

  async function handleDelete(id: string) {
    const res = await deleteTask(id);
    console.log(res);
    await refreshTasks();
  }

  return (
    <div style={{ flex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }} >
      <div>
        <h1> Home </h1>
      </div >

      <div >
        <div
          style={{ display: "flex", gap: 100, justifyContent: "space-between" }}
        >
          <h3>DAY</h3>
          <h3>TITLE</h3>
          <h3>DELETE</h3>
        </div>

        {tasks.map((task, index) => (
          <div key={index}
            style={{ display: "flex", gap: 100, justifyContent: "space-between" }}
          >
            <h3>{task.day}</h3>
            <h3>{task.title}</h3>
            <h3 onClick={() => handleDelete(task.id)}>X</h3>
          </div>)
        )}
        <button onClick={refreshTasks}>REFRESH LIST</button>
      </div>


      <form onSubmit={handleSubmit}>
        <label> Title:
          <input type="text" name="title"
            value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label> Day:
          <input type="number" name="day"
            value={day} onChange={(e) => setDay(Number(e.target.value))}
          />
        </label>
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}