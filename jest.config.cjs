module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    },
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
      },
};