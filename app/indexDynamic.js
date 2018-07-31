(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1138,
	fps: 55,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.bg2 = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_an1 = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_an2 = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_an4 = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_an5 = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_p3 = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_p3_flicker = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bgi = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo_text = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo_text2 = function() {
	this.spriteSheet = ss["indexDynamic_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.star = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape.setTransform(2.3,2.3);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_1.setTransform(2.3,2.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,7.8,7.8);


(lib.p3_text2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(120.7,22.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,3.8,248.6,36.7);


(lib.p3_text1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlZB7QA1gNAcgOIgoAAIAAiJIDKAAIAACJIiRAAIAQAPQgrAZg6ANgAkTBJICRAAIAAgSIiRAAgAkTAiICRAAIAAgQIiRAAgAkTgBICRAAIAAgQIiRAAgAijB/IALgaQA4AHAjAOIgLAbQgfgNg8gJgAqBB7QA2gXALgsQgyAPgdAGIgJgcQA8gMAigOIAAgbIhSAAIAAgbIBSAAIAAgrIhXAAIAAgdIBXAAIAAgqIAdAAIAACaQAABohTAkgAMaB1IArAAQAGAAAHgFQAHgGADhDQADhCAAgmIhAAAQgPAogTAaIgWgSQAjg6AOhIIAcAGQgDARgIAeIBTAAQgBAwgDBLQgDBNgFAOQgGAOgMAGQgMAHgtAAgAJvCTIAAjyIAdAAQAMgYAHgcIAdAFQgCAQgNAfIA0AAIAADvIgcAAIAAgWIg5AAIAAAZgAKMBdIA5AAIAAhHIg5AAgAKMgEIA5AAIAAg/Ig5AAgAG/BzIAoABIAWAAQACgBACgCQACgDAAgDIAAjZIjbAAIAAgeIEWAAIAAAeIgdAAIAADhQAAAOgIAIQgHAIgKABQgKABg1AAgAXWCSIAAgUIjEAAIAAAUIgdAAIAAjxIBwAAIAAgxIAdAAIAAAxIBxAAIAADxgAWCBhIBUAAIAAhHIhUAAgAUSBhIBTAAIAAhHIhTAAgAWCgBIBUAAIAAhCIhUAAgAUSgBIBTAAIAAhCIhTAAgABjCSIAAimQgzA1g5AjIgQgZQBqg/AphYIiOAAIAAgdIEOAAIAAAdIhfAAQgKAVgQAbIAAAQQBbA1AlAkIgRAYQgygsg9gjIAACcgArjCSIAAgQIiIAAIAAAQIgcAAIAAkbIDAAAIAAEbgAtrBmICIAAIAAjTIiIAAgAu8CSIAAiXIgNASIgQgaQAig1AQhSIAcAHQgEAUgIAdIgJAcIAADSgAn4CRIAAkiIAdAAIAAArIBWAAIAAAcIhWAAIAAAsIBQAAIAAAdIhQAAIAAArIBcAAIAAAdIhcAAIAABKgAQHCLIAAgbIBPAAIAAgiIhDAAIAAgaIBDAAIAAgdIhBAAIAAifICeAAIAACfIhBAAIAAAdIBFAAIAAAaIhFAAIAAAiIBNAAIAAAbgARygBIAlAAIAAgtIglAAgAQxgBIAlAAIAAgtIglAAgARyhGIAlAAIAAgoIglAAgAQxhGIAlAAIAAgoIglAAgAzYBlQgVghAAg9QAAhBAWgiQAWgjApAAQBPAAAACAQAABAgVAiQgWAjgpAAQgnAAgUghgAzHAFQAABiAtAAQAsAAAAhjQAAhkgsAAQgtAAAABlgA3yB4IAAglQAZAUAgAAQAXAAAOgMQAOgMAAgUQAAgtg+AAIgVAAIAAgdIATAAQA4AAAAgqQAAgngrAAQgZAAgWASIAAgjQAYgOAgAAQAfAAAUARQAUAQAAAdQAAAxgwAPIAAAAQAZABAQARQAPAQAAAYQAAAkgYAUQgZAVgnAAQgjAAgWgOgAOmBeIAmgSIAAhSIgfAAIAAgbIAfAAIAAhDIgkAAIAAgbIBgAAIAAAbIghAAIAABDIAcAAIAAAbIgcAAIAABDQARgHAQgLIABAgQglAXg0AZgAtWBRIAAhdIAhAAIAAgdIgtAAIAAgbIAtAAIAAghIAbAAIAAAhIAtAAIAAAbIgtAAIAAAdIAiAAIAABdgAs8A3IAqAAIAAgrIgqAAgAFGBKIAAiNICNAAIAACNgAFjAtIBTAAIAAhSIhTAAgAMIAAIAZgQQAgAoAMAeIgZARQgUgrgYgcgAlGg7IAAhQID2AAIAABQgAiZhTIAsAAIAAgfIgsAAgAjihTIAtAAIAAgfIgtAAgAkphTIAsAAIAAgfIgsAAg");
	this.shape.setTransform(167.6,17.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.3,2.4,304.7,30);


(lib.logo_text_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.logo_text();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192,32);


(lib.go_pic = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsBxQgngqAAhEQAAhFAogtQAogsBEAAQBAAAAnArQAmArAABDQAABGgnAsQgoAshDAAQhAAAgogrgABQhRQgaAhAAAwQAAAyAZAgQAaAhAsAAQAtAAAagfQAZgfAAg0QAAg0gYgfQgZgfgtAAQgsAAgbAggAj9BzQgogqAAhFQAAhFAtgtQAtgtBHAAQAwAAAjAPIAAAwQgkgWgyAAQgwAAgfAgQgeAhAAAyQAAA2AcAeQAcAeAwAAQAfAAAWgMIAAhLIhAAAIAAgmIBvAAIAACMQgtAag7AAQhEAAgpgpg");
	this.shape.setTransform(29.5,15.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,31.3);


(lib.bg_p3_logo = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.logo_text2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,126,219);


(lib.bg_p3_flicker_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.bg_p3_flicker();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1138);


(lib.bg_p3_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.bg_p3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1138);


(lib.bg_p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg_an4();

	this.instance_1 = new lib.bg_an5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,680,1138);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bgi();

	this.instance_1 = new lib.bg2();

	this.instance_2 = new lib.bg_an1();

	this.instance_3 = new lib.bg_an2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1138);


(lib.arrow_pic = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCgoICFAAIhDBRg");
	this.shape.setTransform(6.7,4.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,8.3);


(lib.star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// 圖層 1
	this.instance = new lib.star();
	this.instance.setTransform(4,4,1,1,0,0,0,2.3,2.3);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19,cjs.Ease.get(0.6)).wait(11).to({alpha:0},19,cjs.Ease.get(-0.6)).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,23,23);


(lib.p3_text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.go_pic("synched",0);
	this.instance.setTransform(33.3,45.7,1,1,0,0,0,29.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:0.84},20,cjs.Ease.get(0.8)).wait(4).to({startPosition:0},0).to({regX:29.6,regY:29.9,scaleX:0.95,scaleY:1.47,x:33.5,y:37.8},10,cjs.Ease.get(-0.8)).to({y:36.5},5).wait(4).to({startPosition:0},0).to({regX:29.4,regY:31.4,scaleX:1,scaleY:1,x:33.3,y:45.7},11,cjs.Ease.get(-0.6)).wait(26));

	// 圖層 1
	this.instance_1 = new lib.arrow_pic("synched",0);
	this.instance_1.setTransform(32.4,56.1,1,1,0,0,0,6.7,4.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:59.1,alpha:1},29).to({y:61.3},21).to({y:64.3,alpha:0},29).wait(1));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0)").s().p("ApWPoIAA/PISuAAIAAfPg");
	this.shape.setTransform(29,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-68,120,200);


(lib.bg_p3_flicker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg_p3_flicker_1();
	this.instance.setTransform(320,569,1,1,0,0,0,320,569);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).wait(10).to({alpha:0},25).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1138);


