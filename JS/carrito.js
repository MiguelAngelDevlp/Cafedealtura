let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const shopCart = document.querySelector("#cesta")
const cart2 = document.querySelector("#cart2")

function noDuplicate() {
    let priceTotal = 0
    let totalProducts = 0

    shopCart.innerHTML = ``

    coffeStorage.forEach(element => {

        let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "buttonsJava")

        // console.log(element);
        wrapper.innerHTML = `

        <div class="borderBottom">
        

        <h4>${element.brand}</h4>
        <img id="imgUrls"src="${element.img_url}" alt="">
        <p id="units" class= "textJs">Unidad: ${element.quantity}€</p>
        <p id="priceC">Precio total: ${element.quantity * element.price}€</p>
        <button id="masMenos" onclick ="sumCar(this)">+</button>${element.quantity}<button id="masMenos" onclick = "restCar(this)">-</button>
        <a id="addd" href="../pags/cesta.html">Ir a cesta</a>
        <button id= "quitar" onclick="deleteNote(this)">X</button>
        </div>
        `
        shopCart.appendChild(wrapper)
// cesta.innerHTML += `<div <h4>${e.name}</h4><br>${e.img} <div id="buttonsJava"><span id="invisible">${e.idProduct}</span><button onclick="sumCar(this)" id="masMenos">+</button>${e.quantity}<button onclick="restCar(this)" id="masMenos">-</button> </div><button id="quitar" onclick="deleteNote(this)">Quitar</button> <br> <p id="border-bottom">Total: ${e.price * e.quantity}€</p> `
//     })
    })

    localStorage.setItem('cart', JSON.stringify(coffeStorage))

    const btnDeletes = document.querySelector("#btnDeletes")
btnDeletes.onclick = (e) => {
    e.preventDefault()

   coffeStorage = []
    noDuplicate()

    // btnDeletes.style.display = "none"
    // cesta.innerHTML = "<p>Su cesta está vacia</p>"
     }
}
//////////////
const btnDeletes = document.querySelector("#btnDeletes")

const restCar = (btn) => {
       btn = btn.parentNode.textContent
       console.log(btn);
       coffeStorage.forEach(e => {
        if (btn.includes(e.brand)) {
            coffeStorage[coffeStorage.indexOf(e)].quantity--
        }
        if (e.quantity=== 0) {
            coffeStorage.splice(coffeStorage.indexOf(e),1)
        }
       })

      

        noDuplicate()
    }

    
noDuplicate()
//////////////////////////////////mostrarnomostrar
let cartIcon = document.getElementById(`cart`)

cart.onclick = (e) => {
        e.preventDefault()
    
        if (cart2.style.display === "none") {
            cart2.style.display = "block"
        } else {
            cart2.style.display = "none"
        }
    }
//////////////////////borrarseleccion
    const deleteNote = (btn) => {
            let noteToErase = btn.parentNode
            const index = coffeStorage.indexOf(noteToErase)
            coffeStorage.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            noteToErase.remove()
            noDuplicate()
        }
        //////////////////////btn+


        const sumCar = (btn) => {
            btn = btn.parentNode.textContent
            console.log(btn);
            coffeStorage.forEach(e => {
             if (btn.includes(e.brand)) {
                 coffeStorage[coffeStorage.indexOf(e)].quantity++
             }
            })
            noDuplicate()
        }

    //     totalProduct += element.quantity
    //     count.textContent = totalProduct
 
    //  if (totalProduct < 1) {
    //      count.style.display = "none"
    //  } else {
    //      count.style.display = "inline-block"
    //  }
 
 