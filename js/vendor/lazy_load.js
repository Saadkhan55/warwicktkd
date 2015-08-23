//***********************************************
// lazy_load.js 
// Calls lazy load function to lazy load
// images so web pages load quicker
//**********************************************
$(function() {
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
});
