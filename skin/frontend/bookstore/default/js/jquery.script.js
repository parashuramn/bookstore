/**
 * Created by Mr Khoa on 18/10/2014.
 */
$j = jQuery.noConflict();
//Our Custom Javascript
$j(document).ready(function(){
    $j('.navbar .parent').addClass('dropdown');
    $j('.navbar a.level-top').addClass('dropdown-toggle').append('<b class="caret"></b>');
    $j('.navbar li.parent ul').addClass('dropdown-menu');
    $j('.navbar li.level1 ul').wrap('<li class="dropdown-submenu" />');

    $j('.navbar ul.nav li.level0.dropdown').hover(function() {
        $j(this).find('.level0.dropdown-menu').stop(true, true).fadeIn();
    }, function() {
        $j(this).find('.level0.dropdown-menu').stop(true, true).fadeOut();
    });
    $j('ul.nav li.level1.parent.dropdown').hover(function() {
        $j(this).find('.level1.dropdown-menu').stop(true, true).fadeIn();
    }, function() {
        $j(this).find('.level1.dropdown-menu').stop(true, true).fadeOut();
    });

     // Function which sets the height of the elements to the highest
        function setHeightToMax(elements) {
            /* This javascript iterates over the products and makes the height equal to the maximum height */
            var max_height = 0;
            elements.each(function(el) {
                var height = $(el).getHeight();
                if (height > max_height) {
                    max_height = height;
                }
            });

            max_height = max_height + "px";

            elements.each(function(el) {
                $(el).setStyle({height: max_height});
                //console.log(max_height);
            });
        }
        var product_rows = $$('.products-grid');
        product_rows.each(function(el) {
            setHeightToMax(el.childElements());
        });
    //End Function Get Height automatically


});