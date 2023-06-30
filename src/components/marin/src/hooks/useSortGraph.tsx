import { useEffect, useState } from 'react';
import Graph, { GraphNode } from '../types/graph';
import sortNodes from '../helpers/sortNodes';

const useSortGraph = (graph: Graph): [GraphNode[][], (columns: GraphNode[][]) => void] => {
  const [graphColumns, setGraphColumns] = useState<GraphNode[][]>([]);
  const changeGraphColumns = (columns: GraphNode[][]) => {
    setGraphColumns(columns);
  };

  useEffect(() => {
    changeGraphColumns(sortNodes(graph));
  }, [graph]);

  return [graphColumns, changeGraphColumns];
};

export default useSortGraph;
