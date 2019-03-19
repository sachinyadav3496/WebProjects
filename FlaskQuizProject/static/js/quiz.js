
let correct = 0;
let question_number = 0;


document.addEventListener("DOMContentLoaded",()=>{

  fetch_data(); 

});


function fetch_data(){

    $.ajax({

        url : '/question/'+question_number,
        success : function(data){
            load_question(data);
        },
    
    });
 }


function load_question(data) { 
	if ( data ) {
		document.querySelector("#question").innerHTML = data.question;
		const options = document.querySelector("#options");
		options.innerHTML = "";
		for ( const option of data.options){
			options.innerHTML += `<button class="option">${option}</button>`; }; 

			document.querySelectorAll(".option").forEach(option => {
				option.onclick = () => { 
					 
                        var ans = option.textContent
                        $.ajax({
                            url : '/check_question/',
                            type : 'POST',
                            data : { ques:question_number,answer:ans },
                            success : function(data){
                            
                                if (data){ correct += 1; } 
                            question_number += 1;
						    document.querySelector("#correct").innerHTML = correct+" of "+question_number;
						fetch_data();
                            }
                        })
					}
					})
					}

	else {
						document.querySelector("#question").innerHTML = "Congratulations You Have Completed Python Quiz";
						document.querySelector("#options").innerHTML = "";
						document.querySelector("#result").innerHTML = "Your Final Score is : "+correct+"/"+question_number;
						}
					};

