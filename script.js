const imageContainerEl = document.querySelector(".image-container");
const btnElementEl = document.querySelector(".btn");

btnElementEl.addEventListener("click", ()=>{
    imageNum = 3;
    addNewImages()
})

function addNewImages(){
    for(let i = 0; i<imageNum; i++){
        const newImgEl = document.createElement("img");
        newImgEl.src = `http://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl)
    }
}