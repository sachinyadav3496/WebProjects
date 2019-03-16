
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var reset = document.querySelector('#reset');

var win= 5
var p1_score = 1;
var p2_score  = 1; 
var gameover = false;

p1.addEventListener("click",function(){
if (!gameover)
	{ 
		if ( p1_score <= win-1) 
		{ 		
				var s1 = document.querySelector('#p1_score');
				s1.textContent = p1_score; 
				p1_score++;
			} else if (p1_score==win) {
				
				var s1 = document.querySelector('#p1_score');
				s1.textContent = p1_score;
				var s1 = document.querySelector('#p1_score'); 
				s1.style.color='green'; 
				gameover=true; 
			}
	} 
} 
		);

p2.addEventListener("click",function(){
	if (!gameover)
	{
		if (p2_score <= win-1) 
		{ 
			
			var s2 = document.querySelector('#p2_score');
			s2.textContent = p2_score;
			p2_score++;
		} else if (p2_score==win) {
		
			var s2 = document.querySelector('#p2_score');
			s2.textContent = p2_score;
			var s2 = document.querySelector('#p2_score'); 
			s2.style.color='green'; 
			gameover=true;
		}
	}
});



reset.addEventListener("click",function(){
	
	p1_score=0;
	p2_score=0;
	var s1 = document.querySelector('#p1_score');
	s1.textContent = p1_score;
	s1.style.color = 'gray';
	var s2 = document.querySelector('#p2_score');
	s2.textContent = p2_score;
	s2 .style.color = 'gray';
	gameover=false;

})

numInput = document.querySelector('input')

numInput.addEventListener('change',function(){

	win=numInput.value;
	p1 = document.querySelector('#win');
	p1.textContent = win; 
})