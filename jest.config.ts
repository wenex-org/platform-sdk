export default {
  collectCoverage: true,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  watchman: true,
};
