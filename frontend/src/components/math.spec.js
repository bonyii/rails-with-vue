import math from './math.js'

describe('math.add', function() {
  it('should add 2 numbers', function(){
    const result = math.add(1,1);
    expect(result).toEqual(2);
  });
});
