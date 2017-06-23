      $("#about ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+2)");
      $("#libraries ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+3)");
      $("#research ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+4)");
      $("#services ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+5)");
      $("#mapTitle").clone().appendTo(".libCentral");
      $('img.newmap').clone().appendTo(".libContainer");
      $("img.zoomImg").addClass("left").appendTo(".libContainer");

$('.parallax-window').parallax({imageSrc: 'images/photos/middletonDark.jpg'});

$('body').click(function(evt){    
       if(evt.target.id == "legend")
          return;
   
      if($(evt.target).closest('#legend').length)
          return;       

      //Do processing of click event here for every element except with id menu_content
  $(".roomModal").removeClass('flex');
  $(".mapSection, .header, .newmap, .giftPrompt").removeClass('darken');
});

$( ".mapKey1" ).on( "click", function() {
  $("#concourse").toggleClass('flex');
  $(".mapSection, .header, .newmap, .giftPrompt").toggleClass('darken');
});

$( ".mapKey2" ).on( "click", function() {
  $("#reading").toggleClass('flex');
  $(".mapSection, .header, .newmap, .giftPrompt").toggleClass('darken');
});

$( ".mapKey3" ).on( "click", function() {
  $("#collaboration").toggleClass('flex');
  $(".mapSection, .header, .newmap, .giftPrompt").toggleClass('darken');
});

$( ".mapKey4" ).on( "click", function() {
  $("#southLounge").toggleClass('flex');
  $(".mapSection, .header, .newmap, .giftPrompt").toggleClass('darken');
});

$( ".mapKey5" ).on( "click", function() {
  $("#northLounge").toggleClass('flex');
  $(".mapSection, .header, .newmap, .giftPrompt").toggleClass('darken');
});

$( ".exit" ).on( "click", function() {
  $(".roomModal").removeClass('flex');
  $(".mapSection, .header, .newmap, .giftPrompt").removeClass('darken');
 });

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
        $('img.zoomImg').removeClass("invisible");        
      }
    }
  );


$('html').mouseup(
  function(){
        $('div.map').children().removeClass("lessOpacity");
        $('img.newmap, .giftPrompt').removeClass("invisible");
        $('div.map').contents().removeClass("darken");    
        $('div.mapSection').contents().removeClass("darken");                 
        $('img.zoomImg').addClass("invisible");

      }
  );


$(document).ready(function() {



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

window.sr = ScrollReveal();
sr.reveal('.newmap, .zoomPrompt', { duration: 500, delay: 120, origin: 'top', distance: '25px', scale: 1, opacity: 0, useDelay: 'once'});
sr.reveal('.breadcrumb, .libLogo', { duration: 1000, delay: 0, origin: 'left', distance: '500px', scale: 1, opacity: 0, useDelay: 'once'});
sr.reveal('.mapOptions, .mapHeader, .mapText', { duration: 1000, delay: 300, origin: 'bottom', distance: '25px', scale: 1, opacity: 0, useDelay: 'once'});
sr.reveal('.modalContainer', { duration: 100, delay: 100, origin: 'bottom', distance: '25px', scale: 1, opacity: 1});
sr.reveal('.giftPrompt', { duration: 500, delay: 600, origin: 'top', distance: '25px', scale: 1, opacity: 0, useDelay: 'onload'});
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

