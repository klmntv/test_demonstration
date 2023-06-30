import { useEffect, useRef, useState } from "react"
import { transformCol } from "./hooks/func"
import { ListPanel } from "./components/list-panel/column"
import { Graph } from "./models"
import { Select } from "./components/select"
import "./index.css"
import { unravelGraph } from "./hooks/unravelGraph"
import graphsMock from "../../../mocks/graphs"

function App() {
  const [columns, setColumns] = useState<any>([])
  const [graphs, setGraphs] = useState<Graph>({ nodes: [], edges: [] })
  const [select, setSelect] = useState([])
  const [value, setValue] = useState<number | null>()

  const appRef = useRef<any>([])

  useEffect(() => {
    setSelect([0, 1, 2])
  }, [])

  useEffect(() => {
    const start = async () => {
      setGraphs(graphsMock[value!])

      setColumns(
        unravelGraph(
          graphsMock[value!],
          transformCol(JSON.parse(JSON.stringify(graphsMock[value!]))),
          4
        )
      ) //последний параметр - сколько раз нужно пройтись по графу
      if (appRef.current) {
        appRef.current = []
      }
    }
    if (value !== null) {
      start()
    }
  }, [value])

  return (
    <div className="wrapper">
      <div className="graphs">
        {columns.length && graphs.nodes.length ? (
          columns.map((el: any, i: number) => (
            <ListPanel
              appRef={appRef}
              key={JSON.stringify(el)}
              col={el}
              list={graphs}
            />
          ))
        ) : (
          <h1>Выберите график</h1>
        )}
      </div>
      <div className="navbar">
        <Select value={value} onChange={setValue} data={select} />
      </div>
    </div>
  )
}

export default App
