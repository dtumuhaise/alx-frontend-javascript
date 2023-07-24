function cleanSet(set, startString) {
  return new Set([...set].filter((item) => item.startsWith(startString)));
}
export default cleanSet;
