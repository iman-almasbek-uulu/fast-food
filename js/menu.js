
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
        let div2 = document.createElement("div");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let span2 = document.createElement("span");
        let button = document.createElement("button");
        let buttondel = document.createElement("button");


        li.setAttribute("class","product_item")
        h4.setAttribute("class","title")
        div.setAttribute("class","block")
        p.setAttribute("class","price")
        button.setAttribute("class","add-order")
        buttondel.setAttribute("class","del-order")

        h4.innerText = el.name
        span.innerText = el.price
        span2.innerText = "$"
        img.src = el.img
        button.innerText = "to order"
        buttondel.innerText = "delete"

        if (el.selected === true) {
            button.style.background = " #8cff2e"
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = 'gray';
            });
              
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = '#8cff2e';
            });
        } 

        div.append(p)
        p.append(span)
        p.append(span2)
        div.append(div2)
        div2.append(button)
        div2.append(buttondel)
        li.append(img)
        li.append(h4)
        li.append(div)
    
        productsList.append(li)

        button.addEventListener("click", () => {
            add(i)
        })
        buttondel.addEventListener("click", () => {
            del(i)
        })
    });
}

function del(i) {
    let products = JSON.parse(localStorage.getItem("productsOrder")) || [];
    let product = JSON.parse(localStorage.getItem("products")) || [];
    product.splice(i,1);
    products = products.filter(el => el.index !== i)
    localStorage.setItem("products", JSON.stringify(product))
    localStorage.setItem("productsOrder", JSON.stringify(products))
    drawProducts()
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
    
