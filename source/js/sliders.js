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
    infinite: true,
    prevArrow: $('.gallery__prev'),
    nextArrow: $('.gallery__next'),
  });
});
