//stuff
var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');
var helloMsg = require('../assets/javascripts/react.jsx');

var assert = require('assert');
var expect = require('chai').expect;

describe('number', function() {
  describe('one', function () {
    it('should be equal to one', function () {
      assert.equal(1,1);
    });
  });
});

describe('dumb test', function(){
  it('should be h1', function(){
    var hello = ReactTestUtils.renderIntoDocument(
      <helloMsg /> );
    expect(ReactTestUtils.isCompositeComponent(hello)).to.be.false;
  });
});
