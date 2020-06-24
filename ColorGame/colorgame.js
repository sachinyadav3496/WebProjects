//var colors = [
//	"rgb(255, 0, 0)",
//	"rgb(255, 255, 0)",
//	"rgb(0, 255, 0)",
//	"rgb(0, 255, 255)",
//	"rgb(0, 0, 255)",
//	"rgb(255 , 0, 255)"
//		]
var numSquares = 6
var colors = generateRandomColors(numSquares);
var squre = document.querySelectorAll(".squre");
var pickColor = pickOne()
var dsp  = document.getElementById('color');
var messageDisplay = document.querySelector("#message"); 
dsp.textContent=pickColor;
var h1 = document.querySelector('h1')
var resetButton = document.querySelector("#reset") 
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click",function(){
	messageDisplay.textContent = null;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	h1.style.background = "steelblue";
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickColor = pickOne()
	dsp.textContent = pickColor;
	for(var i=0;i<squre.length;i++){
		if(colors[i]) { 
			squre[i].style.background = colors[i];
		}
		else { squre[i].style.display= 'none'}
	}
})

hardBtn.addEventListener("click",function(){
	messageDisplay.textContent = null;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	h1.style.background = "steelblue";
	colors = generateRandomColors(numSquares);
	pickColor = pickOne()
	dsp.textContent = pickColor;
	for(var i=0;i<squre.length;i++){
			squre[i].style.background = colors[i];
			 squre[i].style.display= 'block';
	}

})

resetButton.addEventListener('click',function(){

	messageDisplay.textContent = null;
	h1.style.background = 'steelblue';
	colors = generateRandomColors(colors.length);
	pickColor = pickOne();
	dsp.textContent = pickColor;
	for(var i=0;i<squre.length;i++){
		squre[i].style.background = colors[i];
	}

})



for (var i=0; i<= squre.length;i++){

	squre[i].style.background = colors[i];
	squre[i].addEventListener("click",function(){

		var data = this.style.background;
		console.log(data)
		console.log(pickColor)
		if ( data === pickColor )
			{ messageDisplay.textContent = "Correct";
				changeColors(data);
				h1.style.background=data;
				resetButton.textContent = 'Play Again?'
				 }
		else { this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
				resetButton.textContent = 'New Colors';
					}
	})
}

function changeColors(color) { 

	for ( var i=0; i< numSquares; i++) { 

				squre[i].style.background = color; 
		}
} 


function pickOne() { 

	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(num) { 

		var arr = [];

		for (var i=0;i<num;i++)
			{ 
			arr.push(randomColor())

			}


		return arr; 
}

function randomColor() { 

	var r = Math.floor(Math.random()* 256 + 1 );
	var g = Math.floor(Math.random()* 256 + 1 );
	var b = Math.floor(Math.random()* 256 + 1 );
	return "rgb("+r+", "+g+", "+b+")";
}