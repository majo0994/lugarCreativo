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

let entregaFinal3 = new Projects (
    'docente',
    'Entrega Final 2do Semestre',
    '2023-1',
    'Toca nuevamente un ejercicio para segundo semestre, en esta ocasión se busca que el estudiante desarrolle estrategias de implantación a través de volúmenes y movimiento topográfico y a su vez se busca que los estudiantes entiendan la diferenciación espacial que conlleva la concepción de un edificio.',
    '/portafolio/entregaFinal3/vista1.jpg',
    [
        '/portafolio/entregaFinal3/vista1.jpg',
        '/portafolio/entregaFinal3/vista2.jpg',
        '/portafolio/entregaFinal3/vista3.jpg',
        '/portafolio/entregaFinal3/vista4.jpg',
        '/portafolio/entregaFinal3/vista5.jpg',
        '/portafolio/entregaFinal3/vista6.jpg',
        '/portafolio/entregaFinal3/vista7.jpg',
        '/portafolio/entregaFinal3/vista8.jpg',
        '/portafolio/entregaFinal3/vista9.jpg',
        '/portafolio/entregaFinal3/vista10.jpg',
        '/portafolio/entregaFinal3/vista11.jpg',
        '/portafolio/entregaFinal3/vista12.jpg'
    ]   
);

academicoList.push(posada, spa, hotel, mercado);
profesionalList.push(laToraEdificio, laToraTienda);
docenteList.push(entregaFinal1, entregaFinal2, entregaFinal3);
totalList.push(posada, spa, hotel, mercado, laToraEdificio, laToraTienda, entregaFinal1, entregaFinal2, entregaFinal3);

function Texts (title, date, content, author, topic) {
    this.title = title;
    this.date = date;
    this.content = content;
    this.author = author;
    this.topic = topic;
};

let entrada1 = new Texts (
    'Que Difícil es Comenzar',
    '2023/11/1',
    'Hacer ejercicio no es lo difícil, lo difícil es levantarse por las mañanas a hacer ejercicio, porque lo difícil no es hacer las cosas, sino comenzar a hacerlas.\n\nAsí termina siendo cada aspecto de la vida, tomar decisiones no es tan fácil, decidir salir de una relación toxica, ya sea sentimental, laboral, familiar, etc., no es fácil, decidir cambiar el rumbo de tu vida tampoco lo es, pero una vez que lo haces es cuando te das cuenta de que llevabas tiempo siendo Atlas, ese Titan griego que debía cargar el peso del mundo sobre sus hombros.\n\nEsta pagina web surge de esas situaciones donde tomas la decisión de dejar algo atrás, algo que ya no suma, solo resta y te hace sentir inconforme contigo mismo. Realizar esta pequeña “landing page”, fue para mi exactamente como cuando cierras un ciclo y lo haces cambiando tu pelo. En mi caso fue dejar en pausa mi carrera, la arquitectura, a un lado por un tiempo, se había convertido en el mundo que debía cargar. Así que decidí tomar el consejo que muchas veces les doy a mis estudiantes “llora 10 minutos, pero luego sigue”, así hice y comencé a aprender cosas nuevas. Necesitaba un descanso de ser arquitecta, así que comencé a ser profesora, a ser cocinera, a ser diseñadora web y a no ser perfecta.\n\nEste texto de inauguración, realmente no es para ustedes, es para mí, para siempre recordar que lo difícil es comenzar, pero que siempre con constancia, vale la pena.\n\n',
    'Maria Jose Parejo',
    ''
);

