const cardBox = document.getElementById('targetCafe')

axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {

        let cafe = response.data.products


        cafe = cafe.slice(0, 4)

        console.log(cafe);

        cafe.forEach(prod => {

            let cafeBox = document.createElement('div')
            
            if (!prod.available) {
                cafeBox.style.opacity = `40%`
            }
            cardBox.appendChild(cafeBox)

            let news = document.createElement('div')
            cafeBox.setAttribute('class', 'col-3 box-3')
            cafeBox.appendChild(news)

            let imgCard = document.createElement('img')
            imgCard.setAttribute('src', `${prod.img_url}`)
            news.appendChild(imgCard)

            let brand = document.createElement('p')
            brand.innerText = `${prod.brand}`
            news.appendChild(brand)

            let price = document.createElement('p')
            price.innerText = `${prod.price},00€`
            news.appendChild(price)

            let btn1 = document.createElement('button')
            btn1.setAttribute('class', 'add')
            btn1.innerText = `Añadir`

            cafeBox.appendChild(btn1)

            

            btn1.onclick = () => {
                
                let real = coffeStorage.some(product => product._id === prod._id)
                
                if (real) {
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