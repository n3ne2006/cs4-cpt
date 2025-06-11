$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat anellopez<br/>" +
      "><span class='caret'>$</span> job: Student :D <br/> ^100" +
      "><span class='caret'>$</span> skills: Drawing, painting, basic coding, sewing!<br/> ^100" +
      "><span class='caret'>$</span> hobbies: Artist, fashion, music, gaming :3 <br/> ^300" +
      "><span class='caret'>$</span> alias: n3ne (social media) <br/> ^300"
       
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
