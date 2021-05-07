/* jshint mocha: true, maxlen: false */
var wml = require('../index.js'),
	expect = require('chai').expect;


function test(params, output, done) {
	wml(params).process()
		.then(function(result) {
           expect(output).to.eql(result);
			done();
		})
		.catch(function(error) {
			console.log(error);
		});
}

describe('Test for pages', function() {

    it('Test vuejs-twig-scss atomic generation', function(done) {
        test({input:'./test/complex.wml', output:'./export/vuejs-twig-scss/atomic', design:'atomic', type: 'vuejs-twig-scss'}, true, done);
    });

	it('Test vuejs-twig-scss component generation', function(done) {
		test({input:'./test/complex.wml', output:'./export/vuejs-twig-scss/component', design:'component', type: 'vuejs-twig-scss'}, true, done);
	});

	it('Test vuejs component generation', function(done) {
		test({input:'./test/complex.wml', output:'./export/vuejs', type: 'vuejs'}, true, done);
	});

	it('Test vuejs-liquid-scss component generation', function(done) {
		test({input:'./test/complex.wml', design:'component', output:'./export/vuejs-liquid-scss/component', type: 'vuejs-liquid-scss'}, true, done);
	});

	it('Test vuejs-liquid-scss shopify generation', function(done) {
		test({input:'./test/complex.wml', design:'shopify', output:'./export/vuejs-liquid-scss/shopify', type: 'vuejs-liquid-scss'}, true, done);
	});
});