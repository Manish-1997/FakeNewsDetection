jQuery(document).ready(function () {
	$(".bot").hide();
	$(".graph").hide();
	$("#result").hide();
	$("#logo").click(function()
{
	$('.graph').hide();
	$('#graph').show();
	$('.top').show();
        slider.classList.remove('closed');
        slider.classList.add('opened');
        sliderbot.classList.remove('opened');
        sliderbot.classList.add('closed');
        setTimeout(function(){
    $('.bot').hide();
}, 250);
	$("#msg1").empty();
	$("#new").empty();
   load();
});
$("#graph").click(function(){
$('.bot').hide();
$('.top').hide();
$('#graph').hide();
$('.graph').show();
});
	$("#mouse").click(function()
{
	
        slider.classList.remove('opened');
        slider.classList.add('closed');
        sliderbot.classList.remove('closed');
        sliderbot.classList.add('opened');
        setTimeout(function(){
    $('.top').hide();
}, 250);
        $(".bot").show();

});
$('#myBtn').click(function(){
	$("#result").show();
	setTimeout(function(){
    $("#result").hide();
}, 5000);
});
$('#url').keyup(function(){
	$("#result").hide();
});
var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
var showTexts = function (target, message, index, interval) {    

  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}

    


window.onload = function() {
	var functionBCompleted = false;
var a = function(){
	showText("#msg1", "Hello!"+"\n"+"I'm Crypton", 0, 80);
	return functionBCompleted = true;
}()

  if(functionBCompleted == true){
  	setTimeout(function(){
    showTexts("#new", "A Fake News Detection bot"+"\n"+"based on machine learning", 0, 20);
}, 1600);
  	
  }

};

var load = function() {
	var functionBCompleted = false;
var a = function(){
	showText("#msg1", "Hello!"+"\n"+"I'm Crypton", 0, 80);
	return functionBCompleted = true;
}()

  if(functionBCompleted == true){
  	setTimeout(function(){
    showTexts("#new", "A Fake News Detection bot"+"\n"+"based on machine learning", 0, 50);
}, 1600);
  	
  }

};

function toggleSlider(){
    if (slider.classList.contains('opened')) {
        slider.classList.remove('opened');
        slider.classList.add('closed');
    } else {
        slider.classList.remove('closed');
        slider.classList.add('opened');
    }
}
var slider = document.querySelector('.top');
var sliderbot = document.querySelector('.bot');
  $(document).on("mousewheel DOMMouseScroll", function(e) {
  	$('#graph').show();
  	$('.graph').hide();
  	var scrolling = false;
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $('.top').show();
        slider.classList.remove('closed');
        slider.classList.add('opened');
        sliderbot.classList.remove('opened');
        sliderbot.classList.add('closed');
        setTimeout(function(){
    $('.bot').hide();
}, 250);
        
       // $("#top").show();

      } else { 
        //$("#top").hide();

        slider.classList.remove('opened');
        slider.classList.add('closed');
        sliderbot.classList.remove('closed');
        sliderbot.classList.add('opened');
        setTimeout(function(){
    $('.top').hide();
}, 250);
        $(".bot").show();
        
      }
    }
  });


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});
  


