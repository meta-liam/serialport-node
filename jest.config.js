module.exports = {
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "node_modules",
    "/dist",
    "/lib",
    "/*.local",
    "__test__",
    "__mocks__",
  ],
  testMatch: [
    '<rootDir>/src/**/test/*.spec.{js,ts}',
    '<rootDir>/extension/*/test/*.{spec,test}.{js,ts}',
  ],
  preset: 'ts-jest',
};
