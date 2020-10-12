$(document).ready(function () {


    $(".scrollBox").niceScroll({
        cursorcolor:"#777",
        cursorwidth:5,
        scrollspeed:40,
        cursorborderradius:'0',
        mousescrollstep:40,
        cursoropacitymin:0,
        cursoropacitymax:1,
        background:"#c1c1c1",
        cursorborder:"none",
        autohidemode:false,
        boxzoom:false,
        smoothscroll:true,
        zindex:99999
    });


    $("#scene06").niceScroll({
        cursorcolor:"transparent",
        cursorwidth:0,
        scrollspeed:40,
        cursorborderradius:'0',
        mousescrollstep:40,
        cursoropacitymin:0,
        cursoropacitymax:1,
        background:"transparent",
        cursorborder:"none",
        autohidemode:false,
        boxzoom:false,
        smoothscroll:true,
        zindex:99999
    });



    $('#header .ham').on('click',function () {
        $('#scene02').fadeIn();
    });


    $('#season').mouseenter(function(){
        $('#line_wrap .first .title_box > div').addClass('on');
    });
    $('#season').mouseleave(function(){
        $('#line_wrap .first .title_box > div').removeClass('on');
    });
    $('#cast').mouseenter(function(){
        $('#line_wrap .second .title_box > div').addClass('on');
    });
    $('#cast').mouseleave(function(){
        $('#line_wrap .second .title_box > div').removeClass('on');
    });
    $('#spin_off').mouseenter(function(){
        $('#line_wrap .third .title_box > div').addClass('on');
    });
    $('#spin_off').mouseleave(function(){
        $('#line_wrap .third .title_box > div').removeClass('on');
    });
    $('#music').mouseenter(function(){
        $('#line_wrap .fourth .title_box > div').addClass('on');
    });
    $('#music').mouseleave(function(){
        $('#line_wrap .fourth .title_box > div').removeClass('on');
    });



    $('#scene02 .close').on('click',function () {
        $('#scene02').fadeOut();
    });

    $('#spin_off .comics').on('click',function () {
        $('#scene03').fadeIn();
    });

    $('#scene03 .close').on('click',function () {
        $('#scene03').fadeOut();
    });

    $('#spin_off .movie').on('click',function () {
        $('#scene04').fadeIn();
    });

    $('#scene04 .close').on('click',function () {
        $('#scene04').fadeOut();
    });

    $('#cast .bryan').on('click',function () {
        $('#scene05').fadeIn();
        multiScroll();

        // $(function () {
        //     var king_text = document.getElementById('right_king_text');
        //     var king_text1 = document.getElementById('king_text1');
        //     var king_text2 = document.getElementById('king_text2');
        //     var king_text3 = document.getElementById('king_text3');
        //
        //     var parallaxInstance = new Parallax(king_text, {
        //         scalarX: 5.5,
        //         scalarY: 10.0
        //     });
        //     var parallaxInstance = new Parallax(king_text1, {
        //         scalarX: 5.5
        //     });
        //     var parallaxInstance = new Parallax(king_text2, {
        //         scalarX: 6.5
        //     });
        //     var parallaxInstance = new Parallax(king_text3, {
        //         scalarX: 7.5
        //     });
        //     parallaxInstance;
        //     parallaxInstance.friction(0.2, 0.2);
        //     parallaxInstance.scalar(5, 5);
        // });
    });

    $('#scene05 .close').on('click',function () {
        $('#scene05').fadeOut();
        
    });



    $('#season .season_01').on('click',function () {
        $('#main_menu').fadeOut();
        $('#scene06').fadeIn();
    });

    $('#scene06 .close').on('click',function () {
        $('#main_menu').fadeIn();
        $('#scene06').fadeOut();
    });







    $('#music .b1').on('click',function () {
        $('#scene07').fadeIn();
        $('#scene07').ready(function() {
            $('#music_track').multiscroll({
                // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
                // anchors: ['first', 'second', 'third'],
                // menu: '#menu',
                // navigation: true,
                // navigationTooltips: ['One', 'Two', 'Three'],
                loopBottom: true,
                loopTop: true
            });
        });
    });

    $('#scene07 .close').on('click',function () {
        $('#scene07').fadeOut(function(){
            $('#music_track').off();
        });

    });

    $('#scene07 .list_all').on('click',function () {
        $(this).toggleClass("on");
    });



    $('#scene07 .close').on('click',function () {
        $('#scene07').fadeOut();
    });

    $('#spin_off .spin').on('click',function () {
        $('#scene08').fadeIn();
    });

    $('#scene08 .close').on('click',function () {
        $('#scene08').fadeOut();
    });





    $('#season .season_04').on('click',function () {
        $('#main_menu').fadeOut();
        $('#scene09').fadeIn();
        
    });

    $('#scene09 .close').on('click',function () {
        $('#main_menu').fadeIn();
        $('#scene09').fadeOut();
    });







    $('#season .season_05').on('click',function () {
        $('#main_menu').fadeOut();
        $('#scene10').fadeIn();
    });

    $('#scene10 .close').on('click',function () {
        $('#main_menu').fadeIn();
        $('#scene10').fadeOut();
    });







    $('#cast .aaron').on('click',function () {
        $('#scene11').fadeIn();
        multiScroll();
    });
    $('#scene11 .close').on('click',function () {
        $('#scene11').fadeOut();

    });

    $('#cast .giancarlo').on('click',function () {
        $('#scene12').fadeIn();
        multiScroll();
    });
    $('#scene12 .close').on('click',function () {
        $('#scene12').fadeOut();

    });


});

function multiScroll(){
    var top = 0;
    var contentHeight = $('.scroll_right').height(),
        contents = $('.scroll_right .scroll_content').length;

    top = (0 - 2373);
    // top = (0 - 6556);
    $('.scroll_right').css('top', top + 'px');

    $(window).scroll(function () {
        $('.scroll_right').css('top', (top + $(window).scrollTop()) + 'px');
        // $('#king_text3').stop().animate({'margin-Top':},100)
    });
}

function changeImage() {
    var picture = document.getElementById("vol_on");
    //we decarled a variable
    if(picture.src.match("./image/main_header/main_vol.png")) {
        picture.src = "./image/main_header/ham_vol_on.png"; // go to Pic2!
    } else {
        // if we're already on Pic2, go to Pic1.
        picture.src = "./image/main_header/main_vol.png";
    }
}


function changeImage2() {
    var picture = document.getElementById("lang_en");
    //we decarled a variable
    if(picture.src.match("./image/main_header/main_lang.png")) {
        picture.src = "./image/main_header/main_lang_en.png"; // go to Pic2!
    } else {
        // if we're already on Pic2, go to Pic1.
        picture.src = "./image/main_header/main_lang.png";
    }

}

