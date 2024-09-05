const btn_create = document.querySelector(".create")
const productImg = document.querySelector(".img")
const productName = document.querySelector(".name")
const productPrice = document.querySelector(".price")



// drawProducts();

btn_create.addEventListener('click', () => {

    if ((productImg.value).trim() !== "" && (productName.value).trim() !== "" && (productPrice.value).trim() !== "") {
        let productItem = {
            img: productImg.value,
            name: productName.value,
            price: productPrice.value,
            selected: false
        }

        let productData = JSON.parse(localStorage.getItem("products")) || [];
        productData.push(productItem);
        localStorage.setItem("products", JSON.stringify(productData));
        // drawProducts()
    } else {
        alert("error")

    }

})



// function drawProducts() {
//     productsList.innerHTML = ""

//     let productData = JSON.parse(localStorage.getItem("products")) || [];

//     productData.forEach((el,i) => {
//         let productDraw = `
//             <li class="product_item">
//                 <img src="${el.img}" alt="">
//                 <h4 class="title">${el.name}</h4>
//                 <div class="block">
//                         <p class="price">${el.price}$</p>
//                     <button class="add-order">to order</button>
//                 </div>
//             </li>
//         `;
//         productsList.append()
//     });
// }