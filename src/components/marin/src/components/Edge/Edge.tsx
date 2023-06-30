import React from 'react';
import { GraphEdge, GraphNode } from '../../types/graph';
import useEdgePosition from '../../hooks/useEdgePosition';
import s from './Edge.module.css';

type Props = {
  edge: GraphEdge;
  columns: GraphNode[][];
};

const Edge = ({ edge, columns }: Props) => {
  const rects = useEdgePosition(edge.fromId, edge.toId, columns);

  return (
    <svg className={s.edge}>
      <defs>
        <marker
          id="arrow"
          markerWidth="20"
          markerHeight="8"
          refX="20"
          refY="4"
          orient="auto"
          fill="#444444"
        >
          <polygon points="0 0, 20 4, 0 8" />
        </marker>
      </defs>
      {rects?.from && rects?.to && (
        <line
          className={s.line}
          x1={rects.from.right}
          y1={rects.from.bottom - rects.from.height / 2}
          x2={rects.to.left}
          y2={rects.to.bottom - rects.to.height / 2}
          stroke="#444444"
          markerEnd="url(#arrow)"
        />
      )}
    </svg>
  );
};

export default Edge;