let entrada2 = new Texts (
    'Proyecto, Espacio Público y Habitar',
    '2023/11/8',
    'Para hablar del Proyecto y el espacio público, primero es necesario entender la relación entre la arquitectura y la ciudad, y es que, según Moneo en su libro “Inquietud Teórica y Estrategia Proyectual en la Obra de Ocho Arquitectos Contemporáneos” donde al hablar de Aldo Rossi dice “para Rossi no hay duda: el territorio de la arquitectura es la ciudad”  esto me lleva a desencadenar una sucesión de ideas, donde entonces, la arquitectura es para la ciudad, la ciudad es sin duda el principal generador de encuentros, los encuentros se realizan en espacios públicos. Y al hablar de espacios públicos, no podemos olvidar la naturaleza social de la raza humana.\n\nOfelia Baca en su artículo “el emplazamiento como estrategia proyectual” cita a Norberg-Shultz “todavía creemos que los lugares de congregación publica como las plazas, los pasos, los cafés, los clubes comunitarios populares, etc. […] no son cosa del pasado y si se replantean adecuadamente para las necesidades de nuestros días, deberían tener un lugar en nuestras ciudades” . En una realidad, donde cada vez el mundo se hace más digital, cabría pensar si la posición de Norberg-Shultz es “anticuada”. Sin embargo, la pandemia del año 2020 nos deja claro que su postura sigue siendo correcta, unos dos años de encierro impuesto en viviendas donde la luz del sol era un lujo, al igual que los lugares donde despejar la mente, nos arroja una clara evidencia, y es que en los proyectos arquitectónicos el espacio público debe tener un punto de valor. No se deben, por ningún motivo, subestimar los lugares de encuentro de los habitantes, encuentros que permiten intercambios.\n\nPero antes de seguir hablando del espacio público, primero hablemos del proyecto de arquitectura, y no es otra cosa que la suma de todos los componentes que conforman un edificio, donde dichos componentes son imprescindibles para el adecuado funcionamiento del mismo, como dice Ludovico Quaroni en su libro “Proyectar un Edificio Ocho Lecciones de Arquitectura”, “un buen proyecto es una “estructura”, es decir un conjunto al que no se puede añadir, quitar ni sustituir nada sin pérdida de su unidad”.\n\nUna unidad en la que es necesario reflexionar sobre el habitar, más allá de las firmitas, utilitas y venustas. Un proyecto por ende deber considerar la generación de espacio público como medio para la integración edificio-ciudad. Una integración que debe, en palabras de Moneo al referirse a Rossi, reforzar la vida en común como el atributo más importante de la arquitectura . Con respecto a estas ideas, Miguel Lacasta en su artículo “Estrategias Proyectuales en Arquitectura” dice “las herramientas proyectuales fruto de las lógicas estratégicas en la arquitectura contemporánea deberían abarcar el ámbito de la ciudad, o lo que se suele llamar espacios comunes” , es por esto que en la generación de proyecto se debe entender la ciudad, para así adaptarse a una escala metropolitana, urbana y humana.\n\nY así como un proyecto es una unidad, los edificios, que tienen una lógica interna, son necesarios considerarlos como una unidad que constituyen una parte importante en una obra más grande, que es el contexto urbano al que pertenece.\n\nLa ciudad se debe entender entonces como la preexistencia a la que hay que entender para generar espacio común, como hace muchos años en las polis griegas existía el “ágora”, lugar que servía como plaza de encuentro de los ciudadanos, donde se podían discutir de comercio, política y cultura, el ágora como espacio para el intercambio.\n\nY así entonces claro, que la ciudad es el lugar de la arquitectura y que la ciudad es una preexistencia, es necesario tomar en cuenta a Moneo al hablar de la visión de Rossi para entender la ciudad, donde es ineludible explorar como se ha construido, que ha guiado su desarrollo y de qué modo se ha formado cada área que la compone.\n\nSe debe escuchar a la ciudad, porque la finalidad de la arquitectura no es solo la de ofrecer lugares interiores, sino que debe generar espacios que dialoguen con el contexto para que forme parte de él y de los habitantes. Es necesario aprender a ver y escuchar el lugar para poder formar parte de él.\n\nCuando se escucha al entorno, estamos diseñando desde la perspectiva de una estrategia proyectual de análisis de emplazamiento que en palabras de Baca “está enfocado en lograr que un edificio pueda pertenecer e integrarse a un lugar y entorno especifico”.\n\nPara concluir, es imprescindible no confundir espacio público con edificaciones de carácter público. Un proyecto para una edificación pública o privada, con una correcta estrategia proyectual y un correcto uso de los recursos del entorno, pude general espacios comunes, esos espacios de interrelación que muchas veces menospreciamos, pero que sin duda son necesarios para el buen funcionamiento de una ciudad.\n\n',
    'Maria Jose Parejo',
    'espacio publico, proyecto'
);

