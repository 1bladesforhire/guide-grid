$(document).ready(function() {
  $('a[href*="#').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });
      

    //set the current element to active
      $('nav .active').removeClass('active');
      
      $(this).addClass('active');
      if($(this).parent().hasClass('sub-nav__item')){
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
  if (scrollDistance > 20){
    
  // Assign active class to nav links while scrolling
    $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance - 20) {
          
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
        // else{
        //   console.log('else');
        //   $('nav .active').removeClass('active');
        //   $('nav li:first').addClass('active');
        //   $('nav a:first').addClass('active');
        // }
        
        return target;
    });

  }

}).scroll();




//original active classes
// $(document).ready(function(){
//   $('nav a').on('click', function(event){
//     var activeLink = $(this);
//     event.preventDefault();
//     $('nav a').removeClass('active');
//     activeLink.addClass('active');
//     //check which level and add active to the top li
//     if(activeLink.parent().hasClass('sub-nav__item')){
//       var topLi = activeLink.parent().parent().parent();
      
//     } else {
//       var topLi = activeLink.parent();

//     }
//     $('nav li').removeClass('active');
//       topLi.addClass('active');
//   });
// });



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
});


//scroll navigation tie in 
// $(window).scroll(function() {
//   var windscroll = $(window).scrollTop();
//   if (windscroll >= 200) {
//       $('nav').addClass('fixed');
//       $('section').each(function(i) {
//           //check each section, for what is in view        
//           if ($(this).position().top <= windscroll - 20) {
            
//               $('nav a.active').removeClass('active');
//               $('nav li.active').removeClass('active');
//               $('nav a').eq(i).addClass('active');
//               if($('nav a').eq(i).parent().hasClass('sub-nav__item')){
//                 $('nav a').eq(i).parent().parent().parent().addClass('active');
//               }else{
//                 $('nav a').eq(i).parent().addClass('active');
//               }
//           } else if($(this).position().top <20){
//             $('nav a.active').removeClass('active');
//             $('nav a:first').addClass('active');
//           }
//       });

//   } 

// }).scroll();


