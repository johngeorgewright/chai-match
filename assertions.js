var chai = require('chai');

module.exports = function (chai, _) {
  var Assertion = chai.Assertion;
  var flag = _.flag;

  Assertion.overwriteMethod('match', function matchOverwriter() {
    return function assertMatch(re, msg) {
      if (msg) flag(this, 'message', msg);

      var obj = flag(this, 'object');
      var match = re.exec(obj);

      if (match) {
        flag(this, 'matchCaptures', match.slice(1));
      }

      this.assert(
        match,
        'expected #{this} to match ' + re,
        'expected #{this} not to match ' + re
      );
    }
  });

  Assertion.addMethod('capture', function getCapture(n) {
    var capture = (flag(this, 'matchCaptures') || [])[n];
    flag(this, 'object', capture);
  });
};
