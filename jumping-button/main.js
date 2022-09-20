window.addEventListener("load", function(){ 
    const button = document.getElementById('flip-flop');

    button.addEventListener('click', event =>{
        button.classList.toggle("right");   
        if(button.textContent === 'Go Left!'){
            button.textContent = `Go Right!`;
        }else{
            button.textContent = `Go Left!`;
        }
    });
});
  