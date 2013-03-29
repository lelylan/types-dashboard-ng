'use strict';

describe('dashboard', function() {

  var page  = '/mocks/index.html';

  beforeEach(function() {
    browser().navigateTo(page);
  });

  describe('home', function() {

    it('shows the introduction page', function() {
      expect(element('.home .title').text()).toMatch('Lelylan Types');
    });

    describe('when clicks on the search button', function() {

      beforeEach(function() { element('.home .search').click(); });

      it('shows the popular page', function() {
        expect(element('.sidebar-nav .active').text()).toMatch('Popular');
      });
    });

    describe('when clicks on the create button', function() {

      beforeEach(function() { element('.home .create').click(); });

      it('shows the create page', function() {
        expect(element('.sidebar-nav .active').text()).toMatch('Create type');
      });
    });
  });
});
