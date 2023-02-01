// simple JQuery example here

$(document).ready(function () {
//   image_array = [
//     "https://cdn.glitch.global/15483cb7-620a-4733-988f-f66dcd7d3026/robin.png?v=1674059228589",
//     "https://cdn.glitch.global/15483cb7-620a-4733-988f-f66dcd7d3026/maria.png?v=1674059272304",
//     "https://cdn.glitch.global/15483cb7-620a-4733-988f-f66dcd7d3026/oxman.png?v=1674059243297",
//     "https://cdn.glitch.global/15483cb7-620a-4733-988f-f66dcd7d3026/botero.png?v=1674059281268",
//     "https://cdn.glitch.global/15483cb7-620a-4733-988f-f66dcd7d3026/mogu.png?v=1674059257288",
//   ];

  //   function get_random_image(){
  //     random_index = Math.floor(Math.random()* image_array.length);
  //     selected_image = image_array[random_index]

  //     document.getElementByClass ('image1').src = '.${selected_image})'

  $(".clickable").click(function(){
    $(this).find(".still").toggle();
    $(this).find(".move").toggle();
    
    
    
  })
  
  
  
  $("#button").click(function () {
    
    $('.kid').toggle();
    
//     $('.image2').css({
//     display: 'block'
// });
        $('.image2').toggle();
    
 
   
    })
  
});

// more typical p5/ JS code examples below

let bgimg;
var timer = 0;

// function preload() {
//   bgimg = loadImage(
//

//   );
// }