let entrada3 = new Texts(
    'Proyecto y La Forma en Arquitectura',
    '2023/11/15',
    'En arquitectura no existe una respuesta definitiva para nada, no es una ciencia exacta donde los resultados son absolutos, existen miles de soluciones a un mismo problema. Es por tanto que no hay una sola manera de abordar un proyecto arquitectónico, no hay una estrategia proyectual definitiva. Sin embargo, a lo largo de esta reflexión, evaluaremos la preeminencia de la forma al generar proyecto.\n\nPero, primero hay que hablar de que es un proyecto de arquitectura, y no es otra cosa que la suma de todos los componentes que conforman un edificio, donde dichos componentes son imprescindibles para el adecuado funcionamiento del mismo, como dice Ludovico Quaroni en su libro “Proyectar un Edificio Ocho Lecciones de Arquitectura”, “un buen proyecto es una “estructura”, es decir un conjunto al que no se puede añadir, quitar ni sustituir nada sin pérdida de su unidad”.\n\nSiguiendo con esta línea de ideas, Moneo en su libro “Inquietud Teórica y Estrategia Proyectual en la Obra de Ocho Arquitectos Contemporáneos” cita a Robert Venturi “una arquitectura de la complejidad y el ajuste no ignora el todo” , Y es que sin duda la arquitectura, o más específicamente el proyecto de arquitectura, debe considerar cada componente o principio. Donde la interrelación de cada uno de estos elementos, y el peso que tienen dentro de un proyecto varía según la estrategia proyectual.\n\nNuevamente Quaroni, expone la siguiente idea “Así pues, al proyectar es muy importante tener siempre presente la necesidad de no dejar nada afuera, de integrar todo y de evitar, por ejemplo, el considerar como a menudo ocurre, que lo único importante en última instancia sea el logro de un resultado estético” , Quaroni considera que es necesario establecer una relación ecuánime entre estos elementos del proyecto, resaltar uno sobre otro no es “el deber ser”, sin embargo, la postura de muchos maestros de la arquitectura no van en sintonía con su forma de pensar, a lo largo de la historia muchos arquitectos han dado una mayor importancia a la forma en los proyectos, por encima del lugar, el uso o los sistemas constructivos.\n\nPara comenzar a cuestionar la postura de Quaroni acerca del proyecto, debemos tomar en cuenta la estrategia proyectual, que en mi opinión es la más radical, y es la de Peter Eisenman, donde sin duda alguna la forma, lo es todo.\n\nMoneo, en el libro mencionando anteriormente, señala “la obsesión de Peter Eisenman en aquellos años es liberar a la arquitectura de toda atadura, hacer que esta se produzca sin contaminación alguna, ni de lugar, ni de la función, ni de los sistemas constructivos: la arquitectura en su pureza es pues la meta” , así entonces, la estrategia de Eisenman se puede entender como la completa predominancia del desarrollo de la forma por encima de los demás, donde estos elementos solo ensucian a la edificación, la forma, entonces, como generadora del todo.\n\nEisenman ignora por completo las firmitas, el utilitas y el locus, El arquitecto sabe que están ahí, pero no considera necesario darles mayor importancia, Eisenman ve la arquitectura como un proceso mental.\n\nLa estrategia de Gehry, aunque no es tan radical como la de Eisenman, también obvia algunos principios, donde Moneo al referirse a Gehry dice “el arquitecto no se siente acorralado por las circunstancias. Para el, las preexistencias ambientales no existen: respetara una manera de hacer, un procedimiento, pero jamás un determinado ambiente, un contexto…” , En este enfoque de Gehry observamos que decide ignorar el locus, sin embargo, en su postura comienzan a aparecer las firmitas, Gehry ve la forma como el resultado de los materiales y de la construcción, y no teme “ensuciar” la forma con elementos resultantes de los sistemas constructivos, sino que los incluye con alevosía.\n\nEstudiando a Koolhaas, es completamente necesario establecer que para él, la forma no sigue a la función, citando nuevamente a Moneo “la ciudad nos hace ver que las funciones se acomodan con menos dificultad de la que nos parece a las formas de los edificios” , Para Koolhaas la forma se debe adaptar al lugar, es a lo que él llama forma estática, pero no a la función, el interior, que es el estado fluido, y aunque obvie la función como determinante para la generación formal, no la ignora por completo, para Koolhaas, un arquitecto es el catalizador que da forma a los espacios para que sean capaces de albergar los programas que el edificio reclama y que al final las edificaciones son para los ocupantes.\n\nLa estrategia de Koolhaas, establece un punto medio, donde si bien considera muchos de los principios para la generación de proyecto, él ve las edificaciones como contenedores que pueden albergar cualquier programa.\n\nCon esta línea de ideas, donde la forma no sigue a la función cabe destacar el proyecto realizado en el casco histórico de Petare, entendiendo el fundamento de la prueba práctica del concurso de opción, la utilización de distintos programas y de distintos terrenos, exige el desarrollo de una estrategia proyectual donde se entienda las características de los espacios solicitados en el uso, sus condiciones de espacios seriados, notables, de transición y espacios públicos, para así generar un contenedor que permita la asimilación del programa no deteniéndose demasiado en él.\n\nLa historia ha demostrado que cuando las edificaciones tienen una espacialidad “noble” permiten la adecuación de los usos con facilidad, a esto habría que acotar que no es posible realizar este proceso de adaptación a cualquier uso que requieran características demasiado técnicas, pero fuera de esos casos. Los proyectos de arquitectura deben ser lo suficientemente flexibles para sobrevivir y adaptarse a la selección natural, porque así como las sociedades cambian, los edificios también.\n\n',
    'Maria Jose Parejo',
    'forma, espacio, arquitectura, proyecto'
);

