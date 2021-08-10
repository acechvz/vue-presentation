module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^[^.]+.vue$': 'vue-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/*.js',
    '!src/**/*.spec.js',
    '!**/node_modules/**',
  ],
  modulePathIgnorePatterns: ['<rootDir>/src/mocks'],
  testPathIgnorePatterns: ['<rootDir>/src/mocks'],
};
