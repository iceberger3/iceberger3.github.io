$(document).ready(function(){
  $(window).on('scroll',function(){
      // we round here to reduce a little workload
      stop = Math.round($(window).scrollTop());
      if (stop < 200) {//top
        $('.navbar-inverse').removeAttr("style");
        $('.navbar-brand').removeAttr("style");
        $('.navbar-inverse .navbar-nav>li>a').removeAttr("style");
        $('.icon-bar').removeAttr("style");
        $('.navbar-toggle:hover').removeAttr("style");
      } else {//bottom
        $('.navbar-inverse').css({'background-color': 'white', 'opacity': '.9', 'box-shadow' : '0 8px 8px -4px rgba(0,0,0,0.3)'});
        $('.navbar-brand').css('color', '#000');
        $('.navbar-inverse .navbar-nav>li>a').css('color', '#000');
        $('.icon-bar').css('background-color', '#000');
        $('.navbar-toggle').css('background-color', 'transparent');
      }
  });
});