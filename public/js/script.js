"use strict"

let menuBtn     = document.getElementById('menuBtn')        // On récupère l'icône du menu sur smartphone
let mobileMenu  = document.getElementById('mobileMenu')     // On récupère les liens du menu

// Lors du clic de l'utilisateur (sur smartphone), le menu apparaît et disparaît
menuBtn.addEventListener('click', () => {                                       
    mobileMenu.classList.toggle('active')
})



// Permet de récupérer les produits de l'API et de les afficher

let product

const showProducts = () => {
    fetch('//localhost:3000/api/cameras')
    .then(response => {
            if (!response.ok) {
                throw Error('Error: ', response.status)
            } return response.json()
        })
    .then(data => {
        product = data
        console.log(product)
        getProducts()
        showLenses()
    })
    .catch(error => {
        console.log(error)
    })
}

const getProducts = () => {
    for (let i = 0; i < product.length; i++) {
        let productDetails = document.getElementById('product-details')
        productDetails.innerHTML +=
        `
        <figure class="flex flex-col rounded-md bg-white shadow-md m-4 p-4  md:flex-row md:mx-4">
        <img src="${product[i].imageUrl}" class="w-80 h-auto object-cover rounded-md" alt="${product[i].name} ${product[i].description}">
            <figcaption class="flex flex-col md:ml-4">
            <h2 class="text-2xl pt-2 montserrat">
                ${product[i].name}
            </h2>
            <p class="py-2 montserrat lg:w-80">
                ${product[i].description}
            </p>
            <label for="Choisir un objectif" class="py-2" id="lenses">
            </label>
            <div class="flex flex-row justify-between items-center mt-2">
                <h3 class="text-xl font-medium merriweather">
                    ${product[i].price/100}€
                </h3>
                <button class="ring-2 ring-black bg-platinum rounded-full p-2 text-sm font-semibold uppercase montserrat hover:bg-black hover:text-white focus:outline-none transition">
                    Ajouter au panier
                </button>
            </div>
            </figcaption>
        </figure>
        `
    }
}

const showLenses = () => {
    const lenses = document.getElementById('lenses')
    for (let i = 0; i < product.lenses.length; i++) {
        lenses.innerHTML +=
        `
        <select name="objectifs">
            <option value="${product.lenses[i]}" class="montserrat" selected>
                ${product.lenses[i]}
            </option>
        </select>
        `
    }
}


showProducts()
/*
const getProducts = () => {
    const productDetails = document.getElementById('product-details')
    for (let i = 0, i < product.length, i++) {
        productDetails.innerHTML +=
        `
        <figure class="flex flex-col rounded-md bg-white shadow-md m-4 p-4  md:flex-row md:mx-4">
        <img src="${product[i].Url}" class="w-80 h-auto object-cover rounded-md" alt="${product[i].name} ${product[i].description}">
        <figcaption class="flex flex-col md:ml-4">
        <h2 class="text-2xl pt-2 montserrat">
        ${product[i].name}
        </h2>
        <p class="py-2 montserrat lg:w-80">
        ${product[i].description}
        </p>
        <label for="Choisir un objectif" class="py-2" id="lenses">
        </label>
        <div class="flex flex-row justify-between items-center mt-2">
        <h3 class="text-xl font-medium merriweather">
        ${product[i].price/100}€
        </h3>
        <button class="ring-2 ring-black bg-platinum rounded-full p-2 text-sm font-semibold uppercase montserrat hover:bg-black hover:text-white focus:outline-none transition">
        Ajouter au panier
        </button>
        </div>
        </figcaption>
        </figure>
        `
    } 
} */


/*
const showProducts = () => {
    fetch('//localhost:3000/api/cameras')
    .then(response => {
        if (!response.ok) {
            throw Error('Error: ', response.status)
        } return response.json()
    })
    .then(data => {
        let product = data
        .map(product => {
            return `
            <figure class="flex flex-col rounded-md bg-white shadow-md m-4 p-4  md:flex-row md:mx-4">
            <img src="${product.imageUrl}" class="w-80 h-auto object-cover rounded-md" alt="${product.name} ${product.description}">
            <figcaption class="flex flex-col md:ml-4">
            <h2 class="text-2xl pt-2 montserrat">
            ${product.name}
            </h2>
            <p class="py-2 montserrat lg:w-80">
            ${product.description}
            </p>
            <label for="Choisir un objectif" class="py-2" id="lenses">
            </label>
            <div class="flex flex-row justify-between items-center mt-2">
            <h3 class="text-xl font-medium merriweather">
            ${product.price/100}€
            </h3>
            <button class="ring-2 ring-black bg-platinum rounded-full p-2 text-sm font-semibold uppercase montserrat hover:bg-black hover:text-white focus:outline-none transition">
            Ajouter au panier
            </button>
            </div>
            </figcaption>
            </figure>
            `
        })
        .join('')
        let productDetails = document.getElementById('product-details')
        productDetails.insertAdjacentHTML("afterbegin", product)
    })
    .catch(error => {
        console.log(error)
    })
}

showProducts();
*/





