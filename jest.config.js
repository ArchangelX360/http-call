module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+.ts$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      skipBabel: true,
    },
  },
}
