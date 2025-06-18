(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WhiteCenter_Display_300x600_atlas_P_1", frames: [[0,0,1320,270]]},
		{name:"WhiteCenter_Display_300x600_atlas_NP_1", frames: [[602,0,600,400],[1204,0,600,360],[1204,362,600,360],[0,0,600,600],[602,402,600,360]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._300x600grad = function() {
	this.initialize(ss["WhiteCenter_Display_300x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600pic1 = function() {
	this.initialize(ss["WhiteCenter_Display_300x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300x600pic2 = function() {
	this.initialize(ss["WhiteCenter_Display_300x600_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._300x600pic3all = function() {
	this.initialize(ss["WhiteCenter_Display_300x600_atlas_NP_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._300x600poly = function() {
	this.initialize(ss["WhiteCenter_Display_300x600_atlas_NP_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["WhiteCenter_Display_300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SHAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600grad();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SHAD, new cjs.Rectangle(0,0,300,200), null);


(lib.PIC3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600pic3all();
	this.instance.setTransform(0,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC3, new cjs.Rectangle(0,-300,300,300), null);


(lib.PIC2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600pic2();
	this.instance.setTransform(0,-180,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(0,-180,300,180), null);


(lib.PIC1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600pic1();
	this.instance.setTransform(0,-180,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(0,-180,300,180), null);


(lib.HPlogowTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO_PNG
	this.instance = new lib.HealthPointLogo();
	this.instance.setTransform(-137.25,-28.05,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TAG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA7F1F").s().p("AgZAgQgKgMAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAPIAAAGIg5AAQAAAOAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgLgAAWgHQAAgJgEgHQgGgIgLAAQgJAAgHAIQgFAHgBAJIArAAIAAAAg");
	this.shape.setTransform(129.975,28.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgJAFgEQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_1.setTransform(123.525,28.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA7F1F").s().p("AgZAkQgHgHAAgJQAAgPANgIQANgHAXAAIAAgCQAAgTgSAAQgMAAgJAGIgEgKQALgHAPAAQAfAAAAAiIAAAdQAAAMACAIIgOAAIgBgLIAAAAQgJANgQAAQgLAAgHgHgAgRASQAAAGAEAEQAEAEAGAAQAHAAAFgEQAFgEACgGIABgFIAAgNIgCAAQggAAAAASg");
	this.shape_2.setTransform(116.175,28.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA7F1F").s().p("AgaAsQgQgQAAgbQAAgaAQgQQARgRAZAAQASAAAJAFIgDAMQgJgFgOAAQgUAAgLANQgNAMAAAWQAAAVAMAMQAMANATAAQAOAAAKgFIADAMQgKAFgTAAQgZAAgPgPg");
	this.shape_3.setTransform(107.55,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA7F1F").s().p("AgFAwQgFgGAAgQIAAgsIgOAAIAAgLIAOAAIAAgUIANgEIAAAYIAWAAIAAALIgWAAIAAAsQAAAQALAAIAJgBIABALQgGACgIAAQgKAAgFgGg");
	this.shape_4.setTransform(96.45,27.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA7F1F").s().p("AgZAkQgHgHAAgJQAAgPANgIQANgHAXAAIAAgCQAAgTgSAAQgMAAgJAGIgEgKQALgHAPAAQAfAAAAAiIAAAdQAAAMACAIIgOAAIgBgLIAAAAQgJANgQAAQgLAAgHgHgAgRASQAAAGAEAEQAEAEAGAAQAHAAAFgEQAFgEACgGIABgFIAAgNIgCAAQggAAAAASg");
	this.shape_5.setTransform(89.575,28.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA7F1F").s().p("AgZAgQgKgMAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAPIAAAGIg5AAQAAAOAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgLgAAWgHQAAgJgEgHQgGgIgLAAQgJAAgHAIQgFAHgBAJIArAAIAAAAg");
	this.shape_6.setTransform(81.625,28.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgJAFgEQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_7.setTransform(75.175,28.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA7F1F").s().p("AgeArQgQgPAAgbQAAgZARgQQARgRAbgBQASABALAFIgEAMQgLgFgOAAQgVAAgLANQgOAMAAAUQAAAWANAMQALANAUAAQAOAAAFgEIAAgiIgWAAIAAgLIAlAAIAAA2QgSAHgRgBQgaAAgQgPg");
	this.shape_8.setTransform(66.45,27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA7F1F").s().p("AgaAlIAEgLQAJAGALAAQAGAAAEgEQAEgDAAgFQAAgGgDgDQgEgDgGgDQgXgHAAgQQAAgKAIgHQAIgHAMAAQAMAAAIAFIgEALQgHgFgKAAQgFAAgEAEQgDADAAAFQAAAEADAEIAMAGQAVAHAAAQQAAALgIAHQgJAHgNAAQgOAAgJgGg");
	this.shape_9.setTransform(54.5,28.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA7F1F").s().p("AgZAgQgKgMAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAPIAAAGIg5AAQAAAOAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgLgAAWgHQAAgJgEgHQgGgIgLAAQgJAAgHAIQgFAHgBAJIArAAIAAAAg");
	this.shape_10.setTransform(47.075,28.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA7F1F").s().p("AgGApIgghRIAQAAIARAtIAFAVIABAAIAHgVIAPgtIAQAAIghBRg");
	this.shape_11.setTransform(38.9,28.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgJAFgEQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_12.setTransform(32.625,28.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA7F1F").s().p("AgZAgQgKgMAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAPIAAAGIg5AAQAAAOAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgLgAAWgHQAAgJgEgHQgGgIgLAAQgJAAgHAIQgFAHgBAJIArAAIAAAAg");
	this.shape_13.setTransform(25.325,28.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA7F1F").s().p("AgaAlIAEgLQAJAGAKAAQAHAAAFgEQADgDAAgFQABgGgEgDQgEgDgGgDQgXgHAAgQQABgKAHgHQAIgHAMAAQALAAAJAFIgEALQgHgFgKAAQgFAAgEAEQgDADAAAFQAAAEADAEIALAGQAWAHAAAQQAAALgIAHQgIAHgOAAQgNAAgKgGg");
	this.shape_14.setTransform(17.85,28.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA7F1F").s().p("AgZAgQgKgMAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAPIAAAGIg5AAQAAAOAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgLgAAWgHQAAgJgEgHQgGgIgLAAQgJAAgHAIQgFAHgBAJIArAAIAAAAg");
	this.shape_15.setTransform(10.425,28.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA7F1F").s().p("AguA5IAAhwQAQgCAQAAQAdAAAQAOQAQAPAAAaQAAAcgRAQQgQAQghAAQgPAAgMgBgAgggsIAABaIAQAAQAWAAANgMQAMgNAAgWQAAgVgLgLQgMgMgWAAQgKAAgIABg");
	this.shape_16.setTransform(1,27.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA7F1F").s().p("AgZAgQgKgMAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAPIAAAGIg5AAQAAAOAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgLgAAWgHQAAgJgEgHQgGgIgLAAQgJAAgHAIQgFAHgBAJIArAAIAAAAg");
	this.shape_17.setTransform(-12.525,28.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA7F1F").s().p("AAVAqIAAgvQAAgYgUAAQgGAAgGAFQgEAEgDAGIgBAIIAAAwIgPAAIAAg7IgBgXIAOAAIABAPQAEgHAGgEQAIgFAIAAQAMAAAHAHQAKAJAAATIAAAwg");
	this.shape_18.setTransform(-21.35,28.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA7F1F").s().p("AgcAfQgLgMAAgSQAAgUAMgMQALgLAQAAQASAAALALQALANAAASQAAAVgNALQgLALgQAAQgRAAgLgMgAgSgVQgGAJAAAMQAAAOAHAIQAHAJAKAAQALAAAHgJQAHgIAAgOQAAgLgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_19.setTransform(-30.525,28.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA7F1F").s().p("AghAwQAHgDAGgFQAIgGAFgLIABgDIgBgEIgfhLIARAAIASAxIAEAPIAAAAIAFgQIARgwIAQAAIgXA7QgIAVgGALQgGAMgHAGQgJAIgJACg");
	this.shape_20.setTransform(-39.025,30.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgJAFgEQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_21.setTransform(-45.225,28.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA7F1F").s().p("AgZAgQgKgMAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAPIAAAGIg5AAQAAAOAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgLgAAWgHQAAgJgEgHQgGgIgLAAQgJAAgHAIQgFAHgBAJIArAAIAAAAg");
	this.shape_22.setTransform(-52.525,28.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA7F1F").s().p("AgHApIgfhRIAQAAIAQAtIAGAVIAAAAIAIgVIAQgtIAPAAIggBRg");
	this.shape_23.setTransform(-60.7,28.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA7F1F").s().p("AgfA5IAAhxIA9AAIAAAMIgvAAIAAAkIAsAAIAAAMIgsAAIAAApIAxAAIAAAMg");
	this.shape_24.setTransform(-68.475,27.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HPlogowTag, new cjs.Rectangle(-137.2,-28,283.29999999999995,67), null);


(lib.HEAD3a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("ABBDnIhciMIg5AAIAACMIh/AAIAAnNIDZAAQBlAAAyAxQAoAqAABCIAAABQAABmheAoIBtChgAhUgIIBVAAQAfAAATgPQASgOAAgaIAAgBQAAg4hFAAIhUAAg");
	this.shape.setTransform(117.45,90.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("Ai6DnIAAnNIFyAAIAABsIj0AAIAABGIDdAAIAABlIjdAAIAABJID3AAIAABtg");
	this.shape_1.setTransform(70.875,90.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AhADnIAAldIiJAAIAAhwIGTAAIAABwIiLAAIAAFdg");
	this.shape_2.setTransform(26.325,90.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("ABrDnIjGj8IAAD8Ih+AAIAAnNIB3AAIC9DzIAAjzIB/AAIAAHNg");
	this.shape_3.setTransform(-21.375,90.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ai6DnIAAnNIFyAAIAABsIj0AAIAABGIDdAAIAABlIjdAAIAABJID3AAIAABtg");
	this.shape_4.setTransform(-68.525,90.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AiWCsQhGhFAAhmIAAgBQAAhlBEhFQBHhFBnAAQB+AABGBfIhgBLQgtg2g5AAQguAAggAkQgfAjAAAzIAAABQAAA0AfAjQAfAkAvAAQA6AAAug4IBhBFQhMBoiAAAQhjAAhEhEg");
	this.shape_5.setTransform(-114.85,90.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ai6DnIAAnNIFyAAIAABsIj0AAIAABHIDdAAIAABkIjdAAIAABJID3AAIAABtg");
	this.shape_6.setTransform(95.325,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AhADnIAAlcIiJAAIAAhxIGTAAIAABxIiLAAIAAFcg");
	this.shape_7.setTransform(50.775,31.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("Ag/DnIAAnNIB/AAIAAHNg");
	this.shape_8.setTransform(18.225,31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("ABSDnIAAivIijAAIAACvIiAAAIAAnNICAAAIAACtICjAAIAAitICAAAIAAHNg");
	this.shape_9.setTransform(-17.675,31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("ABdDpIhdkIIhcEIIhvAAIibnQICIAAIBQELIBZkMIBtAAIBZEMIBRkLICFAAIibHQg");
	this.shape_10.setTransform(-79.625,31.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3a, new cjs.Rectangle(-160.5,0,321.1,129), null);


(lib.HEAD2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("AgjAjIAAhFIBGAAIAABFg");
	this.shape.setTransform(86.65,-34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AhABjIAAjCIBDAAIAAAoQATgtArACIAABIIgGAAQg3AAgBBAIAAA9g");
	this.shape_1.setTransform(74.45,-41.1043);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AhEBKQgdgcAAgtIAAgBQAAgqAcgdQAcgeApAAQAwAAAaAgQAYAdAAAtIAAAOIiBAAQAIAgAhAAQAXAAAUgUIAmAfQggAog1AAQgtAAgdgcgAAjgPQgCgQgKgKQgJgJgOAAQgbAAgGAjIBEAAIAAAAg");
	this.shape_2.setTransform(55.175,-40.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AghCDIAAjBIBDAAIAADBgAgihQIAAgzIBGAAIAAAzg");
	this.shape_3.setTransform(38.9,-44.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAcCDIAAhpQAAgggcAAQgMAAgHAIQgIAIAAAQIAABpIhFAAIAAkGIBFAAIAABgQAYggAhAAQAfABASASQARAUABAgIAAB/g");
	this.shape_4.setTransform(22.2,-44.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AgsA7IAAhOIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAAUATAAQAMgBAOgGIAAA1QgVAMgbAAQhAAAAAhBg");
	this.shape_5.setTransform(2.775,-43.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AghCDIAAkGIBDAAIAAEGg");
	this.shape_6.setTransform(-10.2,-44.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AhLBVQgTgQAAgcIAAgBQAAgeAVgPQAUgQAjAAQAaABAUAHIAAgDQAAgggmAAQgYAAgeALIgOgwQAlgPApAAQAzAAAXAXQAVAVAAAqIAABuIhDAAIAAgUQgXAZgiAAQgdAAgRgQgAgdAkIAAABQAAAJAIAGQAGAGALAAQAOAAAJgJQAKgJAAgOIAAgJQgNgFgOAAQgeAAgBAYg");
	this.shape_7.setTransform(-26.75,-40.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhEBKQgdgcAAgtIAAgBQAAgqAcgdQAcgeApAAQAwAAAaAgQAYAdAAAtIAAAOIiBAAQAIAgAhAAQAXAAAUgUIAmAfQggAog1AAQgtAAgdgcgAAjgPQgCgQgKgKQgJgJgOAAQgbAAgGAjIBEAAIAAAAg");
	this.shape_8.setTransform(-48.075,-40.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AAcCDIAAhpQAAgggcAAQgLAAgIAIQgIAIAAAQIAABpIhFAAIAAkGIBFAAIAABgQAYggAhAAQAfABASASQASAUAAAgIAAB/g");
	this.shape_9.setTransform(-70.25,-44.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgsA8IAAhPIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAATATABQAMAAAOgHIAAA2QgVALgbAAQhAAAAAhAg");
	this.shape_10.setTransform(47.375,-81.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AhEBKQgdgcAAgtIAAgBQAAgqAcgdQAcgeApAAQAwAAAaAgQAYAdAAAtIAAAOIiBAAQAIAgAhAAQAXAAAUgUIAmAfQggAog1AAQgtAAgdgcgAAjgPQgCgQgKgKQgJgJgOAAQgbAAgGAjIBEAAIAAAAg");
	this.shape_11.setTransform(28.875,-78.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AhkBqIAWgtQAhASAjAAQAyAAgBgwIAAgHQgZAdghAAQglAAgYgYQgagaAAgnIAAgBQAAgpAagZQAYgZAiAAQAjAAAaAcIAAgYIBEAAIAACTQAAA2gZAYQgbAcg6AAQg1AAgsgXgAgchAQgLALAAAQIAAABQAAAQALALQAMAJAQAAQARAAAMgJQALgLAAgQIAAgBQAAgQgLgLQgMgLgRAAQgQAAgMALg");
	this.shape_12.setTransform(5.5,-76.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AhMBIQgegdAAgqIAAgBQAAgpAegeQAfgeAuAAQAtAAAfAeQAfAdAAAqIAAAAQAAAqgfAeQgfAeguAAQgtAAgfgegAgdgeQgLAMAAASIAAAAQAAASAMANQAMANARAAQARAAAMgNQALgMAAgSIAAgBQAAgRgMgNQgLgNgSAAQgRAAgMANg");
	this.shape_13.setTransform(-28.05,-78.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("AgsA8IAAhPIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAATATABQAMAAAOgHIAAA2QgVALgbAAQhAAAAAhAg");
	this.shape_14.setTransform(-47.775,-81.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AgsA8IAAhPIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAATATAAQAMABAOgHIAAA2QgVALgbAAQhAAAAAhAg");
	this.shape_15.setTransform(65.575,-119.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E87D1D").s().p("AhOBQQgSgTAAghIAAh/IBFAAIAABpQAAAhAbAAQANAAAHgJQAJgJAAgPIAAhpIBDAAIAADCIhDAAIAAgbQgZAgghAAQgfAAgSgUg");
	this.shape_16.setTransform(46.55,-116.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E87D1D").s().p("AhMBIQgegdAAgqIAAgBQAAgpAfgeQAegeAuAAQAuAAAeAeQAeAdAAAqIAAAAQAAAqgeAeQgfAeguAAQgtAAgfgegAgdgeQgLAMAAASIAAAAQAAASAMANQALANASAAQARAAANgNQALgMgBgSIAAgBQABgRgMgNQgNgNgRAAQgRAAgMANg");
	this.shape_17.setTransform(23.4,-116.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E87D1D").s().p("AglBqIAAAXIhFAAIAAkGIBFAAIAABfQAYgfAhAAQAlAAAYAbQAaAdAAAsIAAABQAAAugaAcQgYAcgkAAQgjAAgXgcgAgbAAQgMAMAAATIAAABQAAATAMANQALAMAQAAQARAAALgMQAMgNAAgTIAAgBQAAgTgMgMQgLgMgRAAQgQAAgLAMg");
	this.shape_18.setTransform(-0.175,-120.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E87D1D").s().p("AhMBWQgSgRAAgcIAAgBQAAgeAVgPQAUgPAjAAQAbgBATAJIAAgEQAAgggmAAQgZAAgdALIgOgwQAlgPApAAQAyAAAYAYQAVAUAAApIAABwIhDAAIAAgVQgXAZgiAAQgdAAgSgPgAgdAkIAAAAQAAALAHAFQAHAGALAAQAOAAAJgJQAKgJAAgOIAAgJQgNgFgOAAQgeAAgBAYg");
	this.shape_19.setTransform(-23.85,-116.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E87D1D").s().p("AhVBIIAagpQAiAWAfABQASAAAAgLIAAgBQAAgFgIgEIgXgIQgigIgPgMQgUgOAAgaIAAgCQAAgeAWgRQAWgRAhAAQAtABAkAWIgYArQgggSgZAAQgPAAAAAKIAAAAQAAAFAIAFIAWAIQAjAJAOALQAVAPAAAaIAAAAQAAAfgWASQgVARglAAQgzgBgogdg");
	this.shape_20.setTransform(-53.725,-116.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E87D1D").s().p("AghCEIAAjDIBDAAIAADDgAgihQIAAgyIBGAAIAAAyg");
	this.shape_21.setTransform(-68.1,-120.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b, new cjs.Rectangle(-132,-138,264,116), null);


(lib.HEAD2a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("Ag+DnIAAitIixkgICSAAIBeCoIBgioICPAAIiwEeIAACvg");
	this.shape.setTransform(100.85,90.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AivDnIAAnNICAAAIAAFdIDfAAIAABwg");
	this.shape_1.setTransform(67,90.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag/DnIAAnNIB/AAIAAHNg");
	this.shape_2.setTransform(34.575,90.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AB2DnIAAkIIh2C0IgCAAIh1izIAAEHIh+AAIAAnNICIAAIBtCyIBuiyICIAAIAAHNg");
	this.shape_3.setTransform(-4.85,90.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AB5DpIghhTIiyAAIghBTIiGAAIDEnRIB6AAIDFHRgAAyAyIgyiCIg1CCIBnAAg");
	this.shape_4.setTransform(-59.675,90.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("Ai4DnIAAnNIFxAAIAABwIjxAAIAABPIDaAAIAABpIjaAAIAAClg");
	this.shape_5.setTransform(-102.175,90.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("ABBDnIhciMIg5AAIAACMIiAAAIAAnNIDaAAQBlAAAxAyQAqApAABCIAAACQAABkhgApIBuChgAhUgIIBVAAQAgAAASgPQASgPAAgZIAAgCQAAg3hFAAIhUAAg");
	this.shape_6.setTransform(75.35,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AidC4Qg5g2AAhqIAAkCICBAAIAAD/QAABjBVAAQBVAAAAhfIAAkDICCAAIAAD/QAABsg7A3Qg4AzhlAAQhlAAg3gzg");
	this.shape_7.setTransform(25.075,32.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AixCqQhHhEAAhlIAAgBQAAhkBHhFQBIhGBpAAQBqAABIBFQBHBFAABkIAAABQAABkhIBGQhIBGhpAAQhqAAhHhGgAhVhXQggAjAAAzIAAABQAAAzAhAkQAiAlAyAAQA0AAAhgkQAggkAAgzIAAgBQAAgzgggkQgiglgzAAQg0AAghAlg");
	this.shape_8.setTransform(-27.325,31.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag/DnIAAitIiwkgICSAAIBeCpIBgipICPAAIiwEeIAACvg");
	this.shape_9.setTransform(-73.65,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(-132,0,264,129), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("AgjAjIAAhFIBGAAIAABFg");
	this.shape.setTransform(86.65,-34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AhABjIAAjCIBDAAIAAAoQATgtArACIAABIIgGAAQg3AAgBBAIAAA9g");
	this.shape_1.setTransform(74.45,-41.1043);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AhEBKQgdgcAAgtIAAgBQAAgqAcgdQAcgeApAAQAwAAAaAgQAYAdAAAtIAAAOIiBAAQAIAgAhAAQAXAAAUgUIAmAfQggAog1AAQgtAAgdgcgAAjgPQgCgQgKgKQgJgJgOAAQgbAAgGAjIBEAAIAAAAg");
	this.shape_2.setTransform(55.175,-40.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AghCDIAAjBIBDAAIAADBgAgihQIAAgzIBGAAIAAAzg");
	this.shape_3.setTransform(38.9,-44.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAcCDIAAhpQAAgggcAAQgMAAgHAIQgIAIAAAQIAABpIhFAAIAAkGIBFAAIAABgQAYggAhAAQAfABASASQARAUABAgIAAB/g");
	this.shape_4.setTransform(22.2,-44.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AgsA7IAAhOIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAAUATAAQAMgBAOgGIAAA1QgVAMgbAAQhAAAAAhBg");
	this.shape_5.setTransform(2.775,-43.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AghCDIAAkGIBDAAIAAEGg");
	this.shape_6.setTransform(-10.2,-44.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AhLBVQgTgQAAgcIAAgBQAAgeAVgPQAUgQAjAAQAaABAUAHIAAgDQAAgggmAAQgYAAgeALIgOgwQAlgPApAAQAzAAAXAXQAVAVAAAqIAABuIhDAAIAAgUQgXAZgiAAQgdAAgRgQgAgdAkIAAABQAAAJAIAGQAGAGALAAQAOAAAJgJQAKgJAAgOIAAgJQgNgFgOAAQgeAAgBAYg");
	this.shape_7.setTransform(-26.75,-40.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhEBKQgdgcAAgtIAAgBQAAgqAcgdQAcgeApAAQAwAAAaAgQAYAdAAAtIAAAOIiBAAQAIAgAhAAQAXAAAUgUIAmAfQggAog1AAQgtAAgdgcgAAjgPQgCgQgKgKQgJgJgOAAQgbAAgGAjIBEAAIAAAAg");
	this.shape_8.setTransform(-48.075,-40.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AAcCDIAAhpQAAgggcAAQgLAAgIAIQgIAIAAAQIAABpIhFAAIAAkGIBFAAIAABgQAYggAhAAQAfABASASQASAUAAAgIAAB/g");
	this.shape_9.setTransform(-70.25,-44.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgsA8IAAhPIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAATATABQAMAAAOgHIAAA2QgVALgbAAQhAAAAAhAg");
	this.shape_10.setTransform(47.375,-81.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AhEBKQgdgcAAgtIAAgBQAAgqAcgdQAcgeApAAQAwAAAaAgQAYAdAAAtIAAAOIiBAAQAIAgAhAAQAXAAAUgUIAmAfQggAog1AAQgtAAgdgcgAAjgPQgCgQgKgKQgJgJgOAAQgbAAgGAjIBEAAIAAAAg");
	this.shape_11.setTransform(28.875,-78.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AhkBqIAWgtQAhASAjAAQAyAAgBgwIAAgHQgZAdghAAQglAAgYgYQgagaAAgnIAAgBQAAgpAagZQAYgZAiAAQAjAAAaAcIAAgYIBEAAIAACTQAAA2gZAYQgbAcg6AAQg1AAgsgXgAgchAQgLALAAAQIAAABQAAAQALALQAMAJAQAAQARAAAMgJQALgLAAgQIAAgBQAAgQgLgLQgMgLgRAAQgQAAgMALg");
	this.shape_12.setTransform(5.5,-76.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AhMBIQgegdAAgqIAAgBQAAgpAegeQAfgeAuAAQAtAAAfAeQAfAdAAAqIAAAAQAAAqgfAeQgfAeguAAQgtAAgfgegAgdgeQgLAMAAASIAAAAQAAASAMANQAMANARAAQARAAAMgNQALgMAAgSIAAgBQAAgRgMgNQgLgNgSAAQgRAAgMANg");
	this.shape_13.setTransform(-28.05,-78.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("AgsA8IAAhPIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAATATABQAMAAAOgHIAAA2QgVALgbAAQhAAAAAhAg");
	this.shape_14.setTransform(-47.775,-81.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AgsA8IAAhPIgXAAIAAg3IAXAAIAAgxIBDAAIAAAxIAtAAIAAA3IgtAAIAABBQAAATATAAQAMABAOgHIAAA2QgVALgbAAQhAAAAAhAg");
	this.shape_15.setTransform(80.275,-119.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E87D1D").s().p("AhOBQQgSgTAAghIAAh/IBFAAIAABpQAAAhAbAAQAMAAAIgJQAIgJAAgPIAAhpIBFAAIAADCIhFAAIAAgbQgYAgghAAQgfAAgSgUg");
	this.shape_16.setTransform(61.25,-116.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E87D1D").s().p("AhMBIQgegdAAgqIAAgBQAAgpAegeQAfgeAuAAQAtAAAfAeQAfAdAAAqIAAAAQAAAqgfAeQgfAeguAAQgtAAgfgegAgdgeQgLAMAAASIAAAAQAAASAMANQAMANARAAQARAAAMgNQALgMAAgSIAAgBQAAgRgMgNQgLgNgSAAQgRAAgMANg");
	this.shape_17.setTransform(38.1,-116.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E87D1D").s().p("AglBqIAAAXIhFAAIAAkGIBFAAIAABfQAYgfAhAAQAlAAAYAbQAaAdAAAsIAAABQAAAugaAcQgYAcgkAAQgjAAgXgcgAgbAAQgMAMAAATIAAABQAAATAMANQALAMAQAAQARAAALgMQAMgNAAgTIAAgBQAAgTgMgMQgLgMgRAAQgQAAgLAMg");
	this.shape_18.setTransform(14.525,-120.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E87D1D").s().p("AhMBWQgSgRAAgcIAAgBQAAgeAVgPQAUgPAkAAQAagBATAJIAAgEQAAgggmAAQgZAAgdALIgOgwQAlgPApAAQAzAAAXAYQAVAUAAApIAABwIhDAAIAAgVQgXAZgiAAQgcAAgTgPgAgcAkIAAAAQAAALAGAFQAHAGAKAAQAPAAAJgJQAKgJAAgOIAAgJQgNgFgOAAQgfAAABAYg");
	this.shape_19.setTransform(-9.15,-116.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E87D1D").s().p("AhEBKQgdgcAAgtIAAgBQAAgqAcgdQAcgeApAAQAwAAAaAgQAYAdAAAtIAAAOIiBAAQAIAgAhAAQAXAAAUgUIAmAfQggAog1AAQgtAAgdgcgAAjgPQgCgQgKgKQgJgJgOAAQgbAAgGAjIBEAAIAAAAg");
	this.shape_20.setTransform(-40.425,-116.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E87D1D").s().p("AhABjIAAjCIBEAAIAAAoQASgtArACIAABIIgGAAQg3AAAABAIAAA9g");
	this.shape_21.setTransform(-58.35,-117.1043);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E87D1D").s().p("AhMBWQgSgRAAgcIAAgBQAAgeAVgPQAUgPAjAAQAbgBATAJIAAgEQAAgggmAAQgZAAgdALIgOgwQAlgPApAAQAyAAAYAYQAVAUAAApIAABwIhDAAIAAgVQgXAZgiAAQgdAAgSgPgAgdAkIAAAAQAAALAHAFQAHAGALAAQAOAAAJgJQAKgJAAgOIAAgJQgNgFgOAAQgeAAgBAYg");
	this.shape_22.setTransform(-77.85,-116.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(-132,-138,264,116), null);


(lib.HEAD1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("AidC4Qg5g2AAhqIAAkCICBAAIAAD/QAABjBVAAQBVAAAAhfIAAkDICCAAIAAD/QAABsg7A3Qg4AzhlAAQhlAAg3gzg");
	this.shape.setTransform(48.825,32.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AixCqQhHhEAAhlIAAgBQAAhkBHhFQBIhGBpAAQBqAABIBFQBHBFAABkIAAABQAABkhIBGQhIBGhpAAQhqAAhHhGgAhVhXQggAjAAAzIAAABQAAAzAhAkQAiAlAyAAQA0AAAhgkQAggkAAgzIAAgBQAAgzgggkQgiglgzAAQg0AAghAlg");
	this.shape_1.setTransform(-3.575,31.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag/DnIAAitIiwkgICSAAIBeCpIBgipICPAAIiwEeIAACvg");
	this.shape_2.setTransform(-49.9,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(-132,0,264,70), null);


(lib.B7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(37.725,37.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(22.675,37.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAghIAAgBQAAghAYgWQAYgYAiAAQAkgBAYAYQAXAXAAAhIAAAAQAAAigXAXQgZAXgjABQgjgBgXgXgAgcgcQgKALAAARIAAAAQAAASALALQALANAQAAQASAAALgNQAKgMAAgQIAAgBQAAgQgKgMQgMgNgRAAQgQABgMAMg");
	this.shape_2.setTransform(5.075,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_3.setTransform(-13.725,37.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAcBAQgVAQgYAAQgYAAgPgMQgQgMAAgUIAAgBQAAgdAggNQgLgPAAgPIAAAAQAAgSANgMQAOgNAWABQATAAANALQANALAAARIAAAAQAAAbgfANIASARQAHgKAHgNIAdANQgLATgKANIAVAVIgdAVgAgdAhIAAABQAAAGAFAFQAFADAIAAQAIAAAJgGIgYgaQgLAHAAAKgAgLguQgEADAAAHQAAAIAIAKQAQgHAAgMIAAAAQAAgNgLAAQgGAAgDAEg");
	this.shape_4.setTransform(-37.025,37.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AhDA2IAZgcQAXASAZAAQATAAgBgKIAAgBQABgFgGgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAQgOQARgOAaAAQAmAAAaAVIgWAeQgWgPgUAAQgQAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAPALAAAVIAAAAQABAXgSAOQgQANgdAAQgqAAgegag");
	this.shape_5.setTransform(86.6,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_6.setTransform(70.075,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(51.75,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAdBNIgdgvIgeAvIgwAAIA1hNIgzhMIAyAAIAaArIAcgrIAwAAIgyBLIA1BOg");
	this.shape_8.setTransform(34.95,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_9.setTransform(19.675,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_10.setTransform(-0.35,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_11.setTransform(-16.35,12.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAcAAAAggIAAhWIAsAAIAABVQAAAkgUASQgTASghAAQghAAgTgSg");
	this.shape_12.setTransform(-33.5,12.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_13.setTransform(-50.475,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_14.setTransform(-67.775,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_15.setTransform(-85.2,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B7, new cjs.Rectangle(-169.6,0,339.29999999999995,52), null);


(lib.B6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAYgcQAXASAZAAQASAAAAgKIAAgBQAAgFgFgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAPgOQASgOAaAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAQALAAAVIAAAAQgBAXgRAOQgQANgdAAQgrAAgcgag");
	this.shape.setTransform(57.95,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_1.setTransform(44.65,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(28.65,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAXgYAjAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgYgWg");
	this.shape_3.setTransform(12,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_4.setTransform(0.175,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AhCA2IAYgcQAXASAZAAQASAAAAgKIAAgBQAAgFgFgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAPgOQASgOAaAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAQALAAAVIAAAAQgBAXgRAOQgQANgdAAQgrAAgcgag");
	this.shape_5.setTransform(-10.9,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_6.setTransform(-25.775,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_7.setTransform(-42.1,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAeAAARAOQARAOAAAaIAAAAQABAagUAPQgRAOgdAAIgVAAIAAAsgAgVAAIAUAAQALAAAGgFQAHgGAAgJIAAAAQAAgUgYAAIgUAAg");
	this.shape_8.setTransform(-57.45,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B6, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAYgcQAXASAZAAQASAAAAgKIAAgBQAAgFgFgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAPgOQASgOAaAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAQALAAAVIAAAAQgBAXgRAOQgQANgdAAQgrAAgcgag");
	this.shape.setTransform(87.2,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(71.625,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_2.setTransform(53.825,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_3.setTransform(41.025,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_4.setTransform(30.175,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(16.4,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AhDBNIAAgfIBMhWIhJAAIAAgkICEAAIAAAeIhMBXIBMAAIAAAkg");
	this.shape_6.setTransform(-0.075,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-11.425,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_8.setTransform(-23.625,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAcAAAAggIAAhWIAsAAIAABVQAAAkgUASQgTASghAAQgiAAgSgSg");
	this.shape_9.setTransform(-40.65,12.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-58.625,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-77.825,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_12.setTransform(-90.975,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B5, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("AgzA6QgYgWAAgkIAAAAQAAghAYgXQAYgYAiAAQAlABAaAWIgZAeQgRgOgUAAQgQAAgLAMQgMAMAAARIAAAAQAAAUAMAMQAMAMARgBQAPAAAKgFIAAgUIgeAAIAAgeIBHAAIAABFQgdAXgnAAQgjAAgYgWg");
	this.shape.setTransform(98.325,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(81.275,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_2.setTransform(68.975,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_3.setTransform(56.775,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_4.setTransform(39.475,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AApBOIgLgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(22.05,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(6.9,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAdAAASAOQARAOAAAaIAAAAQABAagUAPQgRAOgdAAIgWAAIAAAsgAgWAAIAVAAQALAAAGgFQAHgGgBgJIAAAAQAAgUgXAAIgVAAg");
	this.shape_7.setTransform(-7.25,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_8.setTransform(-29.225,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_9.setTransform(-41.7,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-52.575,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-65.775,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-84.1,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("Ag9BNIAAiZIB7AAIAAAlIhQAAIAAAaIBIAAIAAAjIhIAAIAAA3g");
	this.shape_13.setTransform(-99.2,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B4, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig1AAIAAA7IgsAAIAAiZIAsAAIAAA5IA1AAIAAg5IAsAAIAACZg");
	this.shape.setTransform(116.15,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_1.setTransform(100.525,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_2.setTransform(89.2,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_3.setTransform(73.2,12.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(57.275,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_5.setTransform(41.25,12.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(20.45,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(4.45,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_8.setTransform(-11.775,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_9.setTransform(-29.375,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-42.175,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgTBOIg+ibIAvAAIAjBhIAjhhIAuAAIg+Cbg");
	this.shape_11.setTransform(-54.15,12.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-68.35,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig1AAIAAA7IgsAAIAAiZIAsAAIAAA5IA1AAIAAg5IAsAAIAACZg");
	this.shape_13.setTransform(-85.55,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_14.setTransform(-101.075,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AhEBNIAAiZIBOAAQAcAAAOANQAKALAAAOIAAABQAAAYgXAKQAeAJAAAcIAAABQAAAUgPALQgQALgbAAgAgaArIAgAAQAUAAAAgOIAAgBQAAgOgVAAIgfAAgAgagPIAaAAQAUAAAAgNIAAgBQAAgNgTAAIgbAAg");
	this.shape_15.setTransform(-116.225,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B3, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(74.025,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(59.025,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(41.8,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAXgYAjAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgYgWg");
	this.shape_3.setTransform(25.5,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(4.85,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-11.15,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_6.setTransform(-25.275,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_7.setTransform(-41.175,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_8.setTransform(-57.025,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AhJBNIAAiZIA8AAQAoAAAYAVQAWAVABAiQAAAigYAVQgYAWgnAAgAgeAnIASAAQASAAAMgKQAMgKAAgTIAAAAQAAgSgMgKQgMgLgSAAIgSAAg");
	this.shape_9.setTransform(-72.45,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B2, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(80.325,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(65.325,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(48.1,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAYgYAhAAQAqAAAYAhIggAZQgPgTgTABQgPgBgLAMQgKANAAAQIAAAAQAAARAKANQALAMAPgBQATAAAQgSIAgAWQgZAjgrAAQghAAgWgWg");
	this.shape_3.setTransform(31.85,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(11.15,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-4.85,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAYgYAhAAQAqAAAYAhIggAZQgPgTgTABQgPgBgLAMQgKANAAAQIAAAAQAAARAKANQALAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgXgWg");
	this.shape_6.setTransform(-21.15,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-32.975,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhIBNIAAiZIA7AAQAoAAAYAVQAXAVAAAiQAAAigYAVQgXAWgpAAgAgeAnIASAAQASAAAMgKQAMgKAAgTIAAAAQAAgSgMgKQgMgLgSAAIgSAAg");
	this.shape_8.setTransform(-44.8,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_9.setTransform(-60.625,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-77.875,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B1, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


// stage content:
(lib.WhiteCenter_Display_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [301];
	// timeline functions:
	this.frame_301 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(301).call(this.frame_301).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

	// B1
	this.instance = new lib.B1();
	this.instance.setTransform(860.9,335.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(211).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:206.15},7).wait(84));

	// B2
	this.instance_1 = new lib.B2();
	this.instance_1.setTransform(860.9,335.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(233).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:234.1},7).wait(62));

	// B3
	this.instance_2 = new lib.B3();
	this.instance_2.setTransform(860.9,335.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(246).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:262.05},7).wait(49));

	// B4
	this.instance_3 = new lib.B4();
	this.instance_3.setTransform(860.9,335.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(255).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:290},7).wait(40));

	// B5
	this.instance_4 = new lib.B5();
	this.instance_4.setTransform(860.9,335.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:317.95},7).wait(31));

	// B6
	this.instance_5 = new lib.B6();
	this.instance_5.setTransform(860.9,335.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(273).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:345.9},7).wait(22));

	// B7
	this.instance_6 = new lib.B7();
	this.instance_6.setTransform(860.9,335.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(282).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:373.85},7).wait(13));

	// HEAD2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAC8").s().p("AhDBpIAAjNIBHAAIAAAqQATgvAtACIAABMIgGAAQg6AAAABEIAABAg");
	this.shape_1.setTransform(265.5,122.9459);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAC8").s().p("AhHBOQgggeAAgvIAAgBQAAgsAeggQAdgeAsAAQAyAAAdAhQAYAeAAAwIAAAOIiJAAQAJAjAjAAQAYAAAWgWIAnAhQggAqg4ABQgwgBgegdgAAkgQQgCgRgJgKQgKgLgPABQgdAAgFAlIBGAAIAAAAg");
	this.shape_2.setTransform(245.55,123.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAC8").s().p("AgoBvIAAAZIhIAAIAAkUIBIAAIAABjQAbgfAjAAQAmgBAaAdQAbAeAAAvIAAABQAAAwgbAfQgaAcgmAAQgkAAgagegAgdAAQgMANAAAUIAAABQAAAUAMAOQAMANARAAQASAAAMgNQAMgNAAgVIAAgBQAAgUgMgNQgMgMgSAAQgRAAgMAMg");
	this.shape_3.setTransform(221.975,119.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAC8").s().p("ABeBpIAAhvQAAgigcAAQgOAAgIAIQgIAKAAAQIAABvIhHAAIAAhvQAAgigcAAQgOAAgHAIQgJAKAAAQIAABvIhIAAIAAjMIBIAAIAAAcQAaghAjAAQApAAASAhQAdghAnAAQAiAAASAUQATAUAAAjIAACGg");
	this.shape_4.setTransform(190.775,122.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAC8").s().p("AhIBOQgegeAAgvIAAgBQAAgsAcggQAegeAsAAQAzAAAbAhQAZAeAAAwIAAAOIiIAAQAIAjAjAAQAYAAAWgWIAnAhQggAqg5ABQgvgBgfgdgAAkgQQgCgRgKgKQgJgLgPABQgcAAgGAlIBGAAIAAAAg");
	this.shape_5.setTransform(161.1,123.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAC8").s().p("AggBoIhSjOIBMAAIAnB2IAnh2IBLAAIhSDOg");
	this.shape_6.setTransform(138.075,123.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAC8").s().p("AhRBMQgfgfAAgsIAAgBQAAgsAggfQAhgfAvAAQAxAAAhAfQAfAeAAAtIAAAAQAAAtggAeQghAhgwAAQgwgBghgfgAgfghQgLAOAAATIAAAAQAAATAMANQANAOARABQATgBANgOQAMgNAAgSIAAgBQAAgSgNgOQgNgOgSAAQgTAAgMANg");
	this.shape_7.setTransform(114.125,123.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFAC8").s().p("AA9CFIhxiRIAACRIhJAAIAAkJIBFAAIBsCMIAAiMIBKAAIAAEJg");
	this.shape_8.setTransform(87.125,120.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFAC8").s().p("AAeBpIAAhvQAAgigdAAQgNAAgIAIQgJAKAAAQIAABvIhIAAIAAjMIBIAAIAAAcQAaghAjAAQAgAAATAUQATAVAAAjIAACFg");
	this.shape_9.setTransform(50.475,122.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAC8").s().p("AgjCLIAAjNIBHAAIAADNgAglhUIAAg2IBKAAIAAA2g");
	this.shape_10.setTransform(33,119.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAC8").s().p("AhDBpIAAjNIBHAAIAAAqQATgvAuACIAABMIgHAAQg6AAAABEIAABAg");
	this.shape_11.setTransform(269.8,82.9459);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAC8").s().p("AhHBOQgggeAAgwIAAAAQAAgsAdgfQAegfAsgBQAzAAAbAiQAZAfAAAvIAAAPIiIAAQAIAhAjAAQAYABAWgVIAnAhQghApg4AAQgvAAgegdgAAkgQQgCgRgKgLQgJgJgPgBQgdAAgFAmIBGAAIAAAAg");
	this.shape_12.setTransform(249.85,83.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFAC8").s().p("AguA/IAAhUIgZAAIAAg5IAZAAIAAg0IBGAAIAAA0IAwAAIAAA5IgwAAIAABFQAAAVAUAAQANAAAOgGIAAA4QgVAMgdAAQhDAAAAhEg");
	this.shape_13.setTransform(230.35,80.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFAC8").s().p("AAeBpIAAhuQAAgjgdAAQgNAAgIAJQgJAJAAARIAABuIhIAAIAAjNIBIAAIAAAeQAagiAjAAQAgAAATAUQATAVAAAiIAACGg");
	this.shape_14.setTransform(210.775,82.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFAC8").s().p("AhHBOQgggeAAgwIAAAAQAAgsAegfQAdgfAsgBQAyAAAdAiQAYAfAAAvIAAAPIiIAAQAIAhAjAAQAYABAWgVIAnAhQggApg4AAQgwAAgegdgAAkgQQgCgRgJgLQgKgJgPgBQgdAAgFAmIBGAAIAAAAg");
	this.shape_15.setTransform(187.5,83.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFAC8").s().p("AhWBjQgogoAAg6IAAgBQAAg5AngoQAogpA7AAQBJABAoA3Ig3AqQgageggAAQgbgBgSAWQgSATAAAeIAAAAQAAAeASAUQASAVAbAAQAhAAAbggIA3AnQgrA9hKAAQg5AAgngog");
	this.shape_16.setTransform(162.825,80.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAC8").s().p("AhHBOQgfgegBgwIAAAAQABgsAdgfQAdgfAsgBQAzAAAcAiQAZAfgBAvIAAAPIiJAAQAJAhAjAAQAYABAVgVIApAhQgiApg3AAQgwAAgegdgAAkgQQgCgRgJgLQgKgJgPgBQgdAAgGAmIBHAAIAAAAg");
	this.shape_17.setTransform(127.3,83.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAC8").s().p("AgvA/IAAhUIgYAAIAAg5IAYAAIAAg0IBHAAIAAA0IAwAAIAAA5IgwAAIAABFQAAAVAUAAQANAAAOgGIAAA4QgWAMgcAAQhEAAAAhEg");
	this.shape_18.setTransform(107.8,80.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAC8").s().p("AgiCLIAAjNIBGAAIAADNgAgkhUIAAg2IBJAAIAAA2g");
	this.shape_19.setTransform(94.45,79.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAC8").s().p("AAeCLIAAhwQAAghgdAAQgNAAgIAHQgJAKAAAQIAABwIhIAAIAAkVIBIAAIAABkQAaggAjAAQAgAAATAUQATAUAAAiIAACHg");
	this.shape_20.setTransform(77.175,79.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAC8").s().p("AA1CGIg1iYIg1CYIhAAAIhZkLIBOAAIAuCZIA0iaIA+AAIAzCaIAviZIBMAAIhZELg");
	this.shape_21.setTransform(44.25,80.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFAC8").s().p("AhRBMQgfgfAAgsIAAgBQAAgsAggfQAhgfAvgBQAxABAhAfQAfAeAAAtIAAAAQAAAtggAeQghAhgwAAQgwgBghgfgAgfghQgLAOAAATIAAAAQAAATAMAOQANAOARgBQATABANgOQAMgOAAgSIAAgBQAAgSgNgOQgNgOgSAAQgTAAgMANg");
	this.shape_22.setTransform(237.475,43.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFAC8").s().p("AgvA+IAAhSIgYAAIAAg6IAYAAIAAg0IBHAAIAAA0IAwAAIAAA6IgwAAIAABFQAAAUAUAAQANAAAOgHIAAA4QgVANgdAAQhEgBAAhEg");
	this.shape_23.setTransform(217,40.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFAC8").s().p("AhqBwIAYgwQAiAUAmAAQA0AAAAgzIAAgIQgbAfgjAAQgnAAgagaQgbgaAAgqIAAgBQAAgrAbgbQAagaAlAAQAkAAAbAdIAAgYIBIAAIAACbQAAA4gaAaQgdAdg9AAQg4AAgvgYgAgdhEQgMAMAAARIAAABQAAARAMALQALALASAAQATAAAMgLQALgLABgRIAAgBQgBgRgLgMQgMgLgTAAQgSAAgLALg");
	this.shape_24.setTransform(186,45.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFAC8").s().p("AAeBpIAAhvQAAgigdAAQgNAAgIAJQgJAJAAAQIAABvIhIAAIAAjNIBIAAIAAAdQAaghAjAAQAgAAATAUQATAUAAAkIAACFg");
	this.shape_25.setTransform(161.975,42.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFAC8").s().p("AgjCLIAAjNIBHAAIAADNgAgkhUIAAg2IBJAAIAAA2g");
	this.shape_26.setTransform(144.5,39.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFAC8").s().p("ABeBpIAAhvQAAgigcAAQgOAAgIAJQgIAJAAAQIAABvIhHAAIAAhvQAAgigcAAQgOAAgHAJQgJAJAAAQIAABvIhIAAIAAjNIBIAAIAAAcQAaggAjAAQApAAASAhQAdghAnAAQAiAAASAUQATAUAAAjIAACGg");
	this.shape_27.setTransform(120.825,42.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFAC8").s().p("AhRBMQgfgfAAgsIAAgBQAAgsAggfQAhgfAvgBQAxABAhAfQAfAeAAAtIAAAAQAAAtggAeQghAhgwAAQgwgBghgfgAgfghQgLAOAAATIAAAAQAAATAMAOQANAOARgBQATABANgOQAMgOAAgSIAAgBQAAgSgNgOQgNgOgSAAQgTAAgMANg");
	this.shape_28.setTransform(90.225,43.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFAC8").s().p("AhWBjQgogoAAg7IAAAAQAAg6AngnQAogoA7AAQBJAAAoA3Ig3ArQgaggggAAQgbABgSAUQgSAVAAAdIAAAAQAAAeASAVQASAUAbAAQAhAAAbghIA3ApQgrA7hKAAQg5AAgngng");
	this.shape_29.setTransform(64.575,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},211).wait(91));

	// BKGD_green
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8D8B00").s().p("A3bM0IAA5nMAu3AAAIAAZng");
	this.shape_30.setTransform(150,82);
	this.shape_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(211).to({_off:false},0).wait(91));

	// LOGO
	this.instance_7 = new lib.HPlogowTag();
	this.instance_7.setTransform(149.25,512.05);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(211).to({_off:false},0).wait(91));

	// POLY
	this.instance_8 = new lib._300x600poly();
	this.instance_8.setTransform(0,420,0.5,0.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(211).to({_off:false},0).wait(91));

	// HEAD3a
	this.instance_9 = new lib.HEAD3a();
	this.instance_9.setTransform(-150,57.45,1,1,0,0,0,0,35);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(142).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).to({_off:true},49).wait(91));

	// HEAD2b_copy
	this.instance_10 = new lib.HEAD2b();
	this.instance_10.setTransform(-150,316.05,1,1,0,0,0,0,35);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(142).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).to({_off:true},49).wait(91));

	// HEAD2a
	this.instance_11 = new lib.HEAD2a();
	this.instance_11.setTransform(-150,57.45,1,1,0,0,0,0,35);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).wait(63).to({alpha:0},11).to({_off:true},1).wait(148));

	// HEAD2b
	this.instance_12 = new lib.HEAD2b();
	this.instance_12.setTransform(-150,316.05,1,1,0,0,0,0,35);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).wait(63).to({alpha:0},11).to({_off:true},1).wait(148));

	// HEAD1a
	this.instance_13 = new lib.HEAD1a();
	this.instance_13.setTransform(150,55.45,1,1,0,0,0,0,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({alpha:0},10).to({_off:true},1).wait(232));

	// HEAD1b
	this.instance_14 = new lib.HEAD1b();
	this.instance_14.setTransform(150,256.05,1,1,0,0,0,0,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59).to({alpha:0},10).to({_off:true},1).wait(232));

	// border
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape_31.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).to({_off:true},211).wait(91));

	// PIC3
	this.instance_15 = new lib.PIC3();
	this.instance_15.setTransform(-150,510,1,1,0,0,0,150,-90);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(142).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).to({_off:true},49).wait(91));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_59 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:300}).wait(59).to({graphics:mask_graphics_59,x:150,y:300}).wait(21).to({graphics:null,x:0,y:0}).wait(222));

	// PIC1
	this.instance_16 = new lib.PIC1();
	this.instance_16.setTransform(150,510,1,1,0,0,0,150,-90);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(59).to({x:450},20,cjs.Ease.quintInOut).to({_off:true},1).wait(222));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:150,y:300}).wait(59).to({graphics:mask_1_graphics_59,x:150,y:300}).wait(104).to({graphics:null,x:0,y:0}).wait(139));

	// PIC2
	this.instance_17 = new lib.PIC2();
	this.instance_17.setTransform(-150,510,1,1,0,0,0,150,-90);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(59).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).to({_off:true},84).wait(139));

	// SHAD_3
	this.instance_18 = new lib.SHAD();
	this.instance_18.setTransform(-150,380,1,1,0,0,0,150,100);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(142).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).to({_off:true},49).wait(91));

	// SHAD_1_2
	this.instance_19 = new lib.SHAD();
	this.instance_19.setTransform(150,500,1,1,0,0,0,150,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},211).wait(91));

	// BKGD
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFBCA").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_32.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(302));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-795,299.5,2037.8,301);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WhiteCenter_Display_300x600_atlas_P_1.png", id:"WhiteCenter_Display_300x600_atlas_P_1"},
		{src:"images/WhiteCenter_Display_300x600_atlas_NP_1.jpg", id:"WhiteCenter_Display_300x600_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2F49D00C20C940BA9B927F9153DA0B39'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;