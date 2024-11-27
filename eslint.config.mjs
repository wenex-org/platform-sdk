// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: { allowDefaultProject: ['test/*.spec.ts', 'jest.config.ts'] },
        // @ts-ignore
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      'prettier/prettier': "off",
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
);
