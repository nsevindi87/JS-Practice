const search = () => {
    const searchBox= document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list"); 
    const product = document.querySelectorAll(".product");
    const productName = storeItems.getElementsByTagName("h2");

    for (let i = 0; i < productName.length; i++) {
        
        let match = product[i].getElementsByTagName("h2")[0]; //! Movie titles with tags

        if (match) {
            let textvalue = match.textContent || match.innerHTML //! Movie titles as strings

            if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
        
    }
}