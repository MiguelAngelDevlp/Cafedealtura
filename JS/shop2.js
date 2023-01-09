const cardBox = document.getElementById('targetCafe')

axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {

        let cafe = response.data.products



        console.log(cafe);
        cafe.forEach(prod => {
            
            let cafeBox = document.createElement('div')
            if (!prod.available) {
                cafeBox.style.opacity = `40%`
            }
            cardBox.appendChild(cafeBox)

            let colThree = document.createElement('div')
            cafeBox.setAttribute('class', 'row')
            cardBox.appendChild(colThree)
            
            
            let nov = document.createElement('div')
            cafeBox.setAttribute('class', 'col-3 box-3')
            cafeBox.appendChild(nov)
            
            let imgCard = document.createElement('img')
            imgCard.setAttribute('src', `${prod.img_url}`)
            nov.appendChild(imgCard)
            
            let brand = document.createElement('p')
            brand.innerText = `${prod.brand}`
            nov.appendChild(brand)

            let price = document.createElement('p')
            price.innerText = `${prod.price},00€`
            nov.appendChild(price)




            
            let boton1 = document.createElement('button')
            boton1.setAttribute('class', 'add')
            boton1.innerText = `Añadir`
            if (!prod.available) {
                boton1.setAttribute(`disabled`, `disabled`)
            }
            cafeBox.appendChild(boton1)
            
            
            

            boton1.onclick = () => {
                
                let exist = coffeStorage.some(product => product._id === prod._id)
                
                if (exist) {
                    coffeStorage.forEach(product => {
                        if (product._id === prod._id) {
                            product.quantity += 1
                        }
                    })
                } else {
                    prod.quantity = 1
                    coffeStorage.push(prod)
                }

    btnDeletes.style.display = "block"

                noDuplicate()
            }
        })
    })





    