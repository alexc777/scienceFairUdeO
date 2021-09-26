import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  arrCategory: any[] = [
    { name: 'Todas', slug: 'all' },
    { name: 'Electrónica', slug: 'electronica' },
    { name: 'Ciencias Naturales', slug: 'naturales' },
    { name: 'Electrónica e Informatica', slug: 'elec_progra' },
    { name: 'Tecnología de Información y comunicaciones', slug: 'tec_info_comu' }
  ]

  public arrProjects: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterProjects('all');
  }

  filterProjects(fill: string): any {

    this.arrProjects = [
      {
        imagen: 'assets/img/votaciones-udeo.jpg',
        category: 'elec_progra',
        name: 'Sistema de exposición y Votaciones',
        slug: 'sistema-de-exposicion-y-votaciones',
        description: 'Se desarrolló con un conjunto de tecnologías populares, ya que el flujo de trabajo es eficiente, éstas tecnologías engloban a Angular para el frontend y .Net core para el backend. El sistema consta de 2 secciones, Landing Page permite ver el tráiler de la funcionalidad del proyecto y el área de proyectos, donde se permite realizar diversas acciones entre ellas, visualizar el listado de proyectos y filtrar por categoría. Ver el detalle de un proyecto, como su horario de exposición, categoría, link del LIVE, votar por el proyecto, entre otras. En la pestaña de métricas, es posible visualizar los votos de cada proyecto y verificar el proyecto con mayor puntaje. Por, otro lado, en el apartado de equipo, muestra información de los involucrados a lo largo del desarrollo del sistema, mostrando su rol en el proyecto y una frase que caracteriza al integrante. Mientras que, en acerca de, se encuentra la documentación detallada del proceso, adicional, se menciona que, la metodología utilizada, para el desarrollo fue SCRUM, permitiendo el control de tareas y tiempos de entrega, también el uso de herramientas Case fue clave para facilitar el proceso de desarrollo, por último, se brinda una documentación que explica el despliegue del proyecto hacia producción luego de haber aprobado su etapa de QA. La finalidad del desarrollo del sistema fue brindar una plataforma que permitirá a los estudiantes de UdeO Montesquieu dar a conocer sus proyectos y el proceso que se realizó para cumplir la meta de entregar un proyecto de calidad y funcional demostrando sus habilidades y conocimientos.'
      },
      {
        imagen: 'assets/img/covid-temperatura/covid-temp.png',
        category: 'elec_progra',
        name: 'COVID Monitoreo de Temperatura',
        slug: 'covid-monitoreo-temperatura',
        description: 'Es un medidor de temperatura corporal, el cual tiene como función el brindar una ayuda para llevar un monitoreo controlado y eficaz debido a la situación actual del COVID.'
      },
      {
        imagen: 'assets/img/veh-detector/veh-detector.jpg',
        category: 'electronica',
        name: 'Vehículo detector de obstáculos',
        slug: 'vehiculo-detector-de-obstaculos',
        description: 'Robot controlado por módulo bluetooth programado por microcontrolador Arduino UNO para seguir líneas de color negro dentro de una pista, esquivar obstáculos que existan frente al robot mientras realiza su recorrido y detectar humo proveniente de gases colocados alrededor de la pista.'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo A',
        slug: 'maquina-goldber-grupo-a',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/solar-geogebra-a/sistema-solar-a.png',
        category: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo A',
        slug: 'sistema-planetario-grupo-a',
        description: 'Es plano o diagrama realizado por medio de Geogebra basado en el sistema solar, el proceso del mismo nos conlleva a usar coordenadas y análisis matemático, como lógico.'
      },
      {
        imagen: 'assets/img/elimina-bacterias/elimina-bac.PNG',
        category: 'naturales',
        name: 'Eliminacion de Bacterias en agua para consumo humano',
        slug: 'eliminacion-de-backterias-en-agua',
        description: 'Eliminación de bacterias de agua contaminada utilizando luces led ultravioleta'
      },
      {
        imagen: 'assets/img/goldberg-f/goldberg-f.png',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo F',
        slug: 'maquina-de-golberg-grupo-f',
        description: 'Es una maquina con pasos sencillos que se activo por medio de una pelota o carrito y este desencadenara un efecto cadena por medio de 40 pasos o diferentes estaciones, para poder abrir el baúl de carro y sus 4 ventanas.'
      },
      {
        imagen: 'assets/img/goldberg-b/golfberg.png',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo B',
        slug: 'maquina-de-goldberg-grupo-b',
        description: 'La máquina Consiste en Realizar una Tarea cotidiana de una forma diferente y complicada, con una serie de obstáculos y niveles.'
      },
      {
        imagen: 'assets/img/centros-vacunacion/c-vacunacion.png',
        category: 'elec_progra',
        name: 'Centros de Vacunación',
        slug: 'centros-de-vacunacion',
        description: 'Aplicación web en la cual un usuario obtenga la ubicación de su centro de vacunación más cercano y que cumpla con sus preferencias de vacunación luego de pasar por un filtro en el cual indique su grupo social de acuerdo a las opciones de registro de vacunación proporcionadas por el Gobierno de Guatemala.'
      },
      {
        imagen: 'assets/img/videoj-covid/covid-19.jpeg',
        category: 'elec_progra',
        name: 'Video Juego - Salvémonos del COVID-19',
        slug: 'video-juego-covid',
        description: 'El proyecto a realizar será un videojuego, que se desarrollará en PHP7, Canvas y MySQL, el cual contará con un personaje principal, que será un doctor que se encontrará luchando contra el virus para poder salvarse y lograr la meta final, que consistirá en atravesar los 3 niveles que estarán formando este videojuego'
      },
      {
        imagen: 'assets/img/casa-domotica/casa-domotica.jpg',
        category: 'electronica',
        name: 'Casa domótica',
        slug: 'casa-domotica',
        description: 'Casa domótica controlada por aplicación en teléfono inteligente y con enlace tipo BLUETOOTH. Consiste en el conjunto de técnicas orientadas a la automatización en una vivienda'
      },
      {
        imagen: 'assets/img/botonetas/botonetas.png',
        category: 'naturales',
        name: 'Sistema automático para separar botonetas por color',
        slug: 'sistema-botonetas',
        description: 'Sistema automatizado con Arduino Uno para detectar el color de objetos y colocarlos en recipientes separados'
      },
      {
        imagen: 'assets/img/euler/euler.png',
        category: 'naturales',
        name: 'Resolución del Método Euler',
        slug: 'resolucion-euler',
        description: 'El proyecto consiste en a realización de un solucionador automatizado que calculara y graficar el método de Euler mediante algoritmos de Analítica Avanzada de la Ciencia de Datos.'
      },
      {
        imagen: 'assets/img/cuidado-plantas/cuidado-plantas.png',
        category: 'naturales',
        name: 'Automatizacion en el Cuidado de las Plantas',
        slug: 'automatizacion-plantas',
        description: 'El proyecto consiste en la automatización para el cuidado de las plantas, un proyecto bastante económico que se basa en controlar el estado de humedad de las plantas para evitar que se marchiten y además es una gran ventaja para la persona que cuida las plantas ya que no tiene necesidad de que la persona controle las plantas en cada momento sino que el aparato que se construyó para satisfacer las necesidades de la persona con el cuidado de sus plantas y además nos ofrece para modo manual y modo automático y por medio de un controlador que hace todo el proceso y sensores para medir humedad en las plantas que se tienen en el hogar y una bomba que permitirá el riego hacia la plantas.'
      },
      {
        imagen: 'assets/img/goldberg-c/golberg-c.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo C',
        slug: 'maquina-de-bolberg-grupo-c',
        description: 'Una máquina de Rube Goldberg es cualquier aparato muy complejo que realiza una tarea muy simple de una manera muy indirecta.'
      },
      {
        imagen: 'assets/img/brazo/brazo.png',
        category: 'electronica',
        name: 'Brazo robótico',
        slug: 'brazo-robotico',
        description: 'Es un brazo robótico capaz de poder moverse por sí solo, ya sea por medio de pulsadores, potenciómetros o consigo mismo poder ser controlado por algún contro'
      },
      {
        imagen: 'assets/img/llenado-pinturas/proyecto-pintura.jpeg',
        category: 'elec_progra',
        name: 'Llenado en la selección automática de envases en Fábrica de Pinturas',
        slug: 'llenado-envases-pintura',
        description: 'Es un prototipo para un sistema autónomo que se basa en el llenado de envases de pinturas el cual es monitoreado contantemente por medio de sensores digitales el cual es procesado y enviado vía Radio Frecuencias a un panel central el cual es gestionado y enviado auna BD(Base De Datos) y así poder monitorear contantemente los productos terminados, dependiendo del código de barras detectado así será su color dispensado, cabe resaltar que es un circuito con detección de errores lo que quiere decir que si hay algún problema en el sistema el dispositivo nos lo indicara atreves de sus distintas señalizaciones.'
      },
      {
        imagen: 'assets/img/ally-cane/ally-cane.png',
        category: 'elec_progra',
        name: 'Ally Cane/Baston Aliado',
        slug: 'baston-aliado',
        description: 'Somos un grupo de estudiante universitarios y a grandes rasgos buscamos hacer más fácil la adaptación de movilizarse de una persona que haya perdido la vista ya sea por accidente o enfermedad y también dar un adicional de comodidad a las personas que nacieron sin la vista. Queremos brindarles la mayor seguridad a la hora de movilizarse por la ciudad, debido a que la infraestructura no se encuentra adaptado a un 100% para este tipo de capacidades, dado a que el bastón cuenta con sensores ultrasónicos que le permite aproximar y alertar en el momento de topar con algún objeto o persona. Brindar apoyo con la ubicación satelital (GPS) debido que, como cualquier  otra persona, necesita cubrir sus necesidades personales lo cual lo implica salir y en algunas situaciones implica ir a un lugar que no conoce, el GPS lo guiara con mayor facilidad para encontrar su destino, dándole así seguridad al movilizarse. Ayudar grandemente con la contaminación ambiental, debido a que cuenta con paneles solares que cargaran la batería sin necesidad de  conectarla a una corriente eléctrica, para así disminuir el impacto de  consumo energético y el gasto de baterías desechables.'
      },
      {
        imagen: 'assets/img/purificador/purificador.jpeg',
        category: 'tec_info_comu',
        name: 'Sistema Purificador de ambiente',
        slug: 'purificador-de-ambiente',
        description: 'Sistema que permite la purificación del aire a través de la luz uvc y así lograr un ambiente limpio y seguro.'
      },
      {
        imagen: 'assets/img/propeller/propeller.jpg',
        category: 'electronica',
        name: 'Propeller',
        slug: 'propeller',
        description: 'Nuestro proyecto consiste en un motor que hace girar una base, la cuál, consta de un Arduino, un módulo Bluetooth y una matriz LED. El objetivo de nuestro proyecto es desplegar texto y diseños de figuras, aplicando conocimientos de electrónica y programación ya que, al mismo tiempo, quisimos desarrollarlo de una manera interactiva. Como todos sabemos los cables están quedando obsoletos, por lo tanto, hemos hecho uso de un modulo para controlarlo a través de una aplicación y así cargar la información a nuestra matriz LED'
      },
      {
        imagen: 'assets/img/faja/faja.jpeg',
        category: 'electronica',
        name: 'Faja Transportadora',
        slug: 'faja-transportadora',
        description: 'El proyecto consta de una banda transportadora fabricada desde cero con un motor monofásico 120V y una banda de material de cuero con fibra para el fácil transporte de los productos de un lado de la banda al otro, adicional consta de sensores infrarrojos para la detección de 1 tamaño de producto este a definir dependiendo del uso que se le desee dar este sensor nos sirve para poder contabilizar los productos y poder almacenar la cantidad en un Excel así poder llevar el control de los mismos adicional cuenta con otro sensor que detectara si el producto no es de esta línea esto para tener un mayor control y evitar cruce de productos adicional contara con un descarte por medio de un actuador eléctrico para retirar el producto que no sea de esta línea. Cuenta con una producción programada de 10 productos por despacho para poder mejorar el control dentro de la línea de producción o donde se desee implementar'
      },
      {
        imagen: 'assets/img/safe/safe.png',
        category: 'naturales',
        name: 'Safe Trip/ Sistema Automatizado Transporte Publico',
        slug: 'safe-trip',
        description: 'Sistema diseñado para controlar de forma estricta la cantidad de pasajeros en una unidad de transporte públicopreviniendo la sobrecarga de usuarios en la unidad y minimizando contagios de enfermedades respiratorias.'
      },
      {
        imagen: 'assets/img/solar-geogebra-c/solar-c.png',
        category: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo C',
        slug: 'sistema-planetario-grupo-c',
        description: 'El proyecto consiste en una animación del sistema solar por medio del programa Geogebra que es unsoftware que nos permite realizar procesos geométricos, algebraicos y cálculos y visualizar graficas quenos permite ver desde otro punto de vista las aplicaciones que nos brinda la geometría para poder realizar mencionado proyecto.'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo D',
        slug: 'maquina-de-golberg-grupo-d',
        description: 'Se realizarán 40 pasos para formar la máquina de Rube Goldberg.'
      },
      {
        imagen: 'assets/img/pdf/pdf-scap.png',
        category: 'naturales',
        name: 'PDF SCRAPING',
        slug: 'pdf-scraping',
        description: 'El web Scraping es una herramienta bastante útil utilizada para extraer información de distintas páginas web desde el código fuente. Una vez extraída la información, se almacena en la base de datos del programa donde es procesada y compilada en una tabla, la cual se exporta como distintos archivos, en este caso, será exportado en PDF para poder abrir el documento y ver la recolección del Scraping de cualquier tipo de información. En el proyecto recopilaremos la información de distintas páginas web para hacer una o varias tablas con distintos temas como: Futbol, PIB, Índice de población en países, etc.'
      },
      {
        imagen: 'assets/img/sis-comandas/siscom.png',
        category: 'elec_progra',
        name: 'SISCOM (Sistema de Comandas)',
        slug: 'siscom',
        description: 'Eco Restaurante San Luis, ubicado en Aldea El Hato, Antigua Guatemala ofrece un concepto al aire libre, rodeado de naturaleza. El proyecto SISCOM surge en el momento que los meseros toman la orden a los comensales, anotando en una libreta la orden. En ocasiones, las ordenes tienden a ser confundidas al momento de servirlas debido a que no se da el seguimiento adecuado entre orden y número de mesa durante los tiempos de alta demanda de servicio. Por lo cual, el proyecto consiste en realizar la toma de ordenes por medio de un dispositivo móvil Android.'
      }
    ];

    if (fill != 'all') {
      const projects = this.arrProjects.filter(project => project.category === fill ? project : '');
      this.arrProjects = projects;
    }
  }

}
