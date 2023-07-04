//variables constantes
const curiosityText = document.querySelector('.curiosity-text')

//addEventListener




//variables

let curiosities = [
    'Parpadeamos más de 10.000.000 de veces en un año.',
    'El elefante es el único mamífero que no puede saltar.',
    'Un hombre llamado Charles Osborne tuvo hipo durante 69 años.',
    'Más gente usa cepillos de dientes azules que de color rojo.',
    'Los búhos son las únicas aves que pueden ver el color azul.',
    'Los ojos de las abejas tienen un cierto tipo de pelo.',
    'La orina del gato brilla bajo la luz negra (ultravioleta).',
    'Al nacer tenemos 300 huesos, pero de adulto solo tenemos 206.',
    'El corazón del erizo late un promedio de 300 veces por minuto.',
    'Los dientes humanos son casi tan duros como piedras.',
    'Un topo puede cavar un túnel de 300 pies de largo en solo una noche.'
]
let curiosityPrint


//functios

function random (min, arr) {
    return Math.floor(Math.random() * (arr.length - min))
}

function curiosityGenerator (arr) {
   let index = random(0, arr)
   curiosityPrint = arr[index]

   curiosityText.innerText = (curiosityPrint)
   console.log(index)
}

curiosityGenerator(curiosities)