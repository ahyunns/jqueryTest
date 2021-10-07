(function() {
  $(".test01 .btn").on("click", function() {$(".test01 h2").add(".test01 h3").css("background-color", "#c6ffc6"); });
  $(".test01 .off1").on("click", function() {$(".test01 h2").add(".test01 h3").css("background-color", ""); });

  $(".test02 .btn").on("click", function() {$(".test02 p").addClass("highlight"); });
  $(".test02 .off1").on("click", function() {$(".test02 p").removeClass("highlight"); });

  $(".test03 .btn").on("click", function() {$(".test03 h2").after("<p>새 요소 추가</p>"); });
  $(".test03 .off1").on("click", function() {$(".test03 p").remove(); });
  
  $(".test04 .btn").on("click", function() {$(".test04 .box").stop().animate({width: 500}, 1000); });
  $(".test04 .off1").on("click", function() {$(".test04 .box").stop().animate({width: 100}, 0); });

  $(".test05 .btn").on("click", function() {$(".test05 .list").append("<li class='new-item'>item 추가</li>"); });
  $(".test05 .off1").on("click", function() {$(".test05 .new-item").remove(); });

  $(".test06 .btn").on("click", function() {$("<span>p 요소 안에 span 추가</span>").appendTo("p"); });
  $(".test06 .off1").on("click", function() {$(".test06 p>span").remove(); });

  $(".test07 .btn").on("click", function() {$(".test07 input").attr("placeholder", "속성값 바꾸기"); });
  $(".test07 .off1").on("click", function() {$(".test07 input").attr("placeholder", "입력해주세요"); });

  $(".test08 .btn").on("click", function() {$(".test08 h2").before("<p>새 요소 추가</p>"); });
  $(".test08 .off1").on("click", function() {$(".test08 p").remove(); });
  
  $("#here").on("blur", function() {alert("focusout 발생"); });
  
  $("#fruits").on("change", function() {$(".test10 .txt").text($("#fruits").val()); });
  $(".test10 .off1").on("click", function() {$(".test10 .txt").text(""); });
  
  $(".test11 .depth2").on("click", function(e) {e.preventDefault(); $(this).children().css("background-color", "#c6ffc6"); });
  $(".test11 .off1").on("click", function() {$(".test11 .depth2").children().css("background-color", ""); });

  $(".test12 .btn-bg").on("click", function() {$(this).toggleClass("active"); });

  $(".test13 .btn").on("click", function() {$(".test13 p").css({"color":"#c6ffc6", "font-weight": 600}); });
  $(".test13 .off1").on("click", function() {$(".test13 p").css({"color":"#000", "font-weight": "normal"}); });

  var data = null;
  $("#btnDetach").on("click", function() {data = $(".test14 .hello").detach(); });
  $("#btnRestore").on("click", function() {$(".test14 p").append(data); });
  $(".test14 .off1").on("click", function() {$(".test14 .txt-wrap").html("<p class='hello'>안녕하세요.</p><p>.detach() 메소드</p><p class='hello'>테스트입니다.</p>"); });

  $(".test15 .btn").on("click", function() {$(".test15 h2").each(function(index) { if(index % 2 === 0) { $(this).addClass("even"); } }); });
  $(".test15 .off1").on("click", function() {$(".test15 h2").each(function(index) { if(index % 2 === 0) { $(this).removeClass("even"); } }); });

  $(".test16 .off1").on("click", function() {$(".test16 ul li").remove(); $(".test16 ul").append().html("<li>선택한 요소를 삭제하고 싶다면(데이터 및 이벤트 포함) .remove() 메서드를 사용합니다.</li><li>선택한 요소의 컨텐츠만 삭제하고 싶다면 .empty() 메서드를 사용합니다.</li><li>선택한 요소를 삭제하고 싶다면(데이터 및 이벤트 불포함) .detach() 메서드를 사용합니다.</li><li>선택한 요소의 부모 요소를 삭제하고 싶다면 .unwrap() 메서드를 사용합니다.</li>"); });
  $(".test16 .btn01").on("click", function() {$(".test16 ul li").empty(); });
  $(".test16 .btn02").on("click", function() {$(".test16 ul li").remove(); });
  $(".test16 .btn03").on("click", function() {$(".test16 ul li").detach(); });

  $(".test17 .btn").on("click", function() {$(".test17 ul li").eq(1).css("background-color", "#c6ffc6"); });
  $(".test17 .off1").on("click", function() {$(".test17 ul li").eq(1).css("background-color", ""); });

  $(".test18 .btn").on("click", function() {$(".test18 ul li:even").css("border", "1px solid #f00"); });
  $(".test18 .off1").on("click", function() {$(".test18 ul li:even").css("border", ""); });
  
  $(".test19 .btn").on("click", function() {$(".test19 .circle").stop().fadeIn(500); });
  $(".test19 .off1").on("click", function() {$(".test19 .circle").hide(); });
  
  $(".test20 .btn").on("click", function() {$(".test20 .circle").stop().fadeOut(500); });
  $(".test20 .off1").on("click", function() {$(".test20 .circle").show(); });

  $(".test21 .btn").on("click", function() {$(".test21 p").find("em").css("color", "#f00"); });
  $(".test21 .off1").on("click", function() {$(".test21 p").find("em").css("color", ""); });

  $("#inputIn").on("focusin", function() {$(this).css("background-color", "#f00"); });
  $("#inputIn").on("focusout", function() {$(this).css("background-color", ""); });

  $(".test23 .btn-search").on("click", function() {$("#inputOut").removeClass("hidden"); });
  $("#inputOut").on("focusout", function() {$(this).addClass("hidden"); });
  
  // 클릭버튼을 눌렀을 때 조건문이 실행됨
  $(".test24 .btn").on("click", function() {if($(".test24 button").hasClass("btn04")) { alert("true"); return false; } else { alert("false"); return false; } });

  // 변경하기버튼을 누르면 testH()함수가 실행됨
  $(".test25 .btn-change").on("click", function() {testH(); });
  function testH() {var h_val = $("#heightVal").val(); $(".test25 .box").css("height", h_val); }
  $(".test25 .off1").on("click", function() { $(".test25 .box").css("height", 100); });

  $(".test26 p").hover(function() {$(this).text("hover 적용됨"); }, function() { $(this).text("여기에 마우스를 올려주세요."); });

  $(".test27 li").on("click", function() {var idxLi = $(this).index(); alert("나는 "+idxLi+"번째 자식입니다"); });

  $(".test28 .btn").on("click", function() {var isBool = $(".test28 .list").children().is("li"); if(isBool) {alert("결과값: "+isBool+"// li 태그가 있습니다");} else {alert("결과값: "+isBool+"// li 태그가 없습니다");} });

  $("#inputKdown").on("keydown", function() {$(this).css("background-color","#ff0"); });
  $("#inputKdown").on("keyup", function() {$(this).css("background-color","#fff"); });

  $("#inputKup").on("keydown", function() {$(this).css("background-color","#fff"); });
  $("#inputKup").on("keyup", function() {$(this).css("background-color","#ff0"); });

  $(".test31 .btn").on("click", function() {var n = $('.test31 ul li').length; $(".test31 ul").after("<p>"+n+" 개의 li가 있다.</p>"); });
  $(".test31 .off1").on("click", function() {$(".test31 .test-content p").remove(); });

  $(".test32 .btn-request").on("click", function() {$("#loadTest").load("test.html span"); });
  $(".test32 .off1").on("click", function() {$("#loadTest span").remove(); });

  $("#mouseEnter").on("mouseenter", function() {alert("마우스가 영역에 들어왔습니다."); });
  $("#mouseLeave").on("mouseleave", function() {alert("마우스가 떠났습니다."); });

  $(".test35 .btn-test").on("click", function() {$(this).next().addClass("red"); });
  $(".test35 .off1").on("click", function() {$(".test35 .btn-test").next().removeClass("red"); });

  $(".test36 .btn").on("click", function() {$(".test36 ul li").not(".select").addClass("red"); });
  $(".test36 .off1").on("click", function() {$(".test36 ul li").removeClass("red"); });

  $(".test37 .btn").on("click", function() {$(".test37 ul li:odd").css("border", "1px solid #f00"); });
  $(".test37 .off1").on("click", function() {$(".test37 ul li:odd").css("border", ""); });

  $(".test38 .btn").on("click", function() {var cirOffset = $(".test38 .circle").offset(); $(".test38 .ot").text(cirOffset.top + "px"); $(".test38 .ol").text(cirOffset.left + "px"); });
  $(".test38 .off1").on("click", function() {$(".test38 .test-content em").text("0"); });

  $(".test39 .test-content span").on("click", function() {alert("문장이 클릭되었습니다."); });

  $(".test40 .btn").on("click", function() {$(".test40 .test-content p").parent().css("border", "2px solid red"); });
  $(".test40 .off1").on("click", function() {$(".test40 .test-content p").parent().css("border", ""); });
  
  $(".test41 .btn").on("click", function() {$(".test41 .test-content p").parents().css("border", "2px solid red"); });
  $(".test41 .off1").on("click", function() {$(".test41 .test-content p").parents().css("border", ""); });

  $(".test42 .btn").on("click", function() {$(".test42 .test-content ul").prepend("<li>prepend 추가</li>"); });
  $(".test42 .off1").on("click", function() {$(".test42 .test-content ul").html("<li>Lorem</li><li>ipsum</li>"); });

  $(".test43 .btn").on("click", function() {$("<li>prependTo 추가</li>").prependTo(".test43 .test-content ul"); });
  $(".test43 .off1").on("click", function() {$(".test43 .test-content ul").html("<li>Lorem</li><li>ipsum</li>"); });

  $(".test44 .btn").on("click", function() {$(".test44 .test-content em").html($(".test44 a").prop("href")); });
  $(".test44 .off1").on("click", function() {$(".test44 .test-content em").text("0"); });

  $(".test45 .btn").on("click", function() {$(".test45 ul li").remove(); });
  $(".test45 .off1").on("click", function() {$(".test45 ul").html("<li>안녕하세요</li><li>remove</li><li>테스트입니다</li>"); });

  $(".test46 .btn").on("click", function() {$(".test46 input").removeAttr("placeholder"); })
  $(".test46 .off1").on("click", function() {$(".test46 input").attr("placeholder", "입력해주세요"); })
  
  $(".test47 .btn").on("click", function() {$(".test47 em").removeClass("red"); })
  $(".test47 .off1").on("click", function() {$(".test47 em").addClass("red"); })

  $(window).resize(function() {var winW = window.outerWidth; if(winW < 800) { alert("현재 브라우저 전체의 너비는" + winW + "px 이다."); return false;} });

  $(window).on("scroll", function() {var sc = $(this).scrollTop(); $(".test49 .top").text(sc); });

  $(".test50 .btn").on("click", function() {$(".test50 .circle").show(); });
  $(".test50 .off1").on("click", function() {$(".test50 .circle").hide(); });

  $(".test51 .btn").on("click", function() {$(".test51 .second-item").siblings().css("background-color", "#f00"); });
  $(".test51 .off1").on("click", function() {$(".test51 .second-item").siblings().css("background-color", ""); });

  $(".test52 .btn").on("click", function() {var p = $(".test52 .test-content p").size(); alert("p 요소 수: " + p); });

  $(".test53 .btn").on("click", function() {$(".test53 .bar").slideDown(400); });
  $(".test53 .off1").on("click", function() {$(".test53 .bar").hide(); });
  
  $(".test54 .btn").on("click", function() {$(".test54 .bar").slideUp(400); });
  $(".test54 .off1").on("click", function() {$(".test54 .bar").show(); });
  
  $(".test55 .btn").on("click", function() {$(".test55 h2").text("Hello World!"); });
  $(".test55 .off1").on("click", function() {$(".test55 h2").text("안녕하세요"); });

  $("#btnId").on("click", function() {var idVal = $("#inputId").val(); alert(idVal); });
  $(".test56 .off1").on("click", function() {$("#inputId").val(""); });
})();