function animacao() {
  $('.funciona').addClass('teste').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd',
function(){$('.funciona').removeClass('teste');});

}
function mostrarFila() {
  $('.parent').addClass('is-animating');
}

$(function() {
    var $yeti = $('#yeti');
  
    $('#transitioner').click(function() {
      MotionUI.animateIn($yeti, 'transicao-bacana');

    });
  });