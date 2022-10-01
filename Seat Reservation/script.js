const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie")


container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){    //Bos koltuklari sectim
        e.target.classList.toggle("selected");
        calculateTotal()                                                //tiklama yaptikca hesaplama yapiyor
    
    }

});



select.addEventListener("change", function(e){ //option degistikce hesaplama yapiyor
    calculateTotal()
});



function calculateTotal(){  //genel hesaplama fonksiyornu
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;   //secilen koltuklarin sayisini aldik
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}