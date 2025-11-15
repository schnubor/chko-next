import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    {
        extends: [
            ...compat.extends('eslint:recommended'),
            ...nextCoreWebVitals,
            ...compat.extends('prettier'),
        ],

        plugins: {
            'unused-imports': unusedImports,
            '@typescript-eslint': typescriptEslint,
            '@stylistic': stylistic,
        },

        languageOptions: {
            globals: {
                NodeJS: true,
                JSX: 'readonly',
            },

            parser: tsParser,
        },

        rules: {
            'no-unused-vars': 'off',

            quotes: [
                'warn',
                'single',
                {
                    avoidEscape: true,
                },
            ],

            curly: 'warn',
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/no-unused-vars': ['error'],
            'newline-before-return': 'warn',
            'no-use-before-define': ['error', 'nofunc'],
            'unused-imports/no-unused-imports': 'error',

            'react/jsx-curly-brace-presence': [
                'warn',
                {
                    props: 'never',
                    children: 'never',
                },
            ],

            'prefer-arrow-callback': [
                'error',
                {
                    allowNamedFunctions: true,
                },
            ],

            'func-style': [
                'error',
                'expression',
                {
                    allowArrowFunctions: true,
                },
            ],

            '@stylistic/padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'if',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'try',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'switch',
                },
            ],

            'import/order': [
                'error',
                {
                    'newlines-between': 'always',

                    groups: [
                        'unknown',
                        'builtin',
                        'external',
                        'internal',
                        ['sibling', 'parent'],
                        'object',
                        'index',
                        'type',
                    ],

                    pathGroups: [
                        {
                            pattern: '**/constants',
                            group: 'unknown',
                            position: 'before',
                        },
                        {
                            pattern: '@/core/redux/store',
                            group: 'internal',
                            position: 'before',
                        },
                    ],

                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],

            'id-length': [
                'error',
                {
                    min: 2,
                    exceptions: ['_', 't', 'i'],
                    properties: 'never',
                },
            ],
        },
    },
]);
