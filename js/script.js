
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  let topBtn = $('.c-to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  let header = $('.p-header');
  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      header.addClass('is-color');
    } else {
      // 画面が指定pxより上ならボタンを非表示
      header.removeClass('is-color');
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


    //ナビバートグル
    $('.js-hamburger').on('click', function () {
      if ($('.js-hamburger').hasClass('is-open')) {
        $('.js-drawer-menu').removeClass('is-open');
        $(this).removeClass('is-open');
      } else {
        $('.js-drawer-menu').addClass('is-open');
        $(this).addClass('is-open');
      }
    });
   
    $('.js-drawer-menu').on('click', function () {
      $('.js-drawer-menu').removeClass('is-open');
      $('.js-hamburger').removeClass('is-open');
    });
    
 

});
