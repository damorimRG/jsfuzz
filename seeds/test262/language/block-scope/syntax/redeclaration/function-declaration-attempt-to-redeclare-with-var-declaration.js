// This file was procedurally generated from the following sources:
// - src/declarations/redeclare-with-var-declaration.case
// - src/declarations/redeclare-allow-var/block-attempt-to-redeclare-function-declaration.template
/*---
description: redeclaration with VariableDeclaration (FunctionDeclaration in BlockStatement)
esid: sec-block-static-semantics-early-errors
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Block : { StatementList }

    It is a Syntax Error if any element of the LexicallyDeclaredNames of
    StatementList also occurs in the VarDeclaredNames of StatementList.

---*/


// throw "Test262: This statement should not be evaluated.";

{ function f() {} var f; }
