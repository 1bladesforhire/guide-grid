$(document).ready(function(){
  $('nav a').on('click', function(){
    $activeLink = $(this).closest('a');
    
    $('nav a').removeClass('active');
    $activeLink.addClass('active');
    //check which level and add active to the top li
    if($activeLink.parent().hasClass('sub-nav__item')){
      $topLi = $activeLink.parent().parent().parent();
      
    } else {
      $topLi = $activeLink.parent();

    }
    $('nav li').removeClass('active');
      $topLi.addClass('active');
  });
});

//smooth out the scroll to section, not sure about this one.. too long of a page
$(document).on('click', 'a[href^="#"]', function (event) {
  

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 2000);
  
});

$(window).on('load', function(){

  //check for alternate link location
  var locationName = location.href.split("#");

  //set active link and scroll to location if not homepage
  if(locationName.length>1){
    var fileName = locationName.slice(-1);
    var startingActive = $('a[href*="'+fileName+'"]');
    console.log(locationName.length);

    //set active link for the 
    $('nav a').removeClass('active');
    startingActive.addClass('active');
    if(startingActive.parent().hasClass('sub-nav__item')){
      $topLi = startingActive.parent().parent().parent();
    } else {
      $topLi = startingActive.parent();
    }
    $('nav li').removeClass('active');
    $topLi.addClass('active');

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
  }
});