export type GraphNode = {
  id: number;
  name: string;
}

export type GraphEdge = {
  fromId: number;
  toId: number;
}

interface Graph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export default Graph;
