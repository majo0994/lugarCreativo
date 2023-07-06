//variables constantes

//cuiosidades
const curiosityText = document.querySelector('.curiosity-text');

//secciones principales
const portafolioHome = document.querySelector('.portafolio-home')
const sectionPortafolio = document.querySelector('.section-portafolio')

//portafolio
const portAcademico = document.querySelector('.academico');
const portProfesional = document.querySelector('.profesional');
const portDocente = document.querySelector('.docente');
const portTotal = document.querySelector('.port-total');



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
let academicoList = [];
let profesionalList = [];
let docenteList = [];
let totalList = [];


//functios

function random (min, arr) {
    return Math.floor(Math.random() * (arr.length - min));
}

function curiosityGenerator (arr) {
   let index = random(0, arr);
   curiosityPrint = arr[index];

   curiosityText.innerText = (curiosityPrint);
}

curiosityGenerator(curiosities);


//section de portafolio

function Projects (category, name, date, description, portada, plans, album) {
    this.category = category;
    this.name = name;
    this.date = date;
    this.description = description;
    this.portada = portada;
    this.plans = plans;
    this.album = album;
}

let posada = new Projects (
    'academico',
    'Posada En Choroni',
    2013,
    'Proyecto realizado en el 3er semestre de la carrera. La posada en Choroní busca reinterpretar la arquitectura colonial y convertirla en arquitectura contemporánea.',
    '/portafolio/posada/posada1.jpg',
    [
        '/portafolio/posada/planta-pb.png',
        '/portafolio/posada/planta-p1.png'
    ],
    [
        '/portafolio/posada/posada1.jpg',
        '/portafolio/posada/posada2.jpg',
        '/portafolio/posada/posada3.jpg',
        '/portafolio/posada/posada4.jpg'
    ],
)

let spa = new Projects (
    'academico',
    'Centro de salud y Spa',
    2014,
    'Proyecto realizado en el 4to semestre de la carrera. Este proyecto, además de exigir el desarrollo de una edificación, también exigía trabajo topográfico. El centro de salud, se desarrolla como una edificación que se impone en la parte alta de la colina, donde con juego de patios y terrazas busca lograr distintas sensaciones espaciales.',
    '/portafolio/spa/SPA_VISTA2.jpg',
    [
    ],
    [
        '/portafolio/spa/SPA_VISTA1.jpg',
        '/portafolio/spa/SPA_VISTA2.jpg',
        '/portafolio/spa/SPA_VISTA3.jpg',
        '/portafolio/spa/SPA_VISTA4.jpg'
    ],
)

let hotel = new Projects (
    'academico',
    'Hotel Boutique Spa',
    2016,
    'Proyecto realizado en el 6to semestre de la carrera.Tenía como objetivo la apropiación de un terreno ficticio de pendiente perfecta rodeado de árboles. La creación del lugar, se realiza a través de una trama espacial que organízalos volúmenes que forman el conjunto.',
    '/portafolio/hotel/HOTEL_2.jpg',
    [
    ],
    [
        '/portafolio/spa/SPA_VISTA1.jpg',
        '/portafolio/spa/SPA_VISTA2.jpg',
        '/portafolio/spa/SPA_VISTA3.jpg',
        '/portafolio/spa/SPA_VISTA4.jpg'
    ],
)

let mercado = new Projects (
    'academico',
    'Cubiertas en la Selva Tropical',
    2018,
    'Proyecto realizado en el 9no semestre de la carrera. El proyecto busca solucionar la falta de mercados consolidados en el pueblo de Choron¬í, por lo que a través de una cubierta de madera y volúmenes de tiendas busca crear espacios al aire libre que permitan el tamizado de la luz.',
    '/portafolio/mercado/CUBIERTA_VISTA1.jpg',
    [
    ],
    [
        '/portafolio/spa/SPA_VISTA1.jpg',
        '/portafolio/spa/SPA_VISTA2.jpg',
        '/portafolio/spa/SPA_VISTA3.jpg',
        '/portafolio/spa/SPA_VISTA4.jpg'
    ],

)



academicoList.push(posada, spa, hotel, mercado);
profesionalList.push(hotel, posada);
docenteList.push(mercado, spa);
totalList.push(posada, spa, hotel);



function projectListHome() {

    for(let i = 0; i < totalList.length; i++){
        let works = totalList[i];

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card-home');

        const figurePortada = document.createElement('figure');
    
        const portada = document.createElement('img');
        portada.setAttribute('src', works.portada);

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const projectName = document.createElement('p');
        projectName.innerText = works.name

        const projectdate = document.createElement('p');
        projectdate.innerText = 'Tipo: ' + works.category

        portTotal.append(projectCard);
        projectCard.append(figurePortada, textContainer);
        figurePortada.appendChild(portada);
        textContainer.append(projectName, projectdate)
        
    }

}

projectListHome()


function projectList(arr, variable) {

    for(let i = 0; i < arr.length; i++){
        let works = arr[i];

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const figurePortada = document.createElement('figure');
    
        const portada = document.createElement('img');
        portada.setAttribute('src', works.portada);

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const projectName = document.createElement('p');
        projectName.innerText = works.name

        const projectdate = document.createElement('p');
        projectdate.innerText = works.date

        variable.append(projectCard);
        projectCard.append(figurePortada, textContainer);
        figurePortada.appendChild(portada);
        textContainer.append(projectName, projectdate)
        
    }

}

/*projectList(academicoList, portAcademico)
projectList(profesionalList, portProfesional)
projectList(docenteList, portDocente)*/