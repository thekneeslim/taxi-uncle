import Combination from '../Combination';

describe('getCombination', () => {
  it('retrieves unique double digit combination', () => {
    const testSample = [[1,2],[3,4]]
    const utility = new Combination(testSample, 2);

    expect(utility.getCombinations().sort()).toEqual(['12','13','14','23','34','24'].sort());
  });

  it('retrieve triple digit unique combinations', () => {
    const testSample = [[1,2],[3,4]]
    const utility = new Combination(testSample, 3);

    expect(utility.getCombinations(testSample).sort()).toEqual(['123','124','234','134'].sort());
  });

  it('retrieve quadriple digit unique combinations', () => {
    const testSample = [[1,2],[3,4]]
    const utility = new Combination(testSample, 4);

    expect(utility.getCombinations(testSample).sort()).toEqual(['1234'].sort());
  });
});
