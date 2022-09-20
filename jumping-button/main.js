function schimba(){
    document.getElementById("flip-flop").style.right = "100px";
    document.getElementById("flip-flop").innerHTML = "Go Left!";
    
}
document.getElementsByTagName("button")[0].addEventListener('click', schimba);