'use strict';

$(document).ready(function (){
  $('.tours__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $('.tours__prev'),
    nextArrow: $('.tours__next'),
  });
  
  $('.instructors__list').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    prevArrow: $('.instructors__prev'),
    nextArrow: $('.instructors__next'),
  });

  $('.reviews__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $('.reviews__prev'),
    nextArrow: $('.reviews__next'),
  });
  
  $('.gallery__list').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    prevArrow: $('.gallery__prev'),
    nextArrow: $('.gallery__next'),
  });
});

'use strict';

jQuery.validator.addMethod("checkMask", function(value, element) {
  return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});

$('form').validate({
  rules: {
    phone: {
      checkMask: true,
      messages: false
    }
  },
  messages: {
    phone: {
      checkMask: "Введите полный номер телефона"
    },
    name: "Введите Ваше имя",
  }
  });
$('#phone').mask("+7(999)999-9999", {autoclear: false});
