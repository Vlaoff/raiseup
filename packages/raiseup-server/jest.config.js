module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  modulePathIgnorePatterns: ['dist', 'node_modules'],
  moduleNameMapper: {
    '^Api/(.*)$': '<rootDir>/src/$1',
    '^Models/(.*)$': '<rootDir>/src/utils/types/id.ts',
    '^Utils/(.*)$': '<rootDir>/src/utils/$1',
    '^Shared/(.*)$': '<rootDir>../raiseup-shared/src/$1'
  },
  transform: {
    // "\\.(gql|graphql)$": "jest-transform-graphql",
  }
}
