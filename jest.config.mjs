/** @type {import('ts-jest').JestConfigWithTsJest} **/
const testEnvironment = "node";
const transform = {
  "^.+.tsx?$": [
    "ts-jest",
    {
      useESM: true,
    },
  ],
};

export default {
  testEnvironment,
  transform,
};
