"use strict";
$(function () {
    $('.item-1').on('mouseenter', function () {
        $('.xiaomi-phone').stop().slideDown();
        // $('.xiaomi-phone').css('display','block');
    })
    $('.item-1').on('mouseleave', function () {
        $('.xiaomi-phone').stop().slideUp();
        // $('.xiaomi-phone').css('display', 'none');
    })
    $('.xiaomi-phone').on('mouseenter', function () {
        $(this).stop().slideDown();
    })
    $('.xiaomi-phone').on('mouseleave', function () {
        $(this).stop().slideUp();
    })

    $('.item-2').on('mouseenter', function () {
        $('.redmi-phone').stop().slideDown();
    })
    $('.item-2').on('mouseleave', function () {
        $('.redmi-phone').stop().slideUp();
    })
    $('.remi-phone').on('mouseenter', function () {
        $(this).stop().slideDown();
    })
    $('.remi-phone').on('mouseleave', function () {
        $(this).stop().slideUp();
    })

    $('.item-3').on('mouseenter', function () {
        $('.xiaomi-tv').stop().slideDown();
    })
    $('.item-3').on('mouseleave', function () {
        $('.xiaomi-tv').stop().slideUp();
    })
    $('.xiaomi-tv').on('mouseenter', function () {
        $(this).stop().slideDown();
    })
    $('.xiaomi-tv').on('mouseleave', function () {
        $(this).stop().slideUp();
    })

    $('.item-4').on('mouseenter', function () {
        $('.xiaomi-airbook').stop().slideDown();
    })
    $('.item-4').on('mouseleave', function () {
        $('.xiaomi-airbook').stop().slideUp();
    })
    $('.xiaomi-airbook').on('mouseenter', function () {
        $(this).stop().slideDown();
    })
    $('.xiaomi-airbook').on('mouseleave', function () {
        $(this).stop().slideUp();
    })

    $('.item-5').on('mouseenter', function () {
        $('.xiaomi-boxs').stop().slideDown();
    })
    $('.item-5').on('mouseleave', function () {
        $('.xiaomi-boxs').stop().slideUp();
    })
    $('.xiaomi-boxs').on('mouseenter', function () {
        $(this).stop().slideDown();
    })
    $('.xiaomi-boxs').on('mouseleave', function () {
        $(this).stop().slideUp();
    })

    $('.item-6').on('mouseenter', function () {
        $('.xiaomi-router').stop().slideDown();
    })
    $('.item-6').on('mouseleave', function () {
        $('.xiaomi-router').stop().slideUp();
    })
    $('.xiaomi-router').on('mouseenter', function () {
        $(this).stop().slideDown();
    })
    $('.xiaomi-router').on('mouseleave', function () {
        $(this).stop().slideUp();
    })

    $('.item-7').on('mouseenter', function () {
        $('.xiaomi-live').stop().slideDown();
    })
    $('.item-7').on('mouseleave', function () {
        $('.xiaomi-live').stop().slideUp();
    })
    $('.xiaomi-live').on('mouseenter', function () {
        $(this).stop().slideDown();
    })
    $('.xiaomi-live').on('mouseleave', function () {
        $(this).stop().slideUp();
    })

    // 左边菜单部分
    $('.left-menu-box li').on('mouseover', function () {
        $(this).find('.get-menu').css('display', 'block');
    })
    $('.left-menu-box li').on('mouseout', function () {
        $(this).find('.get-menu').css('display', 'none');
    })

    //小米明星产品左右切图
    $('#leftRow').click(function () {
        // console.log($('.nav-commodity').css('margin-left'));
        let screen_nav = $('.nav-commodity').css('margin-left');
        console.log(screen_nav);
        if (screen_nav == '-1270px') {
            $('.nav-commodity').css('margin-left', '0px');
        } else if (screen_nav == '0px') {
            return false;
        }
    })
    $('#rightRow').click(function () {
        let screen_nav = $('.nav-commodity').css('margin-left');
        console.log(screen_nav);
        if (screen_nav == '0px') {
            $('.nav-commodity').css('margin-left', '-1270px');
        } else if (screen_nav == '-1270px') {
            return false;
        }
    })

    // 左右切图的计时器
    function goMove() {
        // alert('我执行了！');
        let stopMove = setInterval(navMove, 2500);
        function navMove() {
            let screen_nav = $('.nav-commodity').css('margin-left');
            if (screen_nav == '-1270px') {
                $('.nav-commodity').css('margin-left', '0px');
                $('#leftRow').removeClass('more-active').siblings().addClass('more-active');
            } else if (screen_nav == '0px') {
                // console.log('进到这里了！');
                $('.nav-commodity').css('margin-left', '-1270px');
                $('#rightRow').removeClass('more-active').siblings().addClass('more-active');
                // console.log(screen_nav);
            }
        }
    }
    goMove();

    //input触发focus事件
    $('#search').focus(function () {
        $('.search-hot').hide();
        $('.search-btn').css('border-color', '#ff6700');
        $(this).css('border-color', '#ff6700');
    })
    //失去焦点
    $('#search').blur(function () {
        $('.search-hot').show();
        $('.search-btn').css('border-color', '#e0e0e0');
        $(this).css('border-color', '#e0e0e0');
    })


    //主内容
    //加阴影
    $('.tab-item').hover(function () {
        $(this).addClass('tab-item-active');
    }, function () {
        $(this).removeClass('tab-item-active');
    })

    //hover切换产品系列
    $('.tab-homeelec').on('mouseenter', 'li', function () {
        // console.log('Are you ok!');
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        console.log($(this).index());
        let domIndex = $(this).index();
        $('.tab-nav' + domIndex).removeClass('hide').siblings().addClass('hide');
    })

    //图书，应用，动画切换
    $('.xm-pager0 .pager').click(function () {
        let index = $(this).index();

        if (index == 0) {
            $('.xm-carousel-wrapper .item-list0').css('margin-left', '0px');
        } else if (index == 1) {
            $('.xm-carousel-wrapper .item-list0').css('margin-left', '-296px');
        } else if (index == 2) {
            $('.xm-carousel-wrapper .item-list0').css('margin-left', '-592px');
        }
        $(this).addClass('pager-active').siblings().removeClass('pager-active');
    })
    $('.xm-pager1 .pager').click(function () {
        let index = $(this).index();

        if (index == 0) {
            $('.xm-carousel-wrapper .item-list1').css('margin-left', '0px');
        } else if (index == 1) {
            $('.xm-carousel-wrapper .item-list1').css('margin-left', '-296px');
        } else if (index == 2) {
            $('.xm-carousel-wrapper .item-list1').css('margin-left', '-592px');
        }
        $(this).addClass('pager-active').siblings().removeClass('pager-active');
    })
    $('.xm-pager2 .pager').click(function () {
        let index = $(this).index();

        if (index == 0) {
            $('.xm-carousel-wrapper .item-list2').css('margin-left', '0px');
        } else if (index == 1) {
            $('.xm-carousel-wrapper .item-list2').css('margin-left', '-296px');
        } else if (index == 2) {
            $('.xm-carousel-wrapper .item-list2s').css('margin-left', '-592px');
        }
        $(this).addClass('pager-active').siblings().removeClass('pager-active');
    })
    $('.xm-pager3 .pager').click(function () {
        let index = $(this).index();

        if (index == 0) {
            $('.xm-carousel-wrapper .item-list3').css('margin-left', '0px');
        } else if (index == 1) {
            $('.xm-carousel-wrapper .item-list3').css('margin-left', '-296px');
        } else if (index == 2) {
            $('.xm-carousel-wrapper .item-list3').css('margin-left', '-592px');
        }
        $(this).addClass('pager-active').siblings().removeClass('pager-active');
    })
})
