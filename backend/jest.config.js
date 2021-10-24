/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*)+(spec|Test).[jt]s?(x)'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
