      $("#about ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+2)");
      $("#libraries ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+3)");
      $("#research ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+4)");
      $("#services ul").clone().appendTo("#menu2 ul:nth-child(1) > li:nth-child(0n+5)");
      $("#mapTitle").clone().appendTo(".libCentral");

  $('img.newmap')
    .wrap('<span class="mapWrap" style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom({ on:'grab' });


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
window.sr = ScrollReveal();
sr.reveal('.heroTitle', { duration: 1000, delay: 300, origin: 'bottom', distance: '25px', scale: 1, opacity: 0, });

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
