// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-5
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: case (case)
negative:
  phase: parse
  type: SyntaxError
---*/

// throw "Test262: This statement should not be evaluated.";

var \u0063ase = 123;
