import { api } from "../../services/api";

export function Home() {

  async function apiCall() {
    const res = await api.get("tasks");
    console.log(res.data)
  }

  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >

      <div>
        <h1> Home </h1>
      </div >
      <button onClick={apiCall}>
        GET BACK!
      </button>
    </div>
  )
}