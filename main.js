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