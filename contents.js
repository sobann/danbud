  $(document).on('scroll', function() {
    const windowHeight = $(window).height();
    const $aboutBusiness = $('.about_business--section');
    const scrollValue = $(document).scrollTop();
    const aboutFromTop = $aboutBusiness.offset().top;
    const aboutHeight = $aboutBusiness.outerHeight(true);

    // aside 'dlaczego my'
    const $sec1 = $('.sec1');
    const sec1FromTop = $sec1.offset().top;
    const sec1Height = $sec1.outerHeight(true);

      
        // sekcja aboutBusiness
          if(scrollValue > aboutFromTop + aboutHeight/3 - windowHeight){
            $aboutBusiness.addClass('active');
          }
          else{
            $aboutBusiness.removeClass('active');
          }
      
          // sekcja aside dalczego my
          if(scrollValue > sec1FromTop + sec1Height/2 - windowHeight){
            $sec1.addClass('activeAside');
          }
          else{
            $sec1.removeClass('activeAside');  
          }
});