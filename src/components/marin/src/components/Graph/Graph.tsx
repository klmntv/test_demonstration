import React, { useEffect, useState } from 'react';
import GraphType, { GraphEdge } from '../../types/graph';
import Edge from '../Edge/Edge';
import s from './Graph.module.css';
import DragnDrop from '../DragnDrop/DragnDrop';
import useSortGraph from '../../hooks/useSortGraph';

type Props = {
  selectedGraph: GraphType;
};

const Graph = ({ selectedGraph }: Props) => {
  const [graphColumns, changeGraphColumns] = useSortGraph(selectedGraph);
  const [edges, setEdges] = useState<GraphEdge[]>(selectedGraph.edges);

  useEffect(() => {
    setEdges(selectedGraph?.edges);
  }, [selectedGraph]);

  return (
    <div className={s.container}>
      <div className={s.columns}>
        {graphColumns.map((col, i) => (
          <DragnDrop
            key={i}
            draggableList={col}
            droppableIndex={i}
            graphColumns={graphColumns}
            changeGraphColumns={changeGraphColumns}
          />
        ))}
      </div>
      {edges.map((edge, i) => (
        <Edge key={i} edge={edge} columns={graphColumns} />
      ))}
    </div>
  );
};

export default Graph;
