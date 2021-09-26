import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FirelService } from 'src/app/services/projects/fire.service';

@Component({
  selector: 'app-report-udeo',
  templateUrl: './report-udeo.component.html',
  styleUrls: ['./report-udeo.component.scss']
})
export class ReportUdeoComponent implements OnInit {

  ngUnsubscribe: Subject<void> = new Subject();
  public arrProjects: any[] = [];
  public arrCorreos: any[] = [];
  public dataGrafica: any[] = [];
  public data: any = {};

  results: any[] = [
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Proyectos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo: any;

  isDesk = true;

  constructor(public _fireService: FirelService) {
    this.arrCorreos = [
      {
        correo: 'malvarez@montesquieu.edu.gt'
      },
      {
        correo: 'basturias@montesquieu.edu.gt'
      },
      {
        correo: 'sablanco@montesquieu.edu.gt'
      },
      {
        correo: 'pecheverria@montesquieu.edu.gt'
      },
      {
        correo: 'jadelcid@montesquieu.edu.gt'
      },
      {
        correo: 'jcsalazar@montesquieu.edu.gt'
      },
      {
        correo: 'woliva@montesquieu.edu.gt'
      },
      {
        correo: 'rpacheco@montesquieu.edu.gt'
      },
      {
        correo: 'rarodas@montesquieu.edu.gt'
      },
      {
        correo: 'jcruiz@montesquieu.edu.gt'
      },
      {
        correo: 'jlsuchi@montesquieu.edu.gt'
      },
      {
        correo: 'htiul@montesquieu.edu.gt'
      },
      {
        correo: 'rgvilla@montesquieu.edu.gt'
      },
      {
        correo: 'basturiasr@gmail.com'
      }

    ]
    
    this.arrProjects = [
      {
        name: 'Sistema de exposición y Votaciones',
        slug: 'sistema-de-exposicion-y-votaciones'
      },
      {
        name: 'COVID Monitoreo de Temperatura',
        slug: 'covid-monitoreo-temperatura'
      },
      {
        name: 'Vehículo detector de obstáculos',
        slug: 'vehiculo-detector-de-obstaculos'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo A',
        slug: 'maquina-goldber-grupo-a'
      },
      {

        name: 'Sistema planetario GeoGebra Grupo A',
        slug: 'sistema-planetario-grupo-a'

      },
      {
        name: 'Eliminacion de Bacterias en agua para consumo humano',
        slug: 'eliminacion-de-backterias-en-agua'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo F',
        slug: 'maquina-de-golberg-grupo-f'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo B',
        slug: 'maquina-de-goldberg-grupo-b'
      },
      {
        name: 'Centros de Vacunación',
        slug: 'centros-de-vacunacion'
      },
      {
        name: 'Video Juego - Salvémonos del COVID-19',
        slug: 'video-juego-covid'
      },
      {
        name: 'Casa domótica',
        slug: 'casa-domotica'
      },
      {
        name: 'Sistema automático para separar botonetas por color',
        slug: 'sistema-botonetas'
      },
      {
        name: 'Resolución del Método Euler',
        slug: 'resolucion-euler'
      },
      {
        name: 'Automatizacion en el Cuidado de las Plantas',
        slug: 'automatizacion-plantas'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo C',
        slug: 'maquina-de-bolberg-grupo-c'
      },
      {
        name: 'Brazo robótico',
        slug: 'brazo-robotico'
      },
      {
        name: 'Llenado en la selección automática de envases en Fábrica de Pinturas',
        slug: 'llenado-envases-pintura'
      },
      {
        name: 'Ally Cane/Baston Aliado',
        slug: 'baston-aliado'
      },
      {
        name: 'Sistema Purificador de ambiente',
        slug: 'purificador-de-ambiente'
      },
      {
        name: 'Propeller',
        slug: 'propeller'
      },
      {
        name: 'Faja Transportadora',
        slug: 'faja-transportadora'
      },
      {
        name: 'Safe Trip/ Sistema Automatizado Transporte Publico',
        slug: 'safe-trip'
      },
      {
        name: 'Sistema planetario GeoGebra Grupo C',
        slug: 'sistema-planetario-grupo-c'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo D',
        slug: 'maquina-de-golberg-grupo-d'
      },
      {
        name: 'PDF SCRAPING',
        slug: 'pdf-scraping'
      },
      {
        name: 'SISCOM (Sistema de Comandas)',
        slug: 'siscom'
      }
    ];
  }

  ngOnInit(): void {
    this.getTypeScreen();

    this._fireService.getVotosGenerales()
      .pipe(takeUntil(this.ngUnsubscribe)).subscribe(votos => {
        this.arrProjects.forEach(proyecto => {
          proyecto.total = 0;
          votos.forEach(voto => {
           if(voto.usuario != null){
            let correoVoto = voto.usuario.split('@');
           
            if(correoVoto[1] == 'montesquieu.edu.gt'){
              console.log(correoVoto);
              const f_correo = this.arrCorreos.find((obj => obj.correo === voto.usuario))
              if(f_correo){
                if (proyecto.slug === voto.slug) {
                  proyecto.total = parseInt(proyecto.total) + parseInt(voto.valor);
                  let data: any = {};
                  data.name = proyecto.name;
                  data.value = proyecto.total;
                  const r_proyecto = this.dataGrafica.find((obj => obj.name === proyecto.name));
                  if (r_proyecto) {
                    r_proyecto.value = proyecto.total;
                  } else {
                    this.dataGrafica.push(data);
                  }
                }
              }
         
          }
          }
          });
        });
        this.results = [...this.dataGrafica];
      });
  }

  getTypeScreen() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      this.isDesk = false;
      this.xAxisLabel = 'Votos';
      this.yAxisLabel = 'Proyectos';
    } else {
      this.isDesk = true;
    }
  }

}
