import React, { useState, FC } from 'react';
import s from './DragnDrop.module.css';
import { GraphNode } from '../../types/graph';
import Draggable from './Draggable/Draggable';
import swapArrayElements from '../../helpers/swapArrayElements';

type Props = {
  draggableList: GraphNode[];
  droppableIndex: number;
  graphColumns: GraphNode[][];
  changeGraphColumns: (columns: GraphNode[][]) => void;
};

const DragnDrop: FC<Props> = ({
  draggableList,
  droppableIndex,
  changeGraphColumns,
  graphColumns,
}) => {
  const [draggedElementIndex, setDraggedElementIndex] = useState(-1);

  const handleSwap = (index1: number, index2: number) => {
    const swappedColumn = swapArrayElements(draggableList, index1, index2);
    const updatedGraphColumns = [...graphColumns];
    updatedGraphColumns[droppableIndex] = swappedColumn;

    changeGraphColumns(updatedGraphColumns);
  };

  return (
    <div className={s.column}>
      {draggableList.map(
        (item, i) =>
          item && (
            <Draggable
              key={item.id}
              id={`${item.id}`}
              currentElementIndex={i}
              draggedElementIndex={draggedElementIndex}
              setDraggedElementIndex={setDraggedElementIndex}
              handleSwap={handleSwap}
            >
              {item.name}
            </Draggable>
          )
      )}
    </div>
  );
};

export default DragnDrop;
