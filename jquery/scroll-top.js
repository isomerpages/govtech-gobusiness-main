$(document).ready(function() {
    $('html, body').click(function(){
      $('div').animate({
        scrollTop: 0},
        'fast'
      );
    });
  });