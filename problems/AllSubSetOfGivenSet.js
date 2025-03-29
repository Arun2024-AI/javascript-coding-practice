// const getAllSubset = arr => 
//   arr.reduce((subsets, value) =>
//     subsets.concat(subsets.map(set => [value, ...set]))
//   , [[]]
// );

// console.log(getAllSubsets([1,2,3])); // [[], [1], [2], [2, 1], [3], [3, 1], [3, 2], [3, 2, 1]]



const generateSubsets = arr => {
  return arr.reduce((subsets, currentValue) => {
    return subsets.concat(subsets.map(subset => [...subset, currentValue]));
  }, [[]]);
};

console.log(generateSubsets([1, 2, 3]));

