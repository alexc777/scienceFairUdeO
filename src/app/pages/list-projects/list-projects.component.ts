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
        imagen: 'assets/img/banner-projects.jpg',
        category: 'electronica',
        name: 'Vehículo detector de obstáculos',
        slug: 'vehiculo-detector-de-obstaculos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo A',
        slug: 'maquina-goldber-grupo-a',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo A',
        slug: 'sistema-planetario-grupo-a',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Eliminacion de Bacterias en agua para consumo humano',
        slug: 'eliminacion-de-backterias-en-agua',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Sistema planetaria GeoGebra Grupo B',
        slug: 'sistema-planetario-grupo-b',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo B',
        slug: 'maquina-de-goldberg-grupo-b',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'elec_progra',
        name: 'Centros de Vacunación',
        slug: 'centros-de-vacunacion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'elec_progra',
        name: 'Video Juego - Salvémonos del COVID-19',
        slug: 'video-juego-covid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'electronica',
        name: 'Casa domótica',
        slug: 'casa-domotica',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Sistema automático para separar botonetas por color',
        slug: 'sistema-botonetas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Resolución del Método Euler',
        slug: 'resolucion-euler',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
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
        imagen: 'assets/img/banner-projects.jpg',
        category: 'elec_progra',
        name: 'Llenado en la selección automática de envases en Fábrica de Pinturas',
        slug: 'llenado-envases-pintura',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
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
        imagen: 'assets/img/banner-projects.jpg',
        category: 'elec_progra',
        name: 'SISCOM (Sistema de Comandas)',
        slug: 'siscom',
        description: 'Eco Restaurante San Luis, ubicado en Aldea El Hato, Antigua Guatemala ofrece un concepto al aire libre, rodeado de naturaleza.El proyecto SISCOM surge en el momento que los meseros toman la orden a los comensales, anotando en una libreta la orden.En ocasiones, las ordenes tienden a ser confundidas al momento de servirlas debido a que no se da el seguimiento adecuado entre orden y número de mesa durante los tiempos de alta demanda de servicio.'
      }
    ];

    if (fill != 'all') {
      const projects = this.arrProjects.filter(project => project.category === fill ? project : '');
      this.arrProjects = projects;
    }
  }

}
