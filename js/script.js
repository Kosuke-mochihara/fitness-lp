
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



window.addEventListener('DOMContentLoaded', function () {
    gsap.fromTo('.js-mv', {autoAlpha: 0,}, {autoAlpha: 1, duration: 1.5, delay: 0.5, ease: 'power2.out'});
});


let jsAboutItems = document.querySelectorAll('.js-about-item');

jsAboutItems.forEach(function (jsAboutItem) {
  gsap.fromTo(jsAboutItem, 
    { autoAlpha: 0, y:20 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: jsAboutItem,
        start: 'top bottom',
        toggleActions: 'restart none none reverse',
      }
    }
  );
});


let jsFeatureItems = document.querySelectorAll('.js-feature-item');

jsFeatureItems.forEach(function (jsFeatureItem) {
gsap.fromTo(jsFeatureItem, {autoAlpha: 0, y:20 }, {autoAlpha: 1, y:0, duration: 0.8, delay: 0.5, ease: 'power2.out',
scrollTrigger: {
  trigger: jsFeatureItem,
  start: 'top bottom',
  toggleActions: 'restart none none reverse',
  }})
});



let jsVoiceItems = document.querySelectorAll('.js-voice-item');

jsVoiceItems.forEach(function (jsVoiceItem) {
  gsap.fromTo(
    jsVoiceItem,
    { autoAlpha: 0, y: 20 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: jsVoiceItem,
        start: 'top bottom',
        toggleActions: 'restart none none reverse',
      }
    }
  );
});



let jsFlowItems = document.querySelectorAll('.js-flow-item');

gsap.fromTo('.p-flow__item',{autoAlpha: 0, y:20},{autoAlpha: 1, y:0, duration: 1, stagger: .1, ease: 'power2.out',
scrollTrigger: {
    trigger: '.p-flow__items',
    start: 'center bottom',
    toggleActions: 'restart none none reverse',
  }
});


document.addEventListener('DOMContentLoaded', function () {
  gsap.fromTo('.p-price__month-en-box', 
      {y:20, autoAlpha: 0},
      {
          y:0, 
          autoAlpha: 1, 
          duration: .5, 
          delay: 0.2, 
          ease: 'power2.out',
          scrollTrigger: {
              trigger: '.p-price__month-en-box',
              start: 'top bottom',
              end: 'bottom 50%',
              toggleActions: 'restart none none reverse',
          }
      }
  );
});




let textEffectTrigger = document.querySelectorAll('.js-text-effect-trigger');

textEffectTrigger.forEach((trigger) => {
    let textEffectTL = gsap.timeline();
    let target = trigger.querySelectorAll('.js-text-effect');
    
    // アニメーション値を保持するための代理オブジェクト
    let proxy = { x: 0 };

    textEffectTL
        .to(target, { autoAlpha: 1, y: 0, duration: .5, stagger: .1 })
        .to(proxy, {
            x: 101,
            duration: .3,
            stagger: .2,
            onUpdate: function() {
                target.forEach(t => {
                    t.style.setProperty('--transformX', `${proxy.x}%`);
                });
            }
        });
    
    ScrollTrigger.create({
        trigger: trigger,
        start: 'bottom bottom',
        animation: textEffectTL,
    });
});



let jsMessageItems = document.querySelectorAll('.js-message-item');

gsap.fromTo(
  jsMessageItems,
  { autoAlpha: 0, y: 20 },  {autoAlpha: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out', stagger: .1,
    scrollTrigger: {
      trigger: '.p-message__items',
      start: 'top bottom',
      toggleActions: 'restart none none reverse'
    }
  }
);


let jsQuestionItems = document.querySelectorAll('.js-question-item');

gsap.fromTo(
  jsQuestionItems,
  { autoAlpha: 0, y: 20 },  {autoAlpha: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out', stagger: .2,
    scrollTrigger: {
      trigger: '.p-question__items',
      start: 'top bottom',
      toggleActions: 'restart none none reverse'
    }
  }
);


gsap.fromTo('.p-message__content-title', {autoAlpha:0, y:20},{autoAlpha:1, y:0, scrollTrigger: {
  trigger: '.p-message__content-title',
  start: 'top bottom',
  end: 'bottom 50%',
  toggleActions: 'restart none none reverse',
}});


document.addEventListener('DOMContentLoaded', function () {
  let jsCampaign = document.querySelectorAll('.js-campaign');

  jsCampaign.forEach(function (item) {
    gsap.fromTo(item, {autoAlpha: 0, y: 20}, {
      autoAlpha: 1, 
      y: 0, 
      duration: 1, 
      stagger: .1, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'center bottom',
        toggleActions: 'restart none none reverse',
      }
    });
  });
});
