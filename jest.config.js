module.exports = {
	collectCoverageFrom: [
		'./**/*.js',
		'!babel.config.js',
		'!.eslintrc.js',
		'!jest.config.js',
		'!webpack.config.js',
		'!coverage/**/*.js',
		'!utils/*',
		'!mocks/**/*.js',
		'!.webpack/**/*.*',
		'!models/*',
		'!scripts/*',
		'!migrations/*',
		'!seeders/*',
		'!database/**/*.js',
	],
	coverageThreshold: {
		global: {
			statements: 50,
			branches: 50,
			functions: 50,
			lines: 50,
		},
	},
	moduleNameMapper: {
		'@(utils|services)(.*)$': '<rootDir>/$1/$2',
		'@mocks(.*)$': '<rootDir>/__mocks__/$1',
		'@daos(.*)$': '<rootDir>/daos/$1',
		'@models(.*)$': '<rootDir>/models/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
