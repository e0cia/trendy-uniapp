var barcode = require('./barcode');
var qrcode = require('./qrcode');

function convert_length(length) {
	return Math.round(uni.getSystemInfoSync().windowWidth * length / 750);
}

function barc(id, code, width, height) {
	barcode.code128(uni.createCanvasContext(id), code, convert_length(width), convert_length(height))
}

function qrc(id, code, width, height) {
	qrcode.api.draw(code, {
		ctx: uni.createCanvasContext(id),
		width: convert_length(width),
		height: convert_length(height)
	})
}

module.exports = {
	barcode: barc,
	qrcode: qrc
}