let entrada4 = new Texts(
    'Proyecto y La Preexistencia',
    '2023/11/22',
    'En un principio, en aquella arquitectura llamada clásica, los principios que daban orden a un proyecto eran solo las firmitas, la utilitas y la venusta, pero la evolución de la arquitectura, llevo a considerar el lugar como punto de partida para la elaboración de proyectos, el lugar entendido como la preexistencia. Es por esta razón que la finalidad de esta reflexión no es otra que analizar la importancia de la implementación de una estrategia proyectual orientada al emplazamiento en el desarrollo de proyectos.\n\nPero, primero hay que hablar de que es un proyecto de arquitectura, y no es otra cosa que la suma de todos los componentes que conforman un edificio, donde dichos componentes son imprescindibles para el adecuado funcionamiento del mismo, como dice Ludovico Quaroni en su libro “Proyectar un Edificio Ocho Lecciones de Arquitectura”, “un buen proyecto es una “estructura”, es decir un conjunto al que no se puede añadir, quitar ni sustituir nada sin pérdida de su unidad”.\n\nEs, por tanto, que para realizar un buen proyecto de arquitectura debemos considerar el “lugar”, dado que es parte de la unidad mencionada anteriormente. El lugar de la arquitectura, es como dice Moneo al referirse a la visión de Rossi, en su libro “Inquietud Teórica y Estrategia Proyectual en la Obra de Ocho Arquitectos Contemporáneos”, es la ciudad . Y la ciudad es sin duda una prexistencia, un lugar. En arquitectura, un lugar no es solo lo tangible, sino que también abarca el contexto histórico y el socio-cultural. Por lo que, para comenzar un proyecto, lo primero es entender dicho lugar.\n\nHay que entender, que le dio origen a ese lugar, como es su construcción, que situaciones han contribuido a su crecimiento y desarrollo y como se ha ido formando. El punto de partida es entonces, como dice Laura Gallardo-Frias en “siete puntos de análisis en el proceso proyectual”, “comprender la vocación del lugar para proteger la tierra y llegar a ser parte de la totalidad compresiva” , es decir, escuchar, analizar y comprender el contexto.\n\n	Para esto, no hay mejor manera de abordar el lugar que como lo hacía Álvaro Siza, donde su estrategia proyectual tiene base en la realidad. Como dice Moneo “Siza traba- y él lo ha dicho muchísimas veces- reconociendo la realidad. Está atento al paisaje, a los materiales, a los sistemas constructivos, a los usos, a las gentes que ocuparan lo construido” , Siza en primer lugar, escucha el lugar, lo analiza y luego proyecta. Usare nuevamente una cita que realiza Moneo de Siza para comprender mejor los primeros pasos que realiza el arquitecto, “comienzo el proyecto cuando voy a ver el terreno. Otras veces comienzo a partir de la idea de un lugar, una descripción, una fotografía, algo que me han dicho. Todo tiene un comienzo”.\n\n	El emplazamiento como estrategia proyectual, permite generar edificios que pertenecen a un lugar específico, y no edificios genéricos que pueden colocarse en cualquier parcela sin que respondan a nada, como si de piezas de lego se trataran.\n\nCon todo lo expresado anteriormente, es imposible no pensar en la prueba práctica del concurso de oposición, donde se asigna un lugar completamente consolidado, el casco Histórico de Petare, para generar tres proyectos en tres parcelas distintas. Esta situación obliga, o así debió ser, a los concursantes a generar una estrategia proyectual que permitiera entender el lugar a intervenir, una estrategia que arrojara las características más notables del lugar, para así tener clara la realidad del entorno a abordar.\n\nSin embargo, entender el lugar no se debe considerar repetir lo existente, sino entender las características que lo conforman para así extrapolarlas a nuevas soluciones, debe realizarse un proceso de reflexión como el que hizo Villanueva al entender la arquitectura colonial y adaptarla a la arquitectura moderna. Y es que comprender la preexistencia es entender los que fue, lo que es y lo que será.\n\nEsto me lleva a reflexionar la postura de Peter Eisenman con respecto al contexto, Moneo al hablar de Eisenman dice “sin caer en la utilización del contexto como referencia […] el contexto, por tanto, no como algo heredado y recibido, sino como realidad que continuamente se ve forzado a inventar el arquitecto” . Para Eisenman el contexto no es para ignorarlo, pero tampoco para someterse al él, El arquitecto, tiene también la responsabilidad de entender lo que un lugar puede llegar a ser para así mejorarlo.\n\nPor esta razón, creo que la mejor manera de concluir esta reflexión es que un arquitecto, no es solo un diseñador, un arquitecto debe ser también, un sociólogo, un historiador, un paisajista y un catalizador que tiene la difícil tarea de realizar un proceso alquímico para unificar todas las características de un lugar, para así producir un proyecto, pertinente y perteneciente.\n\n',
    'Maria Jose Parejo',
    'lugar, proyecto, preexistencia'
);

