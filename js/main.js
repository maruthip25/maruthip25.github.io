function typeText(text, element, time){
  // "text" is the string
  // "element is the target element"
  // "time" is the time taken to fill text
  var interval = time/(text.length);
  var looperName = "looper"+new Date().getTime();
  console.log(interval);
  var i=0;
  $(element).html("");
  var looper = setInterval(function(){
    var newData = $(element).html()+text.charAt(i);
    $(element).html(newData);
    i++;
  }, interval);
  setTimeout(function(){
    clearInterval(looper);
    console.log(looperName);
  }, time+1000);
}
//universal new top for home element
//var newTop = (0 - parseInt($(window).height()))+"px";
var scrolledUp = false;
var viewOpen = false;
var newTop;
if($(window).width()<900){
  newTop = (0 - (parseInt($(window).height())/2))+"px";
}
else{
  newTop = (0 - (parseInt($(window).height())/4))+"px";
}
function slideUp(e) {
    if (e.deltaY < 0) {
      window.location = "#closeMenu";
    }
    if (e.deltaY > 0) {
      window.location = "#openMenu";
    }
}
//for swipes
$(function() {
$('.home').swipe( {
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if(direction=='up'){
      window.location = "#openMenu";
    }
    else if(direction=='down'){
      window.location = "#closeMenu";
    }
  }
});
});
$(window).load(function(){
  $('.loader').hide();
  $('.intro img').fadeIn(500);
  setTimeout(function(){ typeText("Maruthi",".intro h1", 500) }, 500);
  setTimeout(function(){ typeText("A.K.A Robotboy",".intro h2", 1200) }, 1000);
  setTimeout(function(){ typeText("Front-End Developer / UI Designer / Music Addict / An Idiot",".intro h3", 1500) }, 2200);
  $('img.arrow').hide().delay(3700).fadeIn(100);
  $('img.arrow2').hide().delay(3700).fadeIn(100);
});

/* href change code */
function hashFunction(hash){
  switch(hash){
    case 'about': {
      $('.home').css({
        top: "0px"
      });
      scrolledUp = false;
      $('#view').fadeIn("slow");
      $('#view').removeClass().addClass('about');
      $('#view').html("...");
      $('#view').load('about.html', function () {
      $(".view-wrapper").mCustomScrollbar({
          theme:"minimal-dark"
      });
      });
      break;
    }
    case 'blog': {
      $('.loader').show();
      $('.home').css({
        top: "0px"
      });
      scrolledUp = false;
      $('#view').fadeIn("slow");
      $('#view').removeClass().addClass('blog');
      $('#view').html("...");
      $('#view').load('blog/index.html',function () {
        $(".view-wrapper").mCustomScrollbar({
            theme:"minimal-dark"
        });
        $('.loader').hide();
      });
      break;
    }
    case 'contact': {
      $('.home').css({
        top: "0px"
      });
      scrolledUp = false;
      $('#view').fadeIn("slow");
      $('#view').removeClass().addClass('contact');
      $('#view').html("...");
      $('#view').load('contact.html',function () {
      $(".view-wrapper").mCustomScrollbar({
          theme:"minimal-dark"
      });
      });
      break;
    }

    case 'openMenu': {
      if($('#view').css("display")=="block"){
        $('#view').fadeOut(100);
      }

      if(!scrolledUp){
        if($('.home').offset().top>=0){
          $('.home').css({
            top: newTop
          });
          scrolledUp = true;
        }
      }
    }
    case 'closeMenu': {
      if(scrolledUp){
        if($('.home').offset().top<0){
          $('.home').css({
            top: "0px"
          });
          scrolledUp = false;
        }
      }
    }
    case 'toggleMenu': {
      if(scrolledUp){
        window.location="#closeMenu"
      }
      else{
        window.location="#openMenu"
      }
    }
    default:{
      if(hash.indexOf('blog-')==0){
        $('.loader').show();
        $('.home').css({
          top: "0px"
        });
        scrolledUp = false;
        $('#view').fadeIn("slow");
        $('#view').removeClass().addClass('blog');
        $('#view').html("...");
        var newPath = "blog/"+hash.replace("blog-","")+".html";
        console.log(newPath);
        $('#view').load(newPath, function () {
          $(".view-wrapper").mCustomScrollbar({
              theme:"minimal-dark"
          });
          $('.loader').hide();
        });
      }
      break;
    }
  }
}
$(window).on('hashchange', function () {
    var hash = window.location.hash;
    hash = hash.replace("#", "");
    hashFunction(hash);
});
$(document).ready(function(){
  if (location.hash.length > 2) {
    var hash = window.location.hash;
    hash = hash.replace("#", "");
    hashFunction(hash);
    };
});

$(window).resize(function(){
  if($(window).width()<900){
    newTop = (0 - (parseInt($(window).height())/2))+"px";
  }
  else{
    newTop = (0 - (parseInt($(window).height())/4))+"px";
  }
  if(scrolledUp){
    $('.home').css({
      top: newTop
    });
  }
  else{
    $('.home').css({
      top: "0px"
    });
  }
});

document.querySelector(".home").addEventListener("wheel", slideUp);
