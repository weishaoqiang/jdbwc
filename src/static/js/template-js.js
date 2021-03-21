require('./utils.js')
$(function() {
  /**
   * header.ejs部分逻辑
   */

  /**
   * nav.ejs导航部分逻辑
   */
  activeNavFun()
})

const activeNavFun = function() {
  const curPath = location.pathname
  for (let i = 0; i < $('#nav .nav-link').length; i++) {
    const item = $('#nav .nav-link')[i]
    // console.log(item.dataset.path);
    $(item).removeClass("active")
    if (curPath.indexOf(item.dataset.path) > -1) {
      $(item).addClass('active')
    }
  }
}