// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-duplicates.case
// - src/function-forms/syntax/cls-expr-async-meth.template
/*---
description: It is a Syntax Error if BoundNames of FormalParameters contains any duplicate elements. (class expression async method)
esid: sec-class-definitions-runtime-semantics-evaluation
features: [default-parameters]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassExpression : class BindingIdentifieropt ClassTail

    1. If BindingIdentifieropt is not present, let className be undefined.
    2. Else, let className be StringValue of BindingIdentifier.
    3. Let value be the result of ClassDefinitionEvaluation of ClassTail
        with argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
      a. If IsStatic of m is false, then
        i. Let status be the result of performing
          PropertyDefinitionEvaluation for m with arguments proto and
          false.
      [...]

    Runtime Semantics: PropertyDefinitionEvaluation

    AsyncMethod : async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this AsyncMethod is strict mode code, let strict be true. Otherwise
       let strict be false.
    4. Let scope be the LexicalEnvironment of the running execution context.
    5. Let closure be ! AsyncFunctionCreate(Method, UniqueFormalParameters, AsyncFunctionBody,
       scope, strict).
    [...]


    14.1.2 Static Semantics: Early Errors

    StrictFormalParameters : FormalParameters

    - It is a Syntax Error if BoundNames of FormalParameters contains any
      duplicate elements.

    FormalParameters : FormalParameterList

    - It is a Syntax Error if IsSimpleParameterList of FormalParameterList is
      false and BoundNames of FormalParameterList contains any duplicate
      elements.

---*/
// throw "Test262: This statement should not be evaluated.";

var C = class {
  static async method(x = 0, x) {
    
  }
};
