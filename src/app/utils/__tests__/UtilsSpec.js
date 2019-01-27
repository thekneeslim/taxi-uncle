import { isFilled, getCombinations } from '../Utils';

describe('isFilled', () => {
  it('verify whether all elemnts in the array are not empty or null', () => {
    expect(isFilled([1,2,3])).toEqual(true);
    expect(isFilled([null,2,3])).toEqual(false);
    expect(isFilled(["",2,3])).toEqual(false)
  });

  it('verify whether all neseted elemnts in the array are not empty or null', () => {
    expect(isFilled([[1,2,3],[4,5,6]])).toEqual(true);
    expect(isFilled([[null,2,3], [4,5,6]])).toEqual(false);
    expect(isFilled([["",2,3],[4,5,6]])).toEqual(false);
    expect(isFilled([[[1,2,3],[4,5,6]],[[7,8],[9]]])).toEqual(true);
    expect(isFilled([[[1,2,3],[4,5,6]],[[7,8],[null]]])).toEqual(false);
    expect(isFilled([[[1,2,3],[4,5,6]],[[7,8],['']]])).toEqual(false);
  });
});

describe('getCombinations', () => {
  it('retrieve adjacent values', () => {
    const testSample = [[1,2],[3,4]]

    expect(getCombinations(testSample).sort()).toEqual(['12','13','14','23','34','24'].sort());
  });
});
