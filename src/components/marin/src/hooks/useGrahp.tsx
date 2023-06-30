import { useEffect, useState } from 'react';
import { fetchGraph } from '../api';
import Graph from '../types/graph';

const useGraph = (id: string): Graph => {
  const [selectedGraph, setSelectedGraph] = useState<Graph>({ edges: [], nodes: [] });

  const getGraph = (id: string) => {
    fetchGraph(id).then((graph) => setSelectedGraph(graph));
  };

  useEffect(() => {
    id && getGraph(id);
  }, [id]);

  return selectedGraph;
};

export default useGraph;
