//check of all elements click

//$("li").on("click",function(){
$("ul").on("click","li",function(){

    // if ($(this).css("color") === 'rgb(128, 128, 128)')
    // { $(this).css({"color":"black","textDecoration":) }
    // else {
    // $(this).css({'color':"gray","textDecoration":"line-through"});
    // }
    $(this).toggleClass("completed")
}) 

//click on x to delete todo
// $("span").on("click",function(event){
    //$(this).parent().remove();
$("ul").on("click","span",function(event){

    $(this).parent().fadeOut(1000,function(){
        $(this).remove(); })
    
    event.stopPropagation();
})


$("input[type=text").on("keypress",function(event){

    if ( event.which === 13 ) {
        // grabbing new to do text creating new li and adding to list  
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
        $(this).val(""); 
    }

})

$(".fa-plus").on("click",function(){

    $("input[type=text").fadeToggle();
})