$(function() {
  var mainNavButton = $('#mainNavButton');
  var mainNavButtonClose = $('#mainNavButtonClose');
  var mainNavBlockWrap = $('#mainNavBlockWrap');
  var mainNavList = $('#mainNavBlockWrap #mainNavList');
  var orderButton = $('#orderButton');
  var orderPopup = $('#orderPopup');
  var aboutBlockHeadline = $('#aboutBlockHeadline').text();
  
  mainNavButton.click(function() {
    mainNavButtonClose.addClass('main-nav__button-close--vissible');
    mainNavBlockWrap.toggleClass('main-nav__blockWrap--padding-vissible');
    mainNavList.toggleClass('main-nav__list--vissible');
  });
  
  mainNavButtonClose.click(function () {
    $(this).removeClass('main-nav__button-close--vissible');
    mainNavBlockWrap.removeClass('main-nav__blockWrap--padding-vissible');
    mainNavList.removeClass('main-nav__list--vissible');
  });
  
  orderButton.click(function () {
    orderPopup.slideToggle('1000');
  });
});

