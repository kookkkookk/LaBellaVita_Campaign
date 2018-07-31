$(function(){
	var json;
	var tl = new TimelineMax();
	var setTimePage31;
	var attentionStart;

	var page31Fn = function(){
		$("#canvas").show();
		indexChange = 1;
		$(".page31bg").fadeIn(500,function(){
			$(".page31bg2").addClass('flipped');

			// $("#canvas").remove();
			// $(".page31bg2").prepend('<canvas height="1138" width="640" id="canvas" class="canvas"></canvas>');
			// $("#canvas").hide();

			

			setTimeout(function(){
				$(".page31BtnClose").css("top","20px");
				// $("#canvas").show();
				// init();

				$(".bravo").show();
				$(".page31bg2 > h2").show();
				$(".page31bg2 > p").show();
				$(".page31bg2 > a").show();
				// $(".page31bg2 > span").show();
				TweenMax.from($(".bravo"),1 ,{
				    alpha: 0,
				    top: 210,
				    left:50,
				    ease: Back.easeOut.config(1.7)
				});
				TweenMax.from($(".page31bg2 > h2"),0.5 ,{
					delay:0.5,
				    alpha: 0,
				    top: 440
				});
				TweenMax.from($(".page31bg2 > p"),0.5 ,{
					delay:1,
				    alpha: 0,
				    top: 550
				});
				TweenMax.from($(".page31bg2 > a"),0.5 ,{
					delay:1.5,
				    alpha: 0,
				    top: 720
				});
				TweenMax.from($(".page31bg2 > span"),0.5 ,{
					delay:1.5,
				    alpha: 0,
				    top: 750
				});

			}, 800)

			$(".page31BtnClose").on('click', function() {
				$(".page31box").stop(false).animate({"opacity":0},300,function(){
					$(".page31bg2").removeClass("flipped");
					$(".bravo").hide();
					$(".page31bg2 > h2").hide();
					$(".page31bg2 > p").hide();
					$(".page31bg2 > a").hide();
					// $(".page31bg2 > span").hide();
					$(".page31bg").hide();
					$(".page31BtnClose").css("top","-100px");
					$(".page31box").hide();
					$(".page31box").css("opacity",1);

					// $("#canvas").remove();
					// init = undefined;
					// $(".network").prepend('<canvas height="1138" width="640" id="canvas" class="canvas"></canvas>');
					// init();
					startFicker();
					timee();
				});
			});
		});
	}

	var indexChange = 1;
	var otherFn = function(){
		
		var mySwiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    slidesPerView: 1,
		    direction: 'vertical',
		    paginationClickable: true,
	        preloadImages: false,
	        lazyLoading: true,
	        runCallbacksOnInit: false,
	        onTransitionEnd: function(swiper){
	        	indexChange = swiper.activeIndex;
	        	console.log("onTransitionEnd:",swiper.activeIndex);
	        	// thisPicNumFn(indexChange);
	        	if(indexChange == 29){
        			setTimePage31 = setTimeout(function(){
        				
        				$(".page31box").fadeIn(500,function(){
        					mySwiper.slideTo(0, 300, true);
        					page31Fn();

        					//-----------------
        					$(".openBox").stop(false).animate({"opacity":0},300,function(){
        						$(".openBox").css("z-index",-1);
        						$(".toIndexBtn").show();
        					});
        				});
        				clearTimeout(setTimePage31);
        			}, 3000);
        		}else if(indexChange != 29){
        			clearTimeout(setTimePage31);
        			// $(".page31box").hide();
        			console.log('clearTimeout!!!');
	        	}
		    },
		    onTransitionStart: function(swiper){
	        	clearTimeout(setTimePage31);
	        	console.log('clearTimeout!!!--start');
	        }
		});
		
		// $(".openBox").hide();
		$(".openBox").css({"opacity":0, "z-index":-1});

		

		$(".numberBox ul").on('click', 'li', function() {
			$("#canvas").hide();
			clearInterval(attentionStart);
			$(".attention1").hide();
			$(".attention2").hide();
			var index = $(this).data("value")-1;
			var indexNum = Number(index);
			console.log("clickNum:",indexNum);
			// thisPicNumFn(indexNum);
			$(".toIndexBtn").hide();
			mySwiper.slideTo(indexNum, 100, true);
			// $(".openBox").fadeIn(400);
			$(".openBox").css("z-index",10).stop(false).animate({"opacity":1},400);
			setTimeout(function(){
				$(".btnClose").css("top","20px");
			},500);
			// init = undefined;
			// $("#canvas").remove();
			// $(".openBox").prepend('<canvas height="1138" width="640" id="canvas" class="canvas"></canvas>');
			// init();
		});
		$(".btnClose").on('click', function() {
			// $(".openBox").fadeOut(300);
			/*$(".openBox").stop(false).animate({"opacity":0},300,function(){
				$(".openBox").css("z-index",-1);
				$(".toIndexBtn").show();
				mySwiper.slideTo(0, 300, true);
			});*/
			clearTimeout(setTimePage31);

			$(".page31box").fadeIn(500,function(){
				mySwiper.slideTo(0, 300, true);

				page31Fn();
				$(".openBox").stop(false).animate({"opacity":0},300,function(){
					$(".openBox").css("z-index",-1);
					$(".btnClose").css("top","-100px");
					$(".toIndexBtn").show();
					// mySwiper.slideTo(0, 300, true);
				});
			});
		});
		$(".goFirstBtn").on('click', function() {
			mySwiper.slideTo(0, 300, true);
		});
		

	}

	$.getJSON("picAll.json", function(data) {
		json = data;
	    var picLengthAll_JSON = data.length;
	    console.log('picLengthAll_JSON:',picLengthAll_JSON);
	    var html = "";
		for(var i = 0; i < picLengthAll_JSON; i++){
			html += '<div class="swiper-slide"><img data-src=' + data[i][2] + ' class="swiper-lazy"></div>';
		}
		$(".swiper-wrapper").html(html);
		var picLengthAll = data.length;
		console.log('picLengthAll:',picLengthAll);
		otherFn();
	});

	function timee(){
		attentionStart = setInterval(function(){
			$(".attention1").fadeIn(2500,function(){
				$(".attention1").fadeOut(2500,function(){
					$(".attention2").fadeIn(2500,function(){
						$(".attention2").fadeOut(2500);
					});
				});
			});
		},10000);
	};

	function startFicker(){
		$(".attention1").fadeIn(2500,function(){
			$(".attention1").fadeOut(2500,function(){
				$(".attention2").fadeIn(2500,function(){
					$(".attention2").fadeOut(2500);
				});
			});
		});
	}
	setTimeout(function(){
		startFicker();
		timee();
	},2500);
	

	$(".movingVerticalDelay1, .movingVerticalDelay2, .movingVerticalDelay3, .movingVerticalDelay4, .movingVerticalDelay5").not('.on').each(function(i){
		var j_this = $(this);

		j_this.addClass("on");

	});
	$(".logo").on('click', function() {
		window.location.href = "indexDynamic.html";
	});

	$(".toIndexBtn").on('click', function() {
		window.location.href = "http://labellavita.com.tw/";
	});


});

$(window).scroll(function(){
	var windowHeight = $(window).height();
	var scrollTop = $(window).scrollTop();
	var scrollPosition = windowHeight + scrollTop;
	// console.log("scrollTop: ",scrollTop , "windowHeight: ",windowHeight);

	clearTimeout(autoPosition);
	var autoPosition = setTimeout(function(){
		$(".goFirstBtn").css("top",(windowHeight-116)+scrollTop);
		$(".logo").css("top",scrollTop);
		$(".btnClose").css("top",(scrollTop)+20);
		$(".page31BtnClose").css("top",(scrollTop)+20);
	}, 400);

	
}).scroll();