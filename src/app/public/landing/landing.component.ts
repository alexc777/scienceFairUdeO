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

  constructor(private sanitizer: DomSanitizer) {
    this.filterProjects('all');
  }

  filterProjects(fill: string): any {
    this.arrProjects = [
      {
        video: 'Wop0_G4L_uQ',
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
        video: 'Wop0_G4L_uQ',
        slug: 'electronica',
        name: 'Vehículo detector de obstáculos',
        link: 'proyectos/vehiculo-detector-de-obstaculos',
        category: 'Electrónica'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo A',
        link: 'proyectos/maquina-goldber-grupo-a',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo A',
        link: 'proyectos/sistema-planetario-grupo-a',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Eliminacion de Bacterias en agua para consumo humano',
        link: 'proyectos/eliminacion-de-backterias-en-agua',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Sistema planetaria GeoGebra Grupo B',
        link: 'proyectos/sistema-planetario-grupo-b',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo B',
        link: 'proyectos/maquina-de-goldberg-grupo-b',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'elec_progra',
        name: 'Centros de Vacunación',
        link: 'proyectos/centros-de-vacunacion',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'elec_progra',
        name: 'Video Juego - Salvémonos del COVID-19',
        link: 'proyectos/video-juego-covid',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'electronica',
        name: 'Casa domótica',
        link: 'proyectos/casa-domotica',
        category: 'Electrónica'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Sistema automático para separar botonetas por color',
        link: 'proyectos/sistema-botonetas',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
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
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo C',
        link: 'proyectos/maquina-de-bolberg-grupo-c',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'electronica',
        name: 'Robot 3 en 1 con Arduino, vehiculo autónomo digital',
        link: 'proyectos/robot-3-en-1-con-arduino',
        category: 'Electrónica'
      },
      {
        video: 'Wop0_G4L_uQ',
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
        video: 'Wop0_G4L_uQ',
        slug: 'elec_progra',
        name: 'Ally Cane/Baston Aliado',
        link: 'proyectos/baston-aliado',
        category: 'Electrónica e Informatica'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'tec_info_comu',
        name: 'Sistema Purificador de ambiente',
        link: 'proyectos/purificador-de-ambiente',
        category: 'Tecnología de Información y comunicaciones'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'electronica',
        name: 'Propeller',
        link: 'proyectos/propeller',
        category: 'Electrónica'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'electronica',
        name: 'Faja Transportadora',
        link: 'proyectos/faja-transportadora',
        category: 'Electrónica'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Safe Trip/ Sistema Automatizado Transporte Publico',
        link: 'proyectos/safe-trip',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo C',
        link: 'proyectos/sistema-planetario-grupo-c',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo D',
        link: 'proyectos/maquina-de-golberg-grupo-d',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'naturales',
        name: 'PDF SCRAPING',
        link: 'proyectos/pdf-scraping',
        category: 'Ciencias Naturales'
      },
      {
        video: 'Wop0_G4L_uQ',
        slug: 'elec_progra',
        name: 'SISCOM (Sistema de Comandas)',
        link: 'proyectos/siscom',
        category: 'Electrónica e Informatica'
      }
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
