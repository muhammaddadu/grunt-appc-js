'use strict';

var appcJs = require('../tasks/appc_js.js');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports.appcJs = {
	/**
	 * Setup
	 * @param {Function} done [description]
	 */
	setUp: function (done) {
		// setup here if necessary
		done();
	},
	/**
	 * Default options
	 * @param  {[type]} test [description]
	 * @return {[type]}      [description]
	 */
	defaultOptions: function (test) {
		test.expect(1);

		var holder = {};
		
		holder.registerMultiTask = function (name, description, func) {
			test.equal(name, 'appcJs');
		};

		appcJs(holder);

		test.done();
	}
};
