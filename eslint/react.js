module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    // Using recommended for a11y plugins because others know accessibility requirements better than me
    'plugin:jsx-a11y/recommended',
    'plugin:styled-components-a11y/recommended',
    // Using react >= 17
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': ['error', { rule: '^^(is|has)[A-Z][A-Za-z0-9]*' }],
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'error',
    // I can forsee this conflicting with some libraries
    'react/forbid-component-props': 'off',
    // I don't want to forbid any dom props
    'react/forbid-dom-props': 'off',
    // I don't want to forbid any elements
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    // Does weird stuff with typescript
    'react/function-component-definition': 'off',
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/no-access-state-in-setstate': 'error',
    // Idk why, I just don't wanna enable this guy
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    // Multiple components _should_ be multiple files, but sometimes I think it's allowable
    'react/no-multi-comp': 'off',
    'react/no-namespace': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    // I'm definitely gonna use state, this can be manually enabled if I ever decide to use something like Redux
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    // &quot; stuff gets weird
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    // Typescript takes care of this
    'react/prefer-exact-props': 'off',
    // Using typescript, not flow
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    // Using React >= 17
    'react/react-in-jsx-scope': 'off',
    // Doesn't work super nicely with typescript, still have to make a non-null check.
    'react/require-default-props': 'off',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': ['error', { callbacksLast: true, ignoreCase: true, requiredFirst: true }],
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': ['error', 'property assignment'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': 'error',
    // I don't like the way this makes the jsx look
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': ['error', 'never'],
    "react/jsx-curly-spacing": ['error', {"when": "never"}],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.tsx', '.jsx'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    // Feels arbitrary
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: { single: 3, multi: 1 }}],
    'react/jsx-newline': ['error', { prevent: true }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    // No need to add extra stuff to the JSX
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    // For very short lines I think this is OK
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    // Spreading can be nice
    'react/jsx-props-no-spreading': 'off',
    // Default props should be in the same order as they are in the Props type
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': ['error', { callbacksLast: true, ignoreCase: true, shorthandFirst: true, reservedFirst: true }],
    'react/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
    // Using react >= 17
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'styled-components-a11y',
  ],
}