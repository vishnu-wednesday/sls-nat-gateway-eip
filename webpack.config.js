const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line import/no-extraneous-dependencies
const slsw = require('serverless-webpack');

module.exports = {
	entry: slsw.lib.entries,
	target: 'node',
	mode: 'production',
	externals: [nodeExternals()],
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
		],
	},
	resolve: {
		modules: ['node_modules', './'],
		alias: {
            // add any aliases you want here.
			'@daos': path.resolve(__dirname, 'daos/'),
			'@utils': path.resolve(__dirname, 'utils/'),
			'@services': path.resolve(__dirname, 'services/'),
			'@mocks': path.resolve(__dirname, '__mocks__/'),
			'@models': path.resolve(__dirname, 'models/'),
		},
		extensions: ['.js'],
		mainFields: ['browser', 'jsnext:main', 'main'],
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js',
	},
};
