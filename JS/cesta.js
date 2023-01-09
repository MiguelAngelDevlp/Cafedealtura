let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const shopCart = document.querySelector("#cestaFin")
const products = document.getElementById("products")


function productsCest(text) {
    let priceTotal = 0
    let totalProducts = 0

    products.innerHTML = ``

    coffeStorage.forEach(element => {
// console.log(element);
        let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "buttonsJava")

      
            
        // console.log(element);
        wrapper.innerHTML = `

        <div class="borderBottom">
        
        <button id="masMenos" onclick ="sumCar(this)">+</button>
        ${element.quantity}
        <button id="masMenos" onclick = "restCar(this)">-</button>
        
        <img id="imgUrls"src="${element.img_url}" alt="">
        <h4     class="NamesCof" ><b>${element.brand}</b> <br> <p id="size">Paquete de café, 250 gr</p></h4>
        <b><p id="priceCest">${element.quantity * element.price},00€</p></b>
        
        </div>
        `
        // console.log(wrapper);
        products.appendChild(wrapper)

    })

    coffeStorage.forEach(element => {

        let cart2 = document.createElement("div")
        cart2.setAttribute("id", "cestaCesta")
    
        cart2.innerHTML = `
    
        <div class="borderBottomC">
        
        <b><p id="priceCestC">Subtotal: ${element.quantity * element.price},00€</p></b>
        <p>Envío:</p>

        <a id="addd" href="../pags/checkout.html">Ir a checkout</a>
        
        </div>
        `
    
        products.appendChild(cart2)
        })  
        
}
    
    
    productsCest()

    
///////Bton-
    const restCar = (btn) => {
        btn = btn.parentNode.textContent
        // console.log(btn);
        coffeStorage.forEach(e => {
         if (btn.includes(e.brand)) {
             coffeStorage[coffeStorage.indexOf(e)].quantity--
         }
         if (e.quantity=== 0) {
             coffeStorage.splice(coffeStorage.indexOf(e),1)
         }
        })
 
       
 
         productsCest()
     }

     //boton +
     const sumCar = (btn) => {
        btn = btn.parentNode.textContent
        // console.log(btn);
        coffeStorage.forEach(e => {
         if (btn.includes(e.brand)) {
             coffeStorage[coffeStorage.indexOf(e)].quantity++
         }
        })
        productsCest()
    }

    


    let totalPrice = 0
    let envio = 0

    coffeStorage.forEach(ele => {
        totalPrice += ele.quantity * ele.price
        envio += ele.quantity * ele.price
    })

    // if (free.checked) {

    //     text = "GRATIS"
    //     pricesStorage.push("envio")
        
    // }
    // if (paid.checked) {

    //     text = "9,00€"
    //     envio += 9
    //     pricesStorage.push("envio")

    // }

    
    

    
 



    // cart2 = document.createElement("div")
    // cart2.setAttribute('id', 'box2')


    // let totalPrice = 0

    // productStorage.forEach(ele => {
    //     totalPrice += ele.quantity * ele.price
    // })

    //





//     products.innerHTML = ``

//     coffeStorage.forEach(element => {
// console.log(element);
      
//         cart2.setAttribute("class", "buttonsJava")

//         // console.log(element);
//         cart2.innerHTML = `

//         <div class="borderBottom">
//         <button id="masMenos" onclick ="sumCar(this)">+</button>
//         ${element.quantity}
//         <button id="masMenos" onclick = "restCar(this)">-</button>
        
//         <img id="imgUrls"src="${element.img_url}" alt="">
//         <h4><b>${element.brand}</b> <br> <p id="size">Paquete de café, 250 gr</p></h4>
//         <b><p id="priceCest">${element.quantity * element.price},00€</p></b>
        
//         </div>
//         `
       
//         cart2.appendChild()
// // cesta.innerHTML += `<div <h4>${e.name}</h4><br>${e.img} <div id="buttonsJava"><span id="invisible">${e.idProduct}</span><button onclick="sumCar(this)" id="masMenos">+</button>${e.quantity}<button onclick="restCar(this)" id="masMenos">-</button> </div><button id="quitar" onclick="deleteNote(this)">Quitar</button> <br> <p id="border-bottom">Total: ${e.price * e.quantity}€</p> `
// //     })
//     }) 