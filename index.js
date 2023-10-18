//variables constantes

//cuiosidades
const curiosityText = document.querySelector('.curiosity-text');

//secciones principales
const portafolioHome = document.querySelector('.portafolio-home');
const sectionPortafolio = document.querySelector('.section-portafolio');


//entradas
const entradaContent = document.querySelector('.entrada-content');
const setcionEntrada = document.querySelector('.section-entradas');
const sectionDetailEntrada = document.querySelector('.section-detail-entrada');

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

let entradasTextos = []

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
    '/portafolio/laToraTienda/vista3.jpg',
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

function Texts (title, date, content) {
    this.title = title;
    this.date = date;
    this.content = content;
};

let entrada1 = new Texts (
    'Que dificil es comenzar',
    '2023/10/9',
    'en construccion'
);

let entrada2 = new Texts (
    'Proyecto, Espacio Publico y Habitar',
    '2023/10/10',
    'Para hablar del Proyecto y el espacio público, primero es necesario entender la relación entre la arquitectura y la ciudad, y es que, según Moneo en su libro “Inquietud Teórica y Estrategia Proyectual en la Obra de Ocho Arquitectos Contemporáneos” donde al hablar de Aldo Rossi dice “para Rossi no hay duda: el territorio de la arquitectura es la ciudad”  esto me lleva a desencadenar una sucesión de ideas, donde entonces, la arquitectura es para la ciudad, la ciudad es sin duda el principal generador de encuentros, los encuentros se realizan en espacios públicos. Y al hablar de espacios públicos, no podemos olvidar la naturaleza social de la raza humana.\n\nOfelia Baca en su artículo “el emplazamiento como estrategia proyectual” cita a Norberg-Shultz “todavía creemos que los lugares de congregación publica como las plazas, los pasos, los cafés, los clubes comunitarios populares, etc. […] no son cosa del pasado y si se replantean adecuadamente para las necesidades de nuestros días, deberían tener un lugar en nuestras ciudades” . En una realidad, donde cada vez el mundo se hace más digital, cabría pensar si la posición de Norberg-Shultz es “anticuada”. Sin embargo, la pandemia del año 2020 nos deja claro que su postura sigue siendo correcta, unos dos años de encierro impuesto en viviendas donde la luz del sol era un lujo, al igual que los lugares donde despejar la mente, nos arroja una clara evidencia, y es que en los proyectos arquitectónicos el espacio público debe tener un punto de valor. No se deben, por ningún motivo, subestimar los lugares de encuentro de los habitantes, encuentros que permiten intercambios.\n\nPero antes de seguir hablando del espacio público, primero hablemos del proyecto de arquitectura, y no es otra cosa que la suma de todos los componentes que conforman un edificio, donde dichos componentes son imprescindibles para el adecuado funcionamiento del mismo, como dice Ludovico Quaroni en su libro “Proyectar un Edificio Ocho Lecciones de Arquitectura”, “un buen proyecto es una “estructura”, es decir un conjunto al que no se puede añadir, quitar ni sustituir nada sin pérdida de su unidad”.\n\nUna unidad en la que es necesario reflexionar sobre el habitar, más allá de las firmitas, utilitas y venustas. Un proyecto por ende deber considerar la generación de espacio público como medio para la integración edificio-ciudad. Una integración que debe, en palabras de Moneo al referirse a Rossi, reforzar la vida en común como el atributo más importante de la arquitectura . Con respecto a estas ideas, Miguel Lacasta en su artículo “Estrategias Proyectuales en Arquitectura” dice “las herramientas proyectuales fruto de las lógicas estratégicas en la arquitectura contemporánea deberían abarcar el ámbito de la ciudad, o lo que se suele llamar espacios comunes” , es por esto que en la generación de proyecto se debe entender la ciudad, para así adaptarse a una escala metropolitana, urbana y humana.\n\nY así como un proyecto es una unidad, los edificios, que tienen una lógica interna, son necesarios considerarlos como una unidad que constituyen una parte importante en una obra más grande, que es el contexto urbano al que pertenece.\n\nLa ciudad se debe entender entonces como la preexistencia a la que hay que entender para generar espacio común, como hace muchos años en las polis griegas existía el “ágora”, lugar que servía como plaza de encuentro de los ciudadanos, donde se podían discutir de comercio, política y cultura, el ágora como espacio para el intercambio.\n\nY así entonces claro, que la ciudad es el lugar de la arquitectura y que la ciudad es una preexistencia, es necesario tomar en cuenta a Moneo al hablar de la visión de Rossi para entender la ciudad, donde es ineludible explorar como se ha construido, que ha guiado su desarrollo y de qué modo se ha formado cada área que la compone.\n\nSe debe escuchar a la ciudad, porque la finalidad de la arquitectura no es solo la de ofrecer lugares interiores, sino que debe generar espacios que dialoguen con el contexto para que forme parte de él y de los habitantes. Es necesario aprender a ver y escuchar el lugar para poder formar parte de él.\n\nCuando se escucha al entorno, estamos diseñando desde la perspectiva de una estrategia proyectual de análisis de emplazamiento que en palabras de Baca “está enfocado en lograr que un edificio pueda pertenecer e integrarse a un lugar y entorno especifico”.\n\nPara concluir, es imprescindible no confundir espacio público con edificaciones de carácter público. Un proyecto para una edificación pública o privada, con una correcta estrategia proyectual y un correcto uso de los recursos del entorno, pude general espacios comunes, esos espacios de interrelación que muchas veces menospreciamos, pero que sin duda son necesarios para el buen funcionamiento de una ciudad.\n\n'
);

