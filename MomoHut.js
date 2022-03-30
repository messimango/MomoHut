

// change image main page

const images = ['./main1.jpg','./main2.jpg','./main3.jpg'];

var mainImages = document.querySelector('.mainImage');

var x = 0;


setInterval(function() {
    mainImages.src = images[x]
    x++;
    if (x >= images.length -1 ) {
        x=0;
    }
}, 10000);

// date 

const date = document.getElementById('date')

date.min = new Date().toLocaleDateString('en-ca');


const reservation = document.querySelector('.reservation-container');


// submit button

function submitted() {
    const name = document.getElementById('inputname')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    console.log(email, phone)
    if (name.value != '' && phone.value != '') {
        reservation.innerHTML = `<i class="fa-regular fa-circle-check"></i><br>
        Thank you, Your reservation has been submitted! <br> We will send you a validation email or give you a call to finalize the booking.`
    }
   
}

// hashtag slightly above

function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

window.addEventListener("hashchange", offsetAnchor);

window.setTimeout(offsetAnchor, 1);

