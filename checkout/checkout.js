const menu =[    
    {
        id: 6,
        name: "Wai-Wai Sadeko",
        category: "Appetizer",
        price: 5.00,
        img: "./menu-images/waiwai_sadeko.jpg",
        description: "Classic Nepali snack, Waiwai brand dried noodle mixed with ginger, onion, cilantro, tomatoes lemon juices, chilly powder pepper, and scallion.",
        inBasket: 0,
    },    
    {
        id: 10,
        name: "Pani Puri",
        category: "Appetizer",
        price: 8.00,
        img: "./menu-images/Pani_puri.jpg",
        description: "Round/ball-shaped, hollow puri (a deep-fried crisp flatbread), filled with a mixture of flavored water, tamarind chutney, chili powder, chaat masala, potato mash, onion or chickpeas.",
        inBasket: 0,
    },    
    {
        id: 11,
        name: "Samosa",
        category: "Appetizer",
        price: 8.00,
        img: "./menu-images/samosa.jpg",
        description: "Fried pastry with a savory filling of spiced potatoes, onions, peas served with tamarind chutney and mint-cilantro chutney.",
        inBasket: 0,
    },
    {
        id: 1,
        name: "Steamed Momo (8PCS)",
        category: "MO:MO",
        price: 10.00,
        img: "./menu-images/Steam_Momo.jpg",
        description: "Steamed chicken dumplings served with achar (spicy tomato sauce w/ sesame).",
        inBasket: 0,
    },
    {
        id: 2,
        name: "Hut Special (8PCS)",
        category: "MO:MO",
        price: 12,
        img: "./menu-images/hut_special.jpg",
        description: "Homemade colorful dumplings steamed and served with achar (spicy tomato sauce w/ sesame).",
        inBasket: 0,
    },
    {
        id: 3,
        name: "Jhol Moomo",
        category: "MO:MO",
        price: 12.00,
        img: "./menu-images/jhol_momo.jpg",
        description: "Steamed dumplings with jhol achar (soupy tomato sauce) thin in consistency and have a bit of a hot, spicy, and tangy twist.",
        inBasket: 0,
    },
    {
        id: 4,
        name: "Veg Momo (8PCS)",
        category: "MO:MO",
        price: 10.00,
        img: "./menu-images/veg_momo.jpg",
        description: "Homemade veg dumplings steamed and served with achar (spicy tomato sauce w/ sesame).",
        inBasket: 0,
    },
    {
        id: 5,
        name: "Fried Momo (8PCS)",
        category: "MO:MO",
        price: 10.00,
        img: "./menu-images/fried_momo.jpg",
        description: "Homemade veg/chicken dumplings deep fried and served with achar (spicy tomato sauce w/ sesame).",
        inBasket: 0,
    },
    {
        id: 7,
        name: "Chana Bhature",
        category: "Entree",
        price: 10.00,
        img: "./menu-images/Chana_Bhature.jpg",
        description: "Chickpeas(Chana) in a delicious red sauce of onions and tomato with a puffy, flaky bread(Bhature).",
        inBasket: 0,
    },
    {
        id: 8,
        name: "Saag Paneer",
        category: "Entree",
        price: 12.00,
        img: "./menu-images/saag_paneer.jpg",
        description: "Paneer in a thick paste made from puréed spinach thicened with coconut milk.",
        inBasket: 0,
    },
    {
        id: 9,
        name: "Matar Paneer",
        category: "Entree",
        price: 12.00,
        img: "./menu-images/matar-paneer.webp",
        description: "Paneer and peas in a tomato based sauce, spiced with garam masala.",
        inBasket: 0,
    },    
    {
        id: 13,
        name: "Thali",
        category: "Entree",
        price: 10.00,
        img: "./menu-images/nepali-thali.jpg",
        description: "Rice served with two sel roti, chana gravy, achar, gundruk ko tarkari, aloo gobi, matar paneer chicken curry and goat stew. Meat can be substituted for veg curries.   ",
        inBasket: 0,
    },
    {
        id: 12,
        name: "Chhaang/Tongba",
        category: "Drinks",
        price: 7.00,
        img: "./menu-images/tongba.jpg",
        description: "Nepali alcoholic beverage made by brewing fermented rice and millet with ginger and aconite added to enhance flavour.",
        inBasket: 0,
    },
    {
        id: 14,
        name: "Nepali Chiya",
        category: "Drinks",
        price: 3.00,
        img: "./menu-images/nepali_chiya.jpg",
        description: "Black tea boiled with milk, water and aromatic herbs and spices served in a glass.",
        inBasket: 0,
    },
    {
        id: 15,
        name: "Lassi",
        category: "Drinks",
        price: 4.00,
        img: "./menu-images/lassi.jpg",
        description: "Blend of yogurt, water, spices and fruit. Choose between Sweet, Mango or Strawberry.",
        inBasket: 0,
    },
    {
        id: 16,
        name: "Juju Dhau",
        category: "Dessert",
        price: 4.00,
        img: "./menu-images/juju_dhau.jpg",
        description: "Nepali yogurt made with buffalo milk and served in a clay pot.",
        inBasket: 0,
    },
    {
        id: 17,
        name: "Kulfi",
        category: "Dessert",
        price: 4.00,
        img: "./menu-images/kulfi.jpg",
        description: "Nepali ice cream made with milk, sugar, nuts and cardamoms. Choose between Plain/Mango/Pistachio.",
        inBasket: 0,
    },
];

// number basket with menu

let baskets = document.querySelectorAll(".basketButton")

