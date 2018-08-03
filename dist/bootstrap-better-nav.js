$(function() {
    
    var body = $('body');
    var navbar = $('.navbar');
    var navbarCollapse = $('.navbar-collapse');



    // Add the needed HTML elements for the plugin to work. 
    // All the elements are styled in navbar-sidemnu.css.
    
    body.append('<div class="side-menu-overlay"></div>');
    var overlay = $('.side-menu-overlay');

    body.append('<div id="side-menu"></div>');
    var sideMenu = $('#side-menu');

    sideMenu.append('<button class="close"><span aria-hidden="true">×</span></button>')
    var sideMenuCloseBtn = sideMenu.find('.close');

    sideMenu.append('<div class="contents"></div>')
    var sideMenuContents = sideMenu.find('.contents');



    // Configure Slide menu direction
    if(navbar.hasClass('better-bootstrap-nav-left')) {
        sideMenu.addClass('side-menu-left');
    }


    // This event is trigerred when the user clicks the navbar toggle button.

    navbarCollapse.on('show.bs.collapse', function (e) {
        // Stop the default navbar behaviour (don't open the collapse navigation).
        e.preventDefault();

        // Instead we copy the navbar contents and add them to our side menu.
        var menuContent = $(this).html();    
        sideMenuContents.html(menuContent);
        
        // Animate the side menu into frame.
        slideIn();
    });


    // Hide the menu when the "x" button is clicked.
    
    sideMenuCloseBtn.on('click', function(e) {
        e.preventDefault();
        slideOut();
    });

    // Hide the menu when the overlay element is clicked.
    
    overlay.on('click', function(e) {
        slideOut();
    });

    // Listen for changes in the viewport size.
    // If the original navbar collapse is visible then the nav is expanded.
    // Hide/Show the menu accordingly.
    
    $(window).resize(function(){
        if(!navbarCollapse.is(":visible") && body.hasClass('side-menu-visible')) {
            sideMenu.show();
            overlay.show();
        }
        else {
            sideMenu.hide();
            overlay.hide();
        }
    });
    
    function slideIn() {
        body.addClass('overflow-hidden');
        sideMenu.show();
        setTimeout(function() {    
            body.addClass('side-menu-visible');
            overlay.fadeIn();
        }, 50);
    }
    
    function slideOut() {
        body.removeClass('side-menu-visible');
        overlay.fadeOut();
        setTimeout(function() {
            sideMenu.hide();
            body.removeClass('overflow-hidden');
        }, 400);
    }
});
