function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const result = filteredValues.join('-');
  return result;
}

export default cleanSet;
