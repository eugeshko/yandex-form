

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function hideAllErrors() {
  $('.worksheet__question__question__input__error').hide();
}

function validateMyForm(){
  hideAllErrors();

  var errors = [];
  if (isNaN(parseInt(($("[name = 'answer[1]']").val()))) || (parseInt(($("[name = 'answer[1]']").val())) <= 1900) || (parseInt(($("[name = 'answer[1]']").val())) >= 2500)) {
    errors.push('answer[1]');
  };
  if (isNaN(parseInt(($("[name = 'answer[4]']").val()))) || (parseInt(($("[name = 'answer[4]']").val())) <= 1900) || (parseInt(($("[name = 'answer[4]']").val())) >= 2500)) {
     errors.push('answer[4]');
  };
  if ($("[name='Moi_krug_lnk']").val().indexOf("moikrug.ru") == -1) {
    errors.push('Moi_krug_lnk');
  };
  if (!IsEmail($("[name='email']").val())) {
    errors.push('email');
  };
  if ($("[name='personal_data']").val()) {
    errors.push('personal_data');
  };
  if (errors.length == 0) {
    return true;
  } else {
    for (var i = 0; i < errors.length; ++i) {
      $("[name='" + errors[i] +"']").next('.worksheet__question__question__input__error').show();
    }
    return false;
  }
}

function hideQuestion(element) { 
  $(element).siblings(':not(.worksheet__question__number):not(.worksheet__question__question__input__error)').slideToggle(300);
}

$(document).ready(function init () {
  $('.worksheet__question__number').click(function () {
    hideQuestion(this);
  });
});