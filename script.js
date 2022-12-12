/* ---- TARGETS && INITIALIZERS ---- */

const assortment = [
    {
        title: 'berenguer ramon j',
        img: './assets/Berenguer-Ramon-705x202.png',
        type: 'brut cava',
        smaak: 'droog (&lt; 12 gr/L)',
        druiven: 'macabeu, parellada, xarel&dash;lo',
        rijping: '9&dash;10 maanden',
        prijs: '&euro; 15,95',
        uitverkocht: false,
    },
    {
        title: 'berenguer ramon &dash; rosé',
        img: './assets/berenguer-rose.png',
        type: 'brut cava rosé',
        smaak: 'droog (&lt; 12 gr/L)',
        druiven: 'macabeu, parellada, xarel&dash;lo',
        rijping: '9&dash;10 maanden',
        prijs: '&euro; 16,95',
        uitverkocht: true,
    },
    {
        title: 'Llopart Brut',
        img: './assets/Llopart-Brut-Reserva-1500x430-eng-705x202.png',
        type: 'brut corpinnat reserva',
        smaak: 'droog (&lt; 12 gr/L)',
        druiven: 'macabeu, parellada, xarel&dash;lo',
        rijping: '18&dash;20 maanden',
        prijs: '&euro; 23,95',
        uitverkocht: false,
    },
    {
        title: 'Llopart Brut &dash; rosé',
        img: './assets/Llopart-Rose-1500x430-esp-eng-705x202.png',
        type: 'brut corpinnat rosé reserva ',
        smaak: 'droog (&lt; 12 gr/L)',
        druiven: 'monastrell, garnatxa, pinot noir',
        rijping: '18&dash;20 maanden',
        prijs: '&euro; 23,95',
        uitverkocht: false,
    },
    {
        title: 'Llopart Integral',
        img: './assets/Llopart-Integral-1500x430-esp-eng-705x202.png',
        type: 'brut nature corpinnat reserva',
        smaak: 'zeer droog (&lt; 3 gr/L)',
        druiven: 'parellada, xarel&dash;lo, Chardonnay',
        rijping: '24 maanden',
        prijs: '&euro; 25,95',
        uitverkocht: true,
    },
    {
        title: 'Llopart Microcosmos',
        img: './assets/Llopart-Micro-1500x430-eng-705x202.png',
        type: 'brut nature corpinnat rosé reserva',
        smaak: 'zeer droog (&lt; 3 gr/L)',
        druiven: 'pinot noir, monastrell, fruit',
        rijping: '24 maanden',
        prijs: '&euro; 29,95',
        uitverkocht: false,
    },
    {
        title: 'Llopart Ex Vite',
        img: './assets/Llopart-Exvite-1500X430-eng-705x202.png',
        type: 'brut nature corpinnat <br> gran reserva',
        smaak: 'zeer droog (&lt; 3 gr/L)',
        druiven: 'macabeu, xarel&dash;lo',
        rijping: '90 maanden',
        prijs: '&euro; 61,95',
        uitverkocht: true,
    },
];
const assortmentWrapper = document.getElementById('assortment-wrapper');


/* ---- FUNCTIONS ---- */

window.addEventListener('DOMContentLoaded', (event) => {
   for (i=0; i< assortment.length; i++) {
    const createProductWrapper = document.createElement('article');
        createProductWrapper.classList.add("product-wrapper");
        //check for sold-out
        if(assortment[i].uitverkocht) {
            assortment[i].prijs = `uitverkocht! (${assortment[i].prijs})`
                    // soldOut[i].classList.add('sold-out')
        }
        //create item HTML
            createProductWrapper.innerHTML =                 
            `<figure class="product-img">
                    <img src=${assortment[i].img} alt=${assortment[i].title}>
                </figure>
                    <div class="product-description">
                        <h3>${assortment[i].title}</h3>
                        <p>type&colon; <span class="type">${assortment[i].type}</span></p>
                        <p>smaak&colon; <span class="smaak">${assortment[i].smaak}</span></p>
                        <p>druiven&colon; <span class="druiven">${assortment[i].druiven}</span></p>
                        <p>rijping&colon; <span class="rijping">${assortment[i].rijping}</span></p>
                        <p class="prijs">prijs per fles&colon; <span class="price-insert">${assortment[i].prijs}</span></p>
                    </div>`
    
                assortmentWrapper.appendChild(createProductWrapper);
                if(assortment[i].uitverkocht) {
                    const soldOut = document.querySelectorAll('.price-insert')
                       soldOut[i].classList.add('sold-out')
            }
    };
});


    


