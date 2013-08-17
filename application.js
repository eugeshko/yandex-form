

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};
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
    };
    return false;
  };
};

  
  //$("form.worksheet").bind('submit',function(){

/*  if (($("input[name='answer[4]']").val() >= 1900) && (($("input[name='answer[4]']").val() <= 2020))) {
        if ($("input[name='Moi_krug_lnk']").val().indexOf("moikrug.ru") != -1) {
          if (IsEmail($("input[name='email']").val())) {
            if ($("input[name='personal_data']").val()) {
              return true;
            } else {
              $(".worksheet__question__question__input__error"[name='personal_data']).show();
            }
          } else {
            $(".worksheet__question__question__input__error"[name='email']).show();
          }
        } else {
          $(".worksheet__question__question__input__error"[name='Moi_krug_lnk']).show();
        }
      } else {
        $(".worksheet__question__question__input__error"[name='answer[4]']).show();
      }
    } else {
      $(".worksheet__question__question__input__error"[name='answer[1]']).show();
    }*/