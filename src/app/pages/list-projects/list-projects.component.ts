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

  arrProjects: any[] = [];

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
        description: 'Sistema desarrollado con tecnologías web y .Net que permite la exposición de proyectos y asignar una calificación'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'elec_progra',
        name: 'COVID Monitoreo de Temperatura',
        slug: 'covid-monitoreo-temperatura',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
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
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Sistema planetaria GeoGebra Grupo B',
        slug: 'sistema-planetario-grupo-b',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
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
        imagen: 'assets/img/casa-domotica/casa-domótica.jpg',
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
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Automatizacion en el Cuidado de las Plantas',
        slug: 'automatizacion-plantas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo C',
        slug: 'maquina-de-bolberg-grupo-c',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'electronica',
        name: 'Robot 3 en 1 con Arduino, vehiculo autónomo digital',
        slug: 'robot-3-en-1-con-arduino',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'electronica',
        name: 'Brazo robótico',
        slug: 'brazo-robotico',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/llenado-pinturas/proyecto-pintura.jpeg',
        category: 'elec_progra',
        name: 'Llenado en la selección automática de envases en Fábrica de Pinturas',
        slug: 'llenado-envases-pintura',
        description: 'Es un prototipo para un sistema autónomo que se basa en el llenado de envases de pinturas el cual es monitoreado contantemente por medio de sensores digitales el cual es procesado y enviado vía Radio Frecuencias a un panel central el cual es gestionado y enviado auna BD(Base De Datos) y así poder monitorear contantemente los productos terminados, dependiendo del código de barras detectado así será su color dispensado, cabe resaltar que es un circuito con detección de errores lo que quiere decir que si hay algún problema en el sistema el dispositivo nos lo indicara atreves de sus distintas señalizaciones.'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'elec_progra',
        name: 'Ally Cane/Baston Aliado',
        slug: 'baston-aliado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'tec_info_comu',
        name: 'Sistema Purificador de ambiente',
        slug: 'purificador-de-ambiente',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'electronica',
        name: 'Propeller',
        slug: 'propeller',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'electronica',
        name: 'Faja Transportadora',
        slug: 'faja-transportadora',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Safe Trip/ Sistema Automatizado Transporte Publico',
        slug: 'safe-trip',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo C',
        slug: 'sistema-planetario-grupo-c',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo D',
        slug: 'maquina-de-golberg-grupo-d',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'PDF SCRAPING',
        slug: 'pdf-scraping',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
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
