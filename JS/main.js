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
        quantity: 0
    },
    {
        idProduct: 2,
        name: "Colombia Los Naranjos",
        price: 9.00,
        quantity: 0
    },
    {
        idProduct: 3,
        name: "Laos Amanecer",
        price: 9.00,
        quantity: 0
    },
    {
        idProduct: 4,
        name: "Etiopía Yrgacheff",
        price: 9.00,
        quantity: 0
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
        cesta.innerHTML += `<div><h4>${e.name}</h4>${e.price}€ <button>+</button>${e.quantity}<button onclick="deleteNote()">-</button> <br> <p>Total ///////////////ESTO DEBERIA SER EL TOTAL////////////</p>`
    })

    coffeStorage = noDuplicates
    localStorage.setItem('cart',JSON.stringify(coffeStorage))
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


//
