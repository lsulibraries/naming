      $("#about ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+2)");
      $("#libraries ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+3)");
      $("#research ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+4)");
      $("#services ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+5)");
      $("#mapTitle").clone().appendTo(".libCentral");
        $('img.newmap').clone().appendTo(".libContainer");

      $("img.zoomImg").addClass("left").appendTo(".libContainer");

$('.parallax-window').parallax({imageSrc: 'images/photos/middletonDark.jpg'});



  $('.map img.newmap')
    .wrap('<span class="mapWrap" style="display:inline-block"></span>')
    .parent()
    .zoom({ on:'grab' });


$('span.mapWrap').mousedown(
  function(event) {
    switch (event.which) {
      case 1:
        $('div.mapWidth').children().not($('.map')).addClass("lessOpacity");
        $('img.newmap, .giftPrompt').addClass("invisible");
        $('div.map').children().not('.mapWrap').addClass("darken");
        $('div.mapOptions').addClass("darken");        
        $('div.mapWidth img.zoomImg').addClass("undarken");
        $('img.zoomImg').removeClass("noDisplay");        
      }
    }
  );


$('html').mouseup(
  function(){
        $('div.map').children().removeClass("lessOpacity");
        $('img.newmap, .giftPrompt').removeClass("invisible");
        $('div.map').contents().removeClass("darken");    
        $('div.mapSection').contents().removeClass("darken");                 
        $('img.zoomImg').addClass("noDisplay");

      }
  );

$(".floorChange").hover(
  function() {
    $(".firstMap").addClass("zeroOpacity");
  }, function() {
    $(".firstMap").removeClass("zeroOpacity");
  }
);

$(".slide").click(function() {
  $( ".floorSelect" ).toggleClass( "slideOut" );
});


$(document).ready(function() {

window.sr = ScrollReveal();
sr.reveal('.newmap', { duration: 500, delay: 120, origin: 'top', distance: '25px', scale: 1, opacity: 0, useDelay: 'once'});
sr.reveal('.mapOptions, .mapHeader, .mapText', { duration: 1000, delay: 300, origin: 'bottom', distance: '25px', scale: 1, opacity: 0, useDelay: 'once'});
sr.reveal('.giftPrompt', { duration: 500, delay: 120, origin: 'top', distance: '25px', scale: 1, opacity: 0, useDelay: 'onload'});

  $(".libContainer").fadeIn(1500);
  $("#about").mmenu({
   "extensions": [
      'pagedim-black',
      'border-full',
      'theme-dark',
   ],
   "iconPanels": false,
         "columns": true,
"navbar": {
"title": "About the Libraries",
}

});

$("#libraries").mmenu({

   "extensions": [
      'pagedim-black',
      'border-full',
      'theme-dark',
   ],
   "iconPanels": false,
         "columns": true,
"navbar": {
"title": "Libraries & Collections",
}
});

$("#roomNav").mmenu({
     offCanvas: {
               position  : "right",
            },
   "extensions": [
      'pagedim-black',
      'border-full',
'effect-menu-slide',
   ],
   "iconPanels": true,
"navbar": {
"title": "Map Navigation",
}

});

$("#roomNavLeft").mmenu({

   "extensions": [
      'pagedim-black',
      'border-full',
'effect-menu-slide',
   ],
   "iconPanels": true,
"navbar": {
"title": "Map Navigation",
}

});

$("#research").mmenu({

   "extensions": [
      'pagedim-black',
      'border-full',
      'theme-dark',
   ],
   "iconPanels": false,
         "columns": true,
"navbar": {
"title": "Research",
}

});

$("#services").mmenu({

   "extensions": [
      'pagedim-black',
      'border-full',
      'theme-dark',
   ],
   "iconPanels": false,
         "columns": true,
"navbar": {
"title": "Services",
}

});

$("#menu2").mmenu({


   "extensions": [
      'pagedim-black',
      'border-full',
      'theme-dark',
   ],
   "iconPanels": false,
         columns: true

});
});



var $menu = $("#menu2").mmenu({

   "extensions": [
      'pagedim-black',
      'border-full',
      'theme-dark',
      'multiline',
   ],
   "iconPanels": true,
         "columns": false,
"navbar": {
"title": "Library Main Menu",
}
});
var $icon = $("#my-icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "opened", function() {
   setTimeout(function() {
      $icon.addClass( "is-active" );
   }, 100);
});
API.bind( "closed", function() {
   setTimeout(function() {
      $icon.removeClass( "is-active" );
   }, 100);
});
