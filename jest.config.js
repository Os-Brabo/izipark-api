const { pathsToModuleNameMapper } = require("ts-jest/utils")
const { compilerOptions } = require("./tsconfig.json")

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/config/*.ts",
    "!src/infra/**/*.ts",
    "!src/core/infra/*.ts",
    "!src/**/mappers/*.ts",
    "!src/**/errors/*.ts",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src",
  }),
}
