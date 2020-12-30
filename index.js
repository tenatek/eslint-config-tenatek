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
    'error',
    {
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
  'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
  'eqeqeq': 'error',
  'no-constructor-return': 'error',
  'no-else-return': 'error',
  'no-empty-function': 'error',
  'no-empty-pattern': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
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
  'camelcase': 'error',
  'capitalized-comments': ['error', 'never'],
  'func-names': ['error', 'never'],
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'id-denylist': ['error', 'data', 'err', 'cb', 'fn', 'result', 'req', 'res', 'payload', 'ctx'],
  'id-length': ['error', { min: 2 }],
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'max-len': ['error', { code: 100, comments: 100 }],
  'max-statements-per-line': ['error', { max: 1 }],
  'multiline-comment-style': ['error', 'starred-block'],
  'no-bitwise': 'error',
  'no-continue': 'error',
  'no-inline-comments': 'error',
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-new-object': 'error',
  'no-tabs': 'error',
  'no-ternary': 'error',
  'one-var': ['error', 'never'],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      next: 'block-like',
      prev: '*'
    },
    {
      blankLine: 'always',
      next: '*',
      prev: 'block-like'
    }
  ],
  'prefer-object-spread': 'error',
  'quotes': ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
  'sort-keys': 'error',
  'spaced-comment': ['error', 'always']
};

const es6 = {
  'arrow-body-style': ['error', 'always'],
  'constructor-super': 'error',
  'no-class-assign': 'error',
  'no-confusing-arrow': ['error', { allowParens: false }],
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
  'require-yield': 'error'
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
