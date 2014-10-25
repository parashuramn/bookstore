/**
 * Created by Mr Khoa on 18/10/2014.
 */
var $j = jQuery.noConflict();
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
    /*Product Collateral Tab*/
    // ==============================================
    // UI Pattern - Toggle Content (tabs and accordions in one setup)
    // ==============================================

    $j('.toggle-content').each(function () {
        var wrapper = jQuery(this);

        var hasTabs = wrapper.hasClass('tabs');
        var hasAccordion = wrapper.hasClass('accordion');
        var startOpen = wrapper.hasClass('open');

        var dl = wrapper.children('dl:first');
        var dts = dl.children('dt');
        var panes = dl.children('dd');
        var groups = new Array(dts, panes);

        //Create a ul for tabs if necessary.
        if (hasTabs) {
            var ul = jQuery('<ul class="toggle-tabs"></ul>');
            dts.each(function () {
                var dt = jQuery(this);
                var li = jQuery('<li></li>');
                li.html(dt.html());
                ul.append(li);
            });
            ul.insertBefore(dl);
            var lis = ul.children();
            groups.push(lis);
        }

        //Add "last" classes.
        var i;
        for (i = 0; i < groups.length; i++) {
            groups[i].filter(':last').addClass('last');
        }

        function toggleClasses(clickedItem, group) {
            var index = group.index(clickedItem);
            var i;
            for (i = 0; i < groups.length; i++) {
                groups[i].removeClass('current');
                groups[i].eq(index).addClass('current');
            }
        }

        //Toggle on tab (dt) click.
        dts.on('click', function (e) {
            //They clicked the current dt to close it. Restore the wrapper to unclicked state.
            if (jQuery(this).hasClass('current') && wrapper.hasClass('accordion-open')) {
                wrapper.removeClass('accordion-open');
            } else {
                //They're clicking something new. Reflect the explicit user interaction.
                wrapper.addClass('accordion-open');
            }
            toggleClasses(jQuery(this), dts);
        });

        //Toggle on tab (li) click.
        if (hasTabs) {
            lis.on('click', function (e) {
                toggleClasses(jQuery(this), lis);
            });
            //Open the first tab.
            lis.eq(0).trigger('click');
        }

        //Open the first accordion if desired.
        if (startOpen) {
            dts.eq(0).trigger('click');
        }

    });

});