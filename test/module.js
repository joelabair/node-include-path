var chai = require('chai');
chai.config.includeStack = true;

var expect = chai.expect;
var should = chai.should();

var path = require('path');

describe('Node Inculde Path: ', function(){
	var includePath = require('../');

    it('exports the module as a function', function(){
		should.exist(includePath);
        expect(includePath).to.be.a('function');
	});

	it('can call the module function without exception', function() {
		expect(includePath).not.to.throw(Error);
	});

	it('can add paths without exception', function(){
		includePath(path.join(__dirname, 'lib_a'));
		includePath(['./test/lib_b']);

		var searchPaths = require('module').Module.globalPaths;

		expect(searchPaths).to.contain(path.join(__dirname, 'lib_a'));
		expect(searchPaths).to.contain('./test/lib_b');
	});

	it('can add existing paths without exception and without growing', function(){
		var searchPathsPre = JSON.stringify(require('module').Module.globalPaths);

		includePath(path.join(__dirname, 'lib_a'));
		includePath(['./test/lib_b']);

		var searchPaths = require('module').Module.globalPaths;
		var searchPathsPost =JSON.stringify(searchPaths);

		expect(searchPathsPre).to.equal(searchPathsPost);
		expect(searchPaths).to.contain(path.join(__dirname, 'lib_a'));
		expect(searchPaths).to.contain('./test/lib_b');
	});

	it('can require local modules without exception', function(){
		var tm1 = require('TestModule1');
		var tm2 = require('TestModule2');
		var tm3 = require('TestModule3');
		var tm4 = require('TestModule4');

		expect(tm1.isLoaded).to.be.true;
		expect(tm2.isLoaded).to.be.true;
		expect(tm3.isLoaded).to.be.true;
		expect(tm4.isLoaded).to.be.true;
	})
});
