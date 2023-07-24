function cleanSet(set, startString) {
  const newSet = new Set();
  set.forEach((item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      newSet.add(item);
    }
  });
  return newSet;
}
export default cleanSet;
