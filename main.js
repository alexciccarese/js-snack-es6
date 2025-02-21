/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bikeTextEl = document.querySelector('.bike-sm')

const bikes = [
  {
    name: 'bolt',
    weight: 86
  },
  {
    name: 'giggi',
    weight: 120
  },
  {
    name: 'flash',
    weight: 35
  },
  {
    name: 'pig',
    weight: 230
  },
  {
    name: 'mouse',
    weight: 12
  },
  {
    name: 'air',
    weight: 1
  },
]

function lighterBike() {
  let lightBike = bikes[0]
  
  for (let i in bikes) {
    if (bikes[i].weight < lightBike.weight) {
      lightBike = bikes[i]
    }
  }
  console.log(lightBike);

return lightBike
}
const lightBike = lighterBike()

bikeTextEl.innerText = `La bici più leggera è ${lighterBike.name} e pesa ${lightBike} kg`


