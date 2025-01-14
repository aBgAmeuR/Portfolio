import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: [
      'dist/*',
      '**/.cache',
      '**/public',
      '**/node_modules',
      '**/*.esm.js',
    ],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended'
  ),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
    },

    settings: {
      tailwindcss: {
        callees: ['cn'],
        config: 'tailwind.config.js',
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      'sort-imports': 'off',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-var-requires': 'off',

      'simple-import-sort/imports': [
        2,
        {
          groups: [
            ['^.+\\.s?css$'],
            [
              '^(_http_agent|_http_client|_http_common|_http_incoming|_http_outgoing|_http_server|_stream_duplex|_stream_passthrough|_stream_readable|_stream_transform|_stream_wrap|_stream_writable|_tls_common|_tls_wrap|assert|assert/strict|async_hooks|buffer|child_process|cluster|console|constants|crypto|dgram|diagnostics_channel|dns|dns/promises|domain|events|fs|fs/promises|http|http2|https|inspector|inspector/promises|module|net|os|path|path/posix|path/win32|perf_hooks|process|punycode|querystring|readline|readline/promises|repl|stream|stream/consumers|stream/promises|stream/web|string_decoder|sys|timers|timers/promises|tls|trace_events|tty|url|util|util/types|v8|vm|wasi|worker_threads|zlib)(/|$)',
              '^react',
              '^@?\\w',
            ],
            ['^components(/.*|$)'],
            ['^lib(/.*|$)', '^hooks(/.*|$)'],
            ['^\\.'],
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
