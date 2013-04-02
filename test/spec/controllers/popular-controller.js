'use strict';

describe('dashboard popular', function() {

  var page  = '/mocks/index.html';
  beforeEach(function() { browser().navigateTo(page); });
  beforeEach(function() { element('.sidebar-nav .popular').click(); });

  it('shows the popular page', function() {
    expect(element('.sidebar-nav .active').text()).toMatch('Popular');
    expect(element('.types').text()).toMatch(/Basic Light/);
    expect(element('.types').text()).toMatch(/Complex Light/);
    expect(repeater('.type').count()).toBe(2);
  });

  describe('when search a type', function() {

    beforeEach(function() { input('query').enter('Complex') });

    it('filters the searched type', function() {
      expect(element('.types').text()).not().toMatch(/Basic Light/);
      expect(element('.types').text()).toMatch(/Complex Light/);
      expect(repeater('.type').count()).toBe(1);
    });
  });

  describe('when clicks a type', function() {

    beforeEach(function() { element('.type-1 .name a').click(); });

    it('shows the detailed type view', function() {
      expect(element('.type-component .description').text()).toMatch(/The Basic Light type represents the most basic light structure/);
    });
  });

  describe('when click the type category', function() {

    beforeEach(function() { element('.type-1 .lights').click(); });

    it('shows the category list', function() {
      expect(element('.sidebar-nav .active').text()).toMatch('Lights');
      expect(element('.types').text()).toMatch(/Basic Light/);
      expect(repeater('.type').count()).toBe(1);
    });
  });
});
