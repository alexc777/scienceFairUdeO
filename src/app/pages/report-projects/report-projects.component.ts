import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-report-projects',
  templateUrl: './report-projects.component.html',
  styleUrls: ['./report-projects.component.scss']
})
export class ReportProjectsComponent implements OnDestroy {

  results: any[] = [
    {"name": "Sistema de Votaciones","value": 20},
    {"name": "Maquina de Goldberg","value": 25},
    {"name": "Control de temperatura","value": 15},
    {"name": "Vehículo detector de obstáculos","value": 60},
    { "name": "Máquina de Goldberg 40 pasos Grupo A","value": 75},
    { "name": "Video Juego - Salvémonos del COVID-19","value": 85},
    { "name": "Casa domótica","value": 10},
    { "name": "Sistema automático para separar botonetas por color","value": 45},
    { "name": "Centros de Vacunación","value": 50},
    { "name": "Resolución del Método Euler","value": 35},
    { "name": "Automatizacion en el Cuidado de las Plantas","value": 40},
    { "name": "Ally Cane/Baston Aliado","value": 20},
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient  = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Proyectos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo:any;

  constructor() {


    // this.intervalo = setInterval(() => {
    //   console.log('tick');

    //   const newResults = [...this.results];

    //   for (const i in newResults) {
    //     newResults[i].value = Math.round( Math.random() * 500 )
    //   }

    //   this.results = [...newResults];

    // },1500)

  }

  ngOnDestroy() {
    // clearInterval( this.intervalo );
  }



}
