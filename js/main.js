$(function(){
    var mobileAberto = false;

    //mobile
    ativarMobile()
    function ativarMobile(){
        var mobile = $('.mobile');
        var btn = $('.mobileActive span');
        var line1 = $('.line1');
        var line2 = $('.line2');
        var line3 = $('.line3');
        var dark = $('.dark');
        var animacao = false;

        btn.click(function(){
            if(animacao)return
            animacao = true;

            if(mobileAberto){
                mobileAberto = false;
                line1.css('transform','rotate(0)').css("top",'6px')
                line2.css("display","block");
                line3.css("transform","rotate(0)").css("top","26px")
                btn.css("background-color","rgba(0,0,0,0.2)")
                dark.fadeOut()
                mobile.toggle('slide',{direction: 'right'},'slow',function(){
                    animacao = false;
                },1000);
            }else{
                mobileAberto = true;
                line1.css('transform','rotate(45deg)').css("top",'17px')
                line2.css("display","none");
                line3.css("transform","rotate(-45deg)").css("top","17px")
                btn.css("background-color","rgba(255,0,0,0.4)")
                dark.fadeIn()
                mobile.toggle('slide',{direction: 'right'},'slow',function(){
                    animacao = false;
                },1000);
            };

        });

        dark.click(function(){
            if(animacao)return
            animacao = true;

            if(mobileAberto){
                mobileAberto = false;
                line1.css('transform','rotate(0)').css("top",'6px')
                line2.css("display","block");
                line3.css("transform","rotate(0)").css("top","26px")
                btn.css("background-color","rgba(0,0,0,0.2)")
                dark.fadeOut()
                mobile.toggle('slide',{direction: 'right'},'slow',function(){
                    animacao = false;
                },1000);
            }
        });

        $(window).resize(function(){
            if($(this).width() > 760){
                if(mobileAberto){
                    mobileAberto = false;
                    line1.css('transform','rotate(0)').css("top",'6px')
                    line2.css("display","block");
                    line3.css("transform","rotate(0)").css("top","26px")
                    btn.css("background-color","rgba(0,0,0,0.2)")
                    dark.fadeOut()
                    mobile.fadeOut()
                }
            }
        });

    };



    //slide
    var slider = $(".slider");

    slider.slick({
        centerMode: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    centerMode: false,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    centerMode: false,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    });

});

AOS.init();