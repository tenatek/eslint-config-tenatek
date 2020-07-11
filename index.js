const possibleErrors = {
  'for-direction': 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-console': 'error',
  'no-constant-condition': ['error', { checkLoops: false }],
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-empty-character-class': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
  'no-extra-semi': 'error',
  'no-func-assign': 'error',
  'no-inner-declarations': ['error', 'both'],
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': ['error', { skipStrings: false }],
  'no-misleading-character-class': 'error',
  'no-obj-calls': 'error',
  'no-prototype-builtins': 'error',
  'no-regex-spaces': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
  'use-isnan': [
    'error', {
      enforceForIndexOf: true,
      enforceForSwitchCase: true
    }
  ],
  'valid-typeof': 'error'
};

const bestPractices = {
  'accessor-pairs': 'error',
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  'class-methods-use-this': 'error',
  'consistent-return': 'error',
  'curly': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
  'eqeqeq': 'error',
  'max-classes-per-file': 'error',
  'no-constructor-return': 'error',
  'no-else-return': 'error',
  'no-empty-function': 'error',
  'no-empty-pattern': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-floating-decimal': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-with': 'error',
  'require-await': 'error',
  'yoda': 'error'
};

const variables = {
  'no-delete-var': 'error',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  'no-unused-vars': 'error',
  'no-use-before-define': 'error'
};

const stylisticIssues = {
  'array-bracket-newline': ['error', { multiline: true }],
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': ['error', 'consistent'],
  'brace-style': ['error', 'stroustrup'],
  'camelcase': 'error',
  'capitalized-comments': ['error', 'never'],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': [
    'error', {
      after: true,
      before: false
    }
  ],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'eol-last': ['error', 'always'],
  'func-call-spacing': ['error', 'never'],
  'func-names': ['error', 'never'],
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'multiline'],
  'id-denylist': ['error', 'data', 'err', 'cb', 'fn', 'result', 'response'],
  'id-length': 'error',
  'indent': ['error', 2],
  'key-spacing': ['error'],
  'linebreak-style': ['error', 'unix'],
  'lines-between-class-members': ['error', 'always'],
  'max-len': [
    'error', {
      code: 80,
      comments: 80,
      ignoreRegExpLiterals: true
    }
  ],
  'max-statements-per-line': ['error', { max: 1 }],
  'multiline-comment-style': ['error', 'starred-block'],
  'new-parens': 'error',
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  'no-bitwise': 'error',
  'no-continue': 'error',
  'no-inline-comments': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': 'error',
  'no-multiple-empty-lines': [
    'error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 0
    }
  ],
  'no-new-object': 'error',
  'no-tabs': 'error',
  'no-ternary': 'error',
  'no-trailing-spaces': 'error',
  'no-whitespace-before-property': 'error',
  'object-curly-newline': ['error', { multiline: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'one-var': ['error', 'never'],
  'operator-linebreak': ['error', 'after'],
  'padded-blocks': ['error', { classes: 'always' }],
  'padding-line-between-statements': [
    'error', {
      blankLine: 'always',
      next: 'block-like',
      prev: '*'
    }, {
      blankLine: 'always',
      next: '*',
      prev: 'block-like'
    }
  ],
  'prefer-object-spread': 'error',
  'quote-props': ['error', 'consistent-as-needed'],
  'quotes': ['error', 'single'],
  'semi': ['error', 'always'],
  'semi-spacing': ['error', { before: false }],
  'semi-style': 'error',
  'sort-keys': 'error',
  'space-before-blocks': 'error',
  'space-before-function-paren': 'error',
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'spaced-comment': ['error', 'always'],
  'unicode-bom': ['error', 'never']
};

const es6 = {
  'arrow-body-style': ['error', 'always'],
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': 'error',
  'constructor-super': 'error',
  'no-class-assign': 'error',
  'no-confusing-arrow': 'error',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': 'error',
  'no-new-symbol': 'error',
  'no-this-before-super': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'require-yield': 'error',
  'rest-spread-spacing': ['error', 'never'],
  'template-curly-spacing': 'error'
};

module.exports = {
  rules: {
    ...bestPractices,
    ...possibleErrors,
    ...es6,
    ...stylisticIssues,
    ...variables
  }
};
