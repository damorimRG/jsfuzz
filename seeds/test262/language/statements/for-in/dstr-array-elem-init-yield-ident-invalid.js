// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-init-yield-ident-invalid.case
// - src/dstr-assignment/syntax/for-in.template
/*---
description: When a `yield` token appears within the Initializer of an AssignmentElement outside of a generator function body, it behaves as an IdentifierReference. (For..in statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
es6id: 13.7.5.11
features: [destructuring-binding]
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
// throw "Test262: This statement should not be evaluated.";

for ([ x = yield ] in [[]]) ;
