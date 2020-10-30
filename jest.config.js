module.exports = {
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: process.env.COVERAGE === 'true',
  collectCoverageFrom: [
    '<rootDir>/use-request/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/use-request/__tests__/**/*',
  ],
  testMatch: ['<rootDir>/use-request/__tests__/**/*.test.[jt]s?(x)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
