const isFilled = (grid) => grid.every(element => {
    return Array.isArray(element) ? isFilled(element) : !!element;
  })

const delta = [
  [-1, 1],  [0, 1], [1, 1],
  [-1, 0],          [1, 0],
  [-1,-1],  [0,-1], [1,-1]]

const getCombinations = (grid, length) => {
  let combinations = [];

  grid.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      delta.forEach((adjacent) => {
        if(!!grid[rowIndex + adjacent[0]] && !!grid[rowIndex + adjacent[0]][columnIndex + adjacent[1]]) {
          const adjacentValue = grid[rowIndex + adjacent[0]][columnIndex + adjacent[1]]
          const result = `${grid[rowIndex][columnIndex]}${adjacentValue}`.split('').sort().join("");
          if (result.length === length && !combinations.includes(result)){
            combinations.push(result);
          }
        }
      })
    })
  })
  return combinations;
}

export { isFilled, getCombinations };
