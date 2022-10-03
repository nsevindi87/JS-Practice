const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)")

getFromLocalStorage();
calculateTotal();

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
    let selectedSeats = container.querySelectorAll(".seat.selected");

    let selectedSeatsArray = [];
    let seatsArray = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArray.push(seat);
    });

    seats.forEach(function(seat){
        seatsArray.push(seat)
    });

    let selectedSeatIndexs = selectedSeatsArray.map(function(seat){ 
        return seatsArray.indexOf(seat);
    })

    //secilmis olanlar array'a atildi. bütün koltuklar da array'a atildi. 
    //secilmis arrayinde olanlari alip tüm koltuklar arasindaki index numarasi taratildi.

    console.log(selectedSeatIndexs)

    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;   //secilen koltuklarin sayisini aldik
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs){
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}