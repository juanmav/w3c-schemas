var Jsonix = require('jsonix').Jsonix;
var XLink_1_0 = require('../W3C-Schemas').XLink_1_0;
var roundtrip = require('./roundtrip').roundtrip;
var mappings = [XLink_1_0];
module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : {
		"locator-01.xml" : function(test) {roundtrip(test, mappings, "tests/locator-01.xml");}
	}
};