entradasTextos.push(entrada1, entrada2)


function renderhome() {
totalListAleatorio = totalList.slice();
totalListAleatorio.sort(comparar);
projectListHome(totalListAleatorio);
entradasListHome(entradasTextos, entradaContent);
};

function entradasListHome(arr, variable) {
    for(let i = 0; i < arr.length; i++){
        let works = arr[i];

        const entradaCard = document.createElement('li');
        entradaCard.classList.add('entrada-card');

        const linkCard = document.createElement('a')
        linkCard.setAttribute('href', '/sectionsHTML/entradas.html')

        const titleText = document.createElement('p');
        titleText.classList.add('tilte-text');
        titleText.innerText = works.title;

        const dateText = document.createElement('p');
        dateText.classList.add('date-text');
        dateText.innerText = works.date;

        variable.append(entradaCard);
        entradaCard.append(linkCard);
        linkCard.append(titleText, dateText);

    }
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

//render entradas
function entradasList(arr, variable) {
    for(let i = 0; i < arr.length; i++){
        let works = arr[i];

        const entradaCard = document.createElement('li');
        entradaCard.classList.add('entrada-card-section');
        entradaCard.addEventListener('click', () => { renderDetailEntradas(works) });

        const titleText = document.createElement('p');
        titleText.classList.add('tilte-text');
        titleText.innerText = works.title;

        const dateText = document.createElement('p');
        dateText.classList.add('date-text');
        dateText.innerText = works.date;

        variable.append(entradaCard);
        entradaCard.append(titleText, dateText);
    }
};

function renderSectionEntradas() {
    entradasList(entradasTextos, setcionEntrada)
}

function renderTexto(arr) {
    for(let i = 0; i < arr.length; i++){
        let works = arr[i];
    }
}

//render detalle entrada

function renderDetailEntradas(elemento) {

    sectionDetailEntrada.innerHTML = '';
    sectionDetailEntrada.style.display = 'block';

    const contenidoModal = document.createElement('div');
    contenidoModal.classList.add('contenido-modal');

    const closeButton = document.createElement('div');
    closeButton.classList.add('button-close');
    closeButton.addEventListener('click', () => { close(sectionDetailEntrada) });

    const x = document.createElement('p');
    x.innerText = 'X'

    const textEntrada = document.createElement('div');
    textEntrada.classList.add('text-detail');

    const titleEntrada = document.createElement('p');
    titleEntrada.classList.add('title-entrada');
    titleEntrada.innerText = elemento.title;

    const dateEntrada = document.createElement('p');
    dateEntrada.classList.add('date-entrada');
    dateEntrada.innerText = elemento.date;

    const contentEntrada = document.createElement('div');
    contentEntrada.classList.add('content-entrada')

    let paragraphs = elemento.content.split('\n\n')

    for(let i = 0; i < paragraphs.length; i++) {
        // Crea un nuevo elemento p para cada párrafo
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.innerText = paragraphs[i];

        contentEntrada.appendChild(paragraph);
    }


    sectionDetailEntrada.append(contenidoModal);
    contenidoModal.append(closeButton, textEntrada);
    closeButton.appendChild(x);
    textEntrada.append(titleEntrada, dateEntrada, contentEntrada);
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
    closeButton.addEventListener('click', () => { close(sectionDetailPortafolio) });

    const x = document.createElement('p');
    x.innerText = 'X'

    const divModal = document.createElement('div');
    divModal.classList.add('div-modal');

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

    const titleProject = document.createElement('p');
    titleProject.classList.add('title-project')
    titleProject.innerText = elemento.name;

    const categoryProject = document.createElement('p');
    categoryProject.classList.add('category-project')
    categoryProject.innerText = elemento.category;

    const dateProject = document.createElement('p');
    dateProject.classList.add('date-project')
    dateProject.innerText = elemento.date;

    const descriptionProject = document.createElement('p');
    descriptionProject.classList.add('description-project')
    descriptionProject.innerText = elemento.description;

    sectionDetailPortafolio.append(contenidoModal);
    contenidoModal.appendChild(divModal)
    divModal.append(closeButton, albumImages, textDetail);
    closeButton.appendChild(x);
    albumImages.append(anterior, views, siguiente);
    textDetail.append (titleProject, categoryProject, dateProject, descriptionProject)
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
  }

//section game

function Game (name, id, image) {
    this.name = name;
    this.id = id;
    this.image = image;
};

let piedra = new Game (
    'Piedra',
    1,
    '/assets/PIEDRA.png'
);

let papel = new Game (
    'Papel',
    2,
    '/assets/PAPEL.png'
);

let tijera = new Game (
    'Tijera',
    3,
    '/assets/TIJERA.png'
);

const cardGame = document.querySelector('.cards');
const vidasResultado = document.querySelector('.vidas');
let gameOptions = [];
let pc;
let triunfos = 0
let perdidas = 0
gameOptions.push(piedra, papel, tijera);

function renderCardGame (arr) {
    for(let i = 0; i < arr.length; i++){
        let option = arr[i];

        const  card= document.createElement('li');
        card.addEventListener('click', () => { game(option) });

        const figureCard = document.createElement('figure');
        figureCard.classList.add('card');

        const imageCard = document.createElement('img')
        imageCard.setAttribute('src', option.image);

        const nameOption = document.createElement('p');
        nameOption.classList.add('name-option');
        nameOption.innerText = option.name;

        cardGame.append(card);
        card.append(figureCard);
        figureCard.append(imageCard, nameOption);
    }
}

function renderGame () {
    renderCardGame(gameOptions);
};

function aleatorio(min, arr) {
    return Math.floor(Math.random() * (arr.length - min + 1) + min );
}

function renderResultados(result) {

    vidasResultado.innerHTML = ''
    const resultado = document.createElement('p');
    resultado. innerText = result;
    const conteoVidas = document.createElement('p')
    conteoVidas.innerText = 'Tienes ' + triunfos + ' triunfos y ' + perdidas + ' perdidas.';

    vidasResultado.append(resultado, conteoVidas);
};


function game(option) {

    pc = aleatorio(1, gameOptions)

    if (option.id == pc) {
        renderResultados('Empate')
    } else if (option.id == 1 && pc == 3) {
        triunfos = triunfos + 1;
        renderResultados('Ganaste');
    } else if (option.id == 2 && pc == 1) {
        triunfos = triunfos + 1;
        renderResultados('Ganaste');
    } else if (option.id == 3 && pc == 2) {
        triunfos = triunfos + 1;
        renderResultados('Ganaste');
    } else {
        perdidas = perdidas + 1;
        renderResultados('Perdiste');
    }

    if(triunfos == 3){
        renderResultados('GANASTE')
        alert("GANASTE")
    } else if(perdidas == 3){
        renderResultados('PERDISTE')
        alert("PERDISTE")
    }
};

while (triunfos < 3 && perdidas < 3) {

    game(option);   
};