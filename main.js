$(document).ready(function(){
  $('nav a').on('click', function(){
    var activeLink = $(this).closest('a');
    console.log(activeLink);
    $('nav a').removeClass('active');
    activeLink.addClass('active');
    //check which level and add active to the top li
    if(activeLink.parent().hasClass('sub-nav__item')){
      var topLi = activeLink.parent().parent().parent();
      
    } else {
      var topLi = activeLink.parent();

    }
    $('nav li').removeClass('active');
      topLi.addClass('active');
  });
});

//smooth out the scroll to section, not sure about this one.. too long of a page
$(document).on('click', 'a[href^="#"]', function (event) {
  

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  
});

$(window).on('load', function(){

  //check for alternate link location
  var locationName = location.href.split("#");

  //set active link and scroll to location if not homepage
  if(locationName.length > 1){
    var fileName = locationName.slice(-1);
    var startingActive = $('a[href*="'+fileName+'"]');
    
    //set active link for the menu
    $('nav a').removeClass('active');
    $('nav li').removeClass('active');

    startingActive.addClass('active');
    if(startingActive.parent().hasClass('sub-nav__item')){
       startingActive.parent().parent().parent().addClass('active');
    } else {
      startingActive.parent().addClass('active');
    }

    $('html, body').animate({
      scrollTop: $("#"+fileName).offset().top
    }, 2000).delay(1000);
  }
});

//scroll navigation tie in 
$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
      $('nav').addClass('fixed');
      $('section').each(function(i) {
       
          if ($(this).position().top <= windscroll - 20) {
              $('nav a.active').removeClass('active');
              $('nav li.active').removeClass('active');
              $('nav a').eq(i).addClass('active');
              if($('nav a').eq(i).parent().hasClass('sub-nav__item')){
                $('nav a').eq(i).parent().parent().parent().addClass('active');
              }else{
                $('nav a').eq(i).parent().addClass('active');
              }
          }
      });

  } 

});