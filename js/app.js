$(document).ready(function() {
    var header = $('header');
    
    var backgrounds = [
        'url(./img/slider-1.jpg)',
        'url(./img/slider-2.jpg)',
        'url(./img/slider-3.jpg'];
  var current = 0;
 
    
  function nextBackground() {
    header.css(
     'background',
      backgrounds[current = ++current % backgrounds.length]
   );
  
      setTimeout(nextBackground, 5000);
      header.css('background-size', 'cover');
      
   }
   setTimeout(nextBackground, 5000);
    header.css('background', backgrounds[0]);
    header.css('background-size', 'cover');
});
    

