
let price = 10000 
const justFood = (pocetOsob) =>{
   return `"<p>Catering od justFood pro ${pocetOsob} za ${price} Kč"`
}

const price2 = 15000
const yourMama = (pocetOsob)=> {
    document.body.innerHTML += `"<p>Catering od yourMama pro ${pocetOsob} za ${price2} Kč"`
}

const price3 = 20000
const flavourHaven = (pocetOsob) => {
    document.body.innerHTML += `"<p>Catering od flavourHaven pro ${pocetOsob} za ${price3} Kč"`
}    
const createEvent = (eventName, pocetOsobNaAkci, price4) => {
return (document.body.innerHTML =`
    <p> Událost ${eventName} s cateringem od Flavour Haven pro ${pocetOsobNaAkci} lidí za ${price4}Kč`)
}
