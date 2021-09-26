import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  arrCategory: any[] = [
    { name: 'Todas', slug: 'all' },
    { name: 'Electrónica', slug: 'electronica' },
    { name: 'Ciencias Naturales', slug: 'naturales' },
    { name: 'Electrónica e Informatica', slug: 'elec_progra' },
    { name: 'Tecnología de Información y comunicaciones', slug: 'tec_info_comu' }
  ]

  arrProjects: any[] = [];

  arrElectronica: any[] = [];
  arrNaturales: any[] = [];
  arrProgra: any[] = [];
  arrComu: any[] = [];
  arrPlaneta: any[] = [];
  arrMaquina: any[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.medalsProjects();
  }

  medalsProjects() {
    this.arrProjects = [
      {
        imagen: 'assets/img/veh-detector/veh-detector.jpg',
        category: 'electronica',
        name: 'Vehículo detector de obstáculos',
        slug: 'vehiculo-detector-de-obstaculos',
        description: 'Robot controlado por módulo bluetooth programado por microcontrolador Arduino UNO para seguir líneas de color negro dentro de una pista, esquivar obstáculos que existan frente al robot mientras realiza su recorrido y detectar humo proveniente de gases colocados alrededor de la pista.',
        medal: 'gold'
      },
      {
        imagen: 'assets/img/votaciones-udeo.jpg',
        category: 'elec_progra',
        name: 'Sistema de exposición y Votaciones',
        slug: 'sistema-de-exposicion-y-votaciones',
        description: 'Se desarrolló con un conjunto de tecnologías populares, ya que el flujo de trabajo es eficiente, éstas tecnologías engloban a Angular para el frontend y .Net core para el backend. El sistema consta de 2 secciones, Landing Page permite ver el tráiler de la funcionalidad del proyecto y el área de proyectos, donde se permite realizar diversas acciones entre ellas, visualizar el listado de proyectos y filtrar por categoría. Ver el detalle de un proyecto, como su horario de exposición, categoría, link del LIVE, votar por el proyecto, entre otras. En la pestaña de métricas, es posible visualizar los votos de cada proyecto y verificar el proyecto con mayor puntaje. Por, otro lado, en el apartado de equipo, muestra información de los involucrados a lo largo del desarrollo del sistema, mostrando su rol en el proyecto y una frase que caracteriza al integrante. Mientras que, en acerca de, se encuentra la documentación detallada del proceso, adicional, se menciona que, la metodología utilizada, para el desarrollo fue SCRUM, permitiendo el control de tareas y tiempos de entrega, también el uso de herramientas Case fue clave para facilitar el proceso de desarrollo, por último, se brinda una documentación que explica el despliegue del proyecto hacia producción luego de haber aprobado su etapa de QA. La finalidad del desarrollo del sistema fue brindar una plataforma que permitirá a los estudiantes de UdeO Montesquieu dar a conocer sus proyectos y el proceso que se realizó para cumplir la meta de entregar un proyecto de calidad y funcional demostrando sus habilidades y conocimientos.',
        medal: 'silver'
      },
      {
        imagen: 'assets/img/botonetas/botonetas.png',
        category: 'naturales',
        name: 'Sistema automático para separar botonetas por color',
        slug: 'sistema-botonetas',
        description: 'Sistema automatizado con Arduino Uno para detectar el color de objetos y colocarlos en recipientes separados',
        medal: 'bronze'
      }
    ];

    this.arrElectronica = [
      {
        imagen: 'assets/img/veh-detector/veh-detector.jpg',
        category: 'electronica',
        name: 'Vehículo detector de obstáculos',
        slug: 'vehiculo-detector-de-obstaculos',
        description: 'Robot controlado por módulo bluetooth programado por microcontrolador Arduino UNO para seguir líneas de color negro dentro de una pista, esquivar obstáculos que existan frente al robot mientras realiza su recorrido y detectar humo proveniente de gases colocados alrededor de la pista.',
        medal: 'gold'
      },
      {
        imagen: 'assets/img/brazo/brazo.png',
        category: 'electronica',
        name: 'Brazo robótico',
        slug: 'brazo-robotico',
        description: 'Es un brazo robótico capaz de poder moverse por sí solo, ya sea por medio de pulsadores, potenciómetros o consigo mismo poder ser controlado por algún contro',
        medal: 'silver'
      },
      {
        imagen: 'assets/img/faja/faja.jpeg',
        category: 'electronica',
        name: 'Faja Transportadora',
        slug: 'faja-transportadora',
        description: 'El proyecto consta de una banda transportadora fabricada desde cero con un motor monofásico 120V y una banda de material de cuero con fibra para el fácil transporte de los productos de un lado de la banda al otro, adicional consta de sensores infrarrojos para la detección de 1 tamaño de producto este a definir dependiendo del uso que se le desee dar este sensor nos sirve para poder contabilizar los productos y poder almacenar la cantidad en un Excel así poder llevar el control de los mismos adicional cuenta con otro sensor que detectara si el producto no es de esta línea esto para tener un mayor control y evitar cruce de productos adicional contara con un descarte por medio de un actuador eléctrico para retirar el producto que no sea de esta línea. Cuenta con una producción programada de 10 productos por despacho para poder mejorar el control dentro de la línea de producción o donde se desee implementar',
        medal: 'bronze'
      }
    ];

    this.arrNaturales = [
      {
        imagen: 'assets/img/botonetas/botonetas.png',
        category: 'naturales',
        name: 'Sistema automático para separar botonetas por color',
        slug: 'sistema-botonetas',
        description: 'Sistema automatizado con Arduino Uno para detectar el color de objetos y colocarlos en recipientes separados',
        medal: 'gold'
      },
      {
        imagen: 'assets/img/cuidado-plantas/cuidado-plantas.png',
        category: 'naturales',
        name: 'Automatizacion en el Cuidado de las Plantas',
        slug: 'automatizacion-plantas',
        description: 'El proyecto consiste en la automatización para el cuidado de las plantas, un proyecto bastante económico que se basa en controlar el estado de humedad de las plantas para evitar que se marchiten y además es una gran ventaja para la persona que cuida las plantas ya que no tiene necesidad de que la persona controle las plantas en cada momento sino que el aparato que se construyó para satisfacer las necesidades de la persona con el cuidado de sus plantas y además nos ofrece para modo manual y modo automático y por medio de un controlador que hace todo el proceso y sensores para medir humedad en las plantas que se tienen en el hogar y una bomba que permitirá el riego hacia la plantas.',
        medal: 'silver'
      },
      {
        imagen: 'assets/img/elimina-bacterias/elimina-bac.PNG',
        category: 'naturales',
        name: 'Eliminacion de Bacterias en agua para consumo humano',
        slug: 'eliminacion-de-backterias-en-agua',
        description: 'Eliminación de bacterias de agua contaminada utilizando luces led ultravioleta',
        medal: 'bronze'
      }
    ];

    this.arrProgra = [
      {
        imagen: 'assets/img/votaciones-udeo.jpg',
        category: 'elec_progra',
        name: 'Sistema de exposición y Votaciones',
        slug: 'sistema-de-exposicion-y-votaciones',
        description: 'Se desarrolló con un conjunto de tecnologías populares, ya que el flujo de trabajo es eficiente, éstas tecnologías engloban a Angular para el frontend y .Net core para el backend. El sistema consta de 2 secciones, Landing Page permite ver el tráiler de la funcionalidad del proyecto y el área de proyectos, donde se permite realizar diversas acciones entre ellas, visualizar el listado de proyectos y filtrar por categoría. Ver el detalle de un proyecto, como su horario de exposición, categoría, link del LIVE, votar por el proyecto, entre otras. En la pestaña de métricas, es posible visualizar los votos de cada proyecto y verificar el proyecto con mayor puntaje. Por, otro lado, en el apartado de equipo, muestra información de los involucrados a lo largo del desarrollo del sistema, mostrando su rol en el proyecto y una frase que caracteriza al integrante. Mientras que, en acerca de, se encuentra la documentación detallada del proceso, adicional, se menciona que, la metodología utilizada, para el desarrollo fue SCRUM, permitiendo el control de tareas y tiempos de entrega, también el uso de herramientas Case fue clave para facilitar el proceso de desarrollo, por último, se brinda una documentación que explica el despliegue del proyecto hacia producción luego de haber aprobado su etapa de QA. La finalidad del desarrollo del sistema fue brindar una plataforma que permitirá a los estudiantes de UdeO Montesquieu dar a conocer sus proyectos y el proceso que se realizó para cumplir la meta de entregar un proyecto de calidad y funcional demostrando sus habilidades y conocimientos.',
        medal: 'gold'
      },
      {
        imagen: 'assets/img/llenado-pinturas/proyecto-pintura.jpeg',
        category: 'elec_progra',
        name: 'Llenado en la selección automática de envases en Fábrica de Pinturas',
        slug: 'llenado-envases-pintura',
        description: 'Es un prototipo para un sistema autónomo que se basa en el llenado de envases de pinturas el cual es monitoreado contantemente por medio de sensores digitales el cual es procesado y enviado vía Radio Frecuencias a un panel central el cual es gestionado y enviado auna BD(Base De Datos) y así poder monitorear contantemente los productos terminados, dependiendo del código de barras detectado así será su color dispensado, cabe resaltar que es un circuito con detección de errores lo que quiere decir que si hay algún problema en el sistema el dispositivo nos lo indicara atreves de sus distintas señalizaciones.',
        medal: 'silver'
      },
      {
        imagen: 'assets/img/sis-comandas/siscom.png',
        category: 'elec_progra',
        name: 'SISCOM (Sistema de Comandas)',
        slug: 'siscom',
        description: 'Eco Restaurante San Luis, ubicado en Aldea El Hato, Antigua Guatemala ofrece un concepto al aire libre, rodeado de naturaleza. El proyecto SISCOM surge en el momento que los meseros toman la orden a los comensales, anotando en una libreta la orden. En ocasiones, las ordenes tienden a ser confundidas al momento de servirlas debido a que no se da el seguimiento adecuado entre orden y número de mesa durante los tiempos de alta demanda de servicio. Por lo cual, el proyecto consiste en realizar la toma de ordenes por medio de un dispositivo móvil Android.',
        medal: 'bronze'
      }
    ];

    this.arrComu = [
      {
        imagen: 'assets/img/purificador/purificador.jpeg',
        category: 'tec_info_comu',
        name: 'Sistema Purificador de ambiente',
        slug: 'purificador-de-ambiente',
        description: 'Sistema que permite la purificación del aire a través de la luz uvc y así lograr un ambiente limpio y seguro.',
        medal: 'gold'
      }
    ];

    this.arrPlaneta = [
      {
        imagen: 'assets/img/solar-geogebra-a/sistema-solar-a.png',
        category: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo A',
        slug: 'sistema-planetario-grupo-a',
        description: 'Es plano o diagrama realizado por medio de Geogebra basado en el sistema solar, el proceso del mismo nos conlleva a usar coordenadas y análisis matemático, como lógico.',
        medal: 'gold'
      }
    ];

    this.arrMaquina = [
      {
        imagen: 'assets/img/goldberg-f/goldberg-f.png',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo F',
        slug: 'maquina-de-golberg-grupo-f',
        description: 'Es una maquina con pasos sencillos que se activo por medio de una pelota o carrito y este desencadenara un efecto cadena por medio de 40 pasos o diferentes estaciones, para poder abrir el baúl de carro y sus 4 ventanas.',
        medal: 'gold'
      }
    ];
  }

  filterProjects(fill: string): any {
    this.arrProjects = [
      {
        video: 'CDt_FMC7RYk',
        slug: 'elec_progra',
        name: 'Sistema de exposición y Votaciones',
        link: 'proyectos/sistema-de-exposicion-y-votaciones',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'xsN5v-AzLQE',
        slug: 'elec_progra',
        name: 'COVID Monitoreo de Temperatura',
        link: 'proyectos/covid-monitoreo-temperatura',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'hnS_Nvttgs4',
        slug: 'electronica',
        name: 'Vehículo detector de obstáculos',
        link: 'proyectos/vehiculo-detector-de-obstaculos',
        category: 'Electrónica'
      },
      {
        video: 'IIY6x2CW98Y',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo A',
        link: 'proyectos/maquina-goldber-grupo-a',
        category: 'Ciencias Naturales'
      },
      {
        video: 'FMWW8UOmi1U',
        slug: 'elec_progra',
        name: 'SISCOM (Sistema de Comandas)',
        link: 'proyectos/siscom',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'DnfbWcXBIFM',
        slug: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo A',
        link: 'proyectos/sistema-planetario-grupo-a',
        category: 'Ciencias Naturales'
      },
      {
        video: 'K4SH1GzbhNw',
        slug: 'naturales',
        name: 'Eliminacion de Bacterias en agua para consumo humano',
        link: 'proyectos/eliminacion-de-backterias-en-agua',
        category: 'Ciencias Naturales'
      },
      {
        video: 'dk9Eld_r0gg',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo F',
        link: 'proyectos/maquina-de-golberg-grupo-f',
        category: 'Ciencias Naturales'
      },
      {
        video: 'UQQjpfHao3E',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo B',
        link: 'proyectos/maquina-de-goldberg-grupo-b',
        category: 'Ciencias Naturales'
      },
      {
        video: 'TYOHVD90RPo',
        slug: 'elec_progra',
        name: 'Centros de Vacunación',
        link: 'proyectos/centros-de-vacunacion',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'rCszl-89qoA',
        slug: 'elec_progra',
        name: 'Video Juego - Salvémonos del COVID-19',
        link: 'proyectos/video-juego-covid',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'Wga8Jd6nrNc',
        slug: 'electronica',
        name: 'Casa domótica',
        link: 'proyectos/casa-domotica',
        category: 'Electrónica'
      },
      {
        video: 'GzIdR8r_tUw',
        slug: 'naturales',
        name: 'Sistema automático para separar botonetas por color',
        link: 'proyectos/sistema-botonetas',
        category: 'Ciencias Naturales'
      },
      {
        video: 'BIKRy0Ti2I8',
        slug: 'naturales',
        name: 'Resolución del Método Euler',
        link: 'proyectos/resolucion-euler',
        category: 'Ciencias Naturales'
      },
      {
        video: 'ERcIDyga9eY',
        slug: 'naturales',
        name: 'Automatizacion en el Cuidado de las Plantas',
        link: 'proyectos/automatizacion-plantas',
        category: 'Ciencias Naturales'
      },
      {
        video: 'saPXigFXagM',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo C',
        link: 'proyectos/maquina-de-bolberg-grupo-c',
        category: 'Ciencias Naturales'
      },
      {
        video: 'kEbU1opW2Y4',
        slug: 'electronica',
        name: 'Brazo robótico',
        link: 'proyectos/brazo-robotico',
        category: 'Electrónica'
      },
      {
        video: 'vv-6xfohyjg',
        slug: 'elec_progra',
        name: 'Llenado en la selección automática de envases en Fábrica de Pinturas',
        link: 'proyectos/llenado-envases-pintura',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'fuRlEUl0xbw',
        slug: 'elec_progra',
        name: 'Ally Cane/Baston Aliado',
        link: 'proyectos/baston-aliado',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'nDbyqDYRl0M',
        slug: 'tec_info_comu',
        name: 'Sistema Purificador de ambiente',
        link: 'proyectos/purificador-de-ambiente',
        category: 'Tecnología de Información y comunicaciones'
      },
      {
        video: 'lQqEcAhcT-o',
        slug: 'electronica',
        name: 'Propeller',
        link: 'proyectos/propeller',
        category: 'Electrónica'
      },
      {
        video: 'BiiWlv06lEw',
        slug: 'electronica',
        name: 'Faja Transportadora',
        link: 'proyectos/faja-transportadora',
        category: 'Electrónica'
      },
      {
        video: 'OTPDjYbr78I',
        slug: 'naturales',
        name: 'Safe Trip/ Sistema Automatizado Transporte Publico',
        link: 'proyectos/safe-trip',
        category: 'Ciencias Naturales'
      },
      {
        video: 'WhmI-euL3YA',
        slug: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo C',
        link: 'proyectos/sistema-planetario-grupo-c',
        category: 'Ciencias Naturales'
      },
      {
        video: 'kh2tAss7fkc',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo D',
        link: 'proyectos/maquina-de-golberg-grupo-d',
        category: 'Ciencias Naturales'
      },
      {
        video: 'lIiQS2R-9ys',
        slug: 'naturales',
        name: 'PDF SCRAPING',
        link: 'proyectos/pdf-scraping',
        category: 'Ciencias Naturales'
      },
    ];

    if (fill != 'all') {
      const projects = this.arrProjects.filter(project => project.slug === fill ? project : '');
      this.arrProjects = projects;
    }

    this.getProjects();
  }

  getProjects() {
    this.arrProjects.forEach(e => {
      if (e.video) {
        e.video = this.updateVideoUrl(e.video)
      }
    });
  }

  updateVideoUrl(id: string) {
    let url = 'https://www.youtube.com/embed/' + id;

    let urlNew = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    return urlNew
  }

}
