//variables constantes

//cuiosidades
const curiosityText = document.querySelector('.curiosity-text');

//secciones principales
const portafolioHome = document.querySelector('.portafolio-home');
const sectionPortafolio = document.querySelector('.section-portafolio');

//portafolio
const portAcademico = document.querySelector('.academico');
const portProfesional = document.querySelector('.profesional');
const portDocente = document.querySelector('.docente');
const portTotal = document.querySelector('.port-total');

//detalle portafolio

const sectionDetailPortafolio = document.querySelector('.section-detail-portafolio');



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
];

let curiosityPrint
let academicoList = [];
let profesionalList = [];
let docenteList = [];
let totalList = [];
let totalListAleatorio = [];
let indiceImagen = 0;
let carrusel = [];



//functios

function random (min, arr) {
    return Math.floor(Math.random() * (arr.length - min));
};

function comparar(a, b) {
    return Math.random() - 0.5;
};

function curiosityGenerator (arr) {
   let index = random(0, arr);
   curiosityPrint = arr[index];

   curiosityText.innerText = (curiosityPrint);
};

curiosityGenerator(curiosities);


//section de portafolio

function Projects (category, name, date, description, portada, images) {
    this.category = category;
    this.name = name;
    this.date = date;
    this.description = description;
    this.portada = portada;
    this.images = images;
};

let posada = new Projects (
    'academico',
    'Posada En Choroni',
    2013,
    'Proyecto realizado en el 3er semestre de la carrera. La posada en Choroní busca reinterpretar la arquitectura colonial y convertirla en arquitectura contemporánea.',
    '/portafolio/posada/vista1.jpg',
    [
        '/portafolio/posada/vista1.jpg',
        '/portafolio/posada/vista2.jpg',
        '/portafolio/posada/vista3.jpg',
        '/portafolio/posada/vista4.jpg',
        '/portafolio/posada/plantaPb.jpg',
        '/portafolio/posada/plantaP1.jpg',
        '/portafolio/posada/seccion1.jpg'
    ]
);

let spa = new Projects (
    'academico',
    'Centro de salud y Spa',
    2014,
    'Proyecto realizado en el 4to semestre de la carrera. Este proyecto, además de exigir el desarrollo de una edificación, también exigía trabajo topográfico. El centro de salud, se desarrolla como una edificación que se impone en la parte alta de la colina, donde con juego de patios y terrazas busca lograr distintas sensaciones espaciales.',
    '/portafolio/spa/vista2.jpg',
    [
        '/portafolio/spa/vista1.jpg',
        '/portafolio/spa/vista2.jpg',
        '/portafolio/spa/vista3.jpg',
        '/portafolio/spa/vista4.jpg',
        '/portafolio/spa/plantaPb.jpg',
        '/portafolio/spa/plantaP1.jpg',
        '/portafolio/spa/seccion1.jpg',
    ]
);

let hotel = new Projects (
    'academico',
    'Hotel Boutique Spa',
    2016,
    'Proyecto realizado en el 6to semestre de la carrera.Tenía como objetivo la apropiación de un terreno ficticio de pendiente perfecta rodeado de árboles. La creación del lugar, se realiza a través de una trama espacial que organízalos volúmenes que forman el conjunto.',
    '/portafolio/hotel/vista2.jpg',
    [
        '/portafolio/hotel/vista1.jpg',
        '/portafolio/hotel/vista2.jpg',
        '/portafolio/hotel/vista3.jpg',
        '/portafolio/hotel/vista4.jpg',
        '/portafolio/hotel/plantaPb.jpg',
        '/portafolio/hotel/plantaP1.jpg',
        '/portafolio/hotel/seccion1.jpg',
        '/portafolio/hotel/seccion2.jpg',
        '/portafolio/hotel/axo.jpg'
    ]
);

let mercado = new Projects (
    'academico',
    'Cubiertas en la Selva Tropical',
    2018,
    'Proyecto realizado en el 9no semestre de la carrera. El proyecto busca solucionar la falta de mercados consolidados en el pueblo de Choron¬í, por lo que a través de una cubierta de madera y volúmenes de tiendas busca crear espacios al aire libre que permitan el tamizado de la luz.',
    '/portafolio/mercado/vista1.jpg',
    [   
        '/portafolio/mercado/vista1.jpg',
        '/portafolio/mercado/vista2.jpg',
        '/portafolio/mercado/vista3.jpg',
        '/portafolio/mercado/plantaPb.jpg',
        '/portafolio/mercado/axo.jpg',
        '/portafolio/mercado/seccion1.jpg',
        '/portafolio/mercado/seccion2.jpg',
        '/portafolio/mercado/kioskos.jpg'
    ]

);

