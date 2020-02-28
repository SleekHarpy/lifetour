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
