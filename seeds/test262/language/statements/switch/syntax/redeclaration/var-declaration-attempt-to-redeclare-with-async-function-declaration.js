// This file was procedurally generated from the following sources:
// - src/declarations/redeclare-with-async-function-declaration.case
// - src/declarations/redeclare/switch-attempt-to-redeclare-var-declaration.template
/*---
description: redeclaration with AsyncFunctionDeclaration (VariableDeclaration in SwitchStatement)
esid: sec-switch-statement-static-semantics-early-errors
features: [async-functions]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    SwitchStatement : switch ( Expression ) CaseBlock

    It is a Syntax Error if any element of the LexicallyDeclaredNames of
    CaseBlock also occurs in the VarDeclaredNames of CaseBlock.

---*/


// throw "Test262: This statement should not be evaluated.";

switch (0) { case 1: var f; default: async function f() {} }
