const container = document.querySelector(".container");


container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){    //Bos koltuklari sectim
        e.target.classList.toggle("selected")
    }

})