for (let i = 0; i < baskets.length; i++) {
    baskets[i].addEventListener('click', () => {
        basketNumber(menu[i]);
        totalPrices(menu[i]);
    })    
}

// update basket number

function basketNumber(menu) {
    let itemNumbers = localStorage.getItem('basketNumbers')

    itemNumbers = parseInt(itemNumbers);

    if (itemNumbers) {
        localStorage.setItem('basketNumbers', itemNumbers + 1);
        document.querySelector('.amountInBasket').innerHTML = itemNumbers + 1
    } else {
        localStorage.setItem('basketNumbers', 1);
        document.querySelector('.amountInBasket').innerHTML = 1 
    }        

    setItems(menu);
}

// add menu items to basket

function setItems(menu) {
    let localBasket = localStorage.getItem('itemInBasket')
    localBasket = JSON.parse(localBasket)
    if (localBasket != null) {
        if (localBasket[menu.id] == undefined ) {
            localBasket = {
                ...localBasket,
                [menu.id]: menu
            }
        }
        localBasket[menu.id].inBasket += 1;
    } else {
        menu.inBasket = 1
        localBasket = {
            [menu.id]: menu
        }
    }
        
    localStorage.setItem('itemInBasket', JSON.stringify(localBasket));
}

// load number of items in local basket

let itemNumbers = localStorage.getItem('basketNumbers')
function renderBasket() {   
        if (itemNumbers) {
        document.querySelector('.amountInBasket').innerHTML = itemNumbers 
    }
}



// Calculate price

function totalPrices(menu) {
    let totalCost = localStorage.getItem('totalPrice')    
    if (totalCost != null) {
        totalCost = parseInt(totalCost)
        localStorage.setItem('totalPrice', totalCost + menu.price)
    } else {
        localStorage.setItem('totalPrice', menu.price)
    }
}



// Code to load in Checkout page
renderBasket();
loadBasketItems();



function loadBasketItems() {
    let itemInBasket = localStorage.getItem('itemInBasket')
    const itemBox = document.querySelector('.summary-items')
    itemInBasket = JSON.parse(itemInBasket);
    if (itemInBasket) {
        let displayCheckout = Object.values(itemInBasket).map(item =>  {
            return `<div class="item-box">
            <div class="amount">
            <a class="increase-amount"><i class="fa fa-plus-circle"></i></a>
            <span id="amount">${item.inBasket}</span>
            <a class="decrease-amount"><i class="fa fa-minus-circle"></i></a>
            </div>
            <img class="item-image" src="${item.img}" alt="${item.name}">
            <div class="info">
            <div class="item-name"><span id="item-name">${item.name}</span></div>
            <div class="price-per">Price Per: CA$ <span id="price-per">${parseFloat(item.price).toFixed(2)}</span></div>                
            <div class="price-total">Total Price: CA$ <span id="price-total">${parseFloat(item.price * item.inBasket).toFixed(2)}</span></div>
            </div>
            <div class="trash"><i class="fa fa-trash-o "></i></div>            
            </div></div>`;
        });
        displayCheckout = displayCheckout.join('');
        itemBox.innerHTML = displayCheckout;

        let subtotal = document.getElementById('subtotal')
        let tax = document.getElementById('tax')
        let amountDue = document.getElementById('total')
        let tip = document.getElementById('tip')
        let delivery = document.getElementById('delivery')

        tip = Number(tip.innerHTML)
        delivery = Number(delivery.innerHTML)

        let totalCost = localStorage.getItem('totalPrice')
        totalCost = parseFloat(totalCost).toFixed(2)
        
        subtotal.innerHTML = totalCost
        tax.innerHTML = parseFloat(totalCost * 0.13).toFixed(2)
        amountDue.innerHTML = parseFloat((totalCost * 1.13) + tip + delivery).toFixed(2)

        
    }   
   
}



function clearBasket() {
    window.localStorage.clear();
    document.querySelector('.amountInBasket').textContent = 0;
    document.querySelector('.summary-items').innerHTML = '';
    document.getElementById('subtotal').innerHTML = 0;
    document.getElementById('tax').innerHTML = 0;
    document.getElementById('total').innerHTML= parseFloat(15.00).toFixed(2);
}


const plusButton = document.querySelectorAll('.increase-amount')
for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener('click', () => {
        increaseBasket();
    })    
}

const minusButton = document.querySelectorAll('.decrease-amount')
for (let i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener('click', () => {
        console.log('clicked')
        decreaseBasket();
    })    
}



function increaseBasket(menu) {
    let basketNumber = localStorage.getItem('basketNumbers');
    basketNumber = parseInt(basketNumber);
    localStorage.setItem('basketNumbers', basketNumber + 1);
    document.querySelector('.amountInBasket').innerHTML = basketNumber + 1

    setItems(menu);
}

function decreaseBasket() {
    let basketNumber = localStorage.getItem('basketNumbers');
    basketNumber = parseInt(basketNumber);
    localStorage.setItem('basketNumbers', basketNumber - 1);
    document.querySelector('.amountInBasket').innerHTML = basketNumber - 1;

    itemInBasket = localStorage.getItem('itemInBasket')
    itemInBasket = JSON.parse(itemInBasket)

    console.log(itemInBasket)
    console.log(itemInBasket[7])
}






// nav bar on top of screen

window.onscroll = myFunction;

var navbar = document.querySelector(".nav-bar");

var hover = navbar.offsetTop;

function myFunction() {
    console.log('hello')
  if (window.pageYOffset > 1000) {
    navbar.classList.add("hover")
  } else {
    navbar.classList.remove("hover");
  }
}


// jump to hash cleaner 

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});