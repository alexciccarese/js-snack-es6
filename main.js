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

bikeTextEl.innerText = `La bici più leggera è ${lightBike.name} e pesa ${lightBike.weight} kg`




/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const club = [
  {
    name: 'Napoli',
    points: 0,
    fouls: 0
  },
  {
    name: 'Milan',
    points: 0,
    fouls: 0
  },
  {
    name: 'Inter',
    points: 0,
    fouls: 0
  },
  {
    name: 'Juventus',
    points: 0,
    fouls: 0
  },
  {
    name: 'Lecce',
    points: 0,
    fouls: 0
  },
  {
    name: 'Fiorentina',
    points: 0,
    fouls: 0
  },
  {
    name: 'Roma',
    points: 0,
    fouls: 0
  },
  {
    name: 'Atalanta',
    points: 0,
    fouls: 0
  },
]

//generiamo numeri random per i punti
function numbRandom() {

  for (let i in club) {
    club[i].points = Math.floor(Math.random() * 100) + 1
    club[i].fouls = Math.floor(Math.random() * 100) + 1
  }
}
numbRandom()

console.log(club);


// creiamo nuovo array con nomi e falli

function removePoint (arr) {
  for (let i in arr) {
    delete arr[i].points
  }


}

removePoint(club)

console.log(club);