let entrada5 = new Texts(
    'Proyecto y La Eduacacion en Arquitectura',
    '2023/11/29',
    'Durante mis años de estudio me cuestione continuamente mis conocimientos en arquitectura, mis conocimientos acerca de proyectar, después de graduarme comencé a enseñar y fue entonces cuando deje de cuestionar mis conocimientos de arquitectura y proyectar, para comenzar a cuestionar mi proceso reflexivo. Al enseñar, me toco sacar aquellos conocimientos que estaban ahí, pero que no era parte de mi ser consciente. Conocimientos que entendía, pero en los que no había caído en cuenta de su significado. Eran conocimientos que en ese primer momento eran como respirar o caminar, a ciencia cierta no sabes cómo funciona, no tienes la teoría a la mano, pero sabes hacerlo.\n\nEs por esta razón que mi reflexión del proyecto y la enseñanza en la arquitectura, tendrá una connotación bástate personal, y quizás caiga en lo sentimental, pero a lo largo de estos años, que sin duda son pocos, pero espero que vayan en crecimiento, con la ayuda de autores he ido reconociendo y reforzando mi proceso de enseñar y de enseñarme.\n\nY es que la enseñanza en la arquitectura es un proceso, desarrollar un proyecto, es un proceso. Es por esta razón en la que siento completa sintonía con Peter Eisenman y a su vez con Moneo, quien en su libro “Inquietud Teórica y Estrategia Proyectual en la Obra de Ocho Arquitectos Contemporáneos” habla de la incorporación del concepto de procesos en la arquitectura que realiza Eisenman, Moneo dice “tal conciencia crea, naturalmente, una extraordinaria inquietud, viéndose Eisenman obligado a introducir el concepto de process: el proyecto se entiende a través de lo que ha sido la secuencia en el tiempo que los ha hecho posible”.\n\nCitando nuevamente a Moneo “el proceso enseña el “como” la arquitectura como proceso es la arquitectura de las escuelas, lugares donde aprendemos a “cómo hacer”.\n\nA través del proceso es como se puede evaluar el aprendizaje de un estudiante, es el proceso el responsable de generar un proyecto. Pero este proceso debe tener un objetivo, no puede ir guiado por el proyectar solo por proyectar, sino que siempre cada profesor debe tener claro cuál es el punto de partida y cuál es la meta. Para así tener una línea clara de pensamiento por el cual guiar a los estudiantes.\n\nEn una entrega final de diseño el resultado final, sirve como referencia de los conocimientos adquiridos, pero es el proceso el que permite el resultado final, el proceso entonces como generador de conocimiento.\n\nPero, así como no puede existir un proceso sin un objetivo. No puede existir un proyecto sin una reflexión, cualquier asignatura, siempre debe apostar a la reflexión constante del conocimiento. Una reflexión de idas y venidas, una reflexión que impliqué concientizar lo aprendido, al punto que el estudiante sea capaz, como dije en un principio, de explicar el proceso para respirar y caminar de una manera clara y consciente. Citare Campo Baeza, quien en sus recopilaciones para su libro “La Idea Construida, la Arquitectura a la luz de las Palabras” toma el texto “Aprendiendo a Pensar” de Pablo Fernández “creo que este proceso de reflexión continua es lo más importante que el alumno tiene que ir aprendiendo a ejercitar en los cursos de proyectos”.\n\nCitando nuevamente a Campo Baeza “Enseñar a proyectar es enseñar a aprender a pensar y a construir. Aprender a mirar. […] Proyectar arquitectura es crear. Crear es pensar. Pensar, como bien decía Sullivan, es crear en nuestro pensamiento”  Enseñar en arquitectura, es entonces aprender a usar, en primera instancia, el sentido común y después concientizar lo aprendido.\n\nLa arquitectura no se aprende a través de un manual que tiene las respuestas para cada situación, sino que se aprende como dice Zumthor en su libro “Pensar la arquitectura” “viendo hacer a otros. Activar y estimular al estudiante con visitas a obras de arquitectura, así como encuentros y contactos, desarrollando la capacidad crítica de percibir…”  Es por lo que no es el deber del profesor dar la respuesta al estudiante sino guiarlo a través del proceso para encuentre un criterio propio.\n\nEs por esta razón que un taller de proyecto se debe crear una atmosfera crítica, donde se puedan realizar debates, sin prejuicios, del estado de cada proyecto y a si incentivar al estudiante formar su propio razonamiento.\n\nSiendo así la prueba oral del concurso de oposición, que desde mi perspectiva, busca crear en los futuros profesores una la reflexión crítica sustentada de un proyecto. Busca que aprendamos a ver, a reflexionar y así como se le enseña a un estudiante, a concientizar, mientras seguimos aprendiendo, porque, aunque nuestro papel como profesores es formar a nuevos profesionales, es inevitable que enseñando aprendemos un poco cada día.\n\n',
    'Maria Jose Parejo',
    'docencia, arquitectura, proyecto, procesos'
);

