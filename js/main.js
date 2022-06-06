/*jQuery Masked Input Plugin*/

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(x){var a,e=navigator.userAgent,S=/iphone/i.test(e),i=/chrome/i.test(e),j=/android/i.test(e);x.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},x.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,v){var n,k,_,b,y,$,R;if(!t&&0<this.length){var e=x(this[0]).data(x.mask.dataName);return e?e():void 0}return v=x.extend({autoclear:x.mask.autoclear,placeholder:x.mask.placeholder,completed:null},v),n=x.mask.definitions,k=[],_=$=t.length,b=null,x.each(t.split(""),function(e,t){"?"==t?($--,_=e):n[t]?(k.push(new RegExp(n[t])),null===b&&(b=k.length-1),e<_&&(y=k.length-1)):k.push(null)}),this.trigger("unmask").each(function(){function o(){if(v.completed){for(var e=b;e<=y;e++)if(k[e]&&m[e]===c(e))return;v.completed.call(g)}}function c(e){return v.placeholder.charAt(e<v.placeholder.length?e:0)}function s(e){for(;++e<$&&!k[e];);return e}function l(e,t){var n,a;if(!(e<0)){for(n=e,a=s(t);n<$;n++)if(k[n]){if(!(a<$&&k[n].test(m[a])))break;m[n]=m[a],m[a]=c(a),a=s(a)}f(),g.caret(Math.max(b,e))}}function r(){h(),g.val()!=p&&g.change()}function u(e,t){for(var n=e;n<t&&n<$;n++)k[n]&&(m[n]=c(n))}function f(){g.val(m.join(""))}function h(e){for(var t,n=g.val(),a=-1,i=0,r=0;i<$;i++)if(k[i]){for(m[i]=c(i);r++<n.length;)if(t=n.charAt(r-1),k[i].test(t)){m[i]=t,a=i;break}if(r>n.length){u(i+1,$);break}}else m[i]===n.charAt(r)&&r++,i<_&&(a=i);return e?f():a+1<_?v.autoclear||m.join("")===d?(g.val()&&g.val(""),u(0,$)):f():(f(),g.val(g.val().substring(0,a+1))),_?i:b}var g=x(this),m=x.map(t.split(""),function(e,t){return"?"!=e?n[e]?c(t):e:void 0}),d=m.join(""),p=g.val();g.data(x.mask.dataName,function(){return x.map(m,function(e,t){return k[t]&&e!=c(t)?e:null}).join("")}),g.one("unmask",function(){g.off(".mask").removeData(x.mask.dataName)}).on("focus.mask",function(){var e;g.prop("readonly")||(clearTimeout(a),p=g.val(),e=h(),a=setTimeout(function(){g.get(0)===document.activeElement&&(f(),e==t.replace("?","").length?g.caret(0,e):g.caret(e))},10))}).on("blur.mask",r).on("keydown.mask",function(e){var t,n,a,i;g.prop("readonly")||(i=e.which||e.keyCode,R=g.val(),8===i||46===i||S&&127===i?(n=(t=g.caret()).begin,(a=t.end)-n==0&&(n=46!==i?function(e){for(;0<=--e&&!k[e];);return e}(n):a=s(n-1),a=46===i?s(a):a),u(n,a),l(n,a-1),e.preventDefault()):13===i?r.call(this,e):27===i&&(g.val(p),g.caret(0,h()),e.preventDefault()))}).on("keypress.mask",function(e){var t,n,a,i,r;g.prop("readonly")||(i=e.which||e.keyCode,r=g.caret(),e.ctrlKey||e.altKey||e.metaKey||i<32||!i||13===i||(r.end-r.begin!=0&&(u(r.begin,r.end),l(r.begin,r.end-1)),(t=s(r.begin-1))<$&&(n=String.fromCharCode(i),k[t].test(n))&&(function(e){for(var t,n,a=e,i=c(e);a<$;a++)if(k[a]){if(t=s(a),n=m[a],m[a]=i,!(t<$&&k[t].test(n)))break;i=n}}(t),m[t]=n,f(),a=s(t),j?setTimeout(function(){x.proxy(x.fn.caret,g,a)()},0):g.caret(a),r.begin<=y&&o()),e.preventDefault()))}).on("input.mask paste.mask",function(){g.prop("readonly")||setTimeout(function(){var e=h(!0);g.caret(e),o()},0)}),i&&j&&g.off("input.mask").on("input.mask",function(){var e=g.val(),t=g.caret();if(R&&R.length&&R.length>e.length){for(h(!0);0<t.begin&&!k[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<b&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}else{for(h(!0);t.begin<$&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}o()}),h()})}})}),$.fn.setCursorPosition=function(e){var t;$(this).get(0).setSelectionRange?$(this).get(0).setSelectionRange(e,e):$(this).get(0).createTextRange&&((t=$(this).get(0).createTextRange()).collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select())},$('input[type="tel"]').click(function(){"+7 (___) ___-__-__"==$(this).val()&&$(this).setCursorPosition(4)}),$('input[type="tel"]').keyup(function(){"+7 (8__) ___-__-__"==$(this).val()&&($(this).val($(this).val().replace("8","_")),$(this).mask("+7 (999) 999-99-99"),$(this).attr("placeholder","+7 (___) ___-__-__"),$(this).setCursorPosition(4))});



