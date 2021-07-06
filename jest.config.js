module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  moduleFileExtensions: ["js", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
};
