$(function(){
      $(".typed").typed({
        strings: ["<p class='command'>maintenance</p> <p>-bash: maintenance: command not found</p> <p class='command'>well.. ^1000 this is awkward..</p><p class='command'> please contact administartor sefjon@mahilaj.com ....<span class='typed-cursor'>_</span></p>"],
        typeSpeed: 0,
        loop: true,
        showCursor: false,
        callback: function() {
          setTimeout( function() {
            $('.console')
          }, 2000) 
        }
      });
  });