// function al(name){
   // var name = document.getElementById("first").value ;
  //  alert("hello " + name);
 // }
 var submit = document.getElementById("bu");
  var x= document.getElementById("main");

function col(){
    x.style.backgroundColor ="rgba(110, 30, 30, 0.678)";
}

function act(){
    var name = document.getElementById("first").value ;
    alert("hello " + name);
    col();
    
}
submit.addEventListener("click",act);
