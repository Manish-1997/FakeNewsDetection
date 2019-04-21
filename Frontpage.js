jQuery(document).ready(function () {
	$(".bot").hide();
	$("#logo").click(function()
{
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
});
  


