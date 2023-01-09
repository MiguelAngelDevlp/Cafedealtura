let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const gratis = document.getElementById("gratis")
const paid = document.getElementById("paid")



const products = document.getElementById("productsCh")


function productsCest(text) {
    
    products.innerHTML = ``


    coffeStorage.forEach(element => {

        let cart2 = document.createElement("div")
        cart2.setAttribute("id", "cestaCesta3")
        // let cart3 = document.createElement("div")
        // cart3.setAttribute("id", "margenes3")
        // cart3.innerHTML = `<div><h4>Total del carrito</h4></div>`
        cart2.innerHTML = `
        <div>
        

    
        <b><p id="priceCestC">Subtotal:    ${element.quantity * element.price},00€</p></b>
        <p>Envío:</p>
       
        <a id="addd" href="../pags/noexiste.html">Pagar y realizar pedido</a>
        </div>
        `
        // products.appendChild(cart3)
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

    

/////////////env
    let totalPrice = 0
    let envio = 0

    coffeStorage.forEach(ele => {
        totalPrice += ele.quantity * ele.price
        envio += ele.quantity * ele.price
    })
////////////
    // productStorage.forEach(ele => {
    //     totalPrice += ele.quantity * ele.price
    //     envio += ele.quantity * ele.price
    // })

    // if (gratis.checked) {

    //     text = "GRATIS"
    //     pricesStorage.push(envio)
        
    // }
    // if (paid.checked) {

    //     text = "9,00€"
    //     envio += 9
    //     pricesStorage.push(envio)

    // }

    // let IVA = envio - (envio / 1.21)