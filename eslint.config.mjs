import eslintRecomended from '@eslint/js';
import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImportPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import typescriptEslint from 'typescript-eslint';

export default [
  ...typescriptEslint.configs.recommended,
  eslintRecomended.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'typescript-eslint': typeScriptEslintPlugin,
      import: eslintImportPlugin,
      prettier: prettierPlugin,
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: '.',
        },
      },
      react: {
        reactVersion: 'detect',
      },
    },

    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'array-bracket-spacing': 1,
      'react/prop-types': ['off'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'method',
          format: ['camelCase'],
        },
      ],
      '@typescript-eslint/func-call-spacing': ['error', 'never'],

      'import/prefer-default-export': 'off',
      'import/named': 'error',
      'import/export': 'error',
      'import/extensions': [
        'error',
        {
          css: 'always',
          js: 'never',
          json: 'always',
          jsx: 'never',
          mjs: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react+(|-native)',
              group: 'external',
              position: 'before',
            },

            {
              pattern:
                '@+(assets|components|constants|models|routes|screens|services|styles)/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
  {
    ignores: [
      '*.{js,mjs,mts,config.js,config.ts}',
      'cli/',
      'docs/',
      'ios/',
      'android/',
      'node_modules/**',
      'coverage/**',
      'build/**',
      '.vscode',
    ],
  },
];
