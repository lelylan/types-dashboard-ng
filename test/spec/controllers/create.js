'use strict';

describe('dashboard', function() {

  var page  = '/mocks/index.html';

  beforeEach(function() {
    browser().navigateTo(page);
  });

  describe('when clicks "create type"', function() {

    beforeEach(function() { element('.sidebar-nav .create').click(); });

    it('shows the create form', function() {
      expect(element('.create-view .title').text()).toMatch('Create type');
    });

    describe('when creates a type', function() {

      beforeEach(function() { input('type.name').enter('Name') });
      beforeEach(function() { input('type.description').enter('Description') });
      beforeEach(function() { element('.create-view .create').click(); });

      it('shows the created type', function() {
        expect(element('.type-component .name').text()).toMatch('Basic Light');
      });
    });
  });
});
