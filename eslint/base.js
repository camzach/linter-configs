module.exports = {
  rules: {
    'array-callback-return': ['error', { checkForEach: false, allowImplicit: true }],
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    // Using typescript rule
    'no-dupe-class-members': 'off',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    // Using typescript rule
    'no-duplicate-imports': 'off',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    // I'm okay with this
    'no-inner-declarations': 'off',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    // Using typescript rule
    'no-loss-of-precision': 'off',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-unused-private-class-members': 'error',
    // Using typescript rule
    'no-unused-vars': 'off',
    // Using typescript rule
    'no-use-before-define': 'off',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': ['error', { enforceForIndexOf: true }],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    // I don't see this as an issue
    'accessor-pairs': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    // Var is disallowed
    'block-scoped-var': 'off',
    'camelcase': 'error',
    'capitalized-comments': ['error', 'always', { ignoreConsecutiveComments: true }],
    'class-methods-use-this': 'error',
    // While I understand the use, this feels arbitrary
    'complexity': 'off',
    'consistent-return': 'error',
    // Aliasing `this` is disallowed by ts rules
    'consistent-this': 'off',
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'default-case': 'error',
    'default-case-last': 'error',
    // Using typescript rule
    'default-param-last': 'off',
    // Using typescript rule
    'dot-notation': 'off',
    'eqeqeq': 'error',
    // This seems okay to me
    'func-name-matching': 'off',
    // I tend to use arrow functions anyways
    'func-names': 'off',
    // Similar to above, I typically use declarations but don't want to disallow expressions
    'func-style': 'off',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    // I see the issue here, but just requiring a conditional feels like jank
    'guard-for-in': 'off',
    // I don't want to deny specific identifiers
    'id-denylist': 'off',
    // I'm okay with very short names sometimes and long names are annoying enough to type that they don't need to be enforced
    'id-length': 'off',
    // Camel case rule is good enough
    'id-match': 'off',
    // Using typescript rule
    'init-declarations': 'off',
    // I'll split things out into files eventually, but for quick development I don't care
    'max-classes-per-file': 'off',
    'max-depth': ['error', { max: 3 }],
    // This seems to conflict with turning max-classes-per-file off, but at a certain point you're no longer hacking
    'max-lines': ['error', { max: 500 }],
    // Some functions just need to be big imo. Splitting it into smaller functions can just get more complex at times
    'max-lines-per-function': 'off',
    'max-nested-callbacks': ['error', { max: 3 }],
    'max-params': ['error', { max: 3 }],
    // See max-lines-per-function above
    'max-statements': 'off',
    'multiline-comment-style': ['error', 'separate-lines'],
    'new-cap': 'error',
    'no-alert': 'error',
    // Using typescript rule
    'no-array-constructor': 'off',
    // I don't want to have to disable this rule every time I want to use a bitwise. It's rare, sure, but whatever
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'error',
    // Warn level here, as console logs are used extensively in dev
    'no-console': 'warn',
    // I'm okay with continues, and I don't find the proposed conditional appealing
    'no-continue': 'off',
    'no-delete-var': 'error',
    // Don't quite understand this one
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-empty': 'error',
    // Using typescript rule
    'no-empty-function': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    // Labels are disabled below
    'no-extra-label': 'off',
    // Using typescript rule
    'no-extra-semi': 'off',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-implicit-globals': 'error',
    // Using typescript rule
    'no-implied-eval': 'off',
    // Using line-comment-position instead
    'no-inline-comments': 'off',
    // Using typescript rule
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    // Labels are disabled below
    'no-label-var': 'off',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    // Using typescript rule
    'no-loop-func': 'off',
    // Using typescript rule
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    // Negative conditions are great for guards
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-proto': 'error',
    // Using typescript rule
    'no-redeclare': 'off',
    'no-regex-spaces': 'error',
    // I see no reason to enable this
    'no-restricted-exports': 'off',
    // Ditto
    'no-restricted-globals': 'off',
    // And again, but also using typescript rule
    'no-restricted-imports': 'off',
    // And again
    'no-restricted-properties': 'off',
    // One more time
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'always'],
    // Using typescript rule
    'no-return-await': 'off',
    'no-script-url': 'error',
    'no-sequences': 'error',
    // Using typescript rule
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    // I like ternaries
    'no-ternary': 'off',
    // Using typescript rule
    'no-throw-literal': 'off',
    'no-undef-init': 'error',
    // Already using no-shadow-restricted-names
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // Using typescript rule
    'no-unused-expressions': 'off',
    // Labels are disallowed
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-concat': 'error',
    // Using typescript rule
    'no-useless-constructor': 'off',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    // I'll accept TODO comments, even though they're probably bad
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { array: true, object: true }],
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'radix': 'error',
    // Using typescript rule
    'require-await': 'off',
    // I don't want to have to put the u flag on every regex
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': ['error', { ignoreCase: false, ignoreDeclarationSort: true }],
    // I prefer to sort logically
    'sort-keys': 'off',
    // Same as above
    'sort-vars': 'off',
    'spaced-comment': ['error', 'always'],
    'strict': ['error', 'safe'],
    'symbol-description': 'error',
    // I got no problem with hoisting
    'vars-on-top': 'off',
    'yoda': ['error', 'never', { exceptRange: true }],
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    // Using typescript rule
    'brace-style': 'off',
    // Using typescript rule
    'comma-dangle': 'off',
    // Using typescript rule
    'comma-spacing': 'off',
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    // Using typescript rule
    'func-call-spacing': 'off',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    'generator-star-spacing': ['error', 'before'],
    // I generally prefer no newline, but in some cases I may want it
    'implicit-arrow-linebreak': 'off',
    // Using typescript rule
    'indent': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // Using typescript rule
    'keyword-spacing': 'off',
    'line-comment-position': ['error', 'above'],
    'linebreak-style': ['error', 'unix'],
    // This is context-dependent to me
    'lines-around-comment': 'off',
    // Using typescript rule
    'lines-between-class-members': 'off',
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    // Using typescript rule
    'no-extra-parens': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', { multiline: true }],
    // Using typescript rule
    'object-curly-spacing': 'off',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'padded-blocks': ['error', 'never'],
    // Using typescript rule
    'padding-line-between-statements': 'off',
    // Using typescript rule
    'quotes': 'off',
    'rest-spread-spacing': ['error', 'never'],
    // Using typescript rule
    'semi': 'off',
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    // Using typescript rule
    'space-before-blocks': 'off',
    // Using typescript rule
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    // Using typescript rule
    'space-infix-ops': 'off',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'switch-colon-spacing': ['error', { before: false, after: true }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'inside'],
    // I don't see the purpose here, it doesn't look like division to me
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', 'before']
  }
}
