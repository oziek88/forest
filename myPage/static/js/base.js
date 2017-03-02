$(window).scroll(function() {
	var $navi = $('.navi');
  var $OT = $('#oasissentials-title');
    if ($(window).scrollTop() > 250){
      $navi.css({
        'position': 'fixed',
        'top': '0px'
      });
    }else{
      $navi.css({
        'position': 'relative'
      });
    }
});

$(function(){
    $( ".title-letter" ).draggable({
      containment: "#theThik"
    });
});


$(document).ready(function () {
          $('#headerBOX').show("fade", 1000);
          $('.navi').show("fade", 900).animate({height:80}, 500);
          $('#oasissentials-title').delay(1200).show("slide", { direction: "left" }, 1000);
          // $('#mapBuffer').delay(1000).show("fade", 1000);
    });

