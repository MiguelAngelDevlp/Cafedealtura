const tarrazú = document.querySelector("#btnTarrazu")
const losNaranjos = document.querySelector("#btnNaranjos")
const laosAmanecer = document.querySelector("#btnLaos")
const etiopíaYrgacheff = document.querySelector("#btnEtiopía")
const cesta = document.querySelector("#cesta")
localStorage.clear()

let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

coffeStorage = []

product = [
    {
        idProduct: 1,
        name: "Costa Rica Tarrazú",
        price: 9.00,
        quantity: 0,
        img: `<img src="../img/Images (1).png" alt="bag" id="bagsCesta" >`
    },
    {
        idProduct: 2,
        name: "Colombia Los Naranjos",
        price: 9.00,
        quantity: 0,
        img: `<img src="../img/Images.png" alt="bag" id="bagsCesta">`
    },
    {
        idProduct: 3,
        name: "Laos Amanecer",
        price: 9.00,
        quantity: 0,
        img: `<img src="../img/Images (2).png" alt="bag" id="bagsCesta">`
    },
    {
        idProduct: 4,
        name: "Etiopía Yrgacheff",
        price: 9.00,
        quantity: 0,
        img: `<img src="../img/Images (3).png" alt="bag" id="bagsCesta">`
    }
]



const newCoffe = (button) => {



    switch (button) {
        case tarrazú:
            product[0].quantity++
            coffeStorage.push(product[0])
            btnDeletes.style.display = "block"

            break;
        case losNaranjos:
            product[1].quantity++
            coffeStorage.push(product[1])
            btnDeletes.style.display = "block"
            break;
        case laosAmanecer:
            product[2].quantity++
            coffeStorage.push(product[2])
            btnDeletes.style.display = "block"
            break;
        case etiopíaYrgacheff:
            product[3].quantity++
            coffeStorage.push(product[3])
            btnDeletes.style.display = "block"
            break;
        default:
            break;
    }
    noDuplicates1()
}




// Funcion que no duplica
function noDuplicates1() {
    cesta.innerHTML = ''

    let noDuplicates = coffeStorage.filter((item, index) => {
        return coffeStorage.indexOf(item) === index;
    })

    noDuplicates.forEach(e => {
        cesta.innerHTML += `<div <h4>${e.name}</h4><br>${e.img} <div id="buttonsJava">${e.idProduct} <button onclick="sumCar(this)" id="masMenos">+</button>${e.quantity}<button onclick="restCar(this)" id="masMenos">-</button> </div><button id="quitar" onclick="deleteNote(this)">Quitar</button> <br> <p>Total: ${e.price * e.quantity}€</p> `
    })

    noDuplicates.forEach(e => {
        if (e.quantity === 0) {
            noDuplicates.splice(noDuplicates.indexOf(e), 1)
        }
    })

    if (noDuplicates.length <= 0) {
        btnDeletes.style.display = "none"
        cesta.innerHTML = "<p> Su cesta está vacia </p>"
    }

    // if (deleteNote.length <= 0){
    //     btnDeletes.style.display = "none"
    //     cesta.innerHTML = "<p> Su cesta está vacia </p>"
    // }
    coffeStorage = noDuplicates
    localStorage.setItem('cart', JSON.stringify(coffeStorage))

}

// Hacemos la variable 'cart' seleccionamos y le ponemos el evento onclick para cuando no se vea la cesta se muestre y cuando se vea se oculte al pinchar el logo de la cesta.

const cart = document.querySelector("#cart")

cart.onclick = (e) => {
    e.preventDefault()

    if (cart2.style.display === "none") {
        cart2.style.display = "block"
    } else {
        cart2.style.display = "none"
    }
}

/////Boton de borrar seleccion 

const deleteNote = (btn) => {
    let noteToErase = btn.parentNode
    const index = coffeStorage.indexOf(noteToErase)
    coffeStorage.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(coffeStorage))
    noteToErase.remove()
}

/////////////VACIAR LA CESTA ENTERA
const btnDeletes = document.querySelector("#btnDeletes")
btnDeletes.onclick = (e) => {
    e.preventDefault()

    coffeStorage.forEach(e => {
        e.quantity = 0
    })
    noDuplicates1()

    btnDeletes.style.display = "none"
    cesta.innerHTML = "<p>Su cesta está vacia</p>"

}
/////////////////////
const restCar = (btn) => {
    let restCest = btn.parentNode.textContent
    let result = [...restCest][0]
    coffeStorage.forEach(e => {
        if (result[0] == '1') {
            if (product[0].quantity === 0) {
                return
            }
            product[0].quantity--
        }
        if (result[0] == '2') {
            if (product[1].quantity === 0) {
                return
            }
            product[1].quantity--
        }
        if (result[0] == '3') {
            if (product[2].quantity === 0) {
                return
            }
            product[2].quantity--
        }
        if (result[0] == '4') {
            if (product[3].quantity === 0) {
                return
            }
            product[3].quantity--
        }
    })
    noDuplicates1()
}
// //////////////////////
const sumCar = (btn) => {
    let sumCest = btn.parentNode.textContent
    let resultSum = [...sumCest][0]
    coffeStorage.forEach(e => {
        if (resultSum[0] == '1') {
            product[0].quantity++
        }
        if (resultSum[0] == '2') {
            product[1].quantity++
        }
        if (resultSum[0] == '3') {
            product[2].quantity++
        }
        if (resultSum[0] == '4') {
            product[3].quantity++
        }
    })
    noDuplicates1()
}