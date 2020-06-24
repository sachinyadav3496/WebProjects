
const questions = [
	{
		question: "Who is the Father of Python ?",
		options : [ 'Guido Van Rossum',"linus Torvalds","DanisRichi","John Hill"],
		answer : "Guido Van Rossum"
	},
	{
		question: "Python Officially Launch in Year ? ",
		options : [ 1991,1994,1996,1995],
		answer : 1994
	},
	{
		question: "Which is The Latest Version of Python ? ",
		options : ["python2.7","python3.6","python3.7","python3.8"],
		answer : "python3.7"
	}
] ;

let correct = 0;
let question_number = 0;


document.addEventListener("DOMContentLoaded",()=>{

load_question();

});


function load_question() { 
	if ( question_number < questions.length ) {

		document.querySelector("#question").innerHTML = questions[question_number].question;
		const options = document.querySelector("#options");
		options.innerHTML = "";
		for ( const option of questions[question_number].options){
			options.innerHTML += `<button class="option">${option}</button>`; }; 

			document.querySelectorAll(".option").forEach(option => {
				option.onclick = () => { 
					 

						if ( option.textContent == questions[question_number].answer  ){  correct+= 1; };
						question_number += 1;
						document.querySelector("#correct").innerHTML = correct+" of "+question_number;
						load_question()
					}
					})
					}

	else {
						document.querySelector("#question").innerHTML = "Congratulations You Have Completed Python Quiz";
						document.querySelector("#options").innerHTML = "";
						document.querySelector("#result").innerHTML = "Your Final Score is : "+correct+"/"+question_number;
						}
					};


$(function() { 


$.ajax({

	url : '/question/'+question_number,
	success : function(data) { 
		
			},

});


});