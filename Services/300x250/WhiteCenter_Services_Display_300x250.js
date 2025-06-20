(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WhiteCenter_Services_Display_300x250_atlas_P_1", frames: [[0,0,1320,270]]},
		{name:"WhiteCenter_Services_Display_300x250_atlas_NP_1", frames: [[0,0,320,440],[0,442,600,200]]}
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



(lib._160x600grad = function() {
	this.initialize(ss["WhiteCenter_Services_Display_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250poly = function() {
	this.initialize(ss["WhiteCenter_Services_Display_300x250_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["WhiteCenter_Services_Display_300x250_atlas_P_1"]);
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
	this.instance = new lib._160x600grad();
	this.instance.setTransform(-160,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SHAD, new cjs.Rectangle(-160,-220,320,440), null);


(lib.POLY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._300x250poly();
	this.instance.setTransform(-150,-100,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.POLY, new cjs.Rectangle(-150,-100,300,100), null);


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


(lib.dot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AgZAaQgLgLAAgPIAAAAQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPIAAAAQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape.setTransform(0.275,12.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(-211.8,0,423.70000000000005,27.3), null);


(lib.B7copy = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B7copy, new cjs.Rectangle(-169.6,0,339.29999999999995,52), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAXgcQAYASAaAAQARAAABgKIAAgBQgBgFgFgDQgFgCgPgFQgdgGgNgIQgQgMAAgVIAAgBQAAgVAPgOQARgOAbAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAGADQAFADAPADQAdAGANAKQAQALAAAVIAAAAQAAAXgRAOQgRANgdAAQgqAAgdgag");
	this.shape.setTransform(87,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(71.425,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_2.setTransform(53.625,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_3.setTransform(40.875,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_4.setTransform(29.975,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(16.65,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AhDBNIAAgfIBMhWIhJAAIAAgkICEAAIAAAeIhMBXIBMAAIAAAkg");
	this.shape_6.setTransform(0.175,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-11.125,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_8.setTransform(-23.375,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAcAAAAggIAAhWIAsAAIAABVQAAAkgUASQgSASgiAAQghAAgTgSg");
	this.shape_9.setTransform(-40.35,12.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-58.375,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-77.525,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_12.setTransform(-90.725,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B7, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B6copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AhDA2IAZgcQAXASAZAAQATAAgBgKIAAgBQABgFgGgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAQgOQARgOAaAAQAmAAAaAVIgWAeQgWgPgUAAQgQAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAPALAAAVIAAAAQABAXgSAOQgQANgdAAQgqAAgegag");
	this.shape.setTransform(198.65,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_1.setTransform(182.125,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(163.8,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAdBNIgdgvIgdAvIgwAAIA0hNIgyhMIAxAAIAaArIAcgrIAwAAIgzBLIA2BOg");
	this.shape_3.setTransform(146.95,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(131.725,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_5.setTransform(112.35,12.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_6.setTransform(96.35,12.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAdAAAAggIAAhWIArAAIAABVQAAAkgUASQgSASgiAAQghAAgTgSg");
	this.shape_7.setTransform(80.2,12.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_8.setTransform(63.175,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_9.setTransform(45.875,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_10.setTransform(28.45,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B6copy, new cjs.Rectangle(-127.9,0,481.70000000000005,27.3), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AgzA6QgYgWAAgkIAAAAQAAghAYgXQAYgYAiAAQAlABAaAWIgZAeQgRgOgUAAQgQAAgLAMQgMAMAAARIAAAAQAAAUAMAMQAMAMARgBQAPAAAKgFIAAgUIgeAAIAAgeIBHAAIAABFQgdAXgnAAQgjAAgYgWg");
	this.shape.setTransform(-3.625,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(-20.675,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_2.setTransform(-32.925,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_3.setTransform(-45.175,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_4.setTransform(-62.475,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-79.9,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(-95,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAeAAARAOQARAOAAAaIAAAAQABAagUAPQgRAOgdAAIgVAAIAAAsgAgVAAIAUAAQALAAAGgFQAHgGAAgJIAAAAQAAgUgYAAIgUAAg");
	this.shape_7.setTransform(-109.2,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_8.setTransform(-129.025,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_9.setTransform(-141.15,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-152.025,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-165.225,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-182.85,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("Ag9BNIAAiZIB7AAIAAAlIhQAAIAAAaIBIAAIAAAjIhIAAIAAA3g");
	this.shape_13.setTransform(-196.95,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B6, new cjs.Rectangle(-342.7,0,481.7,27.3), null);


(lib.B5copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAXgcQAYASAaAAQARAAABgKIAAgBQgBgFgFgDQgFgCgPgFQgdgGgNgIQgQgMAAgVIAAgBQAAgVAPgOQARgOAbAAQAmAAAZAVIgVAeQgVgPgVAAQgQAAAAAKIAAAAQAAAGAGADQAFADAPADQAdAGANAKQAPALABAVIAAAAQAAAXgRAOQgSANgcAAQgqAAgdgag");
	this.shape.setTransform(197.15,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_1.setTransform(183.85,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(167.85,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAYgYAiAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgYgWg");
	this.shape_3.setTransform(151.15,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_4.setTransform(139.325,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AhCA2IAXgcQAYASAaAAQARAAABgKIAAgBQgBgFgFgDQgFgCgPgFQgdgGgNgIQgQgMAAgVIAAgBQAAgVAPgOQARgOAbAAQAmAAAZAVIgVAeQgVgPgVAAQgQAAAAAKIAAAAQAAAGAGADQAFADAPADQAdAGANAKQAPALABAVIAAAAQAAAXgRAOQgSANgcAAQgqAAgdgag");
	this.shape_5.setTransform(128.3,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_6.setTransform(113.375,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_7.setTransform(97.05,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAeAAARAOQARAOAAAaIAAAAQAAAagSAPQgTAOgcAAIgWAAIAAAsgAgWAAIAVAAQALAAAGgFQAHgGgBgJIAAAAQAAgUgXAAIgVAAg");
	this.shape_8.setTransform(81.75,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B5copy, new cjs.Rectangle(-87.5,0,453.4,27.3), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgsAAIAAiZIAsAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape.setTransform(37.75,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_1.setTransform(22.125,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_2.setTransform(10.7,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_3.setTransform(-5.3,12.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(-21.225,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_5.setTransform(-37.2,12.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(-58.05,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(-74.05,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_8.setTransform(-90.225,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_9.setTransform(-107.875,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-120.625,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgTBOIg/ibIAwAAIAiBhIAkhhIAuAAIg+Cbg");
	this.shape_11.setTransform(-132.6,12.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-146.6,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IAsAAIAACZg");
	this.shape_13.setTransform(-163.75,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_14.setTransform(-179.275,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AhEBNIAAiZIBOAAQAcAAAOANQAKALAAAOIAAABQAAAYgXAKQAeAJAAAcIAAABQAAAUgPALQgQALgbAAgAgaArIAgAAQAUAAAAgOIAAgBQAAgOgVAAIgfAAgAgagPIAaAAQAUAAAAgNIAAgBQAAgNgTAAIgbAAg");
	this.shape_15.setTransform(-194.425,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B5, new cjs.Rectangle(-304.9,0,453.29999999999995,27.3), null);


(lib.B4copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(169.625,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(155.075,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgLAcIgtAAIBBibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(138.3,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAXgYAiAAQAqAAAYAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQghAAgWgWg");
	this.shape_3.setTransform(122.1,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(102.3,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AApBOIgLgcIg8AAIgKAcIgtAAIBBibIApAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(86.75,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_6.setTransform(73.425,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_7.setTransform(57.975,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_8.setTransform(42.625,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AhJBNIAAiZIA9AAQAnAAAYAVQAWAVAAAiQABAigXAVQgYAWgoAAgAgdAnIARAAQATAAALgKQAMgKAAgTIAAAAQAAgSgMgKQgLgLgTAAIgRAAg");
	this.shape_9.setTransform(27.25,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B4copy, new cjs.Rectangle(-114.4,0,423.70000000000005,27.3), null);


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
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(-12.725,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(-27.275,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(-44.05,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAYgYAhAAQAqAAAYAhIggAZQgPgTgTABQgPgBgLAMQgKANAAAQIAAAAQAAARAKANQALAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgXgWg");
	this.shape_3.setTransform(-60.3,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(-80.05,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AApBOIgLgcIg7AAIgLAcIgtAAIBBibIApAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-95.6,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAXgYAjAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQATAAAQgSIAgAWQgZAjgrAAQghAAgXgWg");
	this.shape_6.setTransform(-111.85,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-123.225,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhIBNIAAiZIA7AAQAoAAAYAVQAXAVgBAiQAAAigWAVQgZAWgoAAgAgdAnIARAAQATAAALgKQAMgKAAgTIAAAAQAAgSgMgKQgLgLgTAAIgRAAg");
	this.shape_8.setTransform(-134.6,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_9.setTransform(-149.975,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-166.725,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B4, new cjs.Rectangle(-303,0,423.7,27.3), null);


// stage content:
(lib.WhiteCenter_Services_Display_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [143];
	// timeline functions:
	this.frame_143 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	// B4
	this.instance = new lib.B4();
	this.instance.setTransform(935.3,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:87.45},13).wait(127));

	// dot
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(153.75,84,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).wait(102));

	// B4_copy
	this.instance_2 = new lib.B4copy();
	this.instance_2.setTransform(267.2,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:87.45},13).wait(99));

	// B5
	this.instance_3 = new lib.B5();
	this.instance_3.setTransform(889.55,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:105.6},13).wait(80));

	// dot_copy
	this.instance_4 = new lib.dot();
	this.instance_4.setTransform(193.25,101.5,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).wait(72));

	// B5_copy
	this.instance_5 = new lib.B5copy();
	this.instance_5.setTransform(119.3,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:105.6},13).wait(62));

	// B6
	this.instance_6 = new lib.B6();
	this.instance_6.setTransform(973.25,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:242.5,y:123.85},13).wait(52));

	// dot_copy_copy
	this.instance_7 = new lib.dot();
	this.instance_7.setTransform(158.75,120,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96).to({_off:false},0).wait(48));

	// B6_copy
	this.instance_8 = new lib.B6copy();
	this.instance_8.setTransform(212.35,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:242.5,y:123.85},13).wait(45));

	// B7
	this.instance_9 = new lib.B7();
	this.instance_9.setTransform(612.1,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:141.95},15).wait(35));

	// B7_copy
	this.instance_10 = new lib.B7copy();
	this.instance_10.setTransform(612.1,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:141.95},15).wait(29));

	// HEAD4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAC8").s().p("AgsBFIAAiHIAvAAIAAAcQAMgfAeABIAAAyIgEAAQgmAAAAAtIAAAqg");
	this.shape_1.setTransform(270.625,46.1215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAC8").s().p("AgvAzQgUgTAAggIAAAAQAAgdATgUQATgVAdAAQAhAAASAWQARAUAAAgIAAAJIhaAAQAGAWAXAAQAPAAAPgNIAaAVQgWAcglAAQgfAAgUgUgAAYgKQgCgMgGgGQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_2.setTransform(257.625,46.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAC8").s().p("AgZBJIAAARIgxAAIAAi2IAxAAIAABCQAQgWAXAAQAaAAARATQARAUABAfIAAAAQgBAggRAUQgRATgaAAQgXAAgQgUgAgTAAQgIAIAAAOIAAAAQAAAOAIAIQAIAJALAAQALAAAJgJQAHgIABgOIAAAAQgBgOgHgIQgJgIgLAAQgLAAgIAIg");
	this.shape_3.setTransform(242.2,44.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAC8").s().p("AA+BFIAAhIQAAgXgTAAQgIAAgGAGQgFAGAAALIAABIIguAAIAAhIQAAgXgTAAQgJAAgFAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQAQgWAYAAQAaAAAMAWQATgWAaAAQAWAAAMANQAMANAAAYIAABXg");
	this.shape_4.setTransform(221.775,46.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAC8").s().p("AgvAzQgUgTAAggIAAAAQAAgdATgUQATgVAdAAQAhAAASAWQARAUAAAgIAAAJIhaAAQAGAWAXAAQAPAAAPgNIAaAVQgWAcglAAQgfAAgUgUgAAYgKQgCgMgGgGQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_5.setTransform(202.375,46.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAC8").s().p("AgVBEIg2iHIAyAAIAZBOIAahOIAyAAIg3CHg");
	this.shape_6.setTransform(187.375,46.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAC8").s().p("Ag1AyQgUgUAAgeIAAAAQAAgcAUgVQAXgVAeAAQAhAAAUAVQAWAUAAAdIAAAAQAAAegWAUQgVAVggAAQgfAAgWgVgAgUgVQgHAJgBAMIAAAAQAAAMAIAKQAJAIALABQANgBAIgIQAIgJgBgNIAAAAQAAgLgHgKQgJgJgMAAQgMAAgIAJg");
	this.shape_7.setTransform(171.7,46.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFAC8").s().p("AAoBYIhKhgIAABgIgwAAIAAivIAuAAIBGBcIAAhcIAxAAIAACvg");
	this.shape_8.setTransform(154.075,44.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFAC8").s().p("AAUBFIAAhIQAAgXgTAAQgIAAgGAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQARgWAWAAQAVAAANANQAMAOAAAXIAABXg");
	this.shape_9.setTransform(130.15,46.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAC8").s().p("AgXBbIAAiGIAvAAIAACGgAgYg3IAAgjIAxAAIAAAjg");
	this.shape_10.setTransform(118.825,43.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAC8").s().p("AgsBFIAAiHIAvAAIAAAcQAMgfAeABIAAAyIgEAAQgmAAAAAtIAAAqg");
	this.shape_11.setTransform(103.925,46.1215);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAC8").s().p("AgvAzQgUgTAAggIAAAAQAAgdATgUQATgVAdAAQAhAAASAWQARAUAAAgIAAAJIhaAAQAGAWAXAAQAPAAAPgNIAaAVQgWAcglAAQgfAAgUgUgAAYgKQgCgMgGgGQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_12.setTransform(90.925,46.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFAC8").s().p("AgeApIAAg2IgRAAIAAgmIARAAIAAgiIAuAAIAAAiIAgAAIAAAmIggAAIAAAtQAAAOANAAQAIAAAKgFIAAAlQgOAIgTAAQgsAAAAgtg");
	this.shape_13.setTransform(78.2,44.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFAC8").s().p("AAUBFIAAhIQAAgXgUAAQgHAAgFAGQgGAGAAALIAABIIgwAAIAAiGIAwAAIAAATQARgWAWAAQAWAAAMANQAMAOAAAXIAABXg");
	this.shape_14.setTransform(65.4,46.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFAC8").s().p("AgvAzQgUgTAAggIAAAAQAAgdATgUQATgVAdAAQAhAAASAWQARAUAAAgIAAAJIhaAAQAGAWAXAAQAPAAAPgNIAaAVQgWAcglAAQgfAAgUgUgAAYgKQgCgMgGgGQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_15.setTransform(50.225,46.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFAC8").s().p("Ag4BBQgbgZAAgoIAAAAQAAglAbgbQAagaAmAAQAwAAAbAkIglAcQgQgUgXAAQgQAAgMANQgMAOAAATIAAAAQAAAUAMANQAMANAQAAQAXABARgWIAlAbQgdAngxAAQglAAgZgag");
	this.shape_16.setTransform(34.1,44.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAC8").s().p("AgvAzQgUgTAAggIAAAAQAAgdATgUQATgVAdAAQAhAAASAWQARAUAAAgIAAAJIhaAAQAGAWAXAAQAPAAAPgNIAaAVQgWAcglAAQgfAAgUgUgAAYgKQgCgMgGgGQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_17.setTransform(248.775,19.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAC8").s().p("AgeApIAAg2IgQAAIAAgmIAQAAIAAgiIAuAAIAAAiIAgAAIAAAmIggAAIAAAtQAAAOANAAQAJAAAJgFIAAAlQgOAIgTAAQgsAAAAgtg");
	this.shape_18.setTransform(236.05,17.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAC8").s().p("AgXBbIAAiGIAvAAIAACGgAgYg3IAAgjIAxAAIAAAjg");
	this.shape_19.setTransform(227.425,16.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAC8").s().p("AAUBbIAAhJQAAgWgTAAQgIAAgGAFQgFAGAAALIAABJIgwAAIAAi1IAwAAIAABCQARgWAWAAQAVAAANANQAMAOAAAWIAABYg");
	this.shape_20.setTransform(216.1,16.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAC8").s().p("AAjBYIgjhjIgiBjIgqAAIg7ivIAzAAIAfBlIAihlIAoAAIAiBlIAehlIAzAAIg7Cvg");
	this.shape_21.setTransform(194.575,17.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFAC8").s().p("Ag1AyQgUgUAAgeIAAAAQAAgcAUgVQAXgVAeAAQAhAAAUAVQAWAUgBAdIAAAAQABAegWAUQgVAVggAAQgfAAgWgVgAgUgVQgHAJgBAMIAAAAQAAAMAJAKQAIAIALABQANgBAIgIQAIgJgBgNIAAAAQAAgLgIgJQgIgKgMAAQgMAAgIAJg");
	this.shape_22.setTransform(166.2,19.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFAC8").s().p("AgfApIAAg2IgPAAIAAgmIAPAAIAAgiIAvAAIAAAiIAfAAIAAAmIgfAAIAAAtQAAAOANAAQAIAAAKgFIAAAlQgPAIgSAAQgsAAgBgtg");
	this.shape_23.setTransform(152.85,17.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFAC8").s().p("AhGBKIAQgfQAXAMAYAAQAiAAAAghIAAgFQgRAUgXAAQgaAAgQgRQgTgSABgbIAAAAQgBgdATgRQAQgRAYgBQAYABASASIAAgQIAvAAIAABnQAAAlgRARQgTASgoABQglAAgfgQgAgTgsQgIAIAAALIAAAAQAAAMAIAHQAIAGALAAQAMAAAIgGQAHgIAAgLIAAAAQAAgLgHgIQgIgHgMgBQgLABgIAHg");
	this.shape_24.setTransform(132.7,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFAC8").s().p("AAUBFIAAhIQAAgXgUAAQgHAAgGAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQARgWAWAAQAVAAANANQAMAOAAAXIAABXg");
	this.shape_25.setTransform(116.95,19.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFAC8").s().p("AgXBbIAAiGIAvAAIAACGgAgYg3IAAgjIAxAAIAAAjg");
	this.shape_26.setTransform(105.625,16.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFAC8").s().p("AA+BFIAAhIQAAgXgTAAQgIAAgGAGQgFAGAAALIAABIIguAAIAAhIQAAgXgTAAQgJAAgFAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQAQgWAYAAQAaAAAMAWQATgWAaAAQAWAAAMANQAMANAAAYIAABXg");
	this.shape_27.setTransform(90.125,19.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFAC8").s().p("Ag1AyQgUgUgBgeIAAAAQABgcAUgVQAXgVAeAAQAhAAAUAVQAWAUAAAdIAAAAQAAAegWAUQgVAVggAAQgfAAgWgVgAgUgVQgIAJAAAMIAAAAQABAMAHAKQAJAIALABQANgBAIgIQAIgJAAgNIAAAAQgBgLgHgJQgJgKgMAAQgMAAgIAJg");
	this.shape_28.setTransform(70.1,19.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFAC8").s().p("Ag4BBQgbgZAAgoIAAAAQAAglAbgaQAagbAmAAQAwAAAaAkIgkAcQgQgUgXAAQgQAAgMANQgMAOAAATIAAAAQAAAUAMANQAMANAQAAQAXABARgWIAlAbQgdAngxAAQglAAgZgag");
	this.shape_29.setTransform(53.35,17.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(144));

	// BKGD_green
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8D8B00").s().p("A3bFAIAAp/MAu3AAAIAAJ/g");
	this.shape_30.setTransform(150,32);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(144));

	// SHAD_top
	this.instance_11 = new lib.SHAD();
	this.instance_11.setTransform(0,-232,1,1,180,0,0,150,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(144));

	// LOGO
	this.instance_12 = new lib.HPlogowTag();
	this.instance_12.setTransform(147.45,303.65,0.9503,0.9503,0,0,0,0.1,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).to({y:202.65},20,cjs.Ease.quintOut).wait(5));

	// POLY
	this.instance_13 = new lib.POLY();
	this.instance_13.setTransform(150,300,1,1,0,0,0,0,-50);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(119).to({_off:false},0).to({y:200},20,cjs.Ease.quintOut).wait(5));

	// BKGD
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFBCA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_31.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-553.2,-227,1556.4,577);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WhiteCenter_Services_Display_300x250_atlas_P_1.png", id:"WhiteCenter_Services_Display_300x250_atlas_P_1"},
		{src:"images/WhiteCenter_Services_Display_300x250_atlas_NP_1.jpg", id:"WhiteCenter_Services_Display_300x250_atlas_NP_1"}
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