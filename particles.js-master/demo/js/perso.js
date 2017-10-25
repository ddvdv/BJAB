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
  let password = "bjabEnter";
  let guess = '';
  let update = 0;
  let updated = false;
  let nbTry = 0;


  // Révélation des hints par click
  $('canvas').click(function(){
    clickToUncover++;
    if (clickToUncover == 7){
      $('#interface').animateCss('fadeIn');
      $('#interface').text("What if you stopped tickling me...");
      setTimeout( () => {
        $('#interface').animateCss('fadeOut');
      }, 1000)
      // $('#interface').text("");
      setTimeout( () =>{
        $('#interface').text("and tried a password instead?");        
        $('#interface').animateCss('fadeIn');
      }, 2000);

    }
  })

  // Révélation du site par mdp
  $('body').on('keypress', (e) => {
    guess = guess + e.key;
    console.log(e.key);
    console.log(guess);
    console.log(password);

    if (e.key === 'Enter'){
      if (guess == password){
        hidden = false;
        $('#interface').animateCss('zoomIn');
        $('#interface').text('Well done!');
        setTimeout( () => {
            $('#interface').remove();
            $('.own-content').css('z-index', 1);
            $('#logo').removeClass();
            $('#logo').animateCss('jackInTheBox');
            $('body').off();
        }, 1000);
      } else {
        nbTry++;
        if (nbTry == 3){
          $('#interface').text("What about.. the name of your school?");
        } else {
          $('#interface').animateCss('shake');
          $('#interface').text("Try again");
        }
        guess = '';
      }
    }

  })




  // Effet sur le logo principal et révélation de l'exo final
  $('#logo').click(function(){
    update++;
    if (update > 2 && updated == false){
      updated = true;
      $('#logo').removeClass();
      $('#logo').animateCss('hinge');
      setTimeout(()=>{
        // $('#logo').animateCss('slideInDown');
        $('#logo').remove();
        $('.own-content').append(`
          <div class="option excuse" style="grid-area: logo">
          <h3>Excuse generator</h3>
          <a href="https://thimbleprojects.org/mozillalearning/11698/" class="scrn hidden" target="_blank">
          <img class="shot" src="../../scrn-excuse.jpeg" alt="excuse" unselectable="on">
          <div class="rating">Level 
          <i class="fa fa-star" style="font-size:24px"></i>
          <i class="fa fa-star" style="font-size:24px"></i>
          <i class="fa fa-star" style="font-size:24px"></i>
          <i class="fa fa-star" style="font-size:24px"></i>
          <i class="fa fa-star" style="font-size:24px"></i>
          </div>
          </a>
          </div>
          `)
      }, 2000);
    }
  })

  // Affichage print-screen sur hover des options
  $('.own-content').on('mouseenter', '.option', function(){
    $(this).find('.scrn').removeClass('hidden');
    $(this).find('h3').animateCss('tada');
  })

  $('.own-content').on('mouseleave', '.option', function(){
    $(this).find('.scrn').addClass('hidden');

  })


  $('.own-content').on('click', '.option', function(e){
    e.preventDefault();
    $(this).animateCss('rollOut');
    setTimeout(()=>{
      let link = $(this).find("a").attr("href");
      window.open(link, '_blank');
    }, 500);
  })


});