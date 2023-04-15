// eslint-disable-next-line no-undef
module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  jest: {
    setupFiles: ['./path/to/jestSetupFile.js'],
  },
};
