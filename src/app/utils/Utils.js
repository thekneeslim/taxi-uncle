const isFilled = (grid) => grid.every(element => {
    return Array.isArray(element) ? isFilled(element) : !!element;
  })

export { isFilled };