//E-mail Ajax Send

$("form").submit(function() {

  var th = $(this);

  $.ajax({

    type: "POST",

    url: "mail.php",

    data: th.serialize()

  }).done(function() {



   $(".popup").removeClass("active");

    

    if (th.hasClass("form-quest")) {

      ym(88960555,'reachGoal','vopros');

    } else if (th.hasClass("form-consult")) {

      ym(88960555,'reachGoal','konsultacia');

    } else if ($("#obuchenieTarif").text() == "Standart") {

      ym(88960555,'reachGoal','standard');

    } else if ($("#obuchenieTarif").text() == "VIP") {

      ym(88960555,'reachGoal','vip');

    }    



    $("#popupSuccess").addClass("active");

        

    setTimeout(function() {

      th.trigger("reset");

    }, 1000);

  });  

  return false;

});





$(document).ready(function(){

  $(".js-getcall").click(function(){

    $("#popupConsult").addClass("active");

  });

  $(".js-gettarif").click(function(){

    $("#obuchenieTarif").text($(this).data("tarif"));

    $("#popupObuchenie").find("input[name=Тема]").val("Узнать стоимость тарифа " + $(this).data("tarif"));

    $("#popupObuchenie").addClass("active");

  });

  $(".js-getvideo").click(function(){

    $("#popupVideo").addClass("active").find(".popup-video").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + $(this).data("video") + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  });

  

  

  $(".js-popup-close").on("click", function(){

    $(this).parents(".popup").removeClass("active");

    $("#popupVideo .popup-video").html("");

  });



  $(".program-item-container").on("click", function(){

    $(".program-item-container").not(this).removeClass("active").find(".program-item-text").slideUp();

    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {

      $(this).find(".program-item-text").slideDown();

    } else {

      $(this).find(".program-item-text").slideUp();

    }

  });



  $(window).on("scroll", function(){

    $(".shape").css("transform", "rotate(" + window.pageYOffset + "deg)");

    $(".banner-img").css("transform", "rotate(-" + window.pageYOffset * 0.03 + "deg)");

    // $(".banner-plash1").css("transform", "rotate(17deg) translateY(" + window.pageYOffset * 0.05 + "%)");

    // $(".banner-plash2, .banner-plash3").css("transform", "rotate(-13deg) translateY(" + window.pageYOffset * 0.05 + "%)");

    

  });



  let bg = document.querySelectorAll('.banner-plash');

  for (let i = 0; i < bg.length; i++){

      window.addEventListener('mousemove', function(e) { 

          let x = e.clientX / window.innerWidth;

          let y = e.clientY / window.innerHeight;     

          bg[0].style.transform = 'rotate(17deg) translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

          bg[1].style.transform = 'rotate(-13deg) translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

          bg[2].style.transform = 'rotate(-13deg) translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

      });    

  }

  







  function sliderResize(){

    if (($(window).innerWidth() > 480)) {

      if (!($(".js-reviews-slider").hasClass("slick-slider"))){

        $(".js-reviews-slider").slick({

          slidesToShow: 1,

          centerMode: true,

          dots: true,

          variableWidth: true,

          focusOnSelect: true

        });

      }

    } else {

      if ($(".js-reviews-slider").hasClass("slick-slider")) {

        $(".js-reviews-slider").slick("unslick")

      }

    }

  }

  sliderResize();

  $(window).resize(function(){

    sliderResize();

  });



  $(".js-reviews-more").on("click", function(){

    $(this).hide();

    $(".review:nth-child(n)").show();

  });





  



  $('.js-reviews2-slider1').slick({

    slidesToShow: 1,

    slidesToScroll: 1,

    arrows: true,

    asNavFor: '.js-reviews2-slider2'

  });

  $('.js-reviews2-slider2').slick({

    slidesToShow: 1,

    slidesToScroll: 1,

    asNavFor: '.js-reviews2-slider1',

    fade: true,

    arrows: false,

    responsive: [

      {

        breakpoint: 768,

        settings: {

          arrows: true

        }

      }

    ]

  });

  $(".js-reviews2-next").on("click", function(){

    $('.js-reviews2-slider1').slick("slickNext");

  });

  



  $("a[href^='#']").click(function(){

    var _href = $(this).attr("href");

    $("html, body").animate({scrollTop: $(_href).offset().top - 64});

    return false;

  });

  

  $(function() {

    $("[type=tel]").mask("+7 (999) 999-99-99");

  });

  

  $('form input[type="checkbox"]').change(function () {

    if ($(this).is(":checked")) {

        $(this).parents("form").find("input[type='submit']").attr("disabled", false);

    } else {

        $(this).parents("form").find("input[type='submit']").attr("disabled", true);

    }

  }); 



  AOS.init({

    offset: 100,

  });

  

});