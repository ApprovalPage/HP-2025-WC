(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WhiteCenter_Services_Display_160x600_atlas_P_1", frames: [[1322,0,320,200],[0,0,1320,270]]},
		{name:"WhiteCenter_Services_Display_160x600_atlas_NP_1", frames: [[602,0,320,412],[0,0,600,400]]}
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



(lib._160x600pic1 = function() {
	this.initialize(ss["WhiteCenter_Services_Display_160x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._160x600poly = function() {
	this.initialize(ss["WhiteCenter_Services_Display_160x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600grad = function() {
	this.initialize(ss["WhiteCenter_Services_Display_160x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["WhiteCenter_Services_Display_160x600_atlas_P_1"]);
	this.gotoAndStop(1);
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
	this.instance = new lib._160x600poly();
	this.instance.setTransform(-80,-100,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.POLY, new cjs.Rectangle(-80,-100,160,100), null);


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
	this.instance = new lib._160x600pic1();
	this.instance.setTransform(-80,-206,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-80,-206,160,206), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape.setTransform(37.5,32.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_1.setTransform(21.875,32.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_2.setTransform(10.55,32.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_3.setTransform(-5.45,31.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(-21.375,32.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig1AAIAAA7IgsAAIAAiZIAsAAIAAA5IA1AAIAAg5IAsAAIAACZg");
	this.shape_5.setTransform(-37.4,32.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(69.3,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(53.3,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_8.setTransform(37.125,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_9.setTransform(19.475,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(6.725,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgTBOIg/ibIAwAAIAiBhIAkhhIAuAAIg+Cbg");
	this.shape_11.setTransform(-5.25,12.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-19.5,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_13.setTransform(-36.65,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_14.setTransform(-52.175,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AhEBNIAAiZIBOAAQAcAAAOANQAKALAAAOIAAABQAAAYgXAKQAeAJAAAcIAAABQAAAUgPALQgQALgbAAgAgaArIAgAAQAUAAAAgOIAAgBQAAgOgVAAIgfAAgAgagPIAaAAQAUAAAAgNIAAgBQAAgNgTAAIgbAAg");
	this.shape_15.setTransform(-67.325,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B3, new cjs.Rectangle(-169.6,0,339.29999999999995,46.8), null);


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
(lib.WhiteCenter_Services_Display_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [222];
	// timeline functions:
	this.frame_222 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(222).call(this.frame_222).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,0,3).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(223));

	// B1
	this.instance = new lib.B1();
	this.instance.setTransform(542.1,315.15,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:172.5,y:231.25},7).wait(187));

	// B2
	this.instance_1 = new lib.B2();
	this.instance_1.setTransform(542.1,315.15,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:172.5,y:249.35},7).wait(165));

	// B3
	this.instance_2 = new lib.B3();
	this.instance_2.setTransform(542.1,315.15,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:172.5,y:267.6},7).wait(152));

	// B4
	this.instance_3 = new lib.B4();
	this.instance_3.setTransform(542.1,328.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(73).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:172.5,y:299.45},7).wait(143));

	// B5
	this.instance_4 = new lib.B5();
	this.instance_4.setTransform(542.1,328.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:172.5,y:317.6},7).wait(134));

	// B6
	this.instance_5 = new lib.B6();
	this.instance_5.setTransform(542.1,328.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:172.5,y:335.85},7).wait(125));

	// B7
	this.instance_6 = new lib.B7();
	this.instance_6.setTransform(542.1,328.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:172.5,y:353.95},7).wait(116));

	// HEAD4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAC8").s().p("AhaBLIAngnQAZAZAcAAQANAAAIgGQAHgGAAgLIAAAAQAAgXgjAAIgaAAIgJggIAyguIhUAAIAAgyICgAAIAAAsIg1AuQA6ANAAAxIAAABQAAAhgZAVQgYAUgmAAQg5AAglgng");
	this.shape_1.setTransform(119.775,164.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAC8").s().p("AgeAfIAAg9IA+AAIAAA9g");
	this.shape_2.setTransform(97.45,172.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAC8").s().p("AgbBXIhFitIBAAAIAgBkIAihkIA/AAIhGCtg");
	this.shape_3.setTransform(85.75,167.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAC8").s().p("AhEBAQgbgaAAglIAAgBQAAglAbgaQAcgbAoAAQApAAAcAbQAbAaAAAlIAAAAQAAAmgbAaQgcAbgpAAQgoAAgcgbgAgagbQgKALABAQIAAAAQAAAQAKAMQAKALAPAAQARAAAKgLQAJgLAAgQIAAgBQABgPgKgMQgMgLgPgBQgPAAgLAMg");
	this.shape_4.setTransform(65.65,166.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAC8").s().p("AA0BwIhfh6IAAB6Ig+AAIAAjfIA6AAIBbB2IAAh2IA+AAIAADfg");
	this.shape_5.setTransform(42.975,164.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAC8").s().p("Ag5BYIAAisIA8AAIAAAjQAQgnAnABIAABAIgGAAQgxAAAAA5IAAA2g");
	this.shape_6.setTransform(127.925,132.7972);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAC8").s().p("Ag8BCQgagZAAgoIAAgBQAAglAYgaQAZgaAlAAQArAAAXAcQAVAZAAAoIAAANIhzAAQAHAcAeABQAUgBASgRIAiAcQgcAigvABQgoAAgagZgAAfgOQgCgOgIgIQgIgJgNABQgYAAgFAeIA8AAIAAAAg");
	this.shape_7.setTransform(111.175,132.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFAC8").s().p("AgnA1IAAhGIgVAAIAAgwIAVAAIAAgsIA7AAIAAAsIApAAIAAAwIgpAAIAAA6QAAARARAAQALAAAMgFIAAAvQgSAKgYAAQg5AAAAg5g");
	this.shape_8.setTransform(94.825,130.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFAC8").s().p("AAZBYIAAhcQAAgdgZAAQgKgBgHAIQgHAIAAAOIAABcIg9AAIAAisIA9AAIAAAZQAWgcAdAAQAbgBAQASQAQARAAAdIAABwg");
	this.shape_9.setTransform(78.425,132.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAC8").s().p("Ag8BCQgagZAAgoIAAgBQAAglAYgaQAZgaAlAAQArAAAXAcQAVAZAAAoIAAANIhzAAQAHAcAeABQAUgBASgRIAiAcQgcAigvABQgoAAgagZgAAfgOQgCgOgIgIQgIgJgNABQgYAAgFAeIA8AAIAAAAg");
	this.shape_10.setTransform(58.875,132.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAC8").s().p("AhIBUQgigiAAgyIAAAAQAAgwAhgiQAighAygBQA9ABAiAuIgvAkQgWgagbAAQgWAAgQASQgPAQAAAZIAAAAQAAAaAPAQQAQASAWAAQAcAAAWgcIAvAiQglAyg+AAQgvAAghggg");
	this.shape_11.setTransform(38.175,130.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAC8").s().p("Ag8BBQgagZAAgoIAAAAQAAglAYgaQAZgbAlABQArgBAXAdQAVAZAAAoIAAANIhzAAQAHAcAeAAQAUAAASgSIAiAcQgcAkgvgBQgoAAgagZgAAfgOQgCgOgIgIQgIgIgNAAQgYAAgFAeIA8AAIAAAAg");
	this.shape_12.setTransform(119.125,98.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFAC8").s().p("AgnA1IAAhGIgVAAIAAgwIAVAAIAAgsIA7AAIAAAsIApAAIAAAwIgpAAIAAA6QAAARARAAQALAAAMgFIAAAvQgSAKgYAAQg5AAAAg5g");
	this.shape_13.setTransform(102.775,96.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFAC8").s().p("AgdB1IAAisIA8AAIAACsgAgehHIAAgtIA+AAIAAAtg");
	this.shape_14.setTransform(91.6,95.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFAC8").s().p("AAZB1IAAheQAAgcgZAAQgKAAgHAGQgHAIAAAOIAABeIg9AAIAAjpIA9AAIAABUQAVgbAeAAQAbAAAQARQAQARAAAcIAAByg");
	this.shape_15.setTransform(77.125,95.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFAC8").s().p("AAtBxIgtiAIgsCAIg2AAIhLjgIBCAAIAnCAIAriBIA0AAIArCBIAoiAIBAAAIhLDgg");
	this.shape_16.setTransform(49.425,96.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAC8").s().p("AhEBAQgbgaAAgmIAAAAQAAglAbgaQAdgbAnAAQApABAcAaQAbAaAAAlIAAAAQAAAlgbAbQgcAbgpgBQgoABgcgbgAgagbQgKALAAAQIAAAAQAAAQALALQAKAMAPAAQAQAAALgLQAJgLAAgRIAAAAQABgPgLgMQgLgMgPABQgPAAgLALg");
	this.shape_17.setTransform(86.9,64.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAC8").s().p("AgnA1IAAhGIgVAAIAAgwIAVAAIAAgsIA7AAIAAAsIApAAIAAAwIgpAAIAAA6QAAARARAAQALAAAMgFIAAAvQgSAKgYAAQg5AAAAg5g");
	this.shape_18.setTransform(69.725,62.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAC8").s().p("AhZBfIAUgpQAdARAfAAQAsAAAAgrIAAgHQgWAageAAQghAAgVgVQgXgXAAgjIAAgBQAAgkAXgXQAVgVAfgBQAeAAAXAZIAAgUIA9AAIAACCQAAAvgWAWQgYAYg0ABQgvgBgngTgAgYg5QgLAKABAOIAAABQgBAPALAJQAKAIAOAAQAPAAALgIQAJgJABgPIAAgBQgBgOgJgKQgLgKgPABQgOgBgKAKg");
	this.shape_19.setTransform(131.6,33.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAC8").s().p("AAZBYIAAhcQAAgegZAAQgKAAgHAIQgHAHAAAPIAABcIg9AAIAAirIA9AAIAAAYQAWgdAdAAQAbAAAQARQAQARAAAeIAABwg");
	this.shape_20.setTransform(111.425,30.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAC8").s().p("AgdB1IAAisIA8AAIAACsgAgfhHIAAgtIA/AAIAAAtg");
	this.shape_21.setTransform(96.75,27.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFAC8").s().p("ABPBYIAAhcQAAgegXAAQgMABgGAGQgIAJABAOIAABcIg8AAIAAhcQAAgegZAAQgKABgHAGQgHAJAAAOIAABcIg8AAIAAirIA8AAIAAAXQAWgcAdAAQAjAAAPAdQAYgdAhAAQAcAAAQARQAQARAAAeIAABwg");
	this.shape_22.setTransform(76.85,30.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFAC8").s().p("AhEBAQgbgaAAgmIAAAAQAAglAbgaQAcgbApAAQApAAAbAbQAaAaAAAlIAAAAQAAAmgbAaQgbAagpAAQgoAAgcgagAgZgbQgLALABAQIAAAAQAAAQAKALQALAMAPAAQAQAAAKgLQAKgLAAgRIAAAAQAAgPgKgMQgMgMgPABQgPAAgKALg");
	this.shape_23.setTransform(51.15,30.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFAC8").s().p("AhIBTQgiggAAgzIAAAAQAAgwAhghQAigjAyAAQA9AAAiAvIgvAkQgWgagbAAQgWAAgQARQgPASAAAYIAAAAQAAAZAPASQAQARAWAAQAcAAAWgbIAvAhQglAzg+gBQgvABghgig");
	this.shape_24.setTransform(29.625,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(223));

	// BKGD_green
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8D8B00").s().p("AsfPoIAA/PIY/AAIAAfPg");
	this.shape_25.setTransform(80,100);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(223));

	// SHAD_top
	this.instance_7 = new lib.SHAD();
	this.instance_7.setTransform(80,116,1,1,180,0,0,150,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(223));

	// LOGO
	this.instance_8 = new lib.HPlogowTag();
	this.instance_8.setTransform(79.25,652.05,0.54,0.54,0,0,0,0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(139).to({_off:false},0).to({y:552.05},20,cjs.Ease.quintOut).wait(64));

	// POLY
	this.instance_9 = new lib.POLY();
	this.instance_9.setTransform(80,650,1,1,0,0,0,0,-50);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(139).to({_off:false},0).to({y:550},20,cjs.Ease.quintOut).wait(64));

	// PIC2
	this.instance_10 = new lib.PIC2();
	this.instance_10.setTransform(230,537,1,1,0,0,0,150,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({y:510},40,cjs.Ease.quintInOut).wait(64));

	// SHAD_bottom
	this.instance_11 = new lib.SHAD();
	this.instance_11.setTransform(80,505,1,1,0,0,0,150,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({y:478},40,cjs.Ease.quintInOut).wait(64));

	// BKGD
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFBCA").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_26.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(223));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-441,299.5,1122,400.5);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WhiteCenter_Services_Display_160x600_atlas_P_1.png", id:"WhiteCenter_Services_Display_160x600_atlas_P_1"},
		{src:"images/WhiteCenter_Services_Display_160x600_atlas_NP_1.jpg", id:"WhiteCenter_Services_Display_160x600_atlas_NP_1"}
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