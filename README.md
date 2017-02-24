Chai Match
==========

[![Build Status](https://img.shields.io/travis/johngeorgewright/chai-match/master.svg?style=flat-square)](https://travis-ci.org/johngeorgewright/chai-match)
[![NPM Version](https://img.shields.io/npm/v/chai-match.svg?style=flat-square)](https://www.npmjs.com/package/chai-match)
[![Dependencies](https://img.shields.io/gemnasium/johngeorgewright/chai-match.svg?style=flat-square)](https://gemnasium.com/github.com/johngeorgewright/chai-match)
[![License](https://img.shields.io/npm/l/chai-match.svg?style=flat-square)](https://github.com/johngeorgewright/chai-match/blob/master/LICENSE)

> Advanced RegExp assertions for Chai.js.

Installation
------------

```
npm i --save-dev chai-match
```

```javascript
var chai = require('chai');
chai.use(require('chai-match'));
```

API
---

### `.capture(n)`

Sets the assertion object to a previous match's capture.

```javascript
expect('some thing to test').to.match(/some (\w+) to test/).and.capture(0).equals('thing');
'Here in London'.should.match(/(here|there) in (\w+)/i).and.capture(1).equals('London');
```
