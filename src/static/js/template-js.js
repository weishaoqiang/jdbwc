$(function() {
  /**
   * header.ejs部分逻辑
   */
  

  /**
   * nav.ejs导航部分逻辑
   */
  $('#nav .nav-link').on('click', function(e) {
    try {
      $(".nav-link").removeClass("active");
      $(this).addClass('active')
    } catch (err) {
      console.error(err);
    }
  })
})