entradasTextos.push(entrada1)


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

        const author = document.createElement('p');
        author.classList.add('author');
        author.innerText = works.author;

        const topic = document.createElement('p');
        topic.classList.add('topic');
        topic.innerText = works.topic;

        const dateText = document.createElement('p');
        dateText.classList.add('date-text');
        dateText.innerText = works.date;

        variable.append(entradaCard);
        entradaCard.append(linkCard);
        linkCard.append(titleText, author, topic, dateText);

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

        const author = document.createElement('p');
        author.classList.add('author');
        author.innerText = works.author;

        const topic = document.createElement('p');
        topic.classList.add('topic');
        topic.innerText = works.topic;

        const dateText = document.createElement('p');
        dateText.classList.add('date-text');
        dateText.innerText = works.date;

        variable.append(entradaCard);
        entradaCard.append(titleText, author, topic, dateText);
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

    const author = document.createElement('p');
    author.classList.add('firma');
    author.innerText = elemento.author


    sectionDetailEntrada.append(contenidoModal);
    contenidoModal.append(closeButton, textEntrada);
    closeButton.appendChild(x);
    textEntrada.append(titleEntrada, dateEntrada, contentEntrada, author);
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
const botonReiniciar = document.querySelector('.reiniciar');
let gameOptions = [];
let selection = [];
let pc;
let jugador;
let oponente;
let triunfos = 0
let perdidas = 0
gameOptions.push(piedra, papel, tijera);

