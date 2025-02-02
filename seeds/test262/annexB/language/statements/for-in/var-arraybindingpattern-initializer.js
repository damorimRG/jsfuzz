// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-initializers-in-forin-statement-heads
description: >
    for-in initializers with ArrayBindingPatterns are always prohibited
negative:
  phase: parse
  type: SyntaxError
---*/

// throw new Error("Test262: This statement should not be evaluated.");
throw NotEarlyError;
for (var [a] = 0 in {});