let laToraEdificio = new Projects (
    'profesional',
    'Edifico La Tora',
    2021,
    'Se plantea una propuesta conformada por un cuerpo bajo comercial, un cuerpo alto destinado a uso de oficinas rematado en su último nivel por una terraza para uso comercial. Destaca por sus dimensiones el cuerpo bajo, de mayor ubicación el cual está conformado por los tres niveles comerciales que albergarán la actividad principal del conjunto. El cuerpo alto conformado por 5 niveles de oficinas, más esbelto que su contraparte comercial, remata en una terraza descubierta destinada a uso comercial. La fachada de la propuesta se encuentra conformada por un sistema de muro cortina de cristal y aluminio y revestimientos de materiales sintéticos de alta tecnología para garantizar la integridad visual y física de la edificación en el tiempo. El acceso peatonal se plantea desde la esquina de la parcela, entre la Av. Orinoco y la calle Cali, donde destaca la escalinata de ingreso principal de la edificación, garantizando así una lectura clara de dicha entrada. El ingreso vehicular a los dos sótanos de estacionamiento se plantea desde la calle Cali, al sur de la parcela.',
    '/portafolio/laToraEdificio/vista1.jpg',
    [
        '/portafolio/laToraEdificio/vista1.jpg',
        '/portafolio/laToraEdificio/vista2.jpg',
        '/portafolio/laToraEdificio/vista3.jpg',
        '/portafolio/laToraEdificio/vista4.jpg',
        '/portafolio/laToraEdificio/plantaPb.jpg',
        '/portafolio/laToraEdificio/plantaP1.jpg',
        '/portafolio/laToraEdificio/seccion1.jpg'
    ]
);

let laToraTienda = new Projects (
    'profesional',
    'Tienda La Tora',
    2023,
    'Proyecto de carnicería boutique, donde la venta de carne se vende como una nueva experiencia a todos los clientes.',
    '/portafolio/laToraTienda/vista3.png',
    [
        '/portafolio/laToraTienda/vista1.jpg',
        '/portafolio/laToraTienda/vista2.jpg',
        '/portafolio/laToraTienda/vista3.jpg',
        '/portafolio/laToraTienda/vista4.jpg'
    ]
);

let entregaFinal1 = new Projects (
    'docente',
    'Entrega Final 1er Semestre',
    2021,
    '',
    '/portafolio/entregaFinal1/portada.jpg',
    [
        '/portafolio/entregaFinal1/vista1.jpg',
        '/portafolio/entregaFinal1/vista2.jpg',
        '/portafolio/entregaFinal1/vista3.jpg',
        '/portafolio/entregaFinal1/vista4.jpg',
        '/portafolio/entregaFinal1/vista5.jpg',
        '/portafolio/entregaFinal1/vista6.jpg',
        '/portafolio/entregaFinal1/plano1.jpg',
        '/portafolio/entregaFinal1/plano2.jpg',
        '/portafolio/entregaFinal1/plano3.jpg',
    ]
);

let entregaFinal2 = new Projects (
    'docente',
    'Entrega Final 2do Semestre',
    '2022-2',
    'El ejercicio Final del semestre, se plantea como la conclusión y verificación de los conocimientos adquiridos. Donde a través de un terreno utópico con pendiente perfecta del 20% deben realizar un desarrollo de idea de edificación que les permita la apropiación del lugar a través de volumetría y trabajo topográfico, donde más adelante dicha incipiente concepción de edificación se le asigne un uso definido, que en este caso el uso escogido es una vivienda.',
    '/portafolio/entregaFinal2/portada.jpg',
    [
        '/portafolio/entregaFinal2/vista1.jpg',
        '/portafolio/entregaFinal2/vista2.jpg',
        '/portafolio/entregaFinal2/vista3.jpg',
        '/portafolio/entregaFinal2/vista4.jpg',
        '/portafolio/entregaFinal2/vista5.jpg',
        '/portafolio/entregaFinal2/vista6.jpg',
        '/portafolio/entregaFinal2/vista7.jpg',
        '/portafolio/entregaFinal2/plano1.jpg',
        '/portafolio/entregaFinal2/plano2.jpg',
        '/portafolio/entregaFinal2/plano3.jpg',
        '/portafolio/entregaFinal2/plano4.jpg',
        '/portafolio/entregaFinal2/plano5.jpg',
        '/portafolio/entregaFinal2/plano6.jpg',
        '/portafolio/entregaFinal2/plano8.jpg',
        '/portafolio/entregaFinal2/plano9.jpg'
    ]
);




