module.exports = {
  // TypeScript/JavaScript files
  '**/*.{ts,tsx,js,jsx}': [
    'eslint --fix',
    'prettier --write',
    () => 'tsc --noEmit', // Run type check on all files
  ],

  // JSON, CSS, and other files
  '**/*.{json,css,scss,md,mdx,yml,yaml}': [
    'prettier --write',
  ],
};
