var eddystoneBeacon = require('eddystone-beacon');
var TinyURL = require('tinyurl');

var url = "https://" + process.env.RESIN_DEVICE_UUID + ".resindevice.io"
var powerLevel = process.env.PWR || -21;

TinyURL.shorten(url, function(res) {
	eddystoneBeacon.advertiseUrl(res, { txPowerLevel: powerLevel });
	console.log("Beacon broadcasting " + res + " with txPowerLevel : " + powerLevel)
});