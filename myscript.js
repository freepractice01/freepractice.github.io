function play_se(){
  var warning = new Audio('警報音_03.mp3');
  var voice = new Audio('5250699597162.mp3');
  warning.play();
  voice.play();
  navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);

}


$(function(){

  history.pushState(null, null, null);
  $(window).on('popstate', function(e){
    if (!e.orinintialEvent.state){
      play.se();
      history.pushState(null, null, null);
      return;
    }
  });

  $('.modal').modal({dismissible: false});
  $('#alert').modal('open');
  $('#close').click(function(){
    $('#alert').modal('close');
    play_se();
  })

  var device = navigator.userAgent.match(/Android|iPhone|iPad/);
  if (device == null){
    device = '端末';
  }
    $('#device').text(device);

  var time = 200;
  setInterval(function(){
    time--;
    $('#timer').text(time);
  }, 1000);
});
