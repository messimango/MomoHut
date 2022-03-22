const menu =[
    {
        id: 1,
        name: "Steamed Momo (8PCS)",
        category: "MO:MO",
        price: 10,
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
        price: 12,
        img: "./menu-images/jhol_momo.jpg",
        description: "Steamed dumplings with jhol achar (soupy tomato sauce) thin in consistency and have a bit of a hot, spicy, and tangy twist.",
        inBasket: 0,
    },
    {
        id: 4,
        name: "Veg Momo (8PCS)",
        category: "MO:MO",
        price: 10,
        img: "./menu-images/veg_momo.jpg",
        description: "Homemade veg dumplings steamed and served with achar (spicy tomato sauce w/ sesame).",
        inBasket: 0,
    },
    {
        id: 5,
        name: "Fried Momo (8PCS)",
        category: "MO:MO",
        price: 10,
        img: "./menu-images/fried_momo.jpg",
        description: "Homemade veg/chicken dumplings deep fried and served with achar (spicy tomato sauce w/ sesame).",
        inBasket: 0,
    },
    {
        id: 6,
        name: "Wai-Wai Sadeko",
        category: "Appetizer",
        price: 5,
        img: "./menu-images/waiwai_sadeko.jpg",
        description: "Classic Nepali snack, Waiwai brand dried noodle mixed with ginger, onion, cilantro, tomatoes lemon juices, chilly powder pepper, and scallion.",
        inBasket: 0,
    },
    {
        id: 7,
        name: "Chana Bhature",
        category: "Entree",
        price: 10,
        img: "./menu-images/Chana_Bhature.jpg",
        description: "Chickpeas(Chana) in a delicious red sauce of onions and tomato with a puffy, flaky bread(Bhature).",
        inBasket: 0,
    },
    {
        id: 8,
        name: "Saag Paneer",
        category: "Entree",
        price: 12,
        img: "./menu-images/saag_paneer.jpg",
        description: "Paneer in a thick paste made from puréed spinach thicened with coconut milk.",
        inBasket: 0,
    },
    {
        id: 9,
        name: "Matar Paneer",
        category: "Entree",
        price: 12,
        img: "./menu-images/matar-paneer.webp",
        description: "Paneer and peas in a tomato based sauce, spiced with garam masala.",
        inBasket: 0,
    },
    {
        id: 10,
        name: "Pani Puri",
        category: "Appetizer",
        price: 8,
        img: "./menu-images/Pani_puri.jpg",
        description: "Round/ball-shaped, hollow puri (a deep-fried crisp flatbread), filled with a mixture of flavored water, tamarind chutney, chili powder, chaat masala, potato mash, onion or chickpeas.",
        inBasket: 0,
    },
    {
        id: 11,
        name: "Samosa (4 PCS)",
        category: "Appetizer",
        price: 4,
        img: "./menu-images/samosa.jpg",
        description: "Fried pastry with a savory filling of spiced potatoes, onions, peas served with tamarind chutney and mint-cilantro chutney.",
        inBasket: 0,
    },
    {
        id: 12,
        name: "Chhaang/Tongba",
        category: "Drinks",
        price: 7,
        img: "./menu-images/tongba.jpg",
        description: "Nepali alcoholic beverage made by brewing fermented rice and millet with ginger and aconite added to enhance flavour.",
        inBasket: 0,
    },
    {
        id: 13,
        name: "Thali",
        category: "Entree",
        price: 10,
        img: "./menu-images/nepali-thali.jpg",
        description: "Rice served with two sel roti, chana gravy, achar, gundruk ko tarkari, aloo gobi, matar paneer chicken curry and goat stew. Meat can be substituted for veg curries.   ",
        inBasket: 0,
    },
    {
        id: 14,
        name: "Nepali Chiya",
        category: "Drinks",
        price: 3,
        img: "./menu-images/nepali_chiya.jpg",
        description: "Black tea boiled with milk, water and aromatic herbs and spices served in a glass.",
        inBasket: 0,
    },
    {
        id: 15,
        name: "Lassi",
        category: "Drinks",
        price: 4,
        img: "./menu-images/lassi.jpg",
        description: "Blend of yogurt, water, spices and fruit. Choose between Sweet, Mango or Strawberry.",
        inBasket: 0,
    },
    {
        id: 16,
        name: "Juju Dhau",
        category: "Dessert",
        price: 4,
        img: "./menu-images/juju_dhau.jpg",
        description: "Nepali yogurt made with buffalo milk and served in a clay pot.",
        inBasket: 0,
    },
    {
        id: 17,
        name: "Kulfi",
        category: "Dessert",
        price: 4,
        img: "./menu-images/kulfi.jpg",
        description: "Nepali ice cream made with milk, sugar, nuts and cardamoms. Choose between Plain/Mango/Pistachio.",
        inBasket: 0,
    },
];

/*load-page*/
window.addEventListener("DOMContentLoaded", function() {
    displayMenu(menu);
    displayButtons();
});

/*load-menu-items*/

const products = document.querySelector(".products")

function displayMenu(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
                    <img class="item-image" src=${item.img} alt="${item.name}">
                    <div class="item-info">
                        <header class="item-title">
                            <h4>${item.name}</h4>
                            <h4 class="item-price">$${item.price}</h4>
                        </header>
                        <p class="item-description">
                            ${item.description}
                        </p>                 
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join('');
    products.innerHTML = displayMenu;
}

/*make buttons*/
const buttons = document.querySelector(".buttons")

function displayButtons() {
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
    return values;
    },["All"]);


    const categoryButtons = categories.map(function(category){
        return `<button class="filter" type="button" data-id=${category}>${category}</button>`
    }).join("");

    buttons.innerHTML = categoryButtons;

    const filter = buttons.querySelectorAll(".filter");
    
    filter.forEach(function (button) {
        button.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category){
                    return menuItem;
                }
            });
            if (category === "All") {
            displayMenu(menu);
            } else {
                displayMenu(menuCategory);
            }
        });
    });


}


