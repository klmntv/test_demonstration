import Graph, { GraphNode } from '../types/graph';

type StartByTarget = {
  [targetId: string]: number[];
};

const sortNodes = ({ edges, nodes }: Graph): GraphNode[][] => {
  const isStartingNode = (node: GraphNode): boolean =>
    !edges.map((edge) => edge.toId).includes(node.id);

  const startingNodes = nodes.filter(isStartingNode);
  const startingNodeIds = startingNodes.map((n) => n.id);
  const startingEdges = edges.filter((edge) => startingNodeIds.includes(edge.fromId));

  const targetsBySources: StartByTarget = startingEdges.reduce<StartByTarget>((acc, edge) => {
    if (Object.hasOwn(acc, edge.fromId)) {
      acc[edge.fromId].push(edge.toId);
      return acc;
    } else {
      acc[edge.fromId] = [edge.toId];
      return acc;
    }
  }, {});

  // сортируются таким образом, чтобы id корневых узлов, связи от которых идут к одним и тем же дочерним узлам, находились рядом
  // то есть, например, если от узла 1 идут связи к узлам 6, 7; от 2 - к 7, 5; от 3 - к 6, 8, то в итоге узлы должны располагаться
  // в следующей последовательности: 2, 1, 3 (узел 1 должен быть посередине)
  const sortingStartNodeIds: string[] = Object.keys(targetsBySources).reduce<string[]>(
    (acc, id, i, arr) => {
      const lastEl = arr.at(-1);
      if (
        acc.length === 0 ||
        (lastEl && targetsBySources[lastEl].some((el) => targetsBySources[id].includes(el)))
      ) {
        return [...acc, id];
      } else {
        return [id, ...acc];
      }
    },
    []
  );

  const sortedStartNodes = sortingStartNodeIds.map((id) =>
    nodes.find((n) => n.id === Number(id))
  ) as GraphNode[];

  const columns: GraphNode[][] = [sortedStartNodes];

  const handleNode = (node: GraphNode): number => {
    if (isStartingNode(node)) {
      return 0;
    }

    const parentEdge = edges.find((edge) => edge.toId === node.id);
    const parentNode = nodes.find((n) => parentEdge?.fromId === n.id) as GraphNode;
    const currentNodeColumnIndex = handleNode(parentNode) + 1;
    const parentColumn = columns[currentNodeColumnIndex - 1];
    const parentNodeIndex = parentColumn.indexOf(parentNode);

    if (!columns[currentNodeColumnIndex]) {
      columns[currentNodeColumnIndex] = Array(parentColumn.length);
      columns[currentNodeColumnIndex][parentNodeIndex] = node;
    } else if (!columns[currentNodeColumnIndex].includes(node)) {
      columns[currentNodeColumnIndex].splice(parentNodeIndex, 0, node);
    }

    return currentNodeColumnIndex;
  };

  nodes.forEach(handleNode);

  return columns;
};

export default sortNodes;
