// This file was procedurally generated from the following sources:
// - src/generators/yield-as-identifier-reference-escaped.case
// - src/generators/syntax/class-expr-static-method.template
/*---
description: yield is a reserved keyword within generator function bodies and may not be used as an identifier reference. (Static generator method as a ClassExpression element)
esid: prod-GeneratorMethod
features: [generators]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElement :
      static MethodDefinition

    MethodDefinition :
      GeneratorMethod

    14.4 Generator Function Definitions

    GeneratorMethod :
      * PropertyName ( UniqueFormalParameters ) { GeneratorBody }


    IdentifierReference : Identifier

    It is a Syntax Error if this production has a [Yield] parameter and
    StringValue of Identifier is "yield".

---*/
// throw "Test262: This statement should not be evaluated.";

var C = class { static *gen() {
    void yi\u0065ld;
}};
