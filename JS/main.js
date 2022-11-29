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
            localStorage.setItem('cart', JSON.stringify(coffeStorage))

            break;
        case losNaranjos:
            product[1].quantity++
            coffeStorage.push(product[1])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        case laosAmanecer:
            product[2].quantity++
            coffeStorage.push(product[2])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        case etiopíaYrgacheff:
            product[3].quantity++
            coffeStorage.push(product[3])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
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
        cesta.innerHTML += `<div <h4>${e.name}</h4><br>${e.img} <button id="masMenos" onclick="newCoffe(this)">+</button>${e.quantity}<button id="masMenos" onclick="minus(this)">-</button> <button id="quitar" onclick="deleteNote(this)">Quitar</button> <br> <p>Total: ${e.price * e.quantity}€</p> `
    })

    cesta.innerHTML += `<button id="deleteAllIn" onclick="deleteAllIn(this)">Vaciar cesta</button> `

    coffeStorage = noDuplicates
    localStorage.setItem('cart', JSON.stringify(coffeStorage))
}

// Hacemos la variable 'cart' seleccionamos y le ponemos el evento onclick para cuando no se vea la cesta se muestre y cuando se vea se oculte al pinchar el logo de la cesta.

const cart = document.querySelector("#cart")

cart.onclick = (e) => {
    e.preventDefault()

    if (cesta.style.display === "none") {
        cesta.style.display = "block"
    } else {
        cesta.style.display = "none"
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
const deleteAllIn = () => {
    coffeStorage = []
    localStorage.setItem('cart',JSON.stringify(coffeStorage))
    cesta.innerHTML = ' '
     }
 

