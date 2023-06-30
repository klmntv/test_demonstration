import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Graph from "./components/Graph/Graph"
import { fetchGraphsList } from "./api"
import s from "./App.module.css"
import useGraph from "./hooks/useGrahp"

function App() {
  const [graphId, setGraphId] = useState("")
  const [graphList, setGraphList] = useState<number[]>([])

  const graph = useGraph(graphId)

  useEffect(() => {
    fetchGraphsList().then((list) => setGraphList(list))
  }, [])

  return (
    <div className={s.page}>
      <Header
        onChange={setGraphId}
        selectedId={graphId}
        graphList={graphList}
      />
      <main className={s.main}>
        {!!graphId && <Graph selectedGraph={graph} />}
      </main>
    </div>
  )
}

export default App
