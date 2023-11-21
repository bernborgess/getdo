/** @type {import('ts-jest').JestConfigWithTsJest} */
import "@types/jest";
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 20000
};