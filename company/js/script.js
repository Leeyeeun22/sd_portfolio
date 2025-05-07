// 변수
var menu = $('#menu-btn');
var mbnav = $('.mb_nav');
var mb_menu = $('.mb_nav li'); // a 말고 li 까지 해야 submenu 찾을수있음

// 토글버튼 클릭 시 각 클래스 추가
menu.on('click', function () {
    menu.toggleClass('fa-times');
    mbnav.toggleClass('active');
});

mb_menu.on('click', function () {
    console.log(this.children);
    $(this).find('.submenu').toggleClass('active');
});


$(window).scroll(function(){

    var state = window.scrollY || $('#header').scrollTop;

    if(state > 1){
        $('#header').addClass('active');
    }
    else{
        $('#header').removeClass('active');
    }
    

});

// TOP 버튼
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
});


// 서브메뉴 마우스 over, out
$('.nav li').mouseover(function () {

        $('#header').stop().animate({ height: 21 + 'rem' }, 500);
    
});

$('.nav li').mouseout(function () {

        $('#header').stop().animate({ height: 5 + 'rem' }, 500);

});



// 페이드 인 아웃 슬라이드

let key = null;

// 자동재생
function auto(){
    $('.slide > div:gt(0)').hide();

    key = setInterval(function(){
        $('.slide > div:first')
            .fadeOut(3000)
            .next()
            .fadeIn(3000)
            .end()
            .appendTo('.slide');
    },4000);
}

auto(); // 함수 실행

// 중지 함수 선언
function pause(){
    clearInterval(key);
}

// 중지버튼 클릭 시 중지 함수 실행
$('.stop').on('click',function(){
    pause();
    $('.stop').addClass('on');
    $('.play').removeClass('on');

});

// 실행버튼 클릭 시 자동재생 함수 실행
$('.play').on('click',function(){
    auto();
    $('.play').addClass('on');
    $('.stop').removeClass('on');

})