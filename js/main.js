$(document).ready(function(){
    $('#drop_links').hide();
    $('#drop_link').click(function(){
        $('#drop_link').parent().find('#drop_links').toggle();
    });


    //menu links
    $('#menu').click(function(){
        $('#links').css({'display': 'block',});
    });
    $('#cancel').click(function(){
        $('#links').css({'display': 'none',});
    });
    
    // alert($('#range').attr('percent'));
    let range = $('#range').attr('percent');
    // alert(range);
    if(!(range > 100)){
        $('#range').css({'width': range+'%' });
    }



    //comment and description
    $('#info').hide();
    $('#comment_btn').click(function(){
        $('#comment').show();
        $('#info').hide();
        $(this).addClass('toggle_active');
        $('#desc_btn').removeClass('toggle_active');
       
    });
    $('#desc_btn').click(function(){
        $('#comment').hide();
        $('#info').show();
        $(this).addClass('toggle_active');
        $('#comment_btn').removeClass('toggle_active');
    });

    // click image
    $('.click_img').click(function(){
        let image_name = $(this).attr('src');
        $('#main_img').attr('src', image_name); 
    });


    $('#product-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        
        responsive:{
            0:{
                items:1
            },
            300:{
                items:1.2,
                center:true,
            },
            575.98:{
                items:2
            },
            767.98:{
                items:2
            },
            991.98:{
                items:3
            },
            1199.98:{
                items:4
            },
            1399.98:{
                items:5
            },
            1500:{
                items:5
            }
        }
    });
    $('#partner-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:1000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:3
            },
            767:{
                items:4
            },
            992:{
                items:4
            },
            1000:{
                items:5
            },
            1200:{
                items:7
            }
            
        }
    });
    $('#owl-stock').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#banner_slide').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    

    $('#product-slide').parent().find('.owl-next, .owl-prev').show(function(){
        $('#product-slide').parent().find('.owl-next').html('<i class="bi bi-chevron-right"></i>').addClass('owl-next-position');
        $('#product-slide').parent().find('.owl-prev').html('<i class="bi bi-chevron-left"></i>').addClass('owl-prev-position');
    });
    $('#partner-slide').parent().find('.owl-next, .owl-prev').show(function(){
        $('#partner-slide').parent().find('.owl-next').html('<i class="bi bi-chevron-right"></i>').addClass('owl-next-position');
        $('#partner-slide').parent().find('.owl-prev').html('<i class="bi bi-chevron-left"></i>').addClass('owl-prev-position');
    });

    $('#owl-stock').parent().find('.owl-next, .owl-prev').show(function(){
        $('#owl-stock').parent().find('.owl-next').html('<i class="bi bi-chevron-right"></i>').addClass('owl-next-position2');
        $('#owl-stock').parent().find('.owl-prev').html('<i class="bi bi-chevron-left"></i>').addClass('owl-prev-position2');
    });

    $('#banner_slide').parent().find('.owl-next, .owl-prev').show(function(){
        $('#banner_slide').parent().find('.owl-next').html('<i class="bi bi-chevron-right"></i>').addClass('owl-next-position3');
        $('#banner_slide').parent().find('.owl-prev').html('<i class="bi bi-chevron-left"></i>').addClass('owl-prev-position3');
    });
    


    //shop cata drop
    $('#cats').hide();
    $('#cat_box').click(function(){
        $('#cats').toggle();
    });

    $('#price-range').on('input change',function(){
        let range_val = $(this).val();
        
        $('#price_val').html(range_val);
    });

    //shop filter drop
    $('#filter-head').click(function(){
        $('#filter-form').toggle();
    });
    
});

$(document).click(function(event){
    var $trigger = $("#drop_link");
    var $trigger2 = $("#drop_links");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $('#drop_links').hide();
    }            
});

