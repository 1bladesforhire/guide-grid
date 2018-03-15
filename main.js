$(document).ready(function() {
  $('nav a[href*="#').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling using animatescroll
      $(target).animatescroll({scrollSpeed:2000,easing:'easeInOutQuart'});
      location.hash = target; //attach the hash (#jumptarget) to the pageurl

      //close the mobile nav
      if($(this).hasClass('active') && !$(this).parent().hasClass('sub-nav__item') ){
        //mobile nav close after click on the link
        if($(window).width() < 769){
          $('.hamburger').toggleClass('open');
          $('#menu-list').slideToggle();
        }
      }

      //remove all current active classes
      $('nav .active').removeClass('active');
     
      
      //set the current element to active
      $(this).addClass('active');

      //check for nav menu level
      if($(this).parent().hasClass('sub-nav__item')){

        //mobile nav close after click on the link
        if( $(window).width() <769){
          $('.hamburger').toggleClass('open');
          $('#menu-list').slideToggle();
        }
        
        $(this).parent().parent().parent().addClass('active');
      }else{
        $(this).parent().addClass('active');
      }

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  //if we have started scrolling, check where we are
  if (scrollDistance > 50){
    
  // Assign active class to nav links while scrolling
    $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance - 50) {
          
          $('nav .active').removeClass('active');
          var target =  $('nav a').eq(i).attr('href');
          $('nav a').eq(i).addClass('active');
          if($('nav a').eq(i).parent().hasClass('sub-nav__item')){
            $('nav a').eq(i).parent().parent().parent().addClass('active');
          }else{
            $('nav a').eq(i).parent().addClass('active');
          }
          
          //attach the hash (#jumptarget) to the pageurl
          // location.hash = target; 
        } 
      
        return target;
    });

  }

}).scroll();




$(window).on('load', function(){

  //check for alternate link location
  var locationName = location.href.split("#");

  //set active link and scroll to location if not homepage
  if(locationName.length > 1 && locationName !== "section-1"){
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
    }, 2000);
  }

  // $('.lazy').Lazy({

  //   scrollDirection: 'vertical',
  //   effect: 'fadeIn',
  //   visibleOnly: false,
  //   onError: function(element) {
  //       console.log('error loading ' + element.data('src'));
  //   }
  // });
}); 

//mobile nav
$('.hamburger').on('click', function(){
  $('.hamburger').toggleClass('open');
  $('#menu-list').slideToggle();
});


$('.drawer').on('click', function(event){
  event.preventDefault();
  var content = $(this).attr('href');
  $(content).slideToggle('fast');
  $(this).toggle();
  return false;
});

$('.drawer-close').on('click', function(){
  $(this).parent().slideToggle('fast');
  $(this).parent().parent().find('a.drawer').toggle();
});
