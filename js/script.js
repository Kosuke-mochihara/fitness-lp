
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

  function setDrawerOpen(isOpen) {
    const $hamburger = $('.js-hamburger');
    const $drawer = $('.js-drawer-menu');

    $hamburger.toggleClass('is-open', isOpen);
    $drawer.toggleClass('is-open', isOpen);
    $hamburger.attr('aria-expanded', isOpen);
    $hamburger.attr('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    $drawer.attr('aria-hidden', !isOpen);
  }

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let headerHeight = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - headerHeight;

    if ($('.js-hamburger').hasClass('is-open')) {
      setDrawerOpen(false);
    }

    $('html,body').animate({ scrollTop: targetY }, time, 'swing', function () {
      if (!target.attr('tabindex')) {
        target.attr('tabindex', '-1');
      }
      target.focus({ preventScroll: true });
    });
    return false;
  });

  //ナビバートグル
  $('.js-hamburger').on('click', function () {
    setDrawerOpen(!$(this).hasClass('is-open'));
  });

  $('.js-drawer-menu a').on('click', function () {
    setDrawerOpen(false);
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $('.js-hamburger').hasClass('is-open')) {
      setDrawerOpen(false);
      $('.js-hamburger').focus();
    }
  });
});

const scrollTriggerDefaults = {
  toggleActions: 'play none none none',
};

window.addEventListener('DOMContentLoaded', function () {
  gsap.fromTo('.js-mv', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.5, ease: 'power2.out' });
});

let jsAboutItems = document.querySelectorAll('.js-about-item');

jsAboutItems.forEach(function (jsAboutItem) {
  gsap.fromTo(jsAboutItem,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: jsAboutItem,
        start: 'top bottom',
        ...scrollTriggerDefaults,
      }
    }
  );
});

let jsFeatureItems = document.querySelectorAll('.js-feature-item');

jsFeatureItems.forEach(function (jsFeatureItem) {
  gsap.fromTo(jsFeatureItem, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out',
    scrollTrigger: {
      trigger: jsFeatureItem,
      start: 'top bottom',
      ...scrollTriggerDefaults,
    }
  });
});

let jsVoiceItems = document.querySelectorAll('.js-voice-item');

jsVoiceItems.forEach(function (jsVoiceItem) {
  gsap.fromTo(
    jsVoiceItem,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: jsVoiceItem,
        start: 'top bottom',
        ...scrollTriggerDefaults,
      }
    }
  );
});

gsap.fromTo('.p-flow__item', { opacity: 0, y: 20 }, {
  opacity: 1, y: 0, duration: 1, stagger: .1, ease: 'power2.out',
  scrollTrigger: {
    trigger: '.p-flow__items',
    start: 'center bottom',
    ...scrollTriggerDefaults,
  }
});

document.addEventListener('DOMContentLoaded', function () {
  gsap.fromTo('.p-price__month-en-box',
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: .5,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.p-price__month-en-box',
        start: 'top bottom',
        end: 'bottom 50%',
        ...scrollTriggerDefaults,
      }
    }
  );
});

let textEffectTrigger = document.querySelectorAll('.js-text-effect-trigger');

textEffectTrigger.forEach((trigger) => {
  let textEffectTL = gsap.timeline();
  let target = trigger.querySelectorAll('.js-text-effect');

  let proxy = { x: 0 };

  textEffectTL
    .to(target, { opacity: 1, y: 0, duration: .5, stagger: .1 })
    .to(proxy, {
      x: 101,
      duration: .3,
      stagger: .2,
      onUpdate: function () {
        target.forEach(t => {
          t.style.setProperty('--transformX', `${proxy.x}%`);
        });
      }
    });

  ScrollTrigger.create({
    trigger: trigger,
    start: 'bottom bottom',
    animation: textEffectTL,
    toggleActions: 'play none none none',
  });
});

let jsMessageItems = document.querySelectorAll('.js-message-item');

gsap.fromTo(
  jsMessageItems,
  { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out', stagger: .1,
    scrollTrigger: {
      trigger: '.p-message__items',
      start: 'top bottom',
      ...scrollTriggerDefaults,
    }
  }
);

let jsQuestionItems = document.querySelectorAll('.js-question-item');

gsap.fromTo(
  jsQuestionItems,
  { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out', stagger: .2,
    scrollTrigger: {
      trigger: '.p-question__items',
      start: 'top bottom',
      ...scrollTriggerDefaults,
    }
  }
);

gsap.fromTo('.p-message__content-title', { opacity: 0, y: 20 }, {
  opacity: 1, y: 0, scrollTrigger: {
    trigger: '.p-message__content-title',
    start: 'top bottom',
    end: 'bottom 50%',
    ...scrollTriggerDefaults,
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let jsCampaign = document.querySelectorAll('.js-campaign');

  jsCampaign.forEach(function (item) {
    gsap.fromTo(item, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: .1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'center bottom',
        ...scrollTriggerDefaults,
      }
    });
  });
});
