/** @type {import('eslint').Linter.Config[]} */

import globals from 'globals'
import { defineConfig } from 'eslint/config'

import js from '@eslint/js'

import babelParser from '@babel/eslint-parser'

import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',
  '**/.cache/**',
  '**/*.log',
  '**/*.log.*',
  '**/.env*',
  '!**/.env.example',
  '**/.vscode/**',
  '**/.idea/**',
  '**/*.code-workspace',
  '**/.DS_Store',
  '**/Thumbs.db',
  '**/.git/**',
  '**/*.tmp',
]

const plugins = {
  js,
  prettier: prettierPlugin,
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
  'jsx-a11y': jsxA11yPlugin,
}

const jsxSettings = {
  react: {
    version: 'detect',
  },
}

const rules = {
  ...js.configs.recommended.rules,
  ...reactPlugin.configs.recommended.rules,
  ...reactHooksPlugin.configs.recommended.rules,
  ...jsxA11yPlugin.configs.recommended.rules,
  ...prettierConfig.rules,
  'react/display-name': 'off',
  'react/no-unescaped-entities': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/jsx-key': 'off',
  'no-console': 'warn',
  eqeqeq: 'warn',
  curly: 'warn',
  'no-else-return': 'warn',
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
  'jsx-a11y/media-has-caption': 'warn',
  'jsx-a11y/no-noninteractive-tabindex': 'warn',
}

export default defineConfig([
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ignores,
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          plugins: ['@babel/plugin-syntax-jsx'],
        },
      },
    },
    plugins,
    settings: jsxSettings,
    rules,
  },
])
