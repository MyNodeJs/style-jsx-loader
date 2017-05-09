var fs = require('fs');
var loaderUtils = require('loader-utils');

var format = function(str) {
	var rest = '';

	rest = str.replace(/\t/, '');

	return rest;
}

module.exports = function(source) {
	var arr,style='',write_str = '';
	var query = loaderUtils.getOptions(this) || {};

	if(source.indexOf('</style>') > 0) {
		arr = source.split(/<\/style>/);
		source = arr[1];
		write_str = arr[0];
		write_str = write_str.replace('<style>', '');
		write_str = format(write_str);

		if(this.resourcePath == query.entry) {
			fs.writeFileSync('style-jsx-loader.css', write_str);
		} else {
			fs.appendFileSync('style-jsx-loader.css', write_str);
		}
		
	}
	return source;
};