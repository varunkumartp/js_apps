function counter(){
    var x = document.getElementById("fname").value;
    document.getElementById("letter-count").innerText="Letter Count: "+x.length;
}

document.getElementById("fname").onkeyup=function(){counter()};
