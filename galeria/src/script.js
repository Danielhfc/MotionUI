function diminuirZoom(){
  document.querySelectorAll('img.galeria').forEach(x => x.classList.add("zoom-diminuido"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-aumentado"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-normal"));
  mostrarFila();
 }

 function aumentarZoom(){
  document.querySelectorAll('img.galeria').forEach(x => x.classList.add("zoom-aumentado"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-diminuido"));
  document.querySelectorAll('img.galeria').forEach(x => x.classList.remove("zoom-normal"));
  mostrarFila();
 }

function remove(){
  $('.cards').removeClass('is-animating');
 }

 function mostrarFila() {
  $('.cards').addClass('is-animating'); 
  
}