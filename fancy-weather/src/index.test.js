const { location } = require('./js/api.locationUser');

describe('tests', () => {
  it('should return true:', () => {
    return location().toBeDefined();
  });
});
