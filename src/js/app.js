import Swiper from 'swiper';
import slick from 'slick-slider';
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min'
import '../../node_modules/jquery-popup-overlay/jquery.popupoverlay';
import '../../node_modules/jquery-mask-plugin/dist/jquery.mask.min';
import '../../node_modules/jquery-validation/dist/jquery.validate.min';

$(function() {
// BURGER MOBILE MENU
  const $mobileMenuBtn = $('.header__mobile-btn');
  const $mobileMenuBtnHidden = $('.header__mobile-btn--hidden');
  const $headerTopLine = $('.header__top-line');
  const $headerShadow = $('.header__shadow');

  $mobileMenuBtn.click(function () {
    $headerTopLine.toggleClass('header__top-line--active');
    $mobileMenuBtn.toggleClass('header__mobile-btn--active');
    $mobileMenuBtnHidden.toggleClass('header__mobile-btn--visible');
    $headerShadow.toggleClass('header__shadow--active');
    $(document).mouseup(function(e) {
      const $div = $('.header__top-line');
      if (!$div.is(e.target)
        && $div.has(e.target).length === 0) {
        $headerTopLine.removeClass('header__top-line--active');
        $mobileMenuBtn.removeClass('header__mobile-btn--active');
        $mobileMenuBtnHidden.removeClass('header__mobile-btn--visible');
      }
    });
  });
  $(window).resize(function () {
    if (window.innerWidth > 991) {
      $headerTopLine.removeClass('header__top-line--active');
      $mobileMenuBtn.removeClass('header__mobile-btn--active');
      $mobileMenuBtnHidden.removeClass('header__mobile-btn--visible');
      $headerShadow.removeClass('header__shadow--active');
    }
  });
  $headerShadow.click(function () {
    $headerShadow.removeClass('header__shadow--active');
  });

  // SCROLL
  $(document).scroll(function() {
    if($(this).scrollTop() > 70) {
      $('.header').addClass('header--scroll');
    }
    else {
      $('.header').removeClass('header--scroll');

    }
  });


  // DROP DOWN MENU
  const $dropMenu = $('.header__dropdown');
  const $dropMenuContent = $('.header__drop-menu');

  $dropMenu.click(function() {
    $(this).parents().find($dropMenuContent).toggle(300);
  });

  $(document).mouseup(function(e) {
    if ($dropMenu.has(e.target).length === 0) {
      $dropMenuContent.hide(300);
    }
  });

  // ADD SLIDERS

    // ADD SLIDER IN INDEX PAGE IN FIRST-SCREEN
  const swiperFirstScreen = new Swiper('.first-screen__swiper', {
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  });

    // ADD PARTNERS SLIDER SLICK
  $('.partners-slider__wrapper').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });


  // SEARCH FORM IN INDEX PAGE
  function searchForm() {
    const $searchTitle = $('.search-form__title');
    const $searchInputValue = $('.search-form__result');
    const $searchList = $('.search-form__list');
    const $searchListLink = $('.search-form__list a');
    const $searchFormParentsElem = $('.search-form__elem');

    const $searchResetForm = $('.button--reset');


    // CUSTOM SELECT PASS VALUE IN FORM
    $searchListLink.click(function (e) {
      e.preventDefault();
      const $thisParent = $(this).closest($searchFormParentsElem);
      const $thisParentVal = $thisParent.find($searchInputValue);
      const $thisText = $(this).text();
      const $thisValue = $thisParent.find($thisParentVal).val($thisText);

      const $thisList = $(this).closest($searchFormParentsElem).find($searchList);
      $thisList.toggleClass('search-form__list--visible').parent().siblings().children().removeClass('search-form__list--visible');
      const $thisTitle = $thisParent.find($searchTitle);
      if ($thisValue === false) {
        console.log('false');
      } else {
        $thisTitle.addClass('search-form__title--active');
      }
    });

    // DROP CUSTOM MENU IN 'SELECT' AFTER CLICK IN INPUT
    $searchInputValue.click(function (e) {
      e.preventDefault();
      const $thisList = $(this).closest($searchFormParentsElem).find($searchList);
      $thisList.toggleClass('search-form__list--visible').parent().siblings().children().removeClass('search-form__list--visible');
    });

    // REMOVE ACTIVE CLASS IN TITLE(LABEL) FORM INPUT AFTER CLICK BUTTON 'RESET'
    $searchResetForm.click(function () {
      $(this).closest($('.search-form')).find($('.search-form__title')).removeClass('search-form__title--active');
    });

    // CLOSE CUSTOM SELECT IF MOUSEUP
    $(document).mouseup(function(e) {
      if ($searchFormParentsElem.has(e.target).length === 0) {
        $searchList.removeClass('search-form__list--visible');
      }
    });
  }
  searchForm();

  // TABS IN SELECTION
  $('.selection-block__button').click(function () {
    $(this).closest($('.selection-block')).find($('.selection-block__button')).removeClass('selection-block__button--active');
    $(this).addClass('selection-block__button--active');
    $(this).closest($('.selection-block')).find($('.selection-block__main')).hide().eq($(this).index()).fadeIn();
  });


  // GOODS SECTION
  const $goodsTitleLink = $('.title a');

  $goodsTitleLink.click(function (e) {
    e.preventDefault();
    $goodsTitleLink.closest($('.title')).find($($goodsTitleLink)).removeClass('active');
    $(this).addClass('active')
  });


  const swiperGoods = new Swiper('.goods__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.goods__swiper-button-next',
      prevEl: '.goods__swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 4,
        centeredSlides: false,
      },
      1440: {
        slidesPerView: 5,
        centeredSlides: false,
      },
      1620: {
        slidesPerView: 6,
        centeredSlides: false,
      },
    }
  });



  function selectDropDownFilter() {

    const $titleResult = $('.select-drop-down__input');
    const $titleList = $('.select-drop-down__list');
    const $titleListLink = $('.select-drop-down__list a');
    const $titleParent = $('.select-drop-down');
    const $titleTitle = $('.select-drop-down__title');
    let $titleArray;


    function openList() {
      if ($(this).closest($('.select-drop-down')).find($titleResult).text() === '') {
        $titleArray = [];
      } else {
        $titleArray = $(this).closest($('.select-drop-down')).find($titleResult).text().split(', ');
      }
      for (let i = 0; i < $titleListLink.length; i++) {
        if ($titleArray.indexOf($titleListLink[i].text) !== -1) {
          $titleListLink.eq(i).addClass('active');
        }
      }
      const $thisListRes = $(this).closest($('.select-drop-down')).find($titleList);
      $thisListRes.addClass('select-drop-down__list--visible');
    }

    $titleResult.click(openList);
    $titleTitle.click(openList);


    $titleListLink.click(function (e) {
      e.preventDefault();
      const $thisParent = $(this).closest($titleParent);
      const $titleResultVal = $thisParent.find($titleResult);
      const $thisText = $(this).text();
      if($(this).closest($('.select-drop-down')).is($('#tags'))) {
        const $thisIndexOf = $titleArray.indexOf($thisText);
        if ($thisIndexOf !== -1) {
          $titleArray.splice($thisIndexOf, 1);
          $(this).removeClass('active');
        } else {
          $titleArray.push($thisText);
          $(this).addClass('active')
        }
        $thisParent.find($titleResultVal).text($titleArray.join(', '));
        if ($titleArray.length === 0) {
          $(this).closest($titleParent).find($titleResult).text('Выбрать фильтр');
        }
      } else if ($(this).closest($('.select-drop-down')).is($('#size'))) {
        $thisParent.find($titleResultVal).text($thisText);
        $(this).closest($('.select-drop-down')).find($titleListLink).removeClass('active');
        $(this).addClass('active');
        $(this).closest($('.select-drop-down')).find($titleList).removeClass('select-drop-down__list--visible');
      } else {
        $thisParent.find($titleResultVal).text($thisText);
        $(this).closest($('.select-drop-down')).find($titleListLink).removeClass('active');
        $(this).addClass('active');
        $(this).closest($('.select-drop-down')).find($titleList).removeClass('select-drop-down__list--visible');
        }
      });

    $('.select-drop-down__close-btn').click(function (e) {
      e.preventDefault();
      $titleList.removeClass('select-drop-down__list--visible');
    });
    $(document).mouseup(function(e) {
      if ($titleList.has(e.target).length === 0) {
        $titleList.removeClass('select-drop-down__list--visible');
        $titleTitle.removeClass('select-drop-down__title--active');
      }
    });
    $('.select-drop-down__reset-btn').click(function (e) {
      e.preventDefault();
      $(this).closest($titleParent).find($titleResult).text('Выбрать фильтр');
      $(this).closest($titleParent).find($titleListLink).removeClass('active');
      $titleArray = [];
    });

  }

  selectDropDownFilter();

  function cardsButtons() {
    const $cardMunis = $('.product-card__minus');
    const $cardPlus = $('.product-card__plus');
    const $parent = $('.product-card__num-block');
    const $input = $('.product-card__quantity');
    let counter;

    $cardMunis.click(function (e) {
      e.preventDefault();
      const $thisInput = $(this).closest($parent).find($input);
      counter = +$thisInput.val();
      if (counter > 1) {
        counter -= 1;
      }
      $thisInput.val(counter);
    });

    $cardPlus.click(function (e) {
      e.preventDefault();
      const $thisInput = $(this).closest($parent).find($input);
      counter = +$thisInput.val();
      counter += 1;
      $thisInput.val(counter);
    });
  }

  cardsButtons();
  //

  // NEWS SECTION

  const swiperNews = new Swiper('.news__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.news__swiper-button-next',
      prevEl: '.news__swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 60,
      },
      1440: {
        slidesPerView: 4,
        centeredSlides: false,
      },
    }
  });

  // CONTACTS AND YANDEX MAP API

  const swiperContacts = new Swiper('.contacts__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.contacts__swiper-button-next',
      prevEl: '.contacts__swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    }
  });

  // NEWS-INNER PAGE SLIDER

  const swiperNewsInner = new Swiper('.news-inner__swiper.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // FORM PARTNERSHIP
  const $input = $('.form-partners__input');

  function formLabel(elem) {

  }

  $input.focus(function() {
    $(this).prev($input).addClass('form-partners__label--active');
  });
  $input.focusout(function() {
   if ($(this).val() === '' && ' ') {
     $(this).prev($input).removeClass('form-partners__label--active');
   }
  });

  // SERVICES PAGE TABS

  const $tabsItem = $('.services__table');
  const $tabsNavBtn = $('.services__nav li');

  $tabsItem.not(':first').hide();
  $tabsNavBtn.click(function(e) {
    e.preventDefault();
    $tabsNavBtn.removeClass('active').eq($(this).index()).addClass('active');
    $tabsItem.hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('active');

  // CARD PAGE SLIDER
  const swiperCardPage = new Swiper('.card-page__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.goods__swiper-button-next',
      prevEl: '.goods__swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 4,
        centeredSlides: false,
      }
    }
  });


  // BUTTON UP
  $(document).scroll(function() {
    // - - - - SCROOL - - - - OPEN
    if($(this).scrollTop() > 900) {
      $('.button-up').removeClass('button-up--hidden');
    }
    else {
      $('.button-up').addClass('button-up--hidden');
    }
    // - - - - SCROLL - - - - CLOSE
  });
  $('.button-up').on('click', function(event) {
    const $target = $(this.getAttribute('href'));

    if ($target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $target.offset().top - 140
      }, 1000);
    }
  });

  // MODAL
  $('.modal').popup({
    transition: 'all 0.3s',
    outline: true,
    focusdelay: 400,
    vertical: 'top'
  });


  $('input[type="tel"]').mask('+7 (000) 000-00-00');

  jQuery.validator.addMethod('phoneno', function (phoneNumber, element) {
    return this.optional(element) || phoneNumber.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, 'Введите Ваш телефон');


  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: 'POST',
      url: 'sendmail.php',
      data,
      success() {
        $('.modal').popup('hide');
        $('#thanks').popup('show');
        setTimeout(function () {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

  $('.form').each(function (index, el) {
    $(el).addClass(`form-${index}`);

    $(`.form-${index}`).validate({
      rules: {
        name: 'required',
        message: 'required',
        phone: {
          required: true,
          phoneno: true
        }
      },
      messages: {
        name: 'Введите Ваше имя',
        phone: 'Введите Ваш телефон',
        message: 'Оставьте Ваше сообщение'
      },
      submitHandler(form) {
        const t = $(`.form-${index}`).serialize();
        ajaxSend(`.form-${index}`, t);
      }
    });
  });

});
