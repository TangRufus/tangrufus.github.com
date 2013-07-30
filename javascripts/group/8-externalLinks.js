$(document).ready(function() {
   $("a").each(function(){
      if(this.href.indexOf(location.hostname) == -1) {
         $(this).attr({
            target: "_blank",
         });
      }
   })
});