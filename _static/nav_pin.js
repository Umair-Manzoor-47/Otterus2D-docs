// Pins the sidebar outer container so the header and home icon never scroll or shift
(function () {
  function enforceSidebarPin() {
    var sideScroll = document.querySelector('.wy-side-scroll');
    var navSide = document.querySelector('.wy-nav-side');

    if (sideScroll) {
      sideScroll.scrollTop = 0;
      sideScroll.addEventListener('scroll', function () {
        if (sideScroll.scrollTop !== 0) {
          sideScroll.scrollTop = 0;
        }
      }, { passive: false });
    }

    if (navSide) {
      navSide.scrollTop = 0;
      navSide.addEventListener('scroll', function () {
        if (navSide.scrollTop !== 0) {
          navSide.scrollTop = 0;
        }
      }, { passive: false });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enforceSidebarPin);
  } else {
    enforceSidebarPin();
  }
})();
