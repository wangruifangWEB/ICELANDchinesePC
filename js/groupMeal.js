$(function () {
    var slideCount = $('.swiper-wrapper .swiper-slide').length;
    if (slideCount > 4) {
      $('.swiper-pagination').show();
    } else {
      $('.swiper-pagination').hide();
      $('.swiper-wrapper').css('justify-content', 'center')
    }
    // 轮播图
    var mySwiper = new Swiper(".swiper-container", {
      pagination: '.swiper-pagination',
      slidesPerView: 4,
      spaceBetween: 20,
    });

    // tab切换
    $('.swiper-container .swiper-slide').click(function () {
      var currentIdx = $(this).index(), 
      $elem = $('.menu-box .menu-item-box');
      $elem.eq(currentIdx).show().siblings().hide();
      $elem.addClass('animated fadeIn');
    })
  })