(lib.star_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_mc
	this.instance = new lib.star_mc();
	this.instance.setTransform(519.5,1015.5,1,1,0,0,0,3.9,3.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).wait(132));

	// star_mc
	this.instance_1 = new lib.star_mc();
	this.instance_1.setTransform(278.4,883.4,1,1,0,0,0,3.9,3.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).wait(86));

	// star_mc
	this.instance_2 = new lib.star_mc();
	this.instance_2.setTransform(586.5,585.3,1,1,0,0,0,3.9,3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).wait(103));

	// star_mc
	this.instance_3 = new lib.star_mc();
	this.instance_3.setTransform(239.5,420.3,1,1,0,0,0,3.9,3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).wait(113));

	// star_mc
	this.instance_4 = new lib.star_mc();
	this.instance_4.setTransform(448.5,424.3,0.6,0.6,0,0,0,3.9,3.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).wait(151));

	// star_mc
	this.instance_5 = new lib.star_mc();
	this.instance_5.setTransform(310.5,195.7,0.8,0.8,0,0,0,3.9,3.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).wait(127));

	// star_mc
	this.instance_6 = new lib.star_mc();
	this.instance_6.setTransform(380,1014.2,1,1,0,0,0,3.9,3.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(159));

	// star_mc
	this.instance_7 = new lib.star_mc();
	this.instance_7.setTransform(413.5,873.5,0.6,0.6,0,0,0,3.9,3.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).wait(138));

	// star_mc
	this.instance_8 = new lib.star_mc();
	this.instance_8.setTransform(146.4,767.4,1.1,1.1,0,0,0,3.9,3.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).wait(163));

	// star_mc
	this.instance_9 = new lib.star_mc();
	this.instance_9.setTransform(136.4,1059.5,1.2,1.2,0,0,0,3.9,3.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(52).to({_off:false},0).wait(133));

	// star_mc
	this.instance_10 = new lib.star_mc();
	this.instance_10.setTransform(29.5,228.3,0.7,0.7,0,0,0,4,3.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({_off:false},0).wait(174));

	// star_mc
	this.instance_11 = new lib.star_mc();
	this.instance_11.setTransform(376.6,152.3,0.7,0.7,0,0,0,4,4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).wait(156));

	// star_mc
	this.instance_12 = new lib.star_mc();
	this.instance_12.setTransform(204.5,53.7,1,1,0,0,0,3.9,3.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).wait(167));

	// star_mc
	this.instance_13 = new lib.star_mc();
	this.instance_13.setTransform(522,200,1,1,0,0,0,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(185));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(516.1,194.1,15,15);


