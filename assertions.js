var chai = require('chai');

module.exports = function (chai, _) {
  var Assertion = chai.Assertion;
  var flag = _.flag;

  Assertion.overwriteMethod('match', function matchOverwriter(_super) {
    return function assertMatch(re, msg) {
      _super.call(this, re, msg);

      var obj = flag(this, 'object');
      var match = re.exec(obj);

      if (match) {
        flag(this, 'matchCaptures', match.slice(1));
      }
    }
  });

  Assertion.addMethod('capture', function getCapture(n) {
    var capture = (flag(this, 'matchCaptures') || [])[n];
    flag(this, 'object', capture);
  });
};