function renderCardGame() {

    cardGame.innerHTML = '';

    for(let i = 0; i < gameOptions.length; i++){
        let option = gameOptions[i];

        const  card= document.createElement('li');
        card.addEventListener('click', () => { selectionGame(option) });

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
    };
    ocultarReiniciar()
};

function aleatorio(min, arr) {
    return Math.floor(Math.random() * (arr.length - min + 1) + min );
}

function selectionGame(option) {

    selection.length = 0;

    pc = aleatorio(1, gameOptions)

    if(pc === 1){
        oponente = piedra;
    } else if(pc === 2){
        oponente = papel;
    } else if(pc === 3){
        oponente = tijera;
    };
    if(option.id == 1){
        jugador = piedra;
    } else if(option.id == 2){
        jugador = papel;
    } else if(option.id == 3){
        jugador = tijera;
    };

    selection.push(jugador, oponente);
    console.log(selection);
    renderSelection(selection, 'Jugador', 'Oponente')
};

function renderSelection(arr, variableJugador, variableOponente) {

    cardGame.innerHTML = '';
    
    for(let i = 0; i < arr.length; i++){
        let option = arr[i];

        const  card= document.createElement('li');

        const figureCard = document.createElement('figure');
        figureCard.classList.add('card-select');

        const seleccionJugadores = document.createElement('p');
        seleccionJugadores.classList.add('seleccion-jugadores')
        seleccionJugadores.innerText = i === 0 ? variableJugador : variableOponente;

        const imageCard = document.createElement('img')
        imageCard.setAttribute('src', option.image);

        const nameOption = document.createElement('p');
        nameOption.classList.add('name-option');
        nameOption.innerText = option.name;

        cardGame.append(card);
        card.append(figureCard);
        figureCard.append(seleccionJugadores, imageCard, nameOption);
    };
    game();
}

function renderResultados(result) {

    vidasResultado.innerHTML = ''
    const resultado = document.createElement('p');
    resultado. innerText = result;
    const conteoVidas = document.createElement('p')
    conteoVidas.innerText = 'Tienes ' + triunfos + ' triunfos y ' + perdidas + ' perdidas.';

    vidasResultado.append(resultado, conteoVidas);
};

function ocultarReiniciar() {
    botonReiniciar.style.display = 'none';
}

function mostarReiniciar() {
    botonReiniciar.style.display = 'block';
}

function game() {

    if (jugador == oponente) {
        renderResultados('Empate')
    } else if (jugador == piedra && oponente == tijera) {
        triunfos = triunfos + 1;
        renderResultados('Ganaste');
    } else if (jugador == papel && oponente == piedra) {
        triunfos = triunfos + 1;
        renderResultados('Ganaste');
    } else if (jugador == tijera && oponente == papel) {
        triunfos = triunfos + 1;
        renderResultados('Ganaste');
    } else {
        perdidas = perdidas + 1;
        renderResultados('Perdiste'); 
    };

    if(triunfos == 3){
        renderResultados('GANASTE');
        finJuego();
    } else if(perdidas == 3){
        renderResultados('PERDISTE');
        finJuego();
    } else {
        setTimeout(renderCardGame, 2000);
    };
};

function finJuego() {
    mostarReiniciar()
    cardGame.style.display = 'none';
    botonReiniciar.addEventListener('click', reiniciarJuego);

};

function reiniciarJuego() {
    location.reload()
};

while (triunfos < 3 && perdidas < 3) {
        game(option);  

};

