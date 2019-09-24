const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	output: { filename: '[hash].js' },
	plugins: [
		new htmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};
