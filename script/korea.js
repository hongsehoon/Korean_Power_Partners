(function($){
  var cnt = 0;

  $('.main-btn').on({
      mouseenter: function(){
        $('.sub').stop().slideDown(300);
        $('.main-btn').removeClass('addHover');
        $(this).addClass('addHover'); 
      },
      focusin: function(){
        $('.sub').stop().slideDown(300);
        $('.main-btn').removeClass('addHover');
        $(this).addClass('addHover');  
      }
  });
 
  $('#nav').on({
    mouseleave: function(){
      $('.sub').stop().slideUp(300);
      $('.main-btn').removeClass('addHover');
    }
  });

  function mainSlide(){
    $('.slide-wrap').stop().animate({left:-1903*cnt}, 1000, function(){
      if(cnt>2){cnt=0}
      $('.slide-wrap').stop().animate({left:-1903*cnt}, 0);
    });
  }


  function nextCount(){
    cnt++;
    mainSlide();
  }

  
  setInterval(nextCount, 3000);



  

})(jQuery);