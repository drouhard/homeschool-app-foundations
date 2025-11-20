module.exports = {
  // TypeScript/JavaScript files in src directory
  'src/**/*.{ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    () => 'tsc --noEmit', // Run type check on all files
  ],

  // Config files (skip ESLint, only format)
  '*.{js,mjs,cjs}': ['prettier --write'],

  // JSON, CSS, and other files
  '**/*.{json,css,scss,md,mdx,yml,yaml}': ['prettier --write'],
};
