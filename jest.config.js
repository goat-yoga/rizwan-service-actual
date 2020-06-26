module.exports = {
  setupFiles: ["<rootDir>/spec/jestSetup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "bower_components"]
}