// This file was procedurally generated from the following sources:
// - src/async-functions/await-as-label-identifier-escaped.case
// - src/async-functions/syntax/async-declaration.template
/*---
description: await is a reserved keyword within generator function bodies and may not be used as a label identifier. (Async function declaration)
esid: prod-AsyncFunctionDeclaration
features: [async-functions]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Async Function Definitions

    AsyncFunctionDeclaration:
      async [no LineTerminator here] function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }


    LabelIdentifier : Identifier

    It is a Syntax Error if this production has a [Await] parameter and
    StringValue of Identifier is "await".

---*/
// throw "Test262: This statement should not be evaluated.";


async function fn() {
  \u0061wait: ;
}
