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
     产品介绍页 Banner 替换 + 轮播
     （仅 products 首页 + 系列页）
     =============================== */

  // 统一处理路径
  const path = location.pathname.replace(/\/$/, '');
  const parts = path.split('/');
  const depth = parts.length;

  // 只允许：
  // /products
  // /products/thx
  // /products/xt
  // /products/yx
  if (parts[1] !== 'products' || depth > 3) return;

  const $banner = $('.page-header, .banner, .index-header').first();
  if (!$banner.length) return;

  // 1️⃣ 替换 Banner 内容
  $banner.html(`
    <div class="page-banner-slider">
      <div class="banner-track">
        <div class="banner-slide" style="background-image:url(/img/products_banner1.png)"></div>
        <div class="banner-slide" style="background-image:url(/img/products_banner2.png)"></div>
        <div class="banner-slide" style="background-image:url(/img/products_banner3.png)"></div>
      </div>
      <div class="banner-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  `);

  // 2️⃣ 初始化轮播
  const $slider = $banner.find('.page-banner-slider');
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
