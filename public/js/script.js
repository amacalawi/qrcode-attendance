
$(document).ready(function() {
  clockUpdate();
  setInterval(clockUpdate, 1000);

  $(':input.box').keydown(function(e) {
    if ((e.which == 8 || e.which == 46) && $(this).val() =='') {
      $(this).prev('input').focus();
    }
    if ($(this).val() != '') {
      $(this).next('input').focus();
    }
  });

  // $('.qr-problem').click(function(e) {
  //   var self = $(this);
  //   $(this).toggleText('use QR Code?', 'having problem with QR Code?');
  // });

  // $.fn.extend({
  //   toggleText: function(a, b){
  //     if (this.text() == b) {
  //     } else {
  //       $('#id_number').val('').prop('disabled', false);
  //       $('#request-otp-btn').prop('disabled', false);
  //       $('input[name="otp_1"]').val(''); $('input[name="otp_2"]').val('');
  //       $('input[name="otp_3"]').val(''); $('input[name="otp_4"]').val('');
  //       $('input[name="otp_5"]').val('');
  //     }
  //     return this.text(this.text() == b ? a : b);
  //   }
  // });
})

function clockUpdate() {
  var date = new Date();
  function addZero(x) {
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }

  function twelveHour(x) {
    if (x > 12) {
      return x = x - 12;
    } else if (x == 0) {
      return x = 12;
    } else {
      return x;
    }
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());

  if (date.getHours() >= 12) {
  	$('.digital-clock').text(h + ':' + m + ':' + s + ' pm');
  } else {
  	$('.digital-clock').text(h + ':' + m + ':' + s + ' am');
  }
}