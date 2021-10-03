Webcam.set({
	width: 310,
	height: 300,
	image_format: "png",
	png_quality: 90,
	constraints: {
		facingMode: "enviroment"
	}
});
cam = document.getElementById("cam");
Webcam.attach(cam);

function snap() {
	Webcam.snap(function (data_uri) {
		document.getElementById("res").innerHTML = "<img src='" + data_uri + "' id='cap_img'>";
	});
}
console.log("ml5:", ml5.version);
classifier = ml5.imageClassifier("MobileNet", model_loaded);

function model_loaded() {
	console.log("model loaded!!!!!!!!!");
}

function scan() {
	img = document.getElementById("cap_img");
	classifier.classify(img, got_res);
}

function got_res(error, res) {
	if (error) {
		console.error(error);
	}else{
		console.log(res);
		document.getElementById("obj").innerHTML = res[0].label;
		document.getElementById("obj2").innerHTML = res[1].label;
		document.getElementById("obj3").innerHTML = res[2].label;
	}
}
