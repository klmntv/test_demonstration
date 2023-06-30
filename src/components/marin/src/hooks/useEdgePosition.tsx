import { useCallback, useEffect, useRef, useState } from 'react';
import { GraphNode } from '../types/graph';

type Rects = {
  from: DOMRect | undefined;
  to: DOMRect | undefined;
};

const useEdgePosition = (fromId: number, toId: number, columns: GraphNode[][]) => {
  const [rects, setRects] = useState<Rects>({ from: undefined, to: undefined });

  const fromNode = useRef<HTMLElement | null>();
  const toNode = useRef<HTMLElement | null>();

  const updateEdgePosition = useCallback(() => {
    setRects({
      from: fromNode.current?.getBoundingClientRect(),
      to: toNode.current?.getBoundingClientRect(),
    });
  }, []);

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      if (m.attributeName === 'style') {
        updateEdgePosition();
      }
    });
  });

  useEffect(() => {
    window.addEventListener('resize', updateEdgePosition);

    fromNode.current = document.getElementById(`${fromId}`);
    toNode.current = document.getElementById(`${toId}`);
    updateEdgePosition();

    fromNode.current && mutationObserver.observe(fromNode.current, { attributes: true });
    toNode.current && mutationObserver.observe(toNode.current, { attributes: true });

    return () => {
      window.removeEventListener('resize', updateEdgePosition);
      mutationObserver.disconnect();
    };
  }, [columns]);

  return rects;
};

export default useEdgePosition;
