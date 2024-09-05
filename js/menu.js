
const productsList = document.querySelector(".products_list")


drawProducts();

function drawProducts() {
    productsList.innerHTML = ""

    let productData = JSON.parse(localStorage.getItem("products")) || [];

    productData.forEach((el,i) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let div = document.createElement("div");
        let p = document.createElement("p");
        let button = document.createElement("button");


        li.setAttribute("class","product_item")
        h4.setAttribute("class","title")
        div.setAttribute("class","block")
        p.setAttribute("class","price")
        button.setAttribute("class","add-order")

        h4.innerText = el.name
        p.innerText = el.price
        img.src = el.img
        button.innerText = "to order"

        if (el.selected === true) button.style.background = "green"

        div.append(p)
        div.append(button)
        li.append(img)
        li.append(h4)
        li.append(div)
    
        productsList.append(li)

        button.addEventListener("click", () => {
            add(i)
        })
    });
}


function add(i) {
    let products = JSON.parse(localStorage.getItem("productsOrder")) || [];
    let product = JSON.parse(localStorage.getItem("products")) || [];

    if (!product[i].selected) {
        product[i].selected = true;
        let newProduct = {
            name: product[i].name,
            price: product[i].price,
            constPrice: product[i].price,
            img: product[i].img,
            count: 1,
            selected: product[i].selected,
            index: i
        }
        products.push(newProduct);
        localStorage.setItem("productsOrder", JSON.stringify(products));
           
    }else {
        console.log(false);
        
    }

    localStorage.setItem("products", JSON.stringify(product));
    drawProducts() 
}
    
