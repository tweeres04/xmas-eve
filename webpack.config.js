const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	plugins: [
		new htmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};
