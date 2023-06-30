import React, { FC, useRef, useCallback, useEffect } from 'react';
import cssTranslate from '../../../helpers/cssTranslate';
import s from './Draggable.module.css';

type Props = {
  id: string;
  currentElementIndex: number;
  draggedElementIndex: number;
  setDraggedElementIndex: (i: number) => void;
  handleSwap: (index1: number, index2: number) => void;
};

const Draggable: FC<Props> = ({
  id,
  children,
  currentElementIndex,
  draggedElementIndex,
  handleSwap,
  setDraggedElementIndex,
}) => {
  const draggableElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    draggableElRef.current!.style.transform = cssTranslate(0, 0);
  }, [draggedElementIndex]);

  const handleMouseEnter = useCallback(
    () => {
      if (draggedElementIndex !== -1) {
        setDraggedElementIndex(currentElementIndex);
        handleSwap(currentElementIndex, draggedElementIndex);
      }
    },
    [draggedElementIndex]
  );

  const handleMouseMove = useCallback((e) => {
    draggableElRef.current!.style.transform = cssTranslate(
      e.pageX - draggableElRef.current!.offsetLeft - draggableElRef.current!.offsetWidth / 2,
      e.pageY - draggableElRef.current!.offsetTop - draggableElRef.current!.offsetHeight / 2
    );
  }, []);

  const handleMouseUp = useCallback(() => {
    setDraggedElementIndex(-1);

    draggableElRef.current!.style.pointerEvents = 'auto';
    document.body.style.cursor = 'auto';

    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseDown = useCallback(
    () => {
      setDraggedElementIndex(currentElementIndex);

      draggableElRef.current!.style.pointerEvents = 'none';
      document.body.style.cursor = 'grab';

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    },
    [draggedElementIndex]
  );

  return (
    <div
      ref={draggableElRef}
      id={id}
      className={s.draggable}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
};

export default Draggable;
