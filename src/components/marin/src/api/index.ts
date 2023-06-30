import Graph from "../types/graph"
import graphs from "../../../../mocks/graphs"

export const fetchGraphsList = async (): Promise<number[]> => {
  const response = await [0, 1, 2]
  return response
}

export const fetchGraph = async (id: number): Promise<Graph> => {
  const response = await graphs[id]
  return response
}
