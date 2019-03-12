// Sticky properties and nav nature change
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});

// // scroll spy
// $('body').scrollspy({target: "nav ul"}, function () {
//     $('nav ul li').addClass('active');
// });

// // idek
// $("nav").find("a").click(function(e) {
//     e.preventDefault();
//     var section = $(this).attr("href");
//     $("html, body").animate({
//         scrollTop: $(section).offset().top
//     });
// });


// Active section and scroll
var sections = $('section');
var nav = $('nav');
var nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height;
    var bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      console.log($(this).attr('id'));
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

// Scroll speed
nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top}, 500);
 
  return false;
});

// // NAV POSITION
// var navPos = $('nav').position().top; // References the position of the nav bar
// var lastPos = 0; 
// var lockTimer;

// $(window).on('scroll', function () {

//     var pos = $(window).scrollTop();
//     var pos2 = pos + 50;
//     var scrollBottom = pos + $(window).height();

//     if (!isMobile) {
//     if (pos >= navPos + $('nav').height() && lastPos < pos) {
//         $('nav').addClass('fixed');
//     }
//     if (pos < navPos && lastPos > pos) {
//         $('nav').removeClass('fixed');
//     }
//     lastPos = pos;
//     }

//     // Link Highlighting
//     if (pos2 > $('#home').offset().top)       { highlightLink('home'); }
//     if (pos2 > $('#about').offset().top)      { highlightLink('about'); }
//     if (pos2 > $('#portfolio').offset().top)  { highlightLink('portfolio'); }
//     if (pos2 > $('#blog').offset().top)       { highlightLink('blog'); }
//     if (pos2 > $('#contact').offset().top ||
//         pos + $(window).height() === $(document).height()) {
//         highlightLink('contact');
//     }

//     // Prevent Hover on Scroll
//     clearTimeout(lockTimer);
//     if(!$('body').hasClass('disable-hover')) {
//     $('body').addClass('disable-hover')
//     }

//     lockTimer = setTimeout(function(){
//     $('body').removeClass('disable-hover')
//     }, 500);
// });

// function highlightLink(anchor) {
//     $('nav .active').removeClass('active');
//     $("nav").find('[dest="' + anchor + '"]').addClass('active');
// }