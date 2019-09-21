window.onload=function(){
    $('.click_a_b').click(function(){
        $('.click_a_h').show();
        $('.click_a_b').hide();
    })
    $('.click_a_h').click(function(){
        $('.click_a_h').hide();
        $('.click_a_b').show();
    })

    $(document).ready(function(){
        $('.sheji>.sheji_box:not(:eq(0))').hide();
        $('.tab_ul>li:eq(0)').css({color:"#000",borderBottom:"3px solid #000"});
        $('.img_hover:eq(0)').css('display','block');
        $('.tab_ul>li').click(function(){
            $('.img_hover:eq(0)').css('display','none');
            var idx=$(this).index();
            cck(idx);
        })

        $('.button').click(function(){
            $(this).toggleClass('button_bg');
            if($(this).hasClass('button_bg')){
                $('.tab_box').css("marginLeft","-105px");
            }else{
                $('.tab_box').css("marginLeft","0px");
            }
        })
        $('.sheji_c').click(function(){
            cck($(this).index());
        })

        function cck(ew) {
            $('.tab_ul>li:eq('+ew+')').css({color:"#000",borderBottom:"3px solid #000"}).siblings().css({color:"#999",borderBottom:"none"});
            $('.sheji_c .img_hover').removeClass('imgh')
            $('.sheji_c:eq('+ew+') .img_hover').addClass('imgh')
        }

        $('.sheji_c_img').hover(function(){
            var abc = $('.sheji_c_img').index(this);
            $('.tab_ul span').eq(abc).addClass('abc');
        },function(){
            var abc = $('.sheji_c_img').index(this);
            $('.tab_ul span').eq(abc).removeClass('abc');
        })
    })
}