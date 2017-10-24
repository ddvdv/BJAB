$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});


$(document).ready(function(){
  let clickToUncover = 0;
  let hidden = true;

  // Révélation du site
  $('canvas').click(function(){
    clickToUncover++;
    if (clickToUncover >= 5 && hidden == true){
      hidden = false;
      $('.own-content').css('z-index', 1);
      $('#logo').removeClass();
      $('#logo').animateCss('jackInTheBox');
    }
  })

  // Effet sur le logo principal
  $('#logo').click(function(){
  $('#logo').removeClass();
  $('#logo').animateCss('jello');
  })

  // Affichage print-screen sur hover des options
  $('.option').mouseenter(function(){
    $(this).find('.scrn').removeClass('hidden');
    $(this).find('.scrn').animateCss('bounceIn');
  }).mouseleave(function(){
    $(this).find('.scrn').addClass('hidden');
  })


});