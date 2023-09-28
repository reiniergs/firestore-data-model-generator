module.exports = {
    displayName: 'builder',
    rootDir: '../../',
    testMatch: ['<rootDir>/packages/builder/**/*.spec.ts'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
};
