const list = document.querySelector(".orders")
drawOrders()
function drawOrders () {
    list.innerHTML = "";

    let ordersData = JSON.parse(localStorage.getItem("productsOrder")) || [];
    ordersData.forEach((element,i) => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let info = document.createElement("div")
        let h4 = document.createElement("h4")
        let pBlock = document.createElement("p")
        let p = document.createElement("span")
        let p$ = document.createElement("span")
        let actions = document.createElement("div")
        let btnDel = document.createElement("button")
        let block = document.createElement("div")
        let minus = document.createElement("span")
        let plus = document.createElement("span")
        let countBlock = document.createElement("span")
        let count = document.createElement("span")
        let countX = document.createElement("span")



        li.setAttribute("class", "order_item")
        info.setAttribute("class", "info")
        h4.setAttribute("class", "order_title")
        pBlock.setAttribute("class", "order_price")
        actions.setAttribute("class", "actions")
        btnDel.setAttribute("class", "delete_order")
        block.setAttribute("class", "block_count")
        minus.setAttribute("class", "count_minus")
        plus.setAttribute("class", "count_plus")
        count.setAttribute("class", "count")
        
        
        img.src = element.img
        h4.innerHTML = element.name
        p.innerHTML = element.price
        count.innerHTML = element.count
        btnDel.innerHTML = "delete order"
        minus.innerHTML = "-"
        plus.innerHTML = "+"
        p$.innerHTML = "$"
        countX.innerHTML = "x"

        li.append(img)
        li.append(info)
        info.append(h4)
        info.append(pBlock)
        pBlock.append(p)
        pBlock.append(p$)
        li.append(actions)
        actions.append(btnDel)
        actions.append(block)
        block.append(minus)
        block.append(countBlock)
        countBlock.append(count)
        countBlock.append(countX)
        block.append(plus)

        list.append(li);
        
        btnDel.addEventListener("click", () => {
            delProduct(i,element.index)
            drawOrders()
        })
        
        plus.addEventListener("click", () => {
            editPlus(i);
            drawOrders()
        })

        minus.addEventListener("click", () => {
            if (element.count > 0) {
                element.price = 
                ordersData[i].price = +ordersData[i].price - +ordersData[i].constPrice
                ordersData[i].count = +ordersData[i].count - 1
                localStorage.setItem("productsOrder", JSON.stringify(ordersData));
                drawOrders()
            }
        })


        
    });
}

function delProduct(i,i2) {
    let ordersData = JSON.parse(localStorage.getItem("productsOrder")) || [];
    let menuData = JSON.parse(localStorage.getItem("products")) || [];

    menuData[i2].selected = false

    ordersData.splice(i,1);
    localStorage.setItem("productsOrder", JSON.stringify(ordersData));
    localStorage.setItem("products", JSON.stringify(menuData));
    
}

function editPlus(i) {
    let ordersData = JSON.parse(localStorage.getItem("productsOrder")) || [];

    ordersData[i].price = +ordersData[i].price + +ordersData[i].constPrice
    ordersData[i].count = +ordersData[i].count + 1

    localStorage.setItem("productsOrder", JSON.stringify(ordersData));

}