// stage content:
(lib.indexDynamic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_350 = function() {
		this.stop();
		
		this.gotoBtn.addEventListener('click', gotoURL);
		function gotoURL(){
				window.location.href = "indexThirtyBuy.html";
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(350).call(this.frame_350).wait(1));

	// p3_text3
	this.gotoBtn = new lib.p3_text3();
	this.gotoBtn.setTransform(465.2,683.8,1,1,0,0,0,33.6,28.6);
	this.gotoBtn.alpha = 0;
	this.gotoBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gotoBtn).wait(326).to({_off:false},0).to({alpha:1},24).wait(1));

	// p3_text2
	this.instance = new lib.p3_text2();
	this.instance.setTransform(400.8,590.8,1,1,0,0,0,91.8,63.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(301).to({_off:false},0).to({x:384.8,alpha:1},24,cjs.Ease.get(0.6)).wait(26));

	// p3_text
	this.instance_1 = new lib.p3_text1();
	this.instance_1.setTransform(412.2,550.3,1,1,0,0,0,151.1,63.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(276).to({_off:false},0).to({x:397.6,alpha:1},24,cjs.Ease.get(0.6)).wait(51));

	// p3_logo
	this.instance_2 = new lib.bg_p3_logo();
	this.instance_2.setTransform(165.5,521.3,0.017,1,0,0,64.3,62.5,109.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245).to({_off:false},0).to({regX:63,regY:109.5,scaleX:1,skewY:0,y:521.2},30,cjs.Ease.get(0.7)).wait(76));

	// star
	this.instance_3 = new lib.star_scene();
	this.instance_3.setTransform(3.9,3.9,1,1,0,0,0,3.9,3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(245).to({_off:false},0).wait(106));

	// logo_text
	this.instance_4 = new lib.logo_text_1("synched",0);
	this.instance_4.setTransform(171.5,500.1,1,1,0,0,0,96,16);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146).to({_off:false},0).to({y:512.6,alpha:1},28,cjs.Ease.get(0.6)).wait(46).to({startPosition:0},0).to({alpha:0},20).to({_off:true},1).wait(110));

	// 圖層 17
	this.instance_5 = new lib.bg_p3_flicker_mc();
	this.instance_5.setTransform(320,569,1,1,0,0,0,320,569);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(206).to({_off:false},0).to({alpha:1},24).wait(121));

	// bg_pIII
	this.instance_6 = new lib.bg_p3_1("synched",0);
	this.instance_6.setTransform(320,569,1,1,0,0,0,320,569);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181).to({_off:false},0).to({alpha:1},34,cjs.Ease.get(-0.6)).wait(136));

	// bg_pII-2
	this.instance_7 = new lib.bg_p2("single",1);
	this.instance_7.setTransform(280,569,1,1,0,0,0,340,569);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({_off:false},0).to({x:294.1,alpha:1},24,cjs.Ease.get(-0.6)).to({x:300},10,cjs.Ease.get(0.6)).to({_off:true},36).wait(135));

	// bg_pII-1
	this.instance_8 = new lib.bg_p2("single",0);
	this.instance_8.setTransform(340,569,1,1,0,0,0,340,569);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(146).to({_off:false},0).to({x:325.9,alpha:1},24,cjs.Ease.get(-0.6)).to({x:320},10,cjs.Ease.get(0.6)).to({_off:true},36).wait(135));

	// bg_an2
	this.instance_9 = new lib.bg("single",11);
	this.instance_9.setTransform(338,569,1,1,0,0,0,320,569);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84).to({_off:false},0).to({x:320,alpha:1},29,cjs.Ease.get(-0.8)).to({x:302,alpha:0},28,cjs.Ease.get(0.8)).to({_off:true},1).wait(209));

	// bg_an1
	this.instance_10 = new lib.bg("single",10);
	this.instance_10.setTransform(300,569,1,1,0,0,0,320,569);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({x:320,alpha:1},29,cjs.Ease.get(-0.8)).to({x:336,alpha:0},28,cjs.Ease.get(0.8)).to({_off:true},1).wait(238));

	// bg2
	this.instance_11 = new lib.bg("single",1);
	this.instance_11.setTransform(320,569,1,1,0,0,0,320,569);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({alpha:1},30).to({_off:true},166).wait(135));

	// bg
	this.instance_12 = new lib.bg("single",0);
	this.instance_12.setTransform(320,569,1,1,0,0,0,320,569);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},51).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,569,640,1138);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;