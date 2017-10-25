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
  let password = "bjab to code";
  let guess = '';


  // Révélation du site par click
  $('canvas').click(function(){
    clickToUncover++;
    if (clickToUncover >= 15 && hidden == true){
      hidden = false;
      $('.own-content').css('z-index', 1);
      $('#logo').removeClass();
      $('#logo').animateCss('jackInTheBox');
    }
  })

  // Révélation du site par konami
  $('body').on('keypress', (e) => {
    guess = guess + e.key;
    console.log(e.key);
    console.log(guess);
    console.log(password);

    if (guess == password){
      hidden = false;
      $('.own-content').css('z-index', 1);
      $('#logo').removeClass();
      $('#logo').animateCss('jackInTheBox');
      $('body').off();
    }
  })




  // Effet sur le logo principal
  $('#logo').click(function(){
    $('#logo').removeClass();
    $('#logo').animateCss('hinge');
  })

  // Affichage print-screen sur hover des options
  $('.option').mouseenter(function(){
    $(this).find('.scrn').removeClass('hidden');
    $(this).find('h3').animateCss('pulse');
  }).mouseleave(function(){
    $(this).find('.scrn').addClass('hidden');
  })


  $('.option').click(function(e){
    e.preventDefault();
    $(this).animateCss('rollOut');
    setTimeout(()=>{
      let link = $(this).find("a").attr("href");
      window.open(link, '_blank');
    }, 500);
  })


});