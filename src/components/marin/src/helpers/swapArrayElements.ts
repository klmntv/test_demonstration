const swapArrayElements = <T>(arr: Array<T>, index1: number, index2: number): Array<T> => {
  const copy: Array<T> = [...arr];
  const temp = copy[index1];
  copy[index1] = copy[index2];
  copy[index2] = temp;
  return copy;
};

export default swapArrayElements;
