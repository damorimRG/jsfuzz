// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Lexical declaration (let) not allowed in statement position
esid: sec-if-statement
es6id: 13.6
negative:
  phase: parse
  type: SyntaxError
---*/

// throw "Test262: This statement should not be evaluated.";

if (true) let x; else ;
