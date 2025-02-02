// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator-function-definitions
es6id: 14.4
description: >
  YieldExpression cannot be used within the FormalParameters of a generator
  function
info: |
  GeneratorExpression :

    function * BindingIdentifier[Yield]opt ( FormalParameters[Yield] ) { GeneratorBody }

  YieldExpression cannot be used within the FormalParameters of a generator
  function because any expressions that are part of FormalParameters are
  evaluated before the resulting generator object is in a resumable state.
features: [generators, default-parameters]
negative:
  phase: parse
  type: SyntaxError
---*/

// throw "Test262: This statement should not be evaluated.";

0, function*(x = yield) {};
