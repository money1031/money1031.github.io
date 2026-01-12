$(function () {

  /* ===============================
     产品页 Tab 切换
     =============================== */
  $('.tab-btn').click(function () {
    const key = $(this).data('tab');

    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').removeClass('active');
    $('#tab-' + key).addClass('active');
  });

  /* ===============================
     图片放大 / 参数弹层
     =============================== */
  $('.zoom-img, .param-btn').click(function () {
    const img = $(this).data('img') || $(this).attr('src');
    $('#popupImg').attr('src', img);
    $('#imgPopup').fadeIn();
  });

  $('.img-popup .close, .img-popup').click(function () {
    $('#imgPopup').fadeOut();
  });

  /* ===============================
     页面 Banner 三图轮播
     =============================== */
  $('.page-banner-slider').each(function () {
    const $slider = $(this);
    const $track = $slider.find('.banner-track');
    const $dots = $slider.find('.dot');
    const total = $dots.length;

    let index = 0;

    function update() {
      $track.css('transform', `translateX(-${index * 100}%)`);
      $dots.removeClass('active').eq(index).addClass('active');
    }

    $dots.on('click', function () {
      index = $(this).index();
      update();
    });

    setInterval(function () {
      index = (index + 1) % total;
      update();
    }, 5000);
  });

});