academicoList.push(posada, spa, hotel, mercado);
profesionalList.push(laToraEdificio, laToraTienda);
docenteList.push(entregaFinal1, entregaFinal2);
totalList.push(posada, spa, hotel, mercado, laToraEdificio, laToraTienda, entregaFinal1, entregaFinal2);

function renderhome() {
totalListAleatorio = totalList.slice();
totalListAleatorio.sort(comparar);
projectListHome(totalListAleatorio);

};

function projectListHome(arr) {

    for(let i = 0; i < arr.length; i++){
        let works = arr[i];

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card-home');
        

        const linkCard = document.createElement('a')
        linkCard.setAttribute('href', '/sectionsHTML/portafolio.html')

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
        projectCard.append(linkCard, textContainer);
        linkCard.appendChild(figurePortada)
        figurePortada.appendChild(portada);
        textContainer.append(projectName, projectdate);
        
    }

};


function projectList(arr, variable) {

    for(let i = 0; i < arr.length; i++){
        let work = arr[i];

        const projectCard = document.createElement('li');
        projectCard.classList.add('project-card');
        projectCard.addEventListener('click', () => { renderDetailProtafolio(work) });

        const figurePortada = document.createElement('figure');
    
        const portada = document.createElement('img');
        portada.setAttribute('src', work.portada);

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const projectName = document.createElement('p');
        projectName.innerText = work.name

        const projectdate = document.createElement('p');
        projectdate.innerText = work.date

        variable.append(projectCard);
        projectCard.append(figurePortada, textContainer);
        figurePortada.appendChild(portada);
        textContainer.append(projectName, projectdate);   
    }
};

function renderPortafolio() {
    projectList(academicoList, portAcademico);
    projectList(profesionalList, portProfesional);
    projectList(docenteList, portDocente);
};

//render detalle portafolio

function renderDetailProtafolio(elemento) {

    carrusel = elemento.images;

    sectionDetailPortafolio.innerHTML = '';
    sectionDetailPortafolio.style.display = 'block';

    const contenidoModal = document.createElement('div');
    contenidoModal.classList.add('contenido-modal');

    const closeButton = document.createElement('div');
    closeButton.classList.add('button-close');
    closeButton.addEventListener('click', () => { close(sectionDetailPortafolio) })

    const x = document.createElement('p');
    x.innerText = 'X'

    const albumImages = document.createElement('figure');
    albumImages.classList.add('album-images');

    const anterior = document.createElement('img');
    anterior.classList.add('anterior');
    anterior.setAttribute('src', '/assets/anterior.png')
    anterior.addEventListener('click', () => {anteriorImagen(carrusel)});

    const siguiente = document.createElement('img');
    siguiente.classList.add('siguiente');
    siguiente.setAttribute('src', '/assets/siguiente.png')
    siguiente.addEventListener('click', () => {siguienteImagen(carrusel)});

    const views = document.createElement('img');
    views.classList.add('album');
    views.setAttribute('src', carrusel[0]);
    

    const textDetail = document.createElement('div');
    textDetail.classList.add('text-detail');

    const parrafo1 = document.createElement('p');
    parrafo1.innerText = elemento.name;

    const parrafo2 = document.createElement('p');
    parrafo2.innerText = elemento.category;

    const parrafo3 = document.createElement('p');
    parrafo3.innerText = elemento.date;

    const parrafo4 = document.createElement('p');
    parrafo4.innerText = elemento.description;

    sectionDetailPortafolio.append(contenidoModal);
    contenidoModal.append(closeButton, albumImages, textDetail);
    closeButton.appendChild(x);
    albumImages.append(anterior, views, siguiente);
    textDetail.append(parrafo1, parrafo2, parrafo3, parrafo4)
};

function close(close) {
    close.style.display = 'none';
    indiceImagen = 0
}
  
function siguienteImagen(carrusel) {
    if (indiceImagen > 0) {
        indiceImagen--;
      } else {
        indiceImagen = carrusel.length - 1;
      }
      actualizarImagen(carrusel);
};
  
function anteriorImagen(carrusel) {
    if (indiceImagen < carrusel.length - 1) {
        indiceImagen++;
      } else {
        indiceImagen = 0;
      }
      actualizarImagen(carrusel);
};

function actualizarImagen(carrusel) {
    const imagen = document.querySelector('.album');
    imagen.src = carrusel[indiceImagen];
    console.log(indiceImagen)
  }
