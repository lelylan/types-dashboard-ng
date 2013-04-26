'use strict';

describe('dashboard yours', function() {

  var page = '/mocks/index.html';

  describe('when authenticated', function() {

    var fragment = '#access_token=token&token_type=bearer&expires_in=7200&state=state5c6007a2/mocks/index.html';

    beforeEach(function() { browser().navigateTo(page + fragment); });
    beforeEach(function() { element('.sidebar-nav .yours').click(); });

    it('shows the created types', function() {
      expect(element('.sidebar-nav .active').text()).toMatch('Yours');
      expect(element('.types').text()).toMatch(/Basic Light/);
      expect(repeater('.type').count()).toBe(1);
    });
  });

  describe('when not authenticated', function() {

    beforeEach(function() { browser().navigateTo(page); });
    beforeEach(function() { element('.sidebar-nav .yours').click(); });

    it('shows the unauthorized message', function() {
      expect(element('.types-view .authorization').css('display')).toBe('block');
      expect(element('.types-view .loading').css('display')).toBe('none');
      expect(element('.types-view .empty').css('display')).toBe('none');
    });
  });
});
