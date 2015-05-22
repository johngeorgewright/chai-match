var chai = require('chai');
var expect = chai.expect;
chai.use(require('../'));

describe('chai-match', function () {
  var re = /some (\w+) to (\w+)/;

  it('shouldn\'t mess the core functionality', function () {
    expect('some thing to test').to.match(re);
    expect('something to test').not.to.match(re);
  });

  it('should gather captures', function () {
    expect('some thing to test').to.match(re)
      .and.capture(0).equals('thing')
      .and.capture(1).has.length(4);
  });
});
