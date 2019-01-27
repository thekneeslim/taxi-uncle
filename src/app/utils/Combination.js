export default class Combination {

  constructor(grid, combinationLength) {
    this.delta = [
      [-1, 1],  [0, 1], [1, 1],
      [-1, 0],          [1, 0],
      [-1,-1],  [0,-1], [1,-1]];
    this.grid = grid;
    this.combinationLength = combinationLength;
    this.combinations = []
  }

  getCombinations = () => {
    this.getValues();
    return Array.from(new Set(this.combinations))
  }

  getValues = () => {
    this.grid.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        this.getCombination(rowIndex, columnIndex, "", []);
      })
    });
  }

  getCombination = (rowIndex, columnIndex, word, repeated = []) => {
    let value = word ? word : this.grid[rowIndex][columnIndex];
    let traversedPoints = repeated.slice(0);
    traversedPoints.push([rowIndex, columnIndex]);
    this.delta.forEach((adjacent) => {
      const nextRowIndex = rowIndex + adjacent[0];
      const nextColumnIndex = columnIndex + adjacent[1];
      if(this.isNewPoint(traversedPoints, nextRowIndex, nextColumnIndex) && this.isWithinBoundary(nextRowIndex, nextColumnIndex)) {
        this.addCombination(nextRowIndex, nextColumnIndex, value, traversedPoints);
      }
    })
  }

  addCombination(nextRowIndex, nextColumnIndex, value, traversedPoints) {
    const adjacentValue = this.grid[nextRowIndex][nextColumnIndex]
    const result = `${value}${adjacentValue}`;
    if (result.length === this.combinationLength) {
      this.combinations.push(result.split("").sort().join(""));
      return;
    }
    this.getCombination(nextRowIndex, nextColumnIndex, result, traversedPoints);
  }

  isWithinBoundary(nextRowIndex, nextColumnIndex) {
    return (!!this.grid[nextRowIndex] && !!this.grid[nextRowIndex][nextColumnIndex])
  }

  isNewPoint(traversedPoints, nextRowIndex, nextColumnIndex) {
    return !(traversedPoints.some(row => row[0] === nextRowIndex && row[1] === nextColumnIndex));
  }
}
