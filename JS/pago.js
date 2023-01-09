let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const gratis = document.getElementById("gratis")
const paid = document.getElementById("paid")



const products = document.getElementById("productsCh")


function productsCest(text) {
    
    products.innerHTML = ``
    
   
    coffeStorage.forEach(element => {

        let cart2 = document.createElement("div")
        cart2.setAttribute("id", "cestaCesta4")
        cart2.innerHTML = `
        <div class="borderBottom">
        
        <img id="imgUrls"src="${element.img_url}" alt="">
        <h4     class="NamesCof" ><b>${element.brand}</b> <br> <p id="size">Paquete de café, 250 gr</p></h4>
        <b><p id="priceCest">${element.quantity * element.price},00€</p></b>
        
        </div>
        
        `
        // cart3.appendChild(cart2)
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