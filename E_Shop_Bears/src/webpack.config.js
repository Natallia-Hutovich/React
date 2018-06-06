var path = require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const CSSPlugin=new ExtractTextPlugin('app.css');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');


module.exports={
	entry: {
		main: './src/index.js',
		vendor: ['react', 'react-dom','react-router','react-router-dom']
	},
	output:{
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	devServer:{
		inline:true,
		contentBase:'./build',
		port:3000
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader:'babel-loader',
				query:{
					presets:['es2015', 'react']
				}
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/\.(png|jpg)$/,
				loader:'url-loader?limit=20000'
			},
			{
				test:/\.css$/,
				use:CSSPlugin.extract(['css-loader', 'autoprefixer-loader'])
			},
			{
				test:/\.scss$/,
				use:CSSPlugin.extract(['css-loader','autoprefixer-loader', 'sass-loader'])
			},
			{
		                test: /\.jsx$/,
		                loader: "react-hot!babel",
		                exclude: [/node_modules/, /public/]
		        }
		]
	},
	plugins:[
		CSSPlugin,
		new CommonsChunkPlugin({name:'vendor', filename:'vendor.bundle.js'})
	]
}