import { useEffect, useState } from "react"
import { GraphData } from "../types/graph"
import graphs from "../../../../mocks/graphs"
const useGraph = (id: number | null) => {
  const [graph, setGraph] = useState<GraphData | null>({
    nodes: [],
    edges: [],
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        setLoading(true)
        if (id === null) {
          setGraph(null)
          setLoading(false)
          return
        }
        const response = graphs[id]
        const data: GraphData = response
        setGraph(data)
        setLoading(false)
      } catch (error) {
        setError(error as Error)
        setLoading(false)
      }
    }

    fetchGraph()
  }, [id])

  return { graph, loading, error }
}

export default useGraph
