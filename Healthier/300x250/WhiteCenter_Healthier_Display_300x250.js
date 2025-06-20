(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WhiteCenter_Healthier_Display_300x250_atlas_P_1", frames: [[0,0,1320,270]]},
		{name:"WhiteCenter_Healthier_Display_300x250_atlas_NP_1", frames: [[0,0,320,440],[0,442,600,200]]}
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
	this.initialize(ss["WhiteCenter_Healthier_Display_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250poly = function() {
	this.initialize(ss["WhiteCenter_Healthier_Display_300x250_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["WhiteCenter_Healthier_Display_300x250_atlas_P_1"]);
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
	this.shape.graphics.f("#E87D1D").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape.setTransform(44.225,98.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AggAzIAAhjIAiAAIAAAUQAJgWAWABIAAAkIgDAAQgcAAAAAhIAAAfg");
	this.shape_1.setTransform(38,95.4479);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAPgPAUAAQAZAAANAQQAMAPAAAWIAAAHIhCAAQAFARAQAAQAMAAAKgKIATAQQgPAUgcAAQgWAAgPgPgAASgIQgBgHgFgFQgFgGgHAAQgNABgDARIAiAAIAAAAg");
	this.shape_2.setTransform(28.2,95.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgQBDIAAhjIAiAAIAABjgAgRgpIAAgZIAjAAIAAAZg");
	this.shape_3.setTransform(19.9,93.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAOBDIAAg2QABgQgOAAQgGAAgEAEQgEAEAAAIIAAA2IgjAAIAAiFIAjAAIAAAxQAMgRAQABQAQgBAJAKQAJAKAAAQIAABBg");
	this.shape_4.setTransform(11.35,93.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_5.setTransform(1.475,94.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_6.setTransform(-5.175,93.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgmAsQgKgJAAgOIAAgBQAAgPALgGQALgJARAAQANABAKADIAAgCQAAgQgSAAQgNAAgPAGIgHgZQASgHAVgBQAaAAAMANQALAKAAAVIAAA5IgjAAIAAgLQgLANgRAAQgPgBgJgHgAgOASIAAABQAAAFADADQAEADAFAAQAHAAAFgFQAFgEAAgHIAAgFQgGgDgIABQgPgBAAAMg");
	this.shape_7.setTransform(-13.6,95.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAOgPAVAAQAZAAANAQQAMAPAAAWIAAAHIhCAAQAFARAQAAQALAAALgKIATAQQgPAUgcAAQgXAAgOgPgAARgIQgBgHgEgFQgFgGgHAAQgNABgDARIAhAAIAAAAg");
	this.shape_8.setTransform(-24.5,95.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AAPBDIAAg2QgBgQgOAAQgFAAgEAEQgEAEAAAIIAAA2IgjAAIAAiFIAjAAIAAAxQAMgRARABQAPgBAKAKQAIAKAAAQIAABBg");
	this.shape_9.setTransform(-35.85,93.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_10.setTransform(64.275,74.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAOgPAVAAQAZAAANAQQAMAPAAAWIAAAHIhBAAQADARARAAQALAAALgKIATAQQgQAUgbAAQgXAAgOgPgAARgIQAAgHgFgFQgFgGgHAAQgNABgDARIAhAAIAAAAg");
	this.shape_11.setTransform(54.8,76.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AgyA2IALgXQARAJARAAQAaAAAAgYIAAgEQgOAPgQAAQgTAAgMgMQgNgNAAgUQAAgVANgNQAMgNARAAQASAAANAOIAAgMIAjAAIAABLQAAAbgNANQgOAOgdAAQgbAAgWgMgAgOggQgFAFAAAJIAAAAQAAAIAFAGQAGAEAIAAQAJAAAGgEQAFgGABgIQgBgJgFgFQgGgGgJAAQgIAAgGAGg");
	this.shape_12.setTransform(42.85,77.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AgmAkQgQgOAAgWIAAAAQAAgVAQgPQAQgPAWAAQAYAAAPAPQAQAPAAAVIAAAAQAAAVgQAPQgQAQgXAAQgXAAgPgQgAgOgPQgGAGAAAJIAAAAQAAAJAGAHQAGAGAIABQAJAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgGgHgJABQgJgBgFAHg");
	this.shape_13.setTransform(25.775,76.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_14.setTransform(15.725,74.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_15.setTransform(2.725,74.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E87D1D").s().p("AgnApQgJgKAAgRIAAhAIAjAAIAAA1QAAARANAAQAGAAAEgEQAFgFAAgIIAAg1IAiAAIAABjIgiAAIAAgOQgNAQgQAAQgQAAgJgKg");
	this.shape_16.setTransform(-7.025,76.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E87D1D").s().p("AgmAkQgQgOAAgWIAAAAQAAgVAQgPQAQgPAWAAQAYAAAPAPQAQAPAAAVIAAAAQAAAVgQAPQgQAQgXAAQgXAAgPgQgAgOgPQgGAGAAAJIAAAAQAAAJAGAHQAGAGAIABQAJAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgGgHgJABQgJgBgFAHg");
	this.shape_17.setTransform(-18.825,76.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E87D1D").s().p("AgTA2IAAAMIgjAAIAAiFIAjAAIAAAwQANgPAQAAQATAAAMANQANAPAAAWIAAABQAAAWgMAQQgNANgTAAQgQAAgNgOgAgNAAQgHAHAAAJIAAABQAAAJAHAGQAFAHAIAAQAIAAAHgHQAFgGABgJIAAgBQgBgJgFgHQgHgFgIgBQgIABgFAFg");
	this.shape_18.setTransform(-30.8,74.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E87D1D").s().p("AgmAsQgKgIAAgPIAAgBQAAgPAMgGQAJgJATABQANAAAJADIAAgCQABgQgUAAQgMAAgPAGIgHgZQATgHAUgBQAaAAAMANQAKAKAAAVIAAA5IgiAAIAAgLQgMANgQAAQgPAAgJgIgAgOASIAAABQAAAFAEADQADADAGAAQAGAAAFgEQAFgFAAgHIAAgFQgGgDgIABQgPgBAAAMg");
	this.shape_19.setTransform(-42.9,76.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E87D1D").s().p("AgrAlIANgVQASAMAPAAQAJAAAAgGIAAAAQAAgDgEgCIgLgEQgRgEgIgGQgKgHAAgNIAAgBQAAgPALgJQALgJARAAQAXAAASAMIgMAWQgRgJgNAAQgHAAAAAFQAAADAEACIALAEQASAFAHAFQALAHAAANIAAABQAAAQgMAJQgKAIgTAAQgZAAgVgPg");
	this.shape_20.setTransform(-58.125,76.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E87D1D").s().p("AgQBDIAAhjIAhAAIAABjgAgRgpIAAgZIAjAAIAAAZg");
	this.shape_21.setTransform(-65.45,74.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E87D1D").s().p("AAjB9IgxhMIgfAAIAABMIhFAAIAAj5IB1AAQA3AAAbAbQAWAWAAAkIAAABQAAA2g0AWIA8BXgAgtgEIAtAAQASAAAKgIQAJgIAAgNIAAgBQAAgeglAAIgtAAg");
	this.shape_22.setTransform(63.425,48.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E87D1D").s().p("AhkB9IAAj5IDHAAIAAA7IiDAAIAAAmIB3AAIAAA1Ih3AAIAAAoICFAAIAAA7g");
	this.shape_23.setTransform(38.325,48.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E87D1D").s().p("AgiB9IAAi8IhKAAIAAg9IDZAAIAAA9IhLAAIAAC8g");
	this.shape_24.setTransform(14.225,48.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E87D1D").s().p("AA6B9IhqiIIAACIIhFAAIAAj5IBBAAIBlCDIAAiDIBFAAIAAD5g");
	this.shape_25.setTransform(-11.525,48.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E87D1D").s().p("AhkB9IAAj5IDHAAIAAA7IiDAAIAAAmIB3AAIAAA1Ih3AAIAAAoICFAAIAAA7g");
	this.shape_26.setTransform(-36.975,48.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E87D1D").s().p("AhRBdQglglAAg3IAAgBQAAg2AlglQAlgmA4AAQBEAAAmA0Ig0AoQgYgdgfAAQgZAAgRATQgRAUAAAbIAAAAQAAAcARATQARAUAZAAQAgAAAYgfIA0AlQgoA5hGAAQg1AAglglg");
	this.shape_27.setTransform(-61.975,48.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E87D1D").s().p("AhkB9IAAj5IDHAAIAAA7IiDAAIAAAmIB3AAIAAA1Ih3AAIAAAoICFAAIAAA7g");
	this.shape_28.setTransform(51.525,17.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E87D1D").s().p("AgiB9IAAi8IhKAAIAAg9IDZAAIAAA9IhLAAIAAC8g");
	this.shape_29.setTransform(27.425,17.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E87D1D").s().p("AghB9IAAj5IBDAAIAAD5g");
	this.shape_30.setTransform(9.9,17.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E87D1D").s().p("AAtB9IAAhfIhZAAIAABfIhFAAIAAj5IBFAAIAABeIBZAAIAAheIBFAAIAAD5g");
	this.shape_31.setTransform(-9.5,17.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E87D1D").s().p("AAyB+IgyiPIgxCPIg9AAIhSj6IBJAAIArCPIAwiQIA7AAIAvCQIAsiPIBIAAIhTD6g");
	this.shape_32.setTransform(-42.95,17.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3a, new cjs.Rectangle(-86.6,0,173.39999999999998,105.3), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape.setTransform(44.275,98.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AggAzIAAhjIAiAAIAAAUQAJgWAWABIAAAkIgDAAQgcAAAAAhIAAAfg");
	this.shape_1.setTransform(38,95.4479);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAPgPAUAAQAZAAANAQQAMAPAAAWIAAAHIhCAAQAFARAQAAQAMAAAKgKIATAQQgPAUgcAAQgWAAgPgPgAASgIQgBgHgFgFQgFgGgHAAQgNABgDARIAiAAIAAAAg");
	this.shape_2.setTransform(28.2,95.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgQBDIAAhjIAiAAIAABjgAgRgpIAAgZIAjAAIAAAZg");
	this.shape_3.setTransform(19.9,93.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAOBDIAAg2QABgQgOAAQgGAAgEAEQgEAEAAAIIAAA2IgjAAIAAiFIAjAAIAAAxQAMgRAQABQAQgBAJAKQAJAKAAAQIAABBg");
	this.shape_4.setTransform(11.35,93.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_5.setTransform(1.475,94.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_6.setTransform(-5.125,93.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgmAsQgKgJAAgOIAAgBQAAgPALgGQALgJARAAQANABAKADIAAgCQAAgQgSAAQgNAAgPAGIgHgZQASgHAVgBQAaAAAMANQALAKAAAVIAAA5IgjAAIAAgLQgLANgRAAQgPgBgJgHgAgOASIAAABQAAAFADADQAEADAFAAQAHAAAFgFQAFgEAAgHIAAgFQgGgDgIABQgPgBAAAMg");
	this.shape_7.setTransform(-13.6,95.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAOgPAVAAQAZAAANAQQAMAPAAAWIAAAHIhCAAQAFARAQAAQALAAALgKIATAQQgPAUgcAAQgXAAgOgPgAARgIQgBgHgEgFQgFgGgHAAQgNABgDARIAhAAIAAAAg");
	this.shape_8.setTransform(-24.5,95.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AAOBDIAAg2QAAgQgNAAQgGAAgEAEQgEAEAAAIIAAA2IgjAAIAAiFIAjAAIAAAxQAMgRAQABQAQgBAJAKQAJAKAAAQIAABBg");
	this.shape_9.setTransform(-35.8,93.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_10.setTransform(64.275,74.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAOgPAVAAQAZAAANAQQAMAPAAAWIAAAHIhBAAQADARARAAQALAAALgKIATAQQgQAUgbAAQgXAAgOgPgAARgIQAAgHgFgFQgFgGgHAAQgNABgDARIAhAAIAAAAg");
	this.shape_11.setTransform(54.8,76.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AgyA2IALgXQARAJARAAQAaAAAAgYIAAgEQgOAPgQAAQgTAAgMgMQgNgNAAgUQAAgVANgNQAMgNARAAQASAAANAOIAAgMIAjAAIAABLQAAAbgNANQgOAOgdAAQgbAAgWgMgAgOggQgFAFAAAJIAAAAQAAAIAFAGQAGAEAIAAQAJAAAGgEQAFgGABgIQgBgJgFgFQgGgGgJAAQgIAAgGAGg");
	this.shape_12.setTransform(42.85,77.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AgmAkQgQgOAAgWIAAAAQAAgVAQgPQAQgPAWAAQAYAAAPAPQAQAPAAAVIAAAAQAAAVgQAPQgQAQgXAAQgXAAgPgQgAgOgPQgGAGAAAJIAAAAQAAAJAGAHQAGAGAIABQAJAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgGgHgJABQgJgBgFAHg");
	this.shape_13.setTransform(25.775,76.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_14.setTransform(15.725,74.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_15.setTransform(2.725,74.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E87D1D").s().p("AgnApQgJgKAAgRIAAhAIAjAAIAAA1QAAARANAAQAGAAAEgEQAFgFAAgIIAAg1IAiAAIAABjIgiAAIAAgOQgNAQgQAAQgQAAgJgKg");
	this.shape_16.setTransform(-7.025,76.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E87D1D").s().p("AgmAkQgQgOAAgWIAAAAQAAgVAQgPQAQgPAWAAQAYAAAPAPQAQAPAAAVIAAAAQAAAVgQAPQgQAQgXAAQgXAAgPgQgAgOgPQgGAGAAAJIAAAAQAAAJAGAHQAGAGAIABQAJAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgGgHgJABQgJgBgFAHg");
	this.shape_17.setTransform(-18.775,76.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E87D1D").s().p("AgTA2IAAAMIgjAAIAAiFIAjAAIAAAwQANgPAQAAQATAAAMANQANAPAAAWIAAABQAAAWgMAQQgNANgTAAQgQAAgNgOgAgNAAQgHAHAAAJIAAABQAAAJAHAGQAFAHAIAAQAIAAAHgHQAFgGABgJIAAgBQgBgJgFgHQgHgFgIgBQgIABgFAFg");
	this.shape_18.setTransform(-30.8,74.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E87D1D").s().p("AgmAsQgKgIAAgPIAAgBQAAgPAMgGQAJgJATABQANAAAJADIAAgCQABgQgUAAQgMAAgPAGIgHgZQATgHAUgBQAaAAAMANQAKAKAAAVIAAA5IgiAAIAAgLQgMANgQAAQgPAAgJgIgAgOASIAAABQAAAFAEADQADADAGAAQAGAAAFgEQAFgFAAgHIAAgFQgGgDgIABQgPgBAAAMg");
	this.shape_19.setTransform(-42.9,76.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E87D1D").s().p("AgrAlIANgVQASAMAPAAQAJAAAAgGIAAAAQAAgDgEgCIgLgEQgRgEgIgGQgKgHAAgNIAAgBQAAgPALgJQALgJARAAQAXAAASAMIgMAWQgRgJgNAAQgHAAAAAFQAAADAEACIALAEQASAFAHAFQALAHAAANIAAABQAAAQgMAJQgKAIgTAAQgZAAgVgPg");
	this.shape_20.setTransform(-58.125,76.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E87D1D").s().p("AgQBDIAAhjIAhAAIAABjgAgRgpIAAgZIAjAAIAAAZg");
	this.shape_21.setTransform(-65.45,74.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E87D1D").s().p("AghB9IAAheIhgibIBPAAIAzBbIAzhbIBOAAIhgCaIAABfg");
	this.shape_22.setTransform(54.55,48.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E87D1D").s().p("AheB9IAAj5IBFAAIAAC8IB4AAIAAA9g");
	this.shape_23.setTransform(36.2,48.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E87D1D").s().p("AgiB9IAAj5IBEAAIAAD5g");
	this.shape_24.setTransform(18.7,48.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E87D1D").s().p("ABAB9IAAiOIhABgIAAAAIhAhgIAACOIhEAAIAAj5IBJAAIA7BhIA7hhIBKAAIAAD5g");
	this.shape_25.setTransform(-2.575,48.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E87D1D").s().p("ABBB+IgSgtIhfAAIgSAtIhIAAIBqj7IBBAAIBqD7gAAbAbIgbhGIgcBGIA3AAg");
	this.shape_26.setTransform(-32.175,48.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E87D1D").s().p("AhjB9IAAj5IDHAAIAAA9IiCAAIAAAqIB1AAIAAA5Ih1AAIAABZg");
	this.shape_27.setTransform(-55.125,48.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E87D1D").s().p("AAjB9IgxhMIgfAAIAABMIhFAAIAAj5IB1AAQA3AAAbAbQAWAWAAAkIAAABQAAA2g0AWIA8BXgAgtgEIAtAAQASAAAKgIQAJgIAAgNIAAgBQAAgeglAAIgtAAg");
	this.shape_28.setTransform(40.725,17.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E87D1D").s().p("AhUBjQgfgdAAg5IAAiLIBFAAIAACKQAAA0AuAAQAuABAAgzIAAiMIBGAAIAACKQAAA6ggAdQgeAcg2AAQg2AAgegcg");
	this.shape_29.setTransform(13.6,17.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E87D1D").s().p("AhfBcQgmglAAg2IAAgBQAAg1AmgmQAngmA4AAQA6AAAmAmQAmAlAAA2IAAAAQAAA2gmAmQgnAmg5AAQg5AAgmgmgAgtgvQgSAUAAAbIAAAAQAAAcASATQASAUAbAAQAcAAASgUQARgTAAgbIAAgBQAAgbgRgTQgSgUgcAAQgbAAgSATg");
	this.shape_30.setTransform(-14.725,17.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E87D1D").s().p("AghB9IAAheIhgibIBPAAIAyBbIA0hbIBOAAIhgCaIAABfg");
	this.shape_31.setTransform(-39.7,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(-71.2,0,142.5,105.3), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape.setTransform(44.225,66.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AggAzIAAhjIAiAAIAAAUQAJgWAWABIAAAkIgDAAQgcAAAAAhIAAAfg");
	this.shape_1.setTransform(38,63.5979);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAOgPAVAAQAZAAANAQQAMAPAAAXIAAAGIhCAAQAFARAQAAQALAAALgLIATARQgPAUgcAAQgXAAgOgPgAARgIQgBgHgEgFQgFgFgHgBQgNAAgDASIAhAAIAAAAg");
	this.shape_2.setTransform(28.15,63.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgQBDIAAhjIAiAAIAABjgAgRgpIAAgZIAjAAIAAAZg");
	this.shape_3.setTransform(19.85,61.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAOBDIAAg2QABgPgOgBQgGABgEADQgEAEAAAIIAAA2IgjAAIAAiFIAjAAIAAAxQAMgQAQgBQAQAAAJAKQAJAKAAAQIAABBg");
	this.shape_4.setTransform(11.35,61.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_5.setTransform(1.425,62.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_6.setTransform(-5.175,61.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgmAsQgKgJAAgOIAAAAQAAgQAMgGQAJgJATAAQANAAAJAFIAAgDQABgPgUAAQgMgBgPAGIgHgZQATgHAUAAQAaAAAMAMQAKAKAAAVIAAA5IgiAAIAAgLQgMAMgQAAQgPAAgJgHgAgOASIAAABQAAAFAEADQADADAGAAQAGAAAFgFQAFgEAAgHIAAgFQgGgCgIgBQgPAAAAAMg");
	this.shape_7.setTransform(-13.65,63.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAOgPAVAAQAZAAANAQQAMAPAAAXIAAAGIhCAAQAFARAQAAQALAAALgLIATARQgPAUgcAAQgXAAgOgPgAARgIQgBgHgEgFQgFgFgHgBQgNAAgDASIAhAAIAAAAg");
	this.shape_8.setTransform(-24.5,63.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AAPBDIAAg2QgBgPgOgBQgFABgEADQgEAEAAAIIAAA2IgjAAIAAiFIAjAAIAAAxQAMgQARgBQAPAAAKAKQAIAKAAAQIAABBg");
	this.shape_9.setTransform(-35.85,61.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_10.setTransform(71.725,43.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAPgPAUAAQAYAAAOAQQAMAPAAAWIAAAHIhBAAQADARARAAQALAAALgKIATAQQgPAUgcAAQgXAAgOgPgAASgIQgBgHgFgFQgFgGgHAAQgNABgDARIAiAAIAAAAg");
	this.shape_11.setTransform(62.3,44.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AgzA2IAMgXQARAJARAAQAZAAAAgYIAAgEQgMAPgRAAQgTAAgNgMQgNgNABgUQgBgVANgNQANgNASAAQARAAANAOIAAgMIAiAAIAABLQABAbgNANQgOAOgdAAQgbAAgXgMgAgOggQgFAFAAAJIAAAAQAAAIAFAGQAHAEAHAAQAJAAAGgEQAGgGgBgIQABgJgGgFQgGgGgJAAQgHAAgHAGg");
	this.shape_12.setTransform(50.35,45.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AgmAkQgQgOAAgWIAAAAQAAgVAQgPQAQgPAWAAQAYAAAPAPQAQAPAAAVIAAAAQAAAVgQAPQgQAQgXAAQgXAAgPgQgAgOgPQgGAGAAAJIAAAAQAAAJAGAHQAGAGAIABQAJAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgGgHgJABQgJgBgFAHg");
	this.shape_13.setTransform(33.275,44.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_14.setTransform(23.225,43.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AgWAeIAAgnIgMAAIAAgcIAMAAIAAgZIAiAAIAAAZIAXAAIAAAcIgXAAIAAAhQAAAKAJAAQAGAAAHgEIAAAbQgKAGgOAAQggAAAAghg");
	this.shape_15.setTransform(10.225,43.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E87D1D").s().p("AgnApQgJgKAAgRIAAhAIAjAAIAAA1QAAARANAAQAGAAAEgEQAFgFAAgIIAAg1IAiAAIAABjIgiAAIAAgOQgNAQgQAAQgQAAgJgKg");
	this.shape_16.setTransform(0.475,44.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E87D1D").s().p("AgmAkQgQgOAAgWIAAAAQAAgVAQgPQAQgPAWAAQAYAAAPAPQAQAPAAAVIAAAAQAAAVgQAPQgQAQgXAAQgXAAgPgQgAgOgPQgGAGAAAJIAAAAQAAAJAGAHQAGAGAIABQAJAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgGgHgJABQgJgBgFAHg");
	this.shape_17.setTransform(-11.325,44.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E87D1D").s().p("AgSA2IAAAMIgkAAIAAiFIAkAAIAAAwQAMgPAQAAQATAAAMANQANAPAAAWIAAABQABAWgNAQQgNANgTAAQgQAAgMgOgAgOAAQgFAGAAAKIAAABQAAAJAFAGQAGAHAIAAQAIAAAHgHQAFgGAAgJIAAgBQAAgKgFgGQgHgFgIgBQgIABgGAFg");
	this.shape_18.setTransform(-23.35,42.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E87D1D").s().p("AgmAsQgJgJAAgOIAAgBQgBgPALgGQALgJARABQANgBALAEIAAgCQgBgQgSAAQgNAAgPAGIgHgZQATgHAUgBQAaAAAMANQALAKAAAVIAAA5IgjAAIAAgLQgMANgQAAQgPgBgJgHgAgOASIAAABQAAAFAEADQADADAGAAQAGAAAFgFQAFgEAAgHIAAgFQgHgDgHABQgPgBAAAMg");
	this.shape_19.setTransform(-35.4,44.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E87D1D").s().p("AgiAlQgPgOAAgXIAAAAQAAgVAOgPQAPgPAUAAQAZAAANAQQAMAPAAAWIAAAHIhCAAQAEARARAAQAMAAAKgKIATAQQgQAUgbAAQgWAAgPgPgAASgIQgCgHgEgFQgFgGgHAAQgNABgDARIAiAAIAAAAg");
	this.shape_20.setTransform(-51.35,44.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E87D1D").s().p("AggAzIAAhjIAiAAIAAAUQAJgWAWABIAAAkIgDAAQgcAAAAAhIAAAfg");
	this.shape_21.setTransform(-60.5,44.1479);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E87D1D").s().p("AgmAsQgKgJAAgOIAAgBQAAgPAMgGQAJgJATABQANgBAJAEIAAgCQABgQgUAAQgMAAgPAGIgHgZQATgHAUgBQAaAAAMANQAKAKAAAVIAAA5IgiAAIAAgLQgMANgQAAQgPgBgJgHgAgOASIAAABQAAAFADADQAEADAFAAQAHAAAFgFQAFgEAAgHIAAgFQgHgDgHABQgPgBAAAMg");
	this.shape_22.setTransform(-70.45,44.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E87D1D").s().p("AhUBjQgfgdAAg5IAAiLIBGAAIAACKQgBA0AuAAQAuABAAgzIAAiMIBGAAIAACKQAAA6ggAdQgeAcg2AAQg3AAgdgcg");
	this.shape_23.setTransform(26.4,17.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E87D1D").s().p("AhfBcQgmglAAg2IAAgBQAAg1AmgmQAngmA4AAQA6AAAmAmQAmAlAAA2IAAAAQAAA2gmAmQgnAmg5AAQg5AAgmgmgAgtgvQgSAUAAAbIAAAAQAAAcASATQASAUAbAAQAcAAASgUQARgTAAgbIAAgBQAAgbgRgTQgSgUgcAAQgbAAgSATg");
	this.shape_24.setTransform(-1.925,17.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E87D1D").s().p("AghB9IAAheIhgibIBPAAIAzBbIAzhbIBNAAIhfCaIAABfg");
	this.shape_25.setTransform(-26.9,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(-85.5,0,171.1,73.5), null);


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


(lib.BKGD_green_type = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFAC8").s().p("AgsBFIAAiHIAvAAIAAAcQAMgfAeABIAAAyIgEAAQgmAAAAAtIAAAqg");
	this.shape.setTransform(120.625,42.1215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAC8").s().p("AgvA0QgUgVAAgfIAAAAQAAgdATgUQATgVAdAAQAhAAASAXQARATAAAfIAAAKIhaAAQAGAXAXAAQAPgBAPgOIAaAWQgWAcglAAQgfAAgUgTgAAYgKQgCgLgGgHQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_1.setTransform(107.625,42.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAC8").s().p("AgaBJIAAARIgvAAIAAi2IAvAAIAABCQARgWAXAAQAaAAAQATQATAUgBAfIAAAAQABAggTAUQgRATgYAAQgYAAgRgUgAgSAAQgJAIAAAOIAAAAQAAAOAJAIQAHAJALAAQAMAAAHgJQAJgIgBgOIAAAAQABgOgJgIQgHgIgMAAQgLAAgHAIg");
	this.shape_2.setTransform(92.2,40.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAC8").s().p("AA+BFIAAhIQAAgXgTAAQgIAAgGAGQgFAGAAALIAABIIguAAIAAhIQAAgXgTAAQgJAAgFAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQAQgWAYAAQAaAAAMAWQATgWAaAAQAWAAAMANQAMANAAAYIAABXg");
	this.shape_3.setTransform(71.775,42.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAC8").s().p("AgvA0QgUgVAAgfIAAAAQAAgdATgUQATgVAdAAQAhAAASAXQARATAAAfIAAAKIhaAAQAGAXAXAAQAPgBAPgOIAaAWQgWAcglAAQgfAAgUgTgAAYgKQgCgLgGgHQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_4.setTransform(52.375,42.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAC8").s().p("AgVBEIg2iHIAyAAIAZBOIAahOIAyAAIg3CHg");
	this.shape_5.setTransform(37.375,42.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAC8").s().p("Ag0AyQgWgUAAgeIAAAAQAAgdAWgUQAVgVAgAAQAfAAAWAVQAUAUABAdIAAAAQgBAegUAUQgWAVggAAQgfAAgVgVgAgUgVQgIAJAAAMIAAAAQABANAHAIQAJAJAMAAQAMAAAIgJQAIgIAAgNIAAAAQgBgLgHgJQgJgKgMAAQgMAAgIAJg");
	this.shape_6.setTransform(21.7,42.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAC8").s().p("AAoBXIhKheIAABeIgwAAIAAiuIAuAAIBGBcIAAhcIAxAAIAACug");
	this.shape_7.setTransform(4.075,40.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFAC8").s().p("AAUBFIAAhIQAAgXgUAAQgHAAgGAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQARgWAWAAQAVAAANANQAMAOAAAXIAABXg");
	this.shape_8.setTransform(-19.85,42.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFAC8").s().p("AgXBbIAAiGIAvAAIAACGgAgYg3IAAgjIAxAAIAAAjg");
	this.shape_9.setTransform(-31.175,39.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAC8").s().p("AgsBFIAAiHIAvAAIAAAcQAMgfAeABIAAAyIgEAAQgmAAAAAtIAAAqg");
	this.shape_10.setTransform(-46.075,42.1215);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAC8").s().p("AgvA0QgUgVAAgfIAAAAQAAgdATgUQATgVAdAAQAhAAASAXQARATAAAfIAAAKIhaAAQAGAXAXAAQAPgBAPgOIAaAWQgWAcglAAQgfAAgUgTgAAYgKQgCgLgGgHQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_11.setTransform(-59.075,42.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAC8").s().p("AgfApIAAg2IgQAAIAAgmIAQAAIAAgiIAvAAIAAAiIAfAAIAAAmIgfAAIAAAtQAAAOANAAQAJAAAJgFIAAAlQgPAIgSAAQgtAAAAgtg");
	this.shape_12.setTransform(-71.8,40.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFAC8").s().p("AAUBFIAAhIQAAgXgTAAQgIAAgGAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQARgWAWAAQAWAAAMANQAMAOAAAXIAABXg");
	this.shape_13.setTransform(-84.6,42.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFAC8").s().p("AgvA0QgUgVAAgfIAAAAQAAgdATgUQATgVAdAAQAhAAASAXQARATAAAfIAAAKIhaAAQAGAXAXAAQAPgBAPgOIAaAWQgWAcglAAQgfAAgUgTgAAYgKQgCgLgGgHQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_14.setTransform(-99.775,42.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFAC8").s().p("Ag5BBQgagZAAgnIAAgBQAAgmAagZQAbgbAnAAQAvAAAbAlIglAcQgRgVgVAAQgSAAgMANQgLAOAAATIAAAAQAAAUALANQAMAOASAAQAWgBARgUIAkAZQgcAogxAAQgkAAgbgag");
	this.shape_15.setTransform(-115.9,40.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFAC8").s().p("AgvA0QgUgVAAgeIAAgBQAAgdATgUQATgVAdAAQAhAAASAXQARATAAAfIAAAKIhaAAQAGAXAXAAQAPgBAPgOIAaAWQgWAcglAAQgfAAgUgTgAAYgKQgCgLgGgHQgGgHgKAAQgSAAgFAZIAvAAIAAAAg");
	this.shape_16.setTransform(98.775,15.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAC8").s().p("AgfApIAAg2IgQAAIAAgmIAQAAIAAgiIAvAAIAAAiIAgAAIAAAmIggAAIAAAtQAAAOANAAQAJAAAJgFIAAAlQgPAIgSAAQgtAAAAgtg");
	this.shape_17.setTransform(86.05,13.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAC8").s().p("AgXBbIAAiGIAvAAIAACGgAgYg3IAAgjIAxAAIAAAjg");
	this.shape_18.setTransform(77.425,12.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAC8").s().p("AAUBbIAAhJQAAgWgTAAQgIAAgGAFQgFAGAAALIAABJIgwAAIAAi1IAwAAIAABCQARgWAWAAQAVAAANANQAMAOAAAWIAABYg");
	this.shape_19.setTransform(66.1,12.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAC8").s().p("AAjBYIgjhjIgiBjIgqAAIg7ivIAzAAIAfBlIAihlIAoAAIAiBlIAehlIAzAAIg7Cvg");
	this.shape_20.setTransform(44.575,13.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAC8").s().p("Ag0AyQgWgUAAgdIAAgBQAAgdAWgUQAVgVAgAAQAgAAAUAVQAWAUAAAdIAAAAQAAAegWAUQgVAVggAAQgfAAgVgVgAgUgVQgIAJAAAMIAAAAQABANAHAIQAJAJAMAAQAMAAAIgJQAIgIAAgMIAAgBQgBgLgHgJQgJgKgMAAQgMAAgIAJg");
	this.shape_21.setTransform(16.2,15.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFAC8").s().p("AgeApIAAg2IgQAAIAAgmIAQAAIAAgiIAuAAIAAAiIAfAAIAAAmIgfAAIAAAtQAAAOANAAQAJAAAJgFIAAAlQgOAIgTAAQgsAAAAgtg");
	this.shape_22.setTransform(2.85,13.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFAC8").s().p("AhGBKIAQggQAXANAYAAQAjAAgBghIAAgFQgRAUgXAAQgaAAgRgRQgRgRgBgbIAAgBQABgcARgTQARgQAZAAQAXgBASAUIAAgQIAwAAIAABlQgBAmgRAQQgTAUgogBQglAAgfgPgAgTgsQgIAIAAALIAAABQAAALAIAHQAIAHALAAQAMAAAIgHQAIgIgBgKIAAgBQABgLgIgIQgIgIgMABQgLgBgIAIg");
	this.shape_23.setTransform(-17.3,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFAC8").s().p("AAUBFIAAhIQAAgXgUAAQgHAAgFAGQgGAGAAALIAABIIgwAAIAAiGIAwAAIAAATQARgWAWAAQAWAAAMANQAMAOAAAXIAABXg");
	this.shape_24.setTransform(-33.05,15.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFAC8").s().p("AgXBbIAAiGIAvAAIAACGgAgYg3IAAgjIAxAAIAAAjg");
	this.shape_25.setTransform(-44.375,12.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFAC8").s().p("AA+BFIAAhIQAAgXgTAAQgIAAgGAGQgFAGAAALIAABIIguAAIAAhIQAAgXgTAAQgJAAgFAGQgFAGAAALIAABIIgwAAIAAiGIAwAAIAAATQAQgWAYAAQAaAAAMAWQATgWAaAAQAWAAAMANQAMANAAAYIAABXg");
	this.shape_26.setTransform(-59.875,15.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFAC8").s().p("Ag0AyQgWgUAAgdIAAgBQAAgdAWgUQAVgVAgAAQAfAAAWAVQAUAUAAAdIAAAAQAAAegUAUQgWAVggAAQgfAAgVgVgAgUgVQgIAJABAMIAAAAQAAANAHAIQAJAJAMAAQAMAAAIgJQAHgIABgMIAAgBQAAgLgJgJQgIgKgMAAQgMAAgIAJg");
	this.shape_27.setTransform(-79.9,15.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFAC8").s().p("Ag5BBQgagZAAgnIAAgBQAAgmAagZQAbgbAnAAQAvAAAbAlIglAcQgQgVgXAAQgQAAgNANQgLAOAAATIAAAAQAAAUALANQANAOAQAAQAXgBARgUIAlAZQgdAogxAAQgkAAgbgag");
	this.shape_28.setTransform(-96.65,13.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD_green_type, new cjs.Rectangle(-146,0,292.1,56), null);


(lib.BKGD_green = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#8D8B00").s().p("A3bFAIAAp/MAu3AAAIAAJ/g");
	this.shape.setTransform(0,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD_green, new cjs.Rectangle(-150,0,300,64), null);


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
	this.shape.setTransform(55.925,37.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(40.875,37.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAghIAAgBQAAghAYgWQAYgYAiAAQAkgBAYAYQAXAXAAAhIAAAAQAAAigXAXQgZAXgjABQgjgBgXgXgAgcgcQgKALAAARIAAAAQAAASALALQALANAQAAQASAAALgNQAKgMAAgQIAAgBQAAgQgKgMQgMgNgRAAQgQABgMAMg");
	this.shape_2.setTransform(23.275,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_3.setTransform(4.475,37.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AhIBNIAAiZIA7AAQAoAAAYAVQAXAVgBAiQAAAigWAVQgZAWgoAAgAgdAnIARAAQATAAALgKQAMgKAAgTIAAAAQAAgSgMgKQgLgLgTAAIgRAAg");
	this.shape_4.setTransform(-19.4,37.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_5.setTransform(-36.725,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_6.setTransform(-54.15,37.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
(lib.WhiteCenter_Healthier_Display_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [369];
	// timeline functions:
	this.frame_369 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(369).call(this.frame_369).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},144).wait(226));

	// HEAD3a
	this.instance = new lib.HEAD3a();
	this.instance.setTransform(-149.85,89.85,1.7347,1.7347,0,0,0,0.1,35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({_off:false},0).to({x:149.95},20,cjs.Ease.quintInOut).wait(57).to({alpha:0},15).to({_off:true},1).wait(135));

	// HEAD2a
	this.instance_1 = new lib.HEAD2a();
	this.instance_1.setTransform(-149.85,89.85,1.7347,1.7347,0,0,0,0.1,35);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({x:150},20,cjs.Ease.quintInOut).wait(63).to({alpha:0},11).to({_off:true},1).wait(216));

	// HEAD1a
	this.instance_2 = new lib.HEAD1a();
	this.instance_2.setTransform(150,86.3,1.7347,1.7347,0,0,0,0.1,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({alpha:0},10).to({_off:true},1).wait(300));

	// B4
	this.instance_3 = new lib.B4();
	this.instance_3.setTransform(935.3,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(257).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:87.45},13).wait(100));

	// dot
	this.instance_4 = new lib.dot();
	this.instance_4.setTransform(153.75,84,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(295).to({_off:false},0).wait(75));

	// B4_copy
	this.instance_5 = new lib.B4copy();
	this.instance_5.setTransform(267.2,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(285).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:87.45},13).wait(72));

	// B5
	this.instance_6 = new lib.B5();
	this.instance_6.setTransform(889.55,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(304).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:105.6},13).wait(53));

	// dot_copy
	this.instance_7 = new lib.dot();
	this.instance_7.setTransform(193.25,101.5,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(325).to({_off:false},0).wait(45));

	// B5_copy
	this.instance_8 = new lib.B5copy();
	this.instance_8.setTransform(119.3,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(322).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:105.6},13).wait(35));

	// B6
	this.instance_9 = new lib.B6();
	this.instance_9.setTransform(973.25,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(332).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:242.5,y:123.85},13).wait(25));

	// dot_copy_copy
	this.instance_10 = new lib.dot();
	this.instance_10.setTransform(158.75,120,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(349).to({_off:false},0).wait(21));

	// B6_copy
	this.instance_11 = new lib.B6copy();
	this.instance_11.setTransform(212.35,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(339).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:242.5,y:123.85},13).wait(18));

	// B7
	this.instance_12 = new lib.B7();
	this.instance_12.setTransform(612.1,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(347).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:141.95},15).wait(8));

	// B7_copy
	this.instance_13 = new lib.B7copy();
	this.instance_13.setTransform(612.1,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(353).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:141.95},15).wait(2));

	// BKGD_green_type
	this.instance_14 = new lib.BKGD_green_type();
	this.instance_14.setTransform(150,-33,1,1,0,0,0,0,28);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(236).to({_off:false},0).to({y:32},20,cjs.Ease.quintOut).wait(114));

	// BKGD_green
	this.instance_15 = new lib.BKGD_green();
	this.instance_15.setTransform(150,-33,1,1,0,0,0,0,32);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(236).to({_off:false},0).to({y:32},20,cjs.Ease.quintOut).wait(114));

	// SHAD_top
	this.instance_16 = new lib.SHAD();
	this.instance_16.setTransform(0,-297,1,1,180,0,0,150,100);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(236).to({_off:false},0).to({y:-232},20,cjs.Ease.quintOut).wait(114));

	// LOGO
	this.instance_17 = new lib.HPlogowTag();
	this.instance_17.setTransform(147.45,303.65,0.9503,0.9503,0,0,0,0.1,0);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(236).to({_off:false},0).to({y:202.65},20,cjs.Ease.quintOut).wait(114));

	// POLY
	this.instance_18 = new lib.POLY();
	this.instance_18.setTransform(150,300,1,1,0,0,0,0,-50);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(236).to({_off:false},0).to({y:200},20,cjs.Ease.quintOut).wait(114));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBCA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(370));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-553.2,-292,1556.4,642);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WhiteCenter_Healthier_Display_300x250_atlas_P_1.png", id:"WhiteCenter_Healthier_Display_300x250_atlas_P_1"},
		{src:"images/WhiteCenter_Healthier_Display_300x250_atlas_NP_1.jpg", id:"WhiteCenter_Healthier_Display_300x250_atlas_NP_